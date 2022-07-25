import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutDeveloperView from '../views/AboutDeveloperView.vue'
import DashHomeView from '../views/DashHomeView.vue'
import DashDashboardView from '../views/DashDashboardView.vue'
import DashQuickInvoiceView from '../views/DashQuickInvoiceView.vue'
import DashAllInvoicesView from '../views/DashAllInvoicesView.vue'
import DashAnalyticsView from '../views/DashAnalyticsView.vue'
import DashHelpView from '../views/DashHelpView.vue'
import SignupView from '../views/SignupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      alias: '/home'
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutDeveloperView
    },
    {
      path: '/dash/home',
      name: 'dash-home',
      component: DashHomeView
    },
    {
      path: '/dash/dashboard',
      name: 'dash-dashboard',
      component: DashDashboardView
    },
    {
      path: '/dash/quick-invoice',
      name: 'dash-quickInvoice',
      component: DashQuickInvoiceView
    },
    {
      path: '/dash/all-invoices',
      name: 'dash-allInvoices',
      component: DashAllInvoicesView
    },
    {
      path: '/dash/analytics',
      name: 'dash-analytics',
      component: DashAnalyticsView
    },
    {
      path: '/dash/help',
      name: 'dash-help',
      component: DashHelpView
    }
  ]
})

export default router
