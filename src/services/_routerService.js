// routes
import Dashboard from 'Routes/dashboard';
import Crm from 'Routes/crm';
import Users from 'Routes/users';

export default [
   {
      path: 'dashboard',
      component: Dashboard
   },
   {
      path: 'crm',
      component: Crm
   },
   {
      path: 'users',
      component: Users
   }
]