import { Component, effect } from '@angular/core';
import { signal, computed } from '@angular/core';
import { Todo } from '../../interfaces/todo';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [NgFor],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {
  count = signal<number>(0);
  todos = signal<Todo[]>([]);
  newTodoText = signal<string>('');
  
  total = computed(()=> this.todos().length)

  constructor(){
    effect(()=>{
      const items = this.todos().length;
      const even = items % 2==0;
      console.log(`Items are: ${even ? 'Even': 'Odd'}`);
      // we can use it to call apis
    })
  }

  ngOnInit(){
    console.log(this.count());
  }

  handleInput(event: Event){
    const input = event?.target as HTMLInputElement;
    this.newTodoText.set(input?.value);
  }

  addTodo(){
    if(this.newTodoText().trim().length){
      const newTodo: Todo = {
        id: Date.now(),
        text: this.newTodoText(),
        done: false,
      }
      this.todos.set([...this.todos(),newTodo])
      this.newTodoText.set('');
    }
  }

  deleteTodo(id: number){
    const updatedTodos = this.todos().filter((todo)=> todo.id!==id);
    this.todos.set(updatedTodos);
  }
}
