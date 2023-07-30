import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CRUDService } from './app.service';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AppResolveService {

  constructor(private crud: CRUDService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const idRegister = route.paramMap.get('id');
    const url = route['data'];
    if (!idRegister) {
      return this.crud.get(url['url']).map(response => {
        if (response) {
          return response;
        } else {
          this.router.navigate(['']);
        }
      });
    } else {
      return this.crud.get(`${url['url']}/${idRegister}`).map(response => {
        if (response) {
          return response;
        } else {
          this.router.navigate(['']);
        }
      });
    }
  }
}
