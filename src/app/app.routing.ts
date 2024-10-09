import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationGuard } from '@grenzebachdigital/security-kit';
import { BasicLayoutComponent } from './modules/shared/basic-layout/basic-layout.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    canActivate: [AuthorizationGuard],
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: () => import('../app/modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/error-pages-wrapper/error-pages-wrapper.module').then(m => m.ErrorPagesWrapperModule)
      }
    ]
  },
  {
    path: 'errors',
    loadChildren: () =>
      import('../app/modules/error-pages-wrapper/error-pages-wrapper.module').then(m => m.ErrorPagesWrapperModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'disabled'
    })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
