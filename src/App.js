import { toRelativeUrl } from '@okta/okta-auth-js';
import oktaAuthConfig from './lib/auth/okta';
import { Security } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';
import withRouterAccess from './routing/withRouterAccess';
import getRoutes from './routing/routes';
import styles from './App.module.css';
import Header from './components/Layout/Header/Header';
import { UserContextProvider } from './contexts/UserContext';


function App() {
  const history = useHistory();
  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri || '/', window.location.origin));
  };

  return (
    <>
      <Security oktaAuth={oktaAuthConfig} restoreOriginalUri={restoreOriginalUri} >
        <UserContextProvider>
          <Header />
          <main className={styles.App}>
            { getRoutes() }
          </main>
        </UserContextProvider>
      </Security>
    </>
  );
}

export default withRouterAccess(App);

