import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { error } from 'console';
import { Router } from '@angular/router';
import { Certificate } from 'crypto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  classList: any[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.fetchClasses();
  }

  fetchClasses(): void {
    this.auth.getClasses().subscribe(
      (data) => {
        this.classList = data;
      },
      (error) => {
        console.error('Error fetching classes:', error);
      }
    );
  }

  goToCourses(classItem: any): void{
    this.router.navigate(['/courses', classItem.classId], {
      queryParams: {
        className: classItem.className,
        createDate: classItem.createDate,
        tenantId: classItem.tenantId
      }
    })
  }
}
// Profile, Communication, Classes, Quiz, Results, Certificate