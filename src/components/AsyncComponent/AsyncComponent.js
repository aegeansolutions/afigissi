/**
 * AsyncComponent
 * Code Splitting Component / Server Side Rendering
 */
import React from 'react';
import Loadable from 'react-loadable';

// rct page loader
import RctPageLoader from 'Components/RctPageLoader/RctPageLoader';

// ecommerce dashboard
const AsyncEcommerceDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/ecommerce"),
   loading: () => <RctPageLoader />,
});

// agency dashboard
const AsyncSaasDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/saas"),
   loading: () => <RctPageLoader />,
});

// agency dashboard
const AsyncAgencyDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/agency"),
   loading: () => <RctPageLoader />,
});

// boxed dashboard
const AsyncNewsDashboardComponent = Loadable({
   loader: () => import("Routes/dashboard/news"),
   loading: () => <RctPageLoader />,
});
// crm dashboard
const AsyncCrmComponent = Loadable({
   loader: () => import("Routes/crm/dashboard"),
   loading: () => <RctPageLoader />,
});
// Users List
const AsyncUsersListComponent = Loadable({
   loader: () => import("Routes/users/user-list"),
   loading: () => <RctPageLoader />,
});

// Users Profile
/*const AsyncUserProfileComponent = Loadable({
   loader: () => import("Routes/users/user-profile"),
   loading: () => <RctPageLoader />,
});

// Users Profile 1
const AsyncUserProfile1Component = Loadable({
   loader: () => import("Routes/users/user-profile-1"),
   loading: () => <RctPageLoader />,
});*/

// Users Management
const AsyncUserManagementComponent = Loadable({
   loader: () => import("Routes/users/user-management"),
   loading: () => <RctPageLoader />,
});

export {
   AsyncEcommerceDashboardComponent,
   AsyncSaasDashboardComponent,
   AsyncAgencyDashboardComponent,
   AsyncNewsDashboardComponent,
   AsyncCrmComponent,
   AsyncUserManagementComponent,
   AsyncUsersListComponent//,
  // AsyncUserProfileComponent,
   //AsyncUserProfile1Component   
};
