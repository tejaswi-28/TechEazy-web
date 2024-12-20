import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  classId: string = '';
  className: string = '';
  createDate: string = '';
  tenantId: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.classId = params.get('id') || '';
    });

    this.route.queryParams.subscribe(params => {
      this.className = params['name'] || '';
      this.createDate = params['date'] || '';
      this.tenantId = params['tenant'] || '';
    });
  }
}
