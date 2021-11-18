import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Dashboard';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import { Route } from 'react-router-dom';

const routeList = [
    {
        key: 'dashboard',
        path: '/dashboard',
        component: Dashboard,
        secure: true
    },
    {
        key: 'loginCallBackLoader',
        path: '/login/callback',
        component: LoginCallback,
        secure: false
    },
    {
        key: 'home',
        path: '/',
        component: Home,
        secure: false,
        exact: true,
    },
]

const getRoutes = () => (
    <>
        {
            routeList.map(route => {
                if(route.secure) {
                    return <SecureRoute path={route.path} component={route.component} exact={route.exact} key={route.key} />;
                }
                return <Route path={route.path} component={route.component} exact={route.exact} key={route.key} />
            })
        }
    </>
);

export default getRoutes;