import { useContext } from 'react';
import UserContext from '../context/userContext';

function User() {

    const { name, age } = useContext(UserContext);

    return (
        <>
            <h1>User Component</h1>
            <ul>
                <li>Nombre: { name }</li>
                <li>Edad: { age }</li>
            </ul>
        </>
    );
}

export default User;