// sidebar nav links
export default {
   category1: [
      {
         "menu_title": "sidebar.dashboard",
         "menu_icon": "zmdi zmdi-view-dashboard",
         "new_item": false,
         "type_multi": null,
         "child_routes": [
            {
               "menu_title": "sidebar.ecommerce",
               "new_item": false,
               "path": "/app/dashboard/ecommerce",
            },
            {
               "path": "/dashboard/crm/dashboard",
               "new_item": true,
               "menu_title": "sidebar.crm"
            },
            {
               "path": "/horizontal/dashboard/saas",
               "new_item": false,
               "menu_title": "sidebar.saas"
            },
            {
               "path": "/agency/dashboard/agency",
               "new_item": false,
               "menu_title": "sidebar.agency"
            },
            {
               "path": "/boxed/dashboard/news",
               "new_item": false,
               "menu_title": "sidebar.news"
            },
         ]
      },
      {
         "menu_title": "sidebar.users",
         "menu_icon": "zmdi zmdi-accounts",
         "type_multi": null,
         "new_item": false,
         "child_routes": [
            /*{
               "path": "/app/users/user-profile-1",
               "new_item": false,
               "menu_title": "sidebar.userProfile1"
            },
            {
               "path": "/app/users/user-profile",
               "new_item": false,
               "menu_title": "sidebar.userProfile2"
            },*/
            {
               "path": "/app/users/user-management",
               "new_item": false,
               "menu_title": "sidebar.userManagement"
            },
            {
               "path": "/app/users/user-list",
               "new_item": false,
               "menu_title": "sidebar.userList"
            }
         ]
      }
   ]
}
