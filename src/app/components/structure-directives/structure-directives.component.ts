import { Component } from '@angular/core';
import { NgIf , NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';
@Component({
  selector: 'app-structure-directives',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './structure-directives.component.html',
  styleUrl: './structure-directives.component.scss'
})
export class StructureDirectivesComponent {
  isLoggedIn: boolean = true;
  check: boolean = true;
  username: string = 'Rupesh';

  names: string[] = ['rupesh','david','john'];

  grade: string = 'D';
}
