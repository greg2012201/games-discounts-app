import React, { useRef } from 'react'
import { useTextContainer } from './useTextContainer'
import { ContentWrapper, ViewWrapper, StyledP } from './TextContainer.style'
import { Button } from 'components/atoms/Button/Button'
const TextContainer = ({ children, viewHeight = 200 }) => {
  const view = useRef(null)
  const paragraph = useRef(null)

  const { isOpen, isButtonVisible, setOpen } = useTextContainer(view, paragraph)
  return (
    <ContentWrapper>
      <ViewWrapper viewHeight={viewHeight} ref={view} isOpen={isOpen}>
        <StyledP ref={paragraph}>{children}</StyledP>
      </ViewWrapper>
      <Button isLight isVisible={isButtonVisible} onClick={() => setOpen((toggle) => !toggle)}>
        {isOpen ? 'Show less' : 'Read more'}
      </Button>
    </ContentWrapper>
  )
}

export default TextContainer
