import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Post, Comment } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  route: string = environment.apiUrl + "/posts";

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.route);
  }
  
  getComments() : Observable<Comment[]> {
    return this.http.get<Comment[]>(environment.apiUrl + "/comments");
  }
}
