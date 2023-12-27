// Render Prop
import styles from './LoginForm.module.scss';
import cn from 'classnames';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';

const LoginForm = () => {
    const acceptedFields = { email: '', password: '' };
    const { t } = useTranslation();
    const submitHandler = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    const validator = (values) => {
        const errors = { email: '', password: '' };

        if (!values.email) {
            errors.email = t('Required');

        } else {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = t('Invalid email address');
            }
        }

        if (!values.password) {
            errors.password = t('Require');
        } else {
            if (values.password.length < 6) {
                errors.password = t('Password must be at least 6 letters');
            }
        }

        return errors;
    };

    const formTemplate = ({ isSubmitting }) => {
        return (
            <Form>
                <label htmlFor="email">{t('Email')}</label>
                <Field type="email" name="email" id="email" />
                <ErrorMessage name="email" render={msg => <div className={cn(styles['field-error-message'])}>{msg}</div>} />

                <label htmlFor="password">{t('Password')}</label>
                <Field type="password" name="password" id="password" />
                <ErrorMessage name="password" render={msg => <div className={cn(styles['field-error-message'])}>{msg}</div>} />

                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </Form>
        )
    };

    return (
        <div>
            <Formik initialValues={acceptedFields} validate={validator} onSubmit={submitHandler}>
                {formTemplate}
            </Formik>
        </div>
    )
};

export default LoginForm;