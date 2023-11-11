import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  identity: yup
    .number()
    .max(11, "Lütfen Geçerli Bir T.C. Kimlik Giriniz.")
    .min(11, "Lütfen Geçerli Bir T.C. Kimlik Giriniz.")
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen tam sayı olarak giriniz")
    .required("Lütfen T.C. Kimlik Numaranızı giriniz."),
  password: yup
    .string()
    .min(5, "Lütfen minumun 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz.",
    })
    .required("Lütfen bir şifre belirleyiniz."),
});
