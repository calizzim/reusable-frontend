import { environment } from '../../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators'
import { of } from 'rxjs'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {
  backendURL = environment.backendURL
  constructor(private http:HttpClient) {
  }
  
  async uploadForm(formData,templateName) {
    let URL = 'forms/'+templateName
    let result = await this.post(URL,formData)
    if(result.error) console.log(result.error.message)
    return result
  }
  
  async login(loginData):Promise<boolean> {
    let URL = 'forms/login'
    let result = await this.post(URL,loginData)
    if(result.error) return false
    localStorage.setItem('token', result)
    return true
  }
  
  asyncVerify(data,templateName) {
    let URL = 'forms/asyncVerify/'+templateName
    return this.post(URL,data)
  }

  get(URL):Promise<any> {
    let token = localStorage.getItem('token') || ''
    let result = this.http.get(this.backendURL+URL,{headers:{token}})
    return this.handle(result)
  }

  post(URL, data):Promise<any> {
    let token = localStorage.getItem('token') || ''
    let result = this.http.post(this.backendURL+URL,data,{headers:{token}})
    return this.handle(result)
  }

  handle(obs:Observable<any>):Promise<any> {
    let result:Promise<any> = obs
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if(error.status == 0) {
          console.log('the server is not responding')
          return of({
            error: {
              message: 'server is not responding',
              status: error.status
            }
          })
        }
        else {
          console.log(error)
          return of({ 
            error: {
              message: error.error,
              status: error.status
            }
          })
        }
      }),
      map((result:any) => { 
        if(!result.error) return result.data
        return result
      })
    ).toPromise()
    return result
  }

}