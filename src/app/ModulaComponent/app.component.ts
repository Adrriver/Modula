import { Component, OnInit } from '@angular/core';



@Component ({
	//moduleId: module.id,
	selector: 'modula-app',
  template: `
              <main>
                <router-outlet>Routing!</router-outlet>
                </main>`,
  styleUrls: ['../css/components/main.css', '../css/custom.css', '../css/main.css']


})
//Landing & Login page/view
export class AppComponent implements OnInit {
  title = "Modula";
	ngOnInit(){

  }

}

