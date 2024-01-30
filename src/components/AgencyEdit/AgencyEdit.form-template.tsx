import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { Field, Form, ErrorMessage } from "formik";
import Button from '../Button/Button';
import styles from "./AgencyEdit.module.scss";

const formTemplate = (values, errors) => {
	const { t } = useTranslation();

	const showFaxRadioButtonError = (faxName) => values[faxName] && !!errors.defaultFax && !values.defaultFax;

	return (
		<Form>
			<div className={styles['main']}>


				<label htmlFor="name">{t('AgencyName')}</label>
				<div className={styles['input-block']}>
					<Field type="text" id="name" name="name" required />
					<ErrorMessage name="name" component="div" className={styles['field-error-message']} />
				</div>

				<label htmlFor="email">{t('Email')}</label>
				<div className={styles['input-block']}>
					<Field type="email" id="email" name="email" autoComplete="off" />
					<ErrorMessage name="email" component="div" className={styles['field-error-message']} />
				</div>
			</div>


			<div className={styles['phone-fax']}>
				<div className={styles['phone-numbers']}>
					<span>{t('Phones')}</span>
					<div className={styles["group-headers"]}>
						<div className={styles['phone']}>{t('PhoneNumber')}</div>
					</div>

					<div className={styles['phone-fields']}>
						<label htmlFor="phone1">{t('Phone1')}</label>
						<div className={styles["field"]}>
							<Field type="tel" id="phone1" name="phone1" autoComplete="off" />
							<ErrorMessage name="phone1" component="div" className={styles['field-error-message']} />
						</div>

						<label htmlFor="phone1">{t('Phone2')}</label>
						<div className={styles["field"]}>
							<Field type="tel" id="phone2" name="phone2" autoComplete="off" />
							<ErrorMessage name="phone2" component="div" className={styles['field-error-message']} />
						</div>

						<label htmlFor="phone1">{t('Phone3')}</label>
						<div className={styles["field"]}>
							<Field type="tel" id="phone3" name="phone3" autoComplete="off" />
							<ErrorMessage name="phone3" component="div" className={styles['field-error-message']} />
						</div>
					</div>
				</div>

				<div className={styles["fax-numbers"]}>
					<span>{t('Faxes')}</span>



					<div className={styles['rows']}>
						<div className={cn(styles["default"], styles['header'])}>{t('Default')}</div>
						<div className={cn(styles["label-column"], styles['header'])}>&nbsp;</div>
						<div className={cn(styles["fax"], styles['header'])}>{t('FaxNumber')}</div>

						<div className={cn(styles['colspan3'], styles['hr'])}></div>

						<ErrorMessage name="defaultFax" component="div" className={cn(
							styles['field-error-message'],
							styles['colspan3'],
							styles['default-fax-error'])} />


						<Field type="radio" name="defaultFax" value="fax1"
							className={
								cn(styles['radio-input'], {
									[styles['radio-input-filled']]: showFaxRadioButtonError('fax1')
								})} />
						<label htmlFor="fax1">{t('Fax1')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax1" required autoComplete="off" />
							<ErrorMessage name="fax1" component="div" className={styles['field-error-message']} />
						</div>


						<Field type="radio" name="defaultFax" value="fax2"
							className={
								cn(styles['radio-input'], {
									[styles['radio-input-filled']]: showFaxRadioButtonError('fax2')
								})} />
						<label htmlFor="fax2">{t('Fax2')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax2" autoComplete="off" />
							<ErrorMessage name="fax2" component="div" className={styles['field-error-message']} />
						</div>


						<Field type="radio" name="defaultFax" value="fax3"
							className={
								cn(styles['radio-input'], {
									[styles['radio-input-filled']]: showFaxRadioButtonError('fax3')
								})} />
						<label htmlFor="fax3">{t('Fax3')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax3" autoComplete="off" />
							<ErrorMessage name="fax3" component="div" className={styles['field-error-message']} />
						</div>


						<Field type="radio" name="defaultFax" value="fax4"
							className={
								cn(styles['radio-input'], {
									[styles['radio-input-filled']]: showFaxRadioButtonError('fax4')
								})} />
						<label htmlFor="fax4">{t('Fax4')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax4" autoComplete="off" />
							<ErrorMessage name="fax4" component="div" className={styles['field-error-message']} />
						</div>

					</div>


				</div>
			</div>

			<div className={styles['comments']}>
				<span>{t('Comment')}</span>
				<div className={styles["row"]}>
					<Field as="textarea" id="comment" name="comment" />
				</div>
			</div>

			<div className={styles['submit-button']}>
				<Button type="submit">{t('Save')}</Button>
			</div>

		</Form >
	);
};

export default formTemplate;
