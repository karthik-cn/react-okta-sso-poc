import React, { useContext } from 'react';
import styles from './Header.module.css';
import UserContext from "../../../contexts/UserContext";
import { useOktaAuth } from '@okta/okta-react';

function Header() {
    const { user,  isAuthenticated} = useContext(UserContext);
    const { oktaAuth } = useOktaAuth();
    const login = async () => oktaAuth.signInWithRedirect();
    const logout = async () => oktaAuth.signOut('/');

    const getLoginStateDisplay = () => {
        if(!isAuthenticated) {
            return <button onClick={login} className={styles.authButton}>Login</button>;
        }

        return (
            <ul className={styles.loggedInOptionsList}>
                <li>{user?.name}</li>
                <li className={styles.authButton} onClick={logout}>Logout</li>
            </ul>
        );
    }

    return (
        <header className={styles.Header}>
            <div className={styles.Content}>
                <div className={styles.brand}>OKTA React SSO Demo</div>

                <div>
                    {getLoginStateDisplay()}
                </div>
            </div>
        </header>
    )
}

export default Header;
