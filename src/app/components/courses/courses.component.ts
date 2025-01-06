import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { error } from 'console';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent implements OnInit{

  id: string ='';
  classId: string = '';
  className: string = '';
  classDescription: string = '';
  subjects: any[] = [];
  subjectId: string = '';
  chapters: any[] = [];

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
      if (this.id) {
        this.loadClassDetails();
      }
    });
  }


  loadClassDetails() {
    // Fetch class details by ID
    this.authService.getClassDetails(this.id).subscribe(
      (data) => {
        debugger;
        // Assuming the API returns class details including name, description
        this.classId = data.classId;
        this.className = data.className;
        this.classDescription = data.classDescription;

        this.loadSubjectsByClass();
      },
      (error) => {
        console.error('Error fetching class details', error);
      }
    );
  }
  // loadClasses() {
  //   this.route.paramMap.subscribe(params => {
  //     this.classId = params.get('id') || '';
  //     if(this.classId) {
  //       this.loadSubjectsByClass();
  //     }
  //   });

  //   this.route.queryParams.subscribe(params => {
  //     this.className = params['name'] || '';
  //     this.classDescription = params['description'] || '';
  //   });
  // }

  loadSubjectsByClass() {
    debugger;
    this.authService.getSubjectsByClass(this.classId).subscribe (
      (data) => {
        this.subjects = data;
        // this.subjectId = data.subjectId;
        // this.loadChaptersByClassAndSubject(this.classId, this.subjectId);
        // if (this.subjects.length > 0) {
        //   this.subjectId = this.subjects[1].subjectId; // Default to the first subject
        //   this.loadChaptersByClassAndSubject(this.classId, this.subjectId);
        // }
      },
      (error) => {
        console.error('Error Fetching subjects', error);
      }
    )
  }

  loadChaptersByClassAndSubject(classId: string, subjectId: string) {
    debugger;
    console.log(`Fetching chapters for classId: ${classId}, subjectId: ${subjectId}`);
    this.authService.getChaptersByClassAndSubject(classId, subjectId).subscribe(
      (data) => {
        console.log('Chapters fetched:', data);
        this.chapters = data;
      },
      (error) => {
        console.error('Error fetching chapters', error);
      }
    );
  }
  
  onSubjectClick(sid: string) {
    console.log('Selected Subject ID:', sid); // Log the selected subjectId
    this.subjectId = sid;
    this.loadChaptersByClassAndSubject(this.classId, this.subjectId);
  }  
  
}
