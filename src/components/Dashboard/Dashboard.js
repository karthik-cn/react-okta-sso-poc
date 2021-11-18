import React, { useContext } from 'react';
import styles from "./Dashboard.module.css";
import UserContext from '../../contexts/UserContext';

function Dashboard() {
    const { user } = useContext(UserContext);

    return (
        <div className={styles.Dashboard}>
            Protected Dashboard
            {
                user ? (
                    <div className={styles.userInfo}>
                        Logged In User: <br /> { user.name } | { user.email }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Dashboard
