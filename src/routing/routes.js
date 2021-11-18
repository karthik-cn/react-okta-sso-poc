import Home from '../components/Home/Home';
import Dashboard from '../components/Dashboard/Dashboard';
import { SecureRoute, LoginCallback } from '@okta/okta-react';
import { Route } from 'react-router-dom';

const routeList = Object.freeze([
    {
        key: 'dashboard',
        secure: true,
        routeProps: {
            path: '/dashboard',
            component: Dashboard,
        }
    },
    {
        key: 'loginCallBackLoader',
        secure: false,
        routeProps: {
            path: '/login/callback',
            component: LoginCallback,
        }
    },
    {
        key: 'home',
        secure: false,
        routeProps: {
            path: '/',
            component: Home,
            exact: true,    
        }
    },
]);

const getRoutes = () => (
    <>
        {
            routeList.map(route => {
                const RouteComponent = route.secure ? SecureRoute : Route;
                return <RouteComponent key={route.key} {...route.routeProps} />;
            })
        }
    </>
);

export default getRoutes;