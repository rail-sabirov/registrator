import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTranslation } from 'react-i18next';
import * as Yup from 'yup';
import cn from 'classnames';
import styles from './LoginForm.module.scss';
import Button from '../Button/Button';

const LoginForm = ({ onServerError }) => {
    const acceptedFields = { email: '', password: '' };
    const { t } = useTranslation();
    const submitHandler = (values, { setSubmitting }) => {
        setTimeout(() => {
            onServerError(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    // Схема для проверки полей формы
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email(t('Invalid email address'))
            .required(t('Required')),

        password: Yup.string()
            .min(6, t('Password must be at least 6 letters'))
            .required(t('Required'))
    });

    // Шаблон формы
    const formTemplate = ({ isSubmitting, errors, isValidating }) => {
        return (
            <div className={cn(styles['login-container'])}>
                <Form className={cn(styles['login-form'])}>
                    <label htmlFor="email">{t('Email')}</label>
                    <Field type="email"
                        name="email"
                        id="email"
                        className={cn('input', {
                            [styles['error']]: errors.email
                        })} />
                    <ErrorMessage name="email"
                        className={cn(styles['field-error-message'])}
                        component='div' />

                    <label htmlFor="password">{t('Password')}</label>
                    <Field type="password"
                        name="password"
                        id="password"
                        className={cn('input', {
                            [styles['error']]: errors.password
                        })} />
                    <ErrorMessage name="password"
                        component='div'
                        className={cn(styles['field-error-message'])} />

                    <Button
                        type='submit'
                        className={styles['submit-button']}
                        disabled={isSubmitting || Object.keys(errors).length > 0}>
                        {t('Login')}
                    </Button>
                </Form>
            </div>

        )
    };

    return (
        <div>
            <Formik initialValues={acceptedFields} validationSchema={validationSchema} onSubmit={submitHandler}>
                {formTemplate}
            </Formik>
        </div>
    )
};

export default LoginForm;