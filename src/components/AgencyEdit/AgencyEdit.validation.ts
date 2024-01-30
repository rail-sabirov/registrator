import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';

function validate() {

  const { t} = useTranslation();

  return Yup.object({
  
    name: Yup.string()
      .required("Задайте Наименование агенства!")
      //.test("name_require_test", "Задайте Наименование агенства!", (value) => value !== undefined)
      .test("name_min_3_letter_test", "Наименование агенства должно содержать не менее 3 букв!", (value) => value?.length >= 3),

    email: Yup.string().email("Введите Email"),

    phone1: Yup.string()
     .test("phone1_test", t("Phone number must contain 10 digits"), (value) => value == undefined || (value && value.length >= 10) ? true : false),

    phone2: Yup.string().test(
      "phone2_test",
      "Телефон должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),
    phone3: Yup.string().test(
      "phone3_test",
      "Телефон должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),

    fax1: Yup.string().test(
      "fax1_test",
      "Номер факса должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),

    fax2: Yup.string().test(
      "fax2_test",
      "Номер факса должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),

    fax3: Yup.string().test(
      "fax3_test",
      "Номер факса должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),

    fax4: Yup.string().test(
      "fax4_test",
      "Номер факса должен содержать 10 цифр",
      (value) => {
        if (value == undefined || (value && value.length === 10)) {
          return true;
        } else {
          return false;
        }
      }
    ),



    defaultFax: Yup.string().when(['fax1', 'fax2'], (faxFields, schema) => {
      const [fax1, fax2] = faxFields;

      return schema.test({
        test: value => {
          // Поле defaultFax обязательно, если заполнено поле fax1 или fax2
          return (fax1 || fax2) ? !!value : true;
        },
        message: 'Ошибка: Не выбран факс по умолчанию!',
      });
    }),
});
}



export default validate;