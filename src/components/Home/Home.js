import React, { useContext } from 'react';
import styles from "./Home.module.css";
import UserContext from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

function Home() {
    const { user, isAuthenticated } = useContext(UserContext);
  
    if(isAuthenticated && !user) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <div className={styles.userLoginStatus}>
          {isAuthenticated ? 'User has logged in' : 'User has not logged in'}
        </div>

        <Link to="/dashboard" className={styles.userDashboardLink}>View User Dashboard --&gt; </Link>
      </>
    );
}

export default Home;
