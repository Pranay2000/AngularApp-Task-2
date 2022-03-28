import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
@Component({
  selector: 'app-reactive-driven',
  templateUrl: './reactive-driven.component.html',
  styleUrls: ['./reactive-driven.component.css']
})
export class ReactiveDrivenComponent implements OnInit {

  submitted = false;
  constructor(private fb: FormBuilder) { }
  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_\.\-]+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(10)]],
    city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]],
    pincode: ['', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(6)]]
  });
  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.myForm.controls;
  }
  
  formSubmit() {
    this.submitted = true;
    if (this.myForm.invalid) {
      return;
    }
    alert(JSON.stringify(this.myForm.value));
  }
}
