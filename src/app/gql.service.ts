import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class GqlService {

  constructor(private http:HttpClient) { }

  fetch(query){
    let headers = new HttpHeaders({"Content-type":"application/json"})
    //headers set must be like above, it's weird that headers.append doesn't work
    return this.http.post(`${environment.gql}`,query,{headers:headers})
  }
}
