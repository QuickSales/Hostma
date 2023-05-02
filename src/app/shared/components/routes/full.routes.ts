import { Routes } from '@angular/router';
export const FullContentRoutes: Routes  = [
    { path:'',
        loadChildren: () => import('src/app/components/home/home.module').then(m => m.HomeModule)
    },
    { path:'',
        loadChildren: () => import('src/app/components/cloud/cloud.module').then(m => m.CloudModule)
    },
    { path:'',
    loadChildren: () => import('src/app/components/domains/domains.module').then(m => m.DomainsModule)
   },
  { path:'',
   loadChildren: () => import('src/app/components/email-productivity/email-productivity.module').then(m => m.EmailProductivityModule)
  },
  { path:'',
   loadChildren: () => import('src/app/components/hosting/hosting.module').then(m => m.HostingModule)
   },
   { path:'',
   loadChildren: () => import('src/app/components/pages/pages.module').then(m => m.PagesModule)
},
{ path:'',
loadChildren: () => import('src/app/components/security/security.module').then(m => m.SecurityModule)
},
{ path:'',
loadChildren: () => import('src/app/components/websites/websites.module').then(m => m.WebsitesModule)
},
{ path:'',
loadChildren: () => import('src/app/components/privacypages/privacypages.module').then(m => m.PrivacypagesModule)
},
];
