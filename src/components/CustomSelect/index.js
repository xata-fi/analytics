import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { ChevronDown as Arrow } from 'react-feather'

const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
`

const Select = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  vertical-align: center;
  background: ${({ theme }) => theme.concreteGray};
  justify-self: end;
  border-radius: 20px;
  padding: 8px;
  color: ${({ theme }) => theme.text1};
  justify-self: end;
  &:hover {
    cursor: pointer;
  }
`
const SelectText = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 0 8px 0 8px;
`

const OptionsWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.concreteGray};
  transform: translate(0, 8px);
  width: 250px;
  padding: 8px;
  border-radius: 20px;
  justify-content: end;
  display: ${(props) => (props.isShow ? 'block' : 'none')};
  z-index: 9999;
  opacity: 1;
`

const Option = styled.div`
  padding: 8px 0 8px 0;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text1};
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }
      handler(event)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

const CustomSelect = ({ options, persistedValue, labels, onChange }) => {
  const ref = useRef()
  const [label, setLabel] = useState(options[0])
  const [isShow, setIsShow] = useState(false)
  useOnClickOutside(ref, () => setIsShow(false))

  let value
  if (persistedValue) {
    value = labels[options.indexOf(persistedValue)]
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <SelectContainer>
        <Select onClick={() => setIsShow(!isShow)}>
          <SelectText>{persistedValue ? value : label}</SelectText>
          <Arrow size={20} />
        </Select>
      </SelectContainer>
      <OptionsWrapper
        ref={ref}
        isShow={isShow}
        onMouseLeave={() => {
          setIsShow(false)
        }}
      >
        {options.map((option, index) => (
          <Option
            onClick={() => {
              if (option) onChange(option)
              setLabel(labels[index])
              setIsShow(false)
            }}
            value={persistedValue}
          >
            {labels[index]}
          </Option>
        ))}
      </OptionsWrapper>
    </div>
  )
}

export default CustomSelect
