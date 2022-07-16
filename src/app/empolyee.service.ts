import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpolyeeService {

  constructor() { }
  getEmployees() {
   return[
    {"id":1, "name":"Revan", "age":30},
    {"id":2, "name":"Revan", "age":30},
    {"id":3, "name":"Revan", "age":30}
  ];

  }
}
