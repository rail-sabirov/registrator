import styles from './AgencyListPage.module.scss';
import { getFirestore, collection, getDocs, get, Firestore } from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { useEffect, useState } from 'react';

const firebaseConfig = {
	apiKey: "AIzaSyBEW9PUpD0tLcOeI-2Ir3fR6eF0G4c7mFY",
	authDomain: "registrator-fs.firebaseapp.com",
	projectId: "registrator-fs",
	storageBucket: "registrator-fs.appspot.com",
	messagingSenderId: "628289862857",
	appId: "1:628289862857:web:f396eb5762ef23079da118"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export function AgencyListPage() {
	const [agencies, setAgencies] = useState([]);

	// Получаем список агенств из Firebase
	async function fetchAgencies(db: Firestore) {
		try {
			const agencyCollection = collection(db, 'agencies');
			const querySnapshot = await getDocs(agencyCollection);
			const agenciesData = querySnapshot.docs.map(doc => ({
				id: doc.id, ...doc.data()
			}));

			setAgencies(agenciesData);
			console.log('--- Firebase read data ---');

		} catch (error) {
			console.error('Error fetching agencies: ', error);
		}
	}

	useEffect(() => {
		fetchAgencies(db);
	}, [])

	const defaultFax = (agency, faxNumber: number) => (
		agency.defaultFax === `fax${faxNumber}`
	)

	return (
		<div className={styles['agency-list-page']}>
			<table>
				<thead>
					<tr>
						<th>Наименование</th>
						<th>Факс №1</th>
						<th>Факс №2</th>
						<th>Факс №3</th>
						<th>Факс №4</th>
						<th>E-mail</th>
						<th>Телефон №1</th>
						<th>Телефон №2</th>
						<th>Телефон №3</th>
					</tr>
				</thead>
				<tbody>
					{agencies.map((agency) => (
						<tr key={agency.id}>
							<td>{agency.agencyName}</td>
							<td>{agency.fax1}</td>
							<td>{agency.fax2}</td>
							<td>{agency.fax3}</td>
							<td>{agency.fax4}</td>

							<td>{agency.email}</td>
							<td>{agency.phone1}</td>
							<td>{agency.phone2}</td>
							<td>{agency.phone3}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}