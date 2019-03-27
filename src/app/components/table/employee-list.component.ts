import { VisitService } from './../../services/visit.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeeList: any[];
  columnsToDisplay = ['nome', 'email', 'contato'];

  constructor(private visitService: VisitService) { }

  ngOnInit() {
    this.visitService.getList(1).subscribe(response => {
      this.employeeList = response;
    });
  }

}
