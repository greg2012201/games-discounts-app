import styled from 'styled-components'

export const ContentWrapper = styled.div`
  position: relative;
  line-height: 20px;
  overflow: hidden;
`

export const StyledP = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-family: Lato;
  text-align: justify;
  margin: 0;
`

export const ViewWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen, viewHeight }) => (isOpen ? 'auto' : '200px')};
`
