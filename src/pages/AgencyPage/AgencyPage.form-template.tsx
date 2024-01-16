import { Field, Form, ErrorMessage } from "formik";
import styles from "./AgencyPage.module.scss";

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
          <label htmlFor="fax1">Fax 1</label>
          <Field type="tel" name="fax1" required />
          <Field type="radio" name="defaultFax" value="fax1" />
          Default
          <ErrorMessage name="fax1" component="div" />
          <ErrorMessage name="defaultFax" component="div" />
        </div>
        <div>
          <label htmlFor="fax2">Fax 2</label>
          <Field type="tel" name="fax2" />
          <Field type="radio" name="defaultFax" value="fax2" />
          Default
          <ErrorMessage name="fax2" component="div" />
        </div>
        <div>
          <label htmlFor="fax3">Fax 3</label>
          <Field type="tel" name="fax3" />
          <Field type="radio" name="defaultFax" value="fax3" />
          Default
          <ErrorMessage name="fax3" component="div" />
        </div>
        <div>
          <label htmlFor="fax4">Fax 4</label>
          <Field type="tel" name="fax4" />
          <Field type="radio" name="defaultFax" value="fax4" />
          Default
          <ErrorMessage name="fax4" component="div" />
        </div>
      </div>

      <div>
        <label htmlFor="phone1">Phone 1:</label>
        <Field type="tel" id="phone1" name="phone1" />
        <ErrorMessage name="phone1" component="div" />
      </div>
      <div>
        <label htmlFor="phone1">Phone 2:</label>
        <Field type="tel" id="phone2" name="phone2" />
        <ErrorMessage name="phone2" component="div" />
      </div>
      <div>
        <label htmlFor="phone1">Phone 3:</label>
        <Field type="tel" id="phone3" name="phone3" />
        <ErrorMessage name="phone3" component="div" />
      </div>

      <button type="submit">Сохранить</button>
    </Form>
  );
};

export default formTemplate;
