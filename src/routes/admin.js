import React from 'react';

// ADMIN
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Fakultas = React.lazy(() => import('../pages/admin/master/fakultas'));
const ProgramStudi = React.lazy(() => import('../pages/admin/master/programstudi'));
const Dosen = React.lazy(() => import('../pages/admin/master/dosen'));
const Berkas = React.lazy(() => import('../pages/admin/operasional/berkas'));
const PembagianDPL = React.lazy(() => import('../pages/admin/operasional/pembagiandpl'));
const PembagianLokasi = React.lazy(() => import('../pages/admin/operasional/pembagianlokasi'));
const Penilaian = React.lazy(() => import('../pages/admin/operasional/penilaian'));
// END ADMIN



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/master', name: 'Master', exact: true },
  { path: '/master/fakultas', name: 'Fakultas', component: Fakultas },
  { path: '/master/program-studi', name: 'Program Studi', component: ProgramStudi },
  { path: '/master/dosen', name: 'Dosen', component: Dosen },
  { path: '/operasional', name: 'Operasional', exact: true },
  { path: '/operasional/verifikasi', name: 'Verifikasi Berkas', component: Berkas },
  { path: '/operasional/dpl', name: 'Pembagian DPL', component: PembagianDPL },
  { path: '/operasional/lokasi', name: 'Pembagian Lokasi', component: PembagianLokasi },
  { path: '/operasional/penilaian', name: 'Penilaian', component: Penilaian },
];

export default routes;
