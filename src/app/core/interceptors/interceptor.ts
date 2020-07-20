import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log('REQUEST STARTED!!!!!!!!');

    const reqCloned =  this.handleBodyIn(req);

    return next.handle(reqCloned);
  }
  handleBodyIn(req: HttpRequest<any>) {

    req = req.clone({
       // if apikey already exists, delete it
      url: req.url.replace(/api_key=[^&]+&?/g, ''),
      params: req.params.append('api_key', 'a544e13f3a740ad4a35bfb4a9d4bc6ef')
    });

    return req;
  }


}
