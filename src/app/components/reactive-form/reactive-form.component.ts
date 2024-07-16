import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.scss'
})
export class ReactiveFormComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      name:['', Validators.required],
      email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/)]],
      address: this.formBuilder.group({
        street: ['',Validators.required],
        city: ['',Validators.required],
      }),
      phoneNumbers: this.formBuilder.array([
        this.formBuilder.control('',[
          Validators.required,
          Validators.pattern(/^\d{10}$/),
        ])
      ])
    })
  }

  get phoneNumbers(): FormArray {
    return this.userForm.get('phoneNumbers') as FormArray;
  }

  removePhoneNumber(index: number){
    this.phoneNumbers.removeAt(index)
  }

  addPhoneNumber() {
    this.phoneNumbers.push(
      this.formBuilder.control('',[
        Validators.required,
        Validators.pattern(/^\d{10}$/)
      ])
    );
  }

  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value);
    }
  }
  
}
