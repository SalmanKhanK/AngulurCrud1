import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IEmploye} from './employe';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployesetailService {
     baseurl="http://localhost:3000";
     putUrl="http://localhost:3000/bugtracking/"
    constructor(private http:HttpClient){}
    getmethod():Observable<IEmploye[]>{
      return this.http.get<IEmploye[]>(this.baseurl+'/bugtracking/');
    }
    postmethod(user):Observable<IEmploye[]>
    {
     
      return this.http.post<IEmploye[]>(this.baseurl+'/bugtracking/',user,{
        headers : new HttpHeaders({
           'Content-Type':'application/json'
        })
      })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }
    errorHandl(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        // Get client-side error
        errorMessage = error.error.message;
      } else {
        // Get server-side error
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
   }
   delletemethod(id):Observable<IEmploye[]>
    {
     
      return this.http.delete<IEmploye[]>(this.baseurl+'/bugtracking/'+id,{
        headers : new HttpHeaders({
           'Content-Type':'application/json'
        })
      })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }
    updateMethod(id,data):Observable<IEmploye>
    {
     
      return this.http.put<IEmploye>(this.putUrl+id,data,{
        headers : new HttpHeaders({
           'Content-Type':'application/json'
        })
      })
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
    }
   
  }

    

