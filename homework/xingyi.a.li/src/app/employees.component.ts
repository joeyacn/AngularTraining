import { Component } from '@angular/core';

import { OnInit } from '@angular/core';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

import { Router } from '@angular/router';

@Component({
  selector: 'my-employees',
  templateUrl: './employees.component.html',
  styleUrls: [ './employees.component.css' ],
  providers: []
})
export class EmployeesComponent implements OnInit {
  selectedEmployee: Employee;
  employees: Employee[];
  
  constructor(
    private router: Router,
    private employeeService: EmployeeService) { }

  getEmployees(): void {
    this.employeeService.getEmployees().then(employees => this.employees = employees);
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEmployee.id]);
  }
}

