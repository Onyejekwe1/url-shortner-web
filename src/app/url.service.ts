import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Url } from './url';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  private baseURL = "http://localhost:8080/api/v1/urls";

  constructor(private httpClient: HttpClient) { }
  
  getUrlsList(): Observable<Url[]>{
    return this.httpClient.get<Url[]>(`${this.baseURL}`);
  }

  createUrl(url: Url): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, url);
  }

  getUrlById(id: number): Observable<Url>{
    return this.httpClient.get<Url>(`${this.baseURL}/${id}`);
  }

  updateUrl(id: number, url: Url): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, url);
  }

  deleteUrl(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
