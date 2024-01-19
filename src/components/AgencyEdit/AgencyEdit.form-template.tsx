import { Field, Form, ErrorMessage } from "formik";
import styles from "./AgencyEdit.module.scss";

const formTemplate = () => {
  return (
    <Form>
      <div className={styles["form-field"]}>
        <label htmlFor="name">Наименование Агенства</label>
        <Field type="text" id="name" name="name" required />
        <ErrorMessage name="name" component="div" />
      </div>

      <div className="fax-numbers">
        <span>Факсы</span>
        <div>
          <label htmlFor="fax1">Факс №1</label>
          <Field type="tel" name="fax1" required />
          <Field type="radio" name="defaultFax" value="fax1" />
          По умолчанию
          <ErrorMessage name="fax1" component="div" />
          <ErrorMessage name="defaultFax" component="div" />
        </div>
        <div>
          <label htmlFor="fax2">Факс №2</label>
          <Field type="tel" name="fax2" />
          <Field type="radio" name="defaultFax" value="fax2" />
          По умолчанию
          <ErrorMessage name="fax2" component="div" />
        </div>
        <div>
          <label htmlFor="fax3">Факс №3</label>
          <Field type="tel" name="fax3" />
          <Field type="radio" name="defaultFax" value="fax3" />
          По умолчанию
          <ErrorMessage name="fax3" component="div" />
        </div>
        <div>
          <label htmlFor="fax4">Факс №4</label>
          <Field type="tel" name="fax4" />
          <Field type="radio" name="defaultFax" value="fax4" />
          По умолчанию
          <ErrorMessage name="fax4" component="div" />
        </div>
      </div>

      <div>
        <label htmlFor="phone1">Телефон №1</label>
        <Field type="tel" id="phone1" name="phone1" />
        <ErrorMessage name="phone1" component="div" />
      </div>
      <div>
        <label htmlFor="phone1">Телефон №2</label>
        <Field type="tel" id="phone2" name="phone2" />
        <ErrorMessage name="phone2" component="div" />
      </div>
      <div>
        <label htmlFor="phone1">Телефон №3</label>
        <Field type="tel" id="phone3" name="phone3" />
        <ErrorMessage name="phone3" component="div" />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email" />
        <ErrorMessage name="email" component="div" />
      </div>

      <div>
        <label htmlFor="comment">Комментарии</label>
        <Field as="textarea" id="comment" name="comment" />
      </div>

      <button type="submit">Сохранить</button>
    </Form>
  );
};

export default formTemplate;
