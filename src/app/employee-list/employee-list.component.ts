import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from '../empolyee.service';

@Component({
  selector: 'app-employee-list',
  template: `
                <h2>Employee-list</h2>
                <ul *ngFor="let employee of employees">
                  <li>{{employee.name}}</li>
                </ul>
  `,
  styleUrls: ['./employee-list.component.less']
})
export class EmployeeListComponent implements OnInit {

  public employees:any;
  constructor(private _empolyeeService: EmpolyeeService) { }

  ngOnInit(): void {
    this . employees = this._empolyeeService.getEmployees();

  }

}
