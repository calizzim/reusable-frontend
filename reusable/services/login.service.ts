import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private router:Router) { }

  is() {
    return Boolean(localStorage.getItem('token'))
  }

  logout() {
    localStorage.setItem('token','')
    this.router.navigate([''])
  }
}
