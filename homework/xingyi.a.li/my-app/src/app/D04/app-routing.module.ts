import { NgModule } from '@angular/core'; 
import { RouterModule, Routes}   from '@angular/router';

import { HomepageComponent }  from './components/homepage.component';
import { DashboardComponent }  from './components/dashboard.component';
import { EmployeeDetailComponent } from './components/employee-detail.component';
import { EmployeesComponent }     from './components/employees.component';

const routes: Routes = [
    { path: 'day4/homepage', component: HomepageComponent },
    { path: 'day4/dashboard', component: DashboardComponent },
    { path: 'day4/detail/:id', component: EmployeeDetailComponent },
    { path: 'day4/employees', component: EmployeesComponent }
];
@NgModule({
    // 添加RouterModule.forRoot(routes)到imports
    imports: [ RouterModule.forRoot(routes) ],
    // 把RouterModule添加到路由模块的exports中，以便关联模块（比如AppModule）中的组件可以访问路由模块中的声明，比如RouterLink 和 RouterOutlet
    exports: [ RouterModule ]
})
export class AppRoutingModule {}