import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';

// shim the WHATWG URL class when running on the server.
require('isomorphic-url').shim();

@NgModule({
  imports: [
    ServerModule,
    AppModule
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
	//   { provide: NgModuleFactoryLoader, useClass: ServerRouterLoader }
  ]
})
export class AppServerModule {
}
