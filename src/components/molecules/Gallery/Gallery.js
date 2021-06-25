import React from 'react'
import { Wrapper, ImgItem } from './Gallery.style'
import GallerySkeletonLoader from './GallerySkeletonLoader'

function Gallery({ handleSliderOpen, images, isLoading }) {
  if (isLoading || images === undefined) {
    return (
      <Wrapper>
        {Array(5)
          .fill('')
          .map((e, i) => (
            <GallerySkeletonLoader index={i} key={i} />
          ))}
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        {images.map(({ image, id, name }, i) => (
          <ImgItem onClick={(e) => handleSliderOpen(e)} data-index={i} key={id} data-testid="image" src={image} alt={name} />
        ))}
      </Wrapper>
    )
  }
}

export default Gallery
