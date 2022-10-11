import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

         signup(data:any):Observable<any>{
            return this.http.post('http://localhost:8010/auth/register',data)
         }
           
         signin(data:any):Observable<any>{
          return this.http.post('http://localhost:8010/auth/login',data)
       }
        
           getprofile():Observable<any>{
                      let headers={
                        'Authorization': "Bearer " + localStorage.getItem('token')
                      }  
                         
              return this.http.get('http://localhost:8010/auth/profile' ,{headers:headers})        
          }

}
