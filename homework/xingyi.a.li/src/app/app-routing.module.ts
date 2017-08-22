import { NgModule } from '@angular/core'; 
import { RouterModule, Routes}   from '@angular/router';

import { DashboardComponent }  from './dashboard.component';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent }     from './employees.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'detail/:id', component: EmployeeDetailComponent },
    { path: 'employees',     component: EmployeesComponent }
];
@NgModule({
    // 添加RouterModule.forRoot(routes)到imports
    imports: [ RouterModule.forRoot(routes) ],
    // 把RouterModule添加到路由模块的exports中，以便关联模块（比如AppModule）中的组件可以访问路由模块中的声明，比如RouterLink 和 RouterOutlet
    exports: [ RouterModule ]
  })
export class AppRoutingModule {}