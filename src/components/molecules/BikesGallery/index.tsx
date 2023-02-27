import { galleryImages } from "@/src/constants/images";
import {
  BikeGalleryContainer,
  GalleryImagesContainer,
  GalleryImagesItem,
} from "./styles";

const BikesGallery = () => {
  return (
    <BikeGalleryContainer>
      <GalleryImagesContainer>
        <GalleryImagesItem src={galleryImages[0]} />
        <div />
        <div />
        <GalleryImagesItem src={galleryImages[1]} />
      </GalleryImagesContainer>
    </BikeGalleryContainer>
  );
};

export default BikesGallery;
