import React, { useRef } from 'react'
import { ButtonsWrapper, PaginationButton, Wrapper } from './Categories.style'
import { ReactComponent as Icon } from './../../../assets/icons/triangle-icon.svg'
import { Button } from '../../atoms/Button/Button'
import { customHorizontalScroll } from '../../../helpers/customScroll'
import { mockCategoryList } from '../../../data/mockCategoryList'

const scrollDistance = 200
export const Categories = React.forwardRef((props, ref) => {
  const buttonsWrapper = useRef(null)

  const handleOnClick = (direction) => {
    customHorizontalScroll(direction, buttonsWrapper, scrollDistance)
  }

  return (
    <Wrapper ref={ref} {...props}>
      <PaginationButton left="true" className="left" onClick={() => handleOnClick()}>
        <Icon left="true" />
      </PaginationButton>
      <ButtonsWrapper ref={buttonsWrapper}>
        {mockCategoryList.map(({ text }) => {
          return <Button key={text}>{text}</Button>
        })}
      </ButtonsWrapper>
      <PaginationButton right="true" className="right" onClick={() => handleOnClick('right')}>
        <Icon right="true" />
      </PaginationButton>
    </Wrapper>
  )
})
export default Categories
