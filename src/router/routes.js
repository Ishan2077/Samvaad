
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageHome.vue'), name: 'Home' },
      { path: '/about', component: () => import('pages/PageAbout.vue'), name: 'About' },
      { path: '/contact', component: () => import('pages/PageContact.vue'), name: 'Contact' },
      { path: '/mouthoff', component: () => import('pages/PageMouthoff.vue'), name: 'Mouthoff' },
      { path: '/legal', component: () => import('pages/PageLegal.vue'), name: 'Legal' }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
