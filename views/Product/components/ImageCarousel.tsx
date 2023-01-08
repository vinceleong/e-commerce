import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  return (
    <CarouselContainer>
      <Carousel>
        {images.map((imageUrl, index) => (
          <ImageContainer key={index}>
            <StyledImage alt={imageUrl} src={imageUrl} fill />
          </ImageContainer>
        ))}
      </Carousel>
    </CarouselContainer>
  );
};

const CarouselContainer = styled.div`
  height: 200px;
  margin-bottom: 1rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const StyledImage = styled(Image)`
  object-fit: contain;
`;

export default ImageCarousel;
