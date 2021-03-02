import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));

const PUBLIC_ROUTES = [
    {
        name: 'HOME',
        path: '/',
        exact: true,
        component: Home,
    },
];

export const PRIVATE_ROUTES = [
    {
        name: 'ABOUT',
        path: '/about',
        exact: true,
        component: About,
    },
];

export default PUBLIC_ROUTES;
