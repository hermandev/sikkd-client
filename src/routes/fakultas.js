import React from 'react';

// ADMIN
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Mahasiswa = React.lazy(() => import('../pages/fakultas/mahasiswa'));
// END ADMIN



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/mahasiswa', name: 'Mahasiswa', component: Mahasiswa },
];

export default routes;
