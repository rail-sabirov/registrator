import LanguageSelector from '../../components/LanguageSelector/LanguageSelector';
import cn from 'classnames';
import { useState } from 'react';
import AgencyEdit from '../../components/AgencyEdit/AgencyEdit';
import AgencyInfo from '../../components/AgencyInfo/AgencyInfo';
import { AgencyPageProps } from './AgencyPageProps';

import styles from './AgencyPage.module.scss';


const AgencyPage = ({ agency = {} }: AgencyPageProps) => {
  const [editMode, setEditMode] = useState(false);

  if (agency) {
    return (
      <div className={cn(styles['agency-page'])}>
        <LanguageSelector />
        <hr />
        {editMode
          ? <>
            <h2>Агенство - Редактирование</h2>
            <AgencyEdit switchEditMode={setEditMode} />
          </>
          : <>
            <h2>Агенство - Информация</h2>
            <button onClick={() => setEditMode(true)}>Редактировать</button>
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
        <h2>Новое Агенство</h2>
        <AgencyEdit switchEditMode={setEditMode} />
      </div >
    )
  }

  // Инициализация и вывод формы

};

export default AgencyPage;
