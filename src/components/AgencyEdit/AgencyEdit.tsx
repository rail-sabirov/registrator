import formTemplate from './AgencyEdit.form-template';
import validate from './AgencyEdit.validation';
import cn from 'classnames';
import styles from "./AgencyEdit.module.scss";
import { Formik } from 'formik';


export default function AgencyEdit() {

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

        comments: ""
    };

    const submitHandler = (values) => {
        // Обработка отправки формы, например, отправка данных на сервер
        console.log(values);
    };

    return (
        <div className={cn(styles['agency'], styles['edit-mode'])}>

            <Formik
                initialValues={initialValues}
                validationSchema={validate()}
                onSubmit={submitHandler}
            >
                {({ values, errors }) => (
                    formTemplate(values, errors)
                )}

            </Formik>

        </div>
    )
}