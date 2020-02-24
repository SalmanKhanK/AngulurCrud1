import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployedetailComponent } from './employedetail/employedetail.component';
import { from } from 'rxjs';
import { EmployesetailService } from './employesetail.service';
import{FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    EmployedetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [EmployesetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
