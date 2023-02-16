import { useState } from "react";
import PageLayout from "@/src/components/Layout";

import {
  FormContainer,
  ViewContainer,
  FormSubtitle,
  FormTitle,
  ButtonEnter,
  FormQuestion,
  FormQuestionAction,
  FormErrorMsg,
} from "./styles";

import { TextField } from "@mui/material";

interface UserLoginType {
  email: string;
  password: string;
}

const LoginView = () => {
  const [loginData, setLoginData] = useState<UserLoginType>({
    email: "",
    password: "",
  });

  const [msgError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setLoginData({
      ...loginData,
      [target.name]: target.value,
    });

    setMessageError("");
  };

  const handleLogin = () => {
    if (loginData.email === "" && loginData.password === "") {
      setMessageError("Os campos são obrigatórios");
    } else {
      //
    }
  };

  return (
    <PageLayout title="Entrar">
      <ViewContainer>
        <FormContainer>
          <FormTitle>Entrar</FormTitle>
          <FormSubtitle>Entre e arrenda uma bicicleta hoje</FormSubtitle>
          <TextField
            onChange={handleChange}
            name="email"
            className="ipt-form"
            placeholder="Email"
          />
          <TextField
            onChange={handleChange}
            name="password"
            className="ipt-form"
            placeholder="Password"
          />

          {!!msgError && <FormErrorMsg>{msgError}</FormErrorMsg>}

          <ButtonEnter disabled={loading} onClick={handleLogin}>
            {loading ? "carregando" : "Entrar"}
          </ButtonEnter>

          <div className="question-container">
            <FormQuestion>Não possui uma conta ?</FormQuestion>
            <FormQuestionAction>Registar</FormQuestionAction>
          </div>
        </FormContainer>
      </ViewContainer>
    </PageLayout>
  );
};

export default LoginView;
