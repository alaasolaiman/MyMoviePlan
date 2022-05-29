import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService:UserService) {
    this.signUpForm = this.formBuilder.group({
        username:['', [Validators.required]],
        email:['', [Validators.required]],
        password:['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  submitForm(signUpForm:any) {
    console.log(signUpForm.value);
    this.userService.postUser(signUpForm.value).subscribe(res => {})
  }
}
