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
} from "../LoginView/styles";

import { TextField } from "@mui/material";
import { User, UserLoginType } from "@/src/typescript/user";
import { login } from "@/src/services/auth";
import { useRouter } from "next/router";

const PageViewRegistar = () => {
  const [registerData, setRegisterData] = useState<User>({
    email: "",
    password: "",
    address: "",
    firstname: "",
    lastaname: "",
    phone: "",
  });

  const [msgError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setRegisterData({
      ...registerData,
      [target.name]: target.value,
    });

    setMessageError("");
  };

  const handleLogin = async () => {
    if (registerData.email === "" && registerData.password === "") {
      setMessageError("Os campos são obrigatórios");
    } else {
      const result = await login(registerData);

      if (result.status === 201) {
        router.push("/");
      } else {
        setMessageError(result.msg);
      }
    }
  };

  return (
    <PageLayout title="Registar">
      <ViewContainer>
        <FormContainer>
          <FormTitle>Entrar</FormTitle>
          <FormSubtitle>Entre e arrenda uma bicicleta hoje</FormSubtitle>
          <div className="register-form-ipts">
            <TextField
              onChange={handleChange}
              name="firstname"
              className="ipt-form"
              placeholder="Primeiro nome"
            />
            <TextField
              onChange={handleChange}
              name="lastname"
              className="ipt-form"
              placeholder="Último nome"
            />
            <TextField
              onChange={handleChange}
              name="address"
              className="ipt-form"
              placeholder="Endereço de entrega"
            />
            <TextField
              onChange={handleChange}
              name="phone"
              className="ipt-form"
              placeholder="Telefone"
            />
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
              placeholder="Palavra passe"
            />
          </div>

          {!!msgError && <FormErrorMsg>{msgError}</FormErrorMsg>}
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

export default PageViewRegistar;
