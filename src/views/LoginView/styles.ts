import styled from "@emotion/styled";

export const ViewContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
`;

export const FormContainer = styled.div`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  .ipt-form {
    margin-top: 20px;
    height: 50px;
    width: 275px;
  }

  .question-container {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  .register-form-ipts {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 10px;
  }
`;

export const FormTitle = styled.h1`
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #e6474b;
`;

export const FormSubtitle = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 34px;

  color: #000000;
`;

export const ButtonEnter = styled.button`
  width: 215px;
  height: 40px;
  background: #e6474b;
  border-radius: 6px;
  margin-top: 30px;
  outline: none;
  border: none;

  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;

  color: #ffffff;

  cursor: pointer;
`;

export const FormQuestion = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;

  color: #000000;
`;

export const FormQuestionAction = styled(FormQuestion)`
  text-decoration-line: underline;
  color: #e6474b;
  margin-left: 5px;
`;

export const FormErrorMsg = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 17px;

  color: #e6474b;
  margin-top: 20px;
`;
