import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { EmployeeService } from './employee.service';

import 'rxjs/add/operator/switchMap';

import { Employee } from './employee';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: [ './employee-detail.component.css' ]
})

export class EmployeeDetailComponent implements OnInit {
  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.employeeService.getEmployee(+params.get('id')))
      .subscribe(employee => this.employee = employee);
  }

  @Input() employee: Employee;

  goBack(): void {
    this.location.back();
  }
}
