import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post';
import { Languages, LatestPrice, OrderBook } from '../interfaces/languages';
import { Student } from '../interfaces/languages';
@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private apiUrl:string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient){ }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl);
  }

  getLangauges(): Observable<Languages[]>{
    return this.http.get<Languages[]>('http://localhost:3000/languages');
  }

  getStudents(): Observable<Student>{
    return this.http.get<Student>('http://localhost:3000/student');
  }

  getOrders(): Observable<OrderBook>{
    return this.http.get<OrderBook>('http://localhost:3000/orderbook');
  }

  getPrices(): Observable<LatestPrice>{
    return this.http.get<LatestPrice>('http://localhost:3000/latestprices');
  }
}
