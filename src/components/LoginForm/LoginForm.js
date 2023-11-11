import { useState } from "react";
import {
  StyledLoginForm,
  StyledForm,
  RememberMeLabel,
  StyledInfoMessage,
  StyledLabel,
  StyledInput,
  StyledCheckBoxInput,
  StyledLink,
  StyledLogo,
  StyledLoginContent,
  StyledHref,
} from "../styles/LoginForm.styled";

import { Button } from "../styles/Button.styled";

import { useFormik } from "formik";
import { basicSchema } from "../../schemas";

import { Errors } from "../styles/Errors.styled";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

export function LoginForm() {
  const { values, errors, isSubmitting, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        identity: "",
        password: "",
      },
      validationSchema: basicSchema,
      onSubmit,
    });

  return (
    <>
      <StyledLoginForm>
        <StyledForm>
          <StyledLogo src="./images/logo.svg" />
          <StyledInfoMessage>
            Güvenliğiniz için sistemde kayıtlı olan telefon numaranıza doğrulama
            kodu gönderilecektir.
          </StyledInfoMessage>
          <StyledLabel px="-195px">T.C. / Yabancı Kimlik No</StyledLabel>
          <StyledInput
            type="number"
            id="identity"
            value={values.identity}
            onChange={handleChange}
            placeholder="T.C. / Yabancı Kimlik No"
          />
          {errors.identity && <Errors>{errors.identity}</Errors>}
          <StyledLabel px="-295px">Şifre</StyledLabel>
          <StyledInput
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Şifre"
          />
          {errors.password && <Errors>{errors.password}</Errors>}
          <RememberMeLabel>
            <StyledCheckBoxInput type="checkbox" />
            Beni Hatırla
          </RememberMeLabel>
          <Button
            bg="#1A4784"
            color="#fff"
            wd="85%"
            disabled={isSubmitting}
            type="submit"
          >
            Giriş Yap
          </Button>
          <StyledLink href="#">Hesabınıza erişemiyor musunuz?</StyledLink>
          <StyledLoginContent>
            Bu site reCAPTCHA tarafından korunmakta ve
            <StyledHref> Google Gizlilik Politikası</StyledHref> ve
            <StyledHref> Kullanım Şartları</StyledHref> uygulanmakta.
          </StyledLoginContent>
        </StyledForm>
      </StyledLoginForm>
    </>
  );
}
