import styled from "@emotion/styled";

export const BikeGalleryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 100px 70px 100px;
`;

export const GalleryImagesContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;

  grid-template-columns: repeat(2, 49%);
  grid-template-rows: repeat(2, auto);
  justify-content: space-between;
`;

export const GalleryImagesItem = styled.img`
  width: 627px;
  height: auto;
  objet-fit: scale-down;
`;
