import { Navigate } from 'react-router-dom';

export function RequireAuth({ children }: { children: JSX.Element }) {

	// TODO: Если не авторизован, то редиректим на страницу логина
	// return <Navigate to="/login" replace />
	
	return children
}