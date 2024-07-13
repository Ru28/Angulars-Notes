import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  username:string='';
  title:string = "Angular";
  myBtn:string = 'My button';

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

}
