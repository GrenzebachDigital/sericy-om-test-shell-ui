import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerDownPageComponent, UnauthorizedPageComponent } from '@grenzebachdigital/visu-engine/error-pages';

export const routes: Routes = [
    { path: 'forbidden', component: UnauthorizedPageComponent },
    { path: 'server-unavailable', component: ServerDownPageComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ErrorPagesRoutingModule {
}
