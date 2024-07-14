import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-json-asyncpipe',
  standalone: true,
  imports: [NgIf,AsyncPipe,JsonPipe],
  templateUrl: './json-asyncpipe.component.html',
  styleUrl: './json-asyncpipe.component.scss'
})
export class JsonAsyncpipeComponent {
  constructor(private userService: UserService){}
  user = this.userService.getUser();
  
  userData ={
    id: 1,
    name: 'Rupesh Virani',
    roles: ['Admin','User'],
    status: {
      active: true,
      lastLogin: new Date(2024,4,14),
    },
  }
}
