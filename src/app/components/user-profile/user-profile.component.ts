import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,FormsModule, NgClass, NgStyle],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  username:string='';
  title:string = "Angular";
  myBtn:string = 'My button';
  counter: number = 0;

  // attr binding
  isDisabled:boolean = true;
  angularImage: string = "../../../favicon.ico"
  
  // style binding
  bgColor: string = 'green';
  titleColor: string = 'white';
  description: string = "font-size:50px; color: red";

  // class binding
  redText: string = 'abcd';

  getUserInfo(){}

  incrementCounter(){
    this.counter++;
  }
  
  inputText:string = 'Initial Value'; 

  // ngClass
  message: string = "This is a dangrous message";
  classes: string = "danger text-size";

  // ngStyle
  selectedColor: string = "red";
}
