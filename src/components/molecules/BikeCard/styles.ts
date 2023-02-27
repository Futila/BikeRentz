import styled from "@emotion/styled";

export const BikeCardContainer = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  position: relative;
`;

export const BikeCardTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 60px;
  color: #000000;
  margin-bottom: 20px;
`;

export const BikeCardEngineName = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;
`;

export const BikeCardPrice = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  color: #e6474b;
  margin-bottom: 20px;
`;

export const BikeCardImagesContainer = styled.div`
  width: 100%;
  height: 259px;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 30px;
  margin-bottom: 30px;
`;

export const BikeCardCover = styled.img`
  width: 300px;
  height: 259px;
  object-fit: scale-down;
`;

export const BikeCardImagesCoursel = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

interface CourselItemProps {
  active: boolean;
}

export const BikeCardImagesCourselItem = styled.img<CourselItemProps>`
  width: 43px;
  height: 43px;
  background: #ffffff;
  box-shadow: 0px 0px 2px 2px
    ${({ active }) => (active ? "#e6474b" : "transparent")};
  border-radius: 2px;
  cursor: pointer;
  object-fit: cover;
  border: 1px solid ${({ active }) => (active ? "#e6474b" : "transparent")};
`;

export const BikeCardDescription = styled.ul`
  width: 100%;
  list-style: none;
`;

export const BikeCardDescriptionItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;

  p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  .dot {
    width: 5px;
    height: 5px;
    background: #e6474b;
    border-radius: 4px;
    margin-right: 10px;
  }
`;

export const BikeCardButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px;

  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;
