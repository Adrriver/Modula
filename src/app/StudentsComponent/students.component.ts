    import { Component, OnInit } from '@angular/core';
    import { Http, Response } from '@angular/http';
    import { Student } from '../Student/student';
    import { StudentService } from '../StudentService/student.service';
    import { Router } from '@angular/router';
    import '../rxjs-extensions'
    //import { Location } from ''

    @Component({
      //moduleID: module.id,
      selector: 'my-students',
      templateUrl: './students.component.html',
      styleUrls: [ '../css/components/main.css' ]

    })

    export class Students implements OnInit {
      title = 'Your Modula Students'
      selectedStudent: Student;
      students: Student[];

      constructor(private studentService: StudentService,
                  private router: Router) { }

      getStudents(): void {
        this.studentService.students.map(students =>  { this.students = students });
      }


      onSelect(student: Student): void {
        this.selectedStudent = student;
      }

      ngOnInit(): void {
        this.getStudents();
      }

      goToDetail(): void {
        this.router.navigate(['/detail', this.selectedStudent.username]);
      }

    }

