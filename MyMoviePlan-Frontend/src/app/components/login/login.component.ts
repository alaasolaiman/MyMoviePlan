import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminGuard } from 'src/app/gaurds/admin.guard';
import { UserGuard } from 'src/app/gaurds/user.guard';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signInForm:FormGroup
  constructor(private formBuilder: FormBuilder, private userService:UserService, private router:Router, private  adminGuard: AdminGuard, private userGuard: UserGuard) {
     this.signInForm = this.formBuilder.group({
        email:['', [Validators.required]],
        password:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }


  submitForm(signInForm: any) {
    this.userService.getUsers().subscribe(rep => {
      const users: any = rep;
      for (const user of users) {
        console.log(user);

        if (user.email == this.signInForm.value.email || user.username == this.signInForm.value.email  && user.password == this.signInForm.value.password ) {
          if (user.role) {
            this.adminGuard.allowAdmin = true;
            this.router.navigateByUrl("/admin");
          }
          else {
            this.userGuard.allowUser = true;
             this.router.navigateByUrl("/movies");
          }
        }
        else {
          console.log("not authenticated");
        }
      }
    })
  }

}
