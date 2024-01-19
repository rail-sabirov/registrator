import formTemplate from './AgencyEdit.form-template';
import validationSchema from './AgencyEdit.validation';
import cn from 'classnames';
import styles from "./AgencyEdit.module.scss";
import { Formik } from 'formik';
import { AgencyEditProps } from './AgencyEditProps';


export default function AgencyEdit({ switchEditMode }: AgencyEditProps) {

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
                validationSchema={validationSchema}
                onSubmit={submitHandler}
            >
                {formTemplate}
            </Formik>
            <button type='button' onClick={() => switchEditMode(false)} style={{ marginTop: '20px', backgroundColor: '#aeaeef' }}>Выход из режима редактирования</button>
        </div>
    )
}