import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) 
  {
      this.loginForm=fb.group({
        email:['',Validators.required],
        password:['',Validators.required],
      })
   }

  ngOnInit(): void {
  }
  login(){
         this.auth.signin(this.loginForm.value).subscribe(res=>{
           if(res.success){
               localStorage.setItem('token',res.token)
                this.router.navigate(['/profile'])              
           }
                 else{
                  alert(res.message)
                 }
            
         }, err=>{
              alert("Login Faild !!")
         })


  }
}
