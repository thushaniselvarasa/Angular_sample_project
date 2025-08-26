import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';  

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl ='https://dummyjson.com/posts';

  constructor(private http:HttpClient) { }

  createPost(postData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, postData);
  }

  getPosts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}

