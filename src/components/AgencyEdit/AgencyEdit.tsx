import formTemplate from './AgencyEdit.form-template';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import validate from './AgencyEdit.validation';
import cn from 'classnames';
import styles from "./AgencyEdit.module.scss";
import { Formik } from 'formik';


export default function AgencyEdit() {
    const { t } = useTranslation();

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


    const phoneFaxRule = (deviceType: 'Phone' | 'Fax', num: number) => Yup.string().test(
        `${deviceType}${num}_test`,
        t(`${deviceType} number must contain 10 digits`),
        (value) => value == undefined || (value && value.length === 10) ? true : false
    )

    const validationScheme = Yup.object({

        name: Yup.string()
            .required(t("Enter the Agency Name"))
            //.test("name_require_test", "Задайте Наименование агенства!", (value) => value !== undefined)
            .test("name_min_3_letter_test", t('The agency name must contain at least 3 letters'), (value) => value?.length >= 3),

        email: Yup.string().email(t('Enter Email')),

        phone1: phoneFaxRule('Phone', 1),
        phone2: phoneFaxRule('Phone', 2),
        phone3: phoneFaxRule('Phone', 3),

        fax1: phoneFaxRule('Fax', 1).required(t('Enter your fax number')),
        fax2: phoneFaxRule('Fax', 2),
        fax3: phoneFaxRule('Fax', 3),
        fax4: phoneFaxRule('Fax', 4),

        defaultFax: Yup.string().when(
            ['fax1', 'fax2', 'fax3', 'fax4'],
            (faxFields, schema) => {
                const [fax1, fax2, fax3, fax4] = faxFields;

                return schema.test({
                    test: value => {
                        // Поле defaultFax обязательно, если заполнено поле fax1 или fax2 или fax3 или fax4
                        return (fax1 || fax2 || fax3 || fax4) ? !!value : true;
                    },
                    message: t('Error: No default fax selected!'),
                });
            }),
    });

    return (
        <div className={cn(styles['agency'], styles['edit-mode'])}>

            <Formik
                initialValues={initialValues}
                //validationSchema={validate()}
                validationSchema={validationScheme}
                validateOnChange={true}
                onSubmit={submitHandler}
            >
                {({ values, errors }) => (
                    formTemplate(values, errors)
                )}

            </Formik>

        </div>
    )
}