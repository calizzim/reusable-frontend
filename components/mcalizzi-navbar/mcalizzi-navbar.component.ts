import { LoginService } from '../../services/login.service';
import { BackendRequestService } from '../../services/backend-request.service';
import { Router, Routes } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mcalizzi-navbar',
  templateUrl: './mcalizzi-navbar.component.html',
  styleUrls: ['./mcalizzi-navbar.component.css']
})
export class McalizziNavbarComponent implements OnInit {
  @Input('title') title
  constructor(private router:Router, public login:LoginService) { }
  routeNames:string[]
  ngOnInit(): void {
    this.routeNames = this.router.config.map(v => v.path).filter(v => v && v != 'login')
  }
}
