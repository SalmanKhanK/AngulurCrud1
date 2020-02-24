import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";
import { EmployesetailService } from '../employesetail.service';

@Component({
  selector: 'app-employedetail',
  templateUrl: './employedetail.component.html',
  styleUrls: ['./employedetail.component.css']
})
export class EmployedetailComponent implements OnInit {
  public albums=[];
  users={
    title:"",
    select:""
    
  }
  public IssuesList= [];
  
  constructor(private employeservice:EmployesetailService,
    private location:Location) { }

  ngOnInit(): void {
    this.employeservice.getmethod().subscribe(
      data=>this.albums=data
    )

    
  }
  onsubmit(){ 
    if (this.users.title!==""){
    this.employeservice.postmethod(this.users).subscribe(
      user=>this.albums.unshift(user)
       
    )
    console.log(this.users.title);
  }
  else{
    confirm("Plz enter value");
  }

     
  }
  deleteIusse(data){
   this.employeservice.delletemethod(data).subscribe(
     _=>{
       this.albums=this.albums.filter(eachmovie=>eachmovie.id!=data)
            
      }
     
   );
   console.log(data)
    
  }
  goBack():void{
    this.location.back();
  }
  
  updateData():void{
    this.employeservice.updateMethod(2,this.albums).subscribe(()=>this.goBack)
  }

}
