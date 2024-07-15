import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
interface User {
  name: string;
  email: string
}

@Component({
  selector: 'app-templatedriven-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './templatedriven-form.component.html',
  styleUrl: './templatedriven-form.component.scss'
})

export class TemplatedrivenFormComponent {
  user: User = {
    name:'',
    email:'',
  };

  submitForm(form: NgForm) {
    if(form.valid){
      console.log(form.value, this.user);
    }
  }

  validateEmail(): boolean {
    const emailRegex =/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    return emailRegex.test(this.user.email);
  }
}
