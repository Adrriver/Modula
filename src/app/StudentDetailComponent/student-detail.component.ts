import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StudentService } from '../StudentService/student.service';
import { Student } from '../Student/student';
import { FormsModule } from '@angular/forms';
@Component({
    moduleId: module.id,
	selector: 'my-student-detail',
	templateUrl: './student-detail.component.html',
    styleUrls: ['../css/detail/main.css']
})



export class StudentDetail implements OnInit {

    student: Student;

    constructor(
        private studentService: StudentService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
        let id = params['username'];
        this.studentService.getStudent(id).map(student => this.student = student);
    });
    }

    goBack(): void {
        this.location.back();
    }
}
