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
import { login, register } from "@/src/services/auth";
import { useRouter } from "next/router";
import { validateRegisterForm } from "@/src/helpers/validation";

const msgErrorDefault = {
  field: "",
  msg: "",
};

const PageViewRegistar = () => {
  const [registerData, setRegisterData] = useState<User>({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });

  const [msgError, setMessageError] = useState(msgErrorDefault);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setRegisterData({
      ...registerData,
      [target.name]: target.value,
    });

    setMessageError(msgErrorDefault);
  };

  const handleLogin = async () => {
    const result = validateRegisterForm(registerData);

    if (result) {
      setMessageError({
        field: result,
        msg: `${result} está vazio, todos os campos são obrigatórios.`,
      });
    } else {
      setLoading(true);
      const result = await register(registerData);
      if (result.status === 201) {
        router.push("/");
      } else {
        setMessageError({
          field: "",
          msg: `${result.msg}`,
        });
      }
      setLoading(false);
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
              error={msgError.field === "firstname"}
            />
            <TextField
              onChange={handleChange}
              name="lastname"
              className="ipt-form"
              placeholder="Último nome"
              error={msgError.field === "lastname"}
            />
            <TextField
              onChange={handleChange}
              name="address"
              className="ipt-form"
              placeholder="Endereço de entrega"
              error={msgError.field === "address"}
            />
            <TextField
              onChange={handleChange}
              name="phone"
              className="ipt-form"
              placeholder="Telefone"
              error={msgError.field === "phone"}
            />
            <TextField
              onChange={handleChange}
              name="email"
              className="ipt-form"
              placeholder="Email"
              error={msgError.field === "email"}
            />
            <TextField
              onChange={handleChange}
              name="password"
              className="ipt-form"
              placeholder="Palavra passe"
              error={msgError.field === "password"}
            />
          </div>

          {!!msgError && <FormErrorMsg>{msgError.msg}</FormErrorMsg>}
          <ButtonEnter disabled={loading} onClick={handleLogin}>
            {loading ? "carregando" : "Registar"}
          </ButtonEnter>
          <div className="question-container">
            <FormQuestion>Não possui uma conta ?</FormQuestion>
            <FormQuestionAction onClick={() => router.push("/login")}>
              Login
            </FormQuestionAction>
          </div>
        </FormContainer>
      </ViewContainer>
    </PageLayout>
  );
};

export default PageViewRegistar;
