import { Routes } from "@angular/router";

export const CustomRoute: Routes = [
  {
    path: '',title:"Hostma-Angular Modern Web Hosting",
    loadChildren: () => import('src/app/components/custom-pages/custom-pages.module').then(m => m.CustomPagesModule)
  },
];
