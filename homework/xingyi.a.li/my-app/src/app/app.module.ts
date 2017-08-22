import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Route, RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './D04/app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Day2Exerise1Component } from './D02/execrise1/exercise1.component';
import { Day2Exerise2Component } from './D02/execrise2/exercise2.component';
import { Day4Component } from './D04/app.component';

import { HomepageComponent }  from './D04/components/homepage.component';
import { DashboardComponent }  from './D04/components/dashboard.component';
import { EmployeeDetailComponent } from './D04/components/employee-detail.component';
import { EmployeesComponent }     from './D04/components/employees.component';
import { EmployeeService }     from './D04/components/employee.service';


const childRoutes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'employees', component: EmployeesComponent }
];

const appRoutes: Routes = [
  { path:'', component: HomeComponent },
  { path:'day2_1', component: Day2Exerise1Component },
  { path:'day2_2', component: Day2Exerise2Component },
  { 
    path:'day4', 
    component: Day4Component,
    children: childRoutes
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    Day2Exerise1Component,
    Day2Exerise2Component,
    Day4Component,
    HomepageComponent,
    DashboardComponent,
    EmployeeDetailComponent,
    EmployeesComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
