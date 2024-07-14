import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../interfaces/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-dependancy-injection',
  standalone: true,
  imports: [NgFor],
  templateUrl: './dependancy-injection.component.html',
  styleUrl: './dependancy-injection.component.scss'
})
export class DependancyInjectionComponent {
  data: string[] = [];
  posts: Data[] = [];

  constructor(private dataService:DataService){
    this.data=this.dataService.getData();
  }

  ngOnInit(){
    this.dataService.getPosts().subscribe({
      next: (response: Data[])=>{
        this.posts = response;
      },
      error: (error:Error)=>{
        console.log(error);
      }
    })
  }
}
