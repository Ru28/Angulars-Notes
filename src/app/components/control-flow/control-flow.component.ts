import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss'
})
export class ControlFlowComponent {
  title:string= 'controlFlow';
  
  a: number = 3;
  b: number = 3;
  c: number = 4;

  items = [
    { id: 1, name: 'item1'},
    { id: 2, name: 'item2'},
    { id: 3, name: 'item3'}
  ]

  grade:string ='C';
}
