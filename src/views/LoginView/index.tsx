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
import { UserLoginType } from "@/src/typescript/user";
import { login } from "@/src/services/auth";
import { useRouter } from "next/router";
import { validateLoginForm } from "@/src/helpers/validation";

const msgErrorDefault = {
  field: "",
  msg: "",
};

const LoginView = () => {
  const [loginData, setLoginData] = useState<UserLoginType>({
    email: "",
    password: "",
  });

  const [msgError, setMessageError] = useState(msgErrorDefault);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setLoginData({
      ...loginData,
      [target.name]: target.value,
    });

    setMessageError(msgErrorDefault);
  };

  const handleLogin = async () => {
    const result = validateLoginForm(loginData);

    if (result) {
      setMessageError({
        field: "",
        msg: `${result} está vazio, todos os campos são obrigatórios.`,
      });
    } else {
      setLoading(true);
      const result = await login(loginData);

      if (result.status === 201) {
        router.push("/");
      } else {
        setMessageError({ field: "", msg: result.msg });
      }

      setLoading(false);
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

          {!!msgError && <FormErrorMsg>{msgError.msg}</FormErrorMsg>}

          <ButtonEnter disabled={loading} onClick={handleLogin}>
            {loading ? "carregando" : "Entrar"}
          </ButtonEnter>

          <div className="question-container">
            <FormQuestion>Não possui uma conta ?</FormQuestion>
            <FormQuestionAction onClick={() => router.push("/registar")}>
              Registar
            </FormQuestionAction>
          </div>
        </FormContainer>
      </ViewContainer>
    </PageLayout>
  );
};

export default LoginView;
