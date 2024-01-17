import { Formik } from 'formik';
import formTemplate from "./AgencyPage.form-template";
import validationSchema from './AgencyPage.validation';
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';


const AgencyPage = () => {
  const initialValues = {
    name: "",

    fax1: "",
    fax2: "",
    fax3: "",
    fax4: "",
    defaultFax: "",

    phone1: "",
    phone2: "",
    phone3: "",

    email: "",
  };

  const submitHandler = (values) => {
    // Обработка отправки формы, например, отправка данных на сервер
    console.log(values);
  };


  // Инициализация и вывод формы
  return (
    <>
      <LanguageSelector />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitHandler}
      >
        {formTemplate}
      </Formik>

      <div className="agency-deatails">
        <h2>Agency Details</h2>
        <p>Здесь выводятся детали Агенства если оно уже использовалось для отправки факса</p>
      </div>
    </>
  );
};

export default AgencyPage;
