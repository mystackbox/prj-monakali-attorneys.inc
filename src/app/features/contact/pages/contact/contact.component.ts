import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  //local variables declaration
  _contactForm!: FormGroup;
  _errorMessage: string = '';

    ngOnInit(): void{ 
      
       //Initialize the form
      this._contactForm = new FormGroup({
        fullName: new FormControl('', [Validators.required]),
        emailAddress: new FormControl('', [Validators.required, Validators.email]),
        message: new FormControl('', [Validators.required]),
      });
 
    }

    //getter for form-control[fullName]
    get fullName() {
      return this._contactForm.get('fullName');}
  
    //getter for form-control[emailAddress]
    get emailAddress() {
      return this._contactForm.get('emailAddress');}
    
    //getter for form-control [message]
    get message() {
      return this._contactForm.get('message');}

    sendMesssage(){

    }

}

