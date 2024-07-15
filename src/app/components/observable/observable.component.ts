import { Component } from '@angular/core';
import { MessagesService } from '../../services/messages.service';
import { Post } from '../../interfaces/post';
import { NgFor } from '@angular/common';
import { Languages, LatestPrice, OrderBook, Student } from '../../interfaces/languages';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [NgFor],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss'
})
export class ObservableComponent {
  posts:Post[] =[]
  languages:Languages[]=[];
  students!: Student;
  constructor(private messagesService: MessagesService){}
  
  ngOnInit(){
    this.messagesService.getPosts().subscribe({
      next: (response: Post[])=>{
        this.posts = response;
      },
      error:(error: Error)=>{
        console.error(error);
      }
    })

    this.messagesService.getLangauges().subscribe({
      next: (response: Languages[])=>{
        this.languages = response;
        console.log(this.languages);
      },
      error:(error: Error)=>{
        console.error(error);
      }
    })

    this.messagesService.getStudents().subscribe({
      next: (response: Student)=>{
        this.students = response;
        console.log(this.students);
      },
      error:(error: Error)=>{
        console.error(error);
      }
    })

    this.messagesService.getOrders().subscribe({
      next: (response: OrderBook)=>{
        console.log(response);
      },
      error:(error: Error)=>{
        console.error(error);
      }
    })

    this.messagesService.getPrices().subscribe({
      next: (response: LatestPrice)=>{
        console.log(response);
      },
      error:(error: Error)=>{
        console.error(error);
      }
    })

  }
}
