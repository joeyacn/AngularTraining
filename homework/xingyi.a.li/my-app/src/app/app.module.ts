import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Route, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Day2Exerise1Component } from './D02/execrise1/exercise1.component';
import { Day2Exerise2Component } from './D02/execrise2/exercise2.component';

const appRoutes: Routes = [
  { path:'', component: HomeComponent },
  { path:'day2_1', component: Day2Exerise1Component },
  { path:'day2_2', component: Day2Exerise2Component }
];

@NgModule({
  declarations: [
    HomeComponent,
    Day2Exerise1Component,
    Day2Exerise2Component,
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
