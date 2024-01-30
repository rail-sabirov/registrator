import { Field, Form, ErrorMessage } from "formik";
import cn from 'classnames';
import styles from "./AgencyEdit.module.scss";
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';


const formTemplate = () => {
	const { t } = useTranslation();
	return (
		<Form>
			<div className={styles['main']}>

				<label htmlFor="name">{t('AgencyName')}</label>
				<div className={styles['input-block']}>
					<Field type="text" id="name" name="name" required />
					<ErrorMessage name="name" component="div" />
				</div>

				<label htmlFor="email">{t('Email')}</label>
				<div className={styles['input-block']}>
					<Field type="email" id="email" name="email" autoComplete="off" />
					<ErrorMessage name="email" component="div" />
				</div>
			</div>


			<div className={styles['phone-fax']}>
				<div className={styles['phone-numbers']}>
					<span>{t('Phones')}</span>
					<div className={styles["group-headers"]}>
						<div className={styles['phone']}>{t('PhoneNumber')}</div>
					</div>
					<div className={styles["row"]}>
						<label htmlFor="phone1">{t('Phone1')}</label>
						<Field type="tel" id="phone1" name="phone1" autoComplete="off" />
						<ErrorMessage name="phone1" component="div" />
					</div>
					<div className={styles["row"]}>
						<label htmlFor="phone1">{t('Phone2')}</label>
						<Field type="tel" id="phone2" name="phone2" autoComplete="off" />
						<ErrorMessage name="phone2" component="div" />
					</div>
					<div className={styles["row"]}>
						<label htmlFor="phone1">{t('Phone3')}</label>
						<Field type="tel" id="phone3" name="phone3" autoComplete="off" />
						<ErrorMessage name="phone3" component="div" />
					</div>
				</div>
				{/*
				<div className={styles["fax-numbers"]}>
					<span>{t('Faxes')}</span>

					<ErrorMessage name="defaultFax" component="h2" />

					<div className={styles["group-headers"]}>
						<div className={styles["default"]}>{t('Default')}</div>
						<div className={styles["fax"]}>{t('FaxNumber')}</div>
					</div>

					<div className={styles["row"]}>
						<div className={styles['left-side']}>
							<Field type="radio" name="defaultFax" value="fax1" />
						</div>

						<div className={styles['right-side']}>
							<label htmlFor="fax1">{t('Fax1')}</label>
							<Field type="tel" name="fax1" required autoComplete="off" />
							<ErrorMessage name="fax1" component="div" />
						</div>
					</div>

					<div className={styles["row"]}>
						<div className={styles["left-side"]}>
							<Field type="radio" name="defaultFax" value="fax2" />
						</div>
						<div className={styles["right-side"]}>
							<label htmlFor="fax2">{t('Fax2')}</label>
							<Field type="tel" name="fax2" autoComplete="off" />
							<ErrorMessage name="fax2" component="div" />
						</div>
					</div>

					<div className={styles["row"]}>
						<div className={styles["left-side"]}>
							<Field type="radio" name="defaultFax" value="fax3" />
						</div>
						<div className={styles["right-side"]}>
							<label htmlFor="fax3">{t('Fax3')}</label>
							<Field type="tel" name="fax3" autoComplete="off" />
							<ErrorMessage name="fax3" component="div" />
						</div>
					</div>
					<div className={styles["row"]}>
						<div className={styles["left-side"]}>
							<Field type="radio" name="defaultFax" value="fax4" />
						</div>
						<div className={styles["right-side"]}>
							<label htmlFor="fax4">{t('Fax4')}</label>
							<Field type="tel" name="fax4" autoComplete="off" />
							<ErrorMessage name="fax4" component="div" />
						</div>
					</div>
				</div>*/}

				<div className={styles["fax-numbers2"]}>
					<span>{t('Faxes')}</span>

					<ErrorMessage name="defaultFax" component="h2" />

					<div className={styles['rows']}>

						<div className={cn(styles["default"], styles['header'])}>{t('Default')}</div>
						<div className={cn(styles["label-column"], styles['header'])}>&nbsp;</div>
						<div className={cn(styles["fax"], styles['header'])}>{t('FaxNumber')}</div>

						<div className={cn(styles['colspan3'])}></div>

						<Field type="radio" name="defaultFax" value="fax1" />
						<label htmlFor="fax1">{t('Fax1')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax1" required autoComplete="off" />
							<ErrorMessage name="fax1" component="div" />
						</div>

						<Field type="radio" name="defaultFax" value="fax2" />
						<label htmlFor="fax2">{t('Fax2')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax2" required autoComplete="off" />
							<ErrorMessage name="fax2" component="div" />
						</div>

						<Field type="radio" name="defaultFax" value="fax3" />
						<label htmlFor="fax3">{t('Fax3')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax3" required autoComplete="off" />
							<ErrorMessage name="fax3" component="div" />
						</div>

						<Field type="radio" name="defaultFax" value="fax4" />
						<label htmlFor="fax4">{t('Fax4')}</label>
						<div className={styles['right-side']}>
							<Field type="tel" name="fax4" required autoComplete="off" />
							<ErrorMessage name="fax4" component="div" />
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
