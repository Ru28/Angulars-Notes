import { Component } from '@angular/core';
import { TaskComponent } from '../task/task.component';
@Component({
  selector: 'app-user-repo',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './user-repo.component.html',
  styleUrl: './user-repo.component.scss'
})
export class UserRepoComponent {
  tasks: string[] = ['task1', 'task2','task3'];
  deleteTask(task:string){
    this.tasks= this.tasks.filter((t)=>t!==task);
  }
}
