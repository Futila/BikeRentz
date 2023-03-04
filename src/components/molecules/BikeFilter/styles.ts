import styled from "@emotion/styled";

export const BikeFilterContainer = styled.div`
  width: 100%;
  height: auto;

  display: grid;
  grid-template-columns: 25% 20% 20% auto;
  grid-column-gap: 20px;
  align-items: center;
  justify-content: center;
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 15% 85%;
  align-items: ccenter;
  background: #ffffff;
  border: 1px solid #ddd1d1;
  border-radius: 3px;

  .field-icon {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #d9d9d9;
  }
`;

export const BikeFilterButton = styled.button`
  width: 136px;
  height: 60px;
  background: #e6474b;
  border-radius: 3px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;

  border: none;
  outline: none;
  cursor: pointer;
`;
