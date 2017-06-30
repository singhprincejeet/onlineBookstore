///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

let max = 5;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  ngOnInit(): void {

  }

  firstName: string;
  lastName: string;
  address1: string;
  city: string;
  state: string;
  postalCode: string;
  creditCardNumber: string;
  ccvNumber: string;


  creditCardFormControl = new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16),
    Validators.pattern(/^[0-9]*$/)]);
  ccvFormControl = new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3),
    Validators.pattern(/^[0-9]*$/)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_REGEX)]);
  // model = 'hello';

  runThis = function () {
    window.alert("Form submitted")
  };

}
