import { Router } from '@angular/router';
import { BackendRequestService } from '../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './mcalizzi-login.component.html',
  styleUrls: ['./mcalizzi-login.component.css']
})
export class McalizziLoginComponent implements OnInit {

  constructor(
    private request:BackendRequestService,
    private router:Router
    ) {}
  alert = { active: false, message: 'invalid username or password' }
  async submit(data) {
    if(!await this.request.login(data)) return this.alert.active = true
    this.router.navigate([''])
  }
  ngOnInit(): void {
  }

}
