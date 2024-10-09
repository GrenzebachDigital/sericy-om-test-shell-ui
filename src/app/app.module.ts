import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AuthConfiguration, AuthenticationInterceptor, SecurityModule } from '@grenzebachdigital/security-kit';
import { VisuComponentsModule } from '@grenzebachdigital/visu-components';
import { GlobalExceptionHandlerModule } from '@grenzebachdigital/visu-components/global-exception-handler';
import { HttpErrorHandlerModule } from '@grenzebachdigital/visu-components/http-error-handler';
import { ThemeModule, VisuEngineModule } from '@grenzebachdigital/visu-engine';
import { VisuEngineConfig } from '@grenzebachdigital/visu-engine/engine-config';
import { I18nCustomTranslateLoader, I18nInterceptor, I18nService } from '@grenzebachdigital/visu-engine/i18n';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BasicLayoutComponent } from './modules/shared/basic-layout/basic-layout.component';

@NgModule({
    declarations: [
        AppComponent,
        BasicLayoutComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        GlobalExceptionHandlerModule.forRoot(),
        HttpErrorHandlerModule.withHandler(),
        HttpClientModule,
        SecurityModule.forRoot(
            environment.identityServerConfig as AuthConfiguration
        ),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            registrationStrategy: 'registerImmediately'
        }),
        ThemeModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useClass: I18nCustomTranslateLoader,
                deps: [I18nService]
            }
        }),
        VisuEngineModule.forRoot({
             appName: environment.appName,
             domainUrl: (environment as { domainUrl?: string }).domainUrl, // domain override for development
             } as VisuEngineConfig),
        VisuComponentsModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthenticationInterceptor,
            multi: true
        },
        {
            provide: APP_BASE_HREF,
            useValue: environment.baseHref
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: I18nInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
