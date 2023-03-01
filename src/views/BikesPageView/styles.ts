import { NewBikesList } from "@/src/components/molecules/NewBikes/styles";
import styled from "@emotion/styled";

export const BikesViewContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  alin-self: start;
  align-items: center;
  margin-top: 200px;

  padding-bottom: 200px;
`;

export const BikesViewTitle = styled.h1`
  font-weight: 700;
  font-size: 41px;
  line-height: 50px;
  color: #000000;
`;

export const BikesViewSubTitle = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #0a0909;
`;

export const FilterContainer = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const BikesList = styled(NewBikesList)``;

export const PaginationContainer = styled.div`
  width: 100%;
  height: 100px;

  /* display: flex;
  flex-direction: column;

  align-items: center; */
`;
