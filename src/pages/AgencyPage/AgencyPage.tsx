import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import cn from 'classnames';
import { useState } from 'react';
import AgencyEdit from '../../components/AgencyEdit/AgencyEdit';
import AgencyInfo from '../../components/AgencyInfo/AgencyInfo';
import { AgencyPageProps } from './AgencyPageProps';

import styles from './AgencyPage.module.scss';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';


const AgencyPage = ({ agency = {} }: AgencyPageProps) => {
  const [editMode, setEditMode] = useState(false);
  const { t } = useTranslation();

  if (agency) {
    return (
      <div className={cn(styles['agency-page'])}>
        {editMode
          ? <>
            <Button type="button" onClick={() => setEditMode(false)}>{t('ExitEditMode')}</Button>
            <h2>{t('AgencyEditPage')}</h2>
            <AgencyEdit />
          </>
          : <>
            <h2>Агенство - Информация</h2>
            <Button type="button" onClick={() => setEditMode(true)}>{t('Edit')}</Button>
            <AgencyInfo />
          </>
        }

        <hr />
        <div className="agency-deatails">
          <h2>Отправленные факсы</h2>
          <p>Здесь выводятся детали Агенства если оно уже использовалось для отправки факса</p>
        </div>
      </div>
    );

  } else {
    return (
      <div className={cn(styles['agency-page'], styles['new-agency'])}>
        <h2>{t('NewAgencyPage')}</h2>
        <AgencyEdit />
      </div >
    )
  }

  // Инициализация и вывод формы

};

export default AgencyPage;
