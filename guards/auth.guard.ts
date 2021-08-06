import { BackendRequestService } from '../services/backend-request.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private http:BackendRequestService,
    private router:Router
    ) {}
  async canActivate(route: ActivatedRouteSnapshot){
    let { error } = await this.http.get('auth')
    if(error) {
      this.router.navigate(['/login'])
      return false
    }
    return true
  }
}
