import { Question } from '../Question/question';
import { Http, Response } from '@angular/http';


export class ModulePerformance {

	modPerfId: string;
	modId:String; //module_id in SQL DB
	studentUserId: String;
	moduleAuthor: String;
	parentTrackId: String;
	questionSet: Question[]; //indexed elements refer to (question#,answer#), which can be used to get needed strings from corresponding Module object */
	numQuestionsAtt: number;
	numQ: number; //number of questions for module
	numQCorrect: number;
	gamePlayPoints: number; /* (numCorrect / numQ) -> must be greater than .80 to pass level */
	bonusPoints: number; /* can add to game play points at score calculation stage */
	moduleAttempts: number;
	modulePassed: boolean;
	dateInitialized: Date;
	dateCompleted: Date;
	modActive:boolean;

	constructor(data, modId, private http:Http){
		let url = '../../php_services';
		//load question set first
		this.http.get(url + '/get_questions?=' + this.modId).map((res:Response) =>
			res.json().data as Question[]).subscribe( qs => { this.questionSet = qs});
		this.modPerfId = data.mod_perf_id;
		this.studentUserId = data.username;
		this.moduleAuthor = data.module_author;
		this.numQ = data.total_num_questions;
		this.numQuestionsAtt = data.num_q_attempted;
		this.numQCorrect = data.num_correct;
		this.moduleAttempts = data.module_attempts;
		this.modulePassed = data.module_passed;
		this.dateInitialized = data.date_of_init;
		this.dateCompleted = data.date_of_completion;
		this.gamePlayPoints = data.game_play_points;
		this.bonusPoints = data.bonus_points;
		this.modId = data.module_id;
		this.modActive= data.active;
	}


	extractQuestions(response):void{
		response.map(res => res.json().data as Question[]);
	}
}

