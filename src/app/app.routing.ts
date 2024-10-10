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
        redirectTo: '/order-details-dialog-loader-shell',
        pathMatch: 'full'
      },
      {
        path: 'order-details-dialog-loader-shell',
        loadChildren: () => import('../app/modules/order-details-dialog-loader-shell/order-details-dialog-loader-shell.module').then(m => m.OrderDetailsDialogLoaderShellModule)
      },
      /*{
        path: 'order-details-shell',
        loadChildren: () => import('../app/modules/order-details-shell/order-details-shell.module').then(m => m.OrderDetailsShellModule)
      },*/
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
    redirectTo: '/order-details-dialog-shell',
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
