
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
data!:any;
  constructor(private auth:AuthService,private router:Router) 
  { 
    
  }

  ngOnInit(): void {
    this.getProfile()
  }

       getProfile(){
           this.auth.getprofile().subscribe((res)=>{
            console.log(res)
                 if(res.success){
                  this.data=res.data;
                
                 }              
                  else{
                      
                  }
           },err=>{

           })
       }

       logout(){
        localStorage.clear();
        this.router.navigate(['/login'])
       }
}
