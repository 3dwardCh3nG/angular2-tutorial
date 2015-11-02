import 'zone.js';
import 'reflect-metadata';

import {bootstrap} from 'angular2/angular2';
import {provide} from 'angular2/core';
import {AppComponent} from "./app-component";

import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {UserService} from './services/user-service'

bootstrap(AppComponent, [
    ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy}),
    HTTP_PROVIDERS,
    UserService
]);