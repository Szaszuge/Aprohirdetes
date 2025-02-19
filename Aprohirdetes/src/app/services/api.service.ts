import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private server = 'http://localhost:3000/api';

  registration(user:object){
    return this.http.post(this.server + '/users/register', user);
  }


}
