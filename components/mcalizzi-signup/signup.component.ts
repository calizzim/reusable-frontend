import { Router } from '@angular/router';
import { BackendRequestService } from '../../services/backend-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './mcalizzi-signup.component.html',
  styleUrls: ['./mcalizzi-signup.component.css']
})
export class McalizziSignupComponent implements OnInit {
  
  constructor(private http:BackendRequestService,
              private router:Router) { 
  }
  
  ngOnInit(): void {
  }

  async signup(data) {
    await this.http.signup(data)
    await this.http.login(data)
    this.router.navigate([''])
  }
}
