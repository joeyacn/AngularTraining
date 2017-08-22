import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//2.4 导入 FormsModule, NgModel lives here
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './app.component';

// import { GuidePageComponent }         from './guide-page.component';

import { DashboardComponent }  from './dashboard.component';
import { EmployeeDetailComponent }    from './employee-detail.component';

import { EmployeesComponent }     from './employees.component';

import { EmployeeService }            from './employee.service';
import { AppRoutingModule }           from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // GuidePageComponent,
    //6.7 把DashboardComponent添加到AppModule的declarations数组中
    DashboardComponent,
    EmployeeDetailComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
