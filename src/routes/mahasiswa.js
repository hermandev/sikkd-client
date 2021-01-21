import React from 'react';

// ADMIN
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Fakultas = React.lazy(() => import('../pages/admin/master/fakultas'));
// END ADMIN



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/master', name: 'Master', exact: true },
  { path: '/master/fakultas', name: 'Fakultas', component: Fakultas },
];

export default routes;
