import { NgModule } from '@angular/core';
import { ErrorPagesModule } from '@grenzebachdigital/visu-engine/error-pages';
import { ErrorPagesRoutingModule } from './error-pages.routing.module';

@NgModule({
    imports: [ErrorPagesRoutingModule, ErrorPagesModule]
})
export class ErrorPagesWrapperModule {
}
