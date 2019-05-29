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

// Users Profile 
const AsyncUserProfileComponent = Loadable({
   loader: () => import("Routes/users/user-profile"),
   loading: () => <RctPageLoader />,
});

// Users Management
const AsyncUserManagementComponent = Loadable({
   loader: () => import("Routes/users/user-management"),
   loading: () => <RctPageLoader />,
});

// Session Login

const AsyncSessionLoginComponent = Loadable({
   loader: () => import("Routes/session/login"),
   loading: () => <RctPageLoader />,
});
// Session Register
const AsyncSessionRegisterComponent = Loadable({
   loader: () => import("Routes/session/register"),
   loading: () => <RctPageLoader />,
});

// Session Forgot Password
const AsyncSessionForgotPasswordComponent = Loadable({
   loader: () => import("Routes/session/forgot-password"),
   loading: () => <RctPageLoader />,
});

// Session Page 404
const AsyncSessionPage404Component = Loadable({
   loader: () => import("Routes/session/404"),
   loading: () => <RctPageLoader />,
});

// Session Page 500
const AsyncSessionPage500Component = Loadable({
   loader: () => import("Routes/session/500"),
   loading: () => <RctPageLoader />,
});



export {
   AsyncEcommerceDashboardComponent,
   AsyncSaasDashboardComponent,
   AsyncAgencyDashboardComponent,
   AsyncNewsDashboardComponent,
   AsyncCrmComponent,
   AsyncUserManagementComponent,
   AsyncSessionLoginComponent,
   AsyncSessionRegisterComponent,
   AsyncSessionForgotPasswordComponent,
   AsyncSessionPage404Component,
   AsyncSessionPage500Component,
   AsyncUserProfileComponent
};
