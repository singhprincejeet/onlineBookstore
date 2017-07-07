///<reference path="../../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

let max = 5;

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(fb: FormBuilder){
    this.checkoutForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'address1': [null, Validators.required],
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'postalCode': [null, Validators.required],
      'creditCardNumber': [null, Validators.compose([Validators.required, Validators.maxLength(16),
        Validators.minLength(16), Validators.pattern(/^[0-9]*$/)])],
      'ccvNumber': [null, Validators.compose([Validators.required, Validators.maxLength(3), Validators.minLength(3),
        Validators.pattern(/^[0-9]*$/)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEX)])],
    })
  }

  ngOnInit(): void {

  }

  runThis = function () {
    window.alert("Form submitted")
  };
}
