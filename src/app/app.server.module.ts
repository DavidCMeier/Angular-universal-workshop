import {NgModule} from '@angular/core';
import {AppModule} from './app.module';
import {ServerModule, ServerTransferStateModule} from '@angular/platform-server';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ServerStateInterceptor} from './interceptors/server-state.interceptor';


@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true,
    },
  ],
})
export class AppServerModule {
}
