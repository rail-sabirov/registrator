import cn from 'classnames';
import { Field, Form, ErrorMessage } from 'formik';
import Button from '../Button/Button';
import styles from './AgencyEdit.module.scss';
import { useEffect } from 'react';

const formTemplate = (values, errors, t) => {
	const showFaxRadioButtonError = (faxName) =>
		values[faxName] && !!errors.defaultFax && !values.defaultFax;
	const showErrorMessage = (field: string, stylesString?: string) =>
		errors[field] ? (
			<div className={cn(styles['field-error-message'], stylesString)}>
				{errors[field]}
			</div>
		) : (
			''
		);

	return (
		<Form>
			<div className={styles['main']}>
				<label htmlFor="agencyNameField">{t('AgencyName')}</label>
				<div
					className={cn(styles['input-block'], {
						[styles['error-block-selector']]: !!errors.name
					})}
					title={errors.name}
				>
					<Field
						type="text"
						id="agencyNameField"
						name="name"
						required
						autoComplete="off"
					/>
					{showErrorMessage('name')}
				</div>

				<label htmlFor="email">{t('Email')}</label>
				<div
					className={cn(styles['input-block'], {
						[styles['error-block-selector']]: !!errors.email
					})}
				>
					<Field type="email" id="email" name="email" autoComplete="off" />
					{showErrorMessage('email')}
				</div>
			</div>

			<div className={styles['phone-fax']}>
				<div className={styles['phone-numbers']}>
					<span>{t('Phones')}</span>
					<div className={cn(styles['group-headers'])}>
						<div className={styles['phone']}>{t('PhoneNumber')}</div>
					</div>

					<div className={styles['phone-fields']}>
						<label htmlFor="phone1">{t('Phone1')}</label>
						<div
							className={cn(styles['field'], {
								[styles['error-block-selector']]: !!errors.phone1
							})}
						>
							<Field type="tel" id="phone1" name="phone1" autoComplete="off" />
							{showErrorMessage('phone1')}
						</div>

						<label htmlFor="phone1">{t('Phone2')}</label>
						<div
							className={cn(styles['field'], {
								[styles['error-block-selector']]: !!errors.phone2
							})}
						>
							<Field type="tel" id="phone2" name="phone2" autoComplete="off" />
							{showErrorMessage('phone2')}
						</div>

						<label htmlFor="phone1">{t('Phone3')}</label>
						<div
							className={cn(styles['field'], {
								[styles['error-block-selector']]: !!errors.phone3
							})}
						>
							<Field type="tel" id="phone3" name="phone3" autoComplete="off" />
							{showErrorMessage('phone3')}
						</div>
					</div>
				</div>

				<div className={styles['fax-numbers']}>
					<span>{t('Faxes')}</span>

					<div className={styles['rows']}>
						<div className={cn(styles['default'], styles['header'])}>
							{t('Default')}
						</div>
						<div className={cn(styles['label-column'], styles['header'])}>
							&nbsp;
						</div>
						<div className={cn(styles['fax'], styles['header'])}>
							{t('FaxNumber')}
						</div>

						<div className={cn(styles['colspan3'], styles['hr'])}></div>

						<ErrorMessage
							name="defaultFax"
							component="div"
							className={cn(
								styles['field-error-message'],
								styles['colspan3'],
								styles['default-fax-error']
							)}
						/>

						{showErrorMessage(
							'defaultFax',
							cn(
								styles['field-error-message'],
								styles['colspan3'],
								styles['default-fax-error']
							)
						)}

						<Field
							type="radio"
							name="defaultFax"
							value="fax1"
							disabled={values.fax1?.length === 0}
							className={cn(styles['radio-input'], {
								[styles['radio-input-filled']]: showFaxRadioButtonError('fax1')
							})}
						/>
						<label htmlFor="fax1">{t('Fax1')}</label>
						<div
							className={cn(styles['right-side'], {
								[styles['error-block-selector']]: !!errors.fax1
							})}
						>
							<Field
								type="tel"
								name="fax1"
								id="fax1"
								required
								autoComplete="off"
							/>
							{showErrorMessage('fax1')}
						</div>

						<Field
							type="radio"
							name="defaultFax"
							value="fax2"
							disabled={values.fax2?.length === 0}
							className={cn(styles['radio-input'], {
								[styles['radio-input-filled']]: showFaxRadioButtonError('fax2')
							})}
						/>
						<label htmlFor="fax2">{t('Fax2')}</label>
						<div
							className={cn(styles['right-side'], {
								[styles['error-block-selector']]: !!errors.fax2
							})}
						>
							<Field type="tel" name="fax2" id="fax2" autoComplete="off" />
							{showErrorMessage('fax2')}
						</div>

						<Field
							type="radio"
							name="defaultFax"
							value="fax3"
							disabled={values.fax3?.length === 0}
							className={cn(styles['radio-input'], {
								[styles['radio-input-filled']]: showFaxRadioButtonError('fax3')
							})}
						/>
						<label htmlFor="fax3">{t('Fax3')}</label>
						<div
							className={cn(styles['right-side'], {
								[styles['error-block-selector']]: !!errors.fax3
							})}
						>
							<Field type="tel" name="fax3" id="fax3" autoComplete="off" />
							{showErrorMessage('fax3')}
						</div>

						<Field
							type="radio"
							name="defaultFax"
							value="fax4"
							disabled={values.fax4?.length === 0}
							className={cn(styles['radio-input'], {
								[styles['radio-input-filled']]: showFaxRadioButtonError('fax4')
							})}
						/>
						<label htmlFor="fax4">{t('Fax4')}</label>
						<div
							className={cn(styles['right-side'], {
								[styles['error-block-selector']]: !!errors.fax4
							})}
						>
							<Field type="tel" name="fax4" id="fax4" autoComplete="off" />
							{showErrorMessage('fax4')}
						</div>
					</div>
				</div>
			</div>

			<div className={styles['comments']}>
				<span>{t('Comment')}</span>
				<div className={styles['row']}>
					<Field as="textarea" id="comment" name="comment" />
				</div>
			</div>

			<div className={styles['submit-button']}>
				<Button type="submit">{t('Save')}</Button>
			</div>
		</Form>
	);
};

export default formTemplate;
