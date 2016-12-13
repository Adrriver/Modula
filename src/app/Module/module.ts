 /* main.module.ts */
import { Question } from '../Question/question';

export class Module {

 	public modId: String; /* portmontau of trackID and position in track (integer value) */
	public modTitle: String;
	public dateCreated: string;
	public author: String;
	public difficulty: number;
	public questionSet: Question[];


	constructor(profile, questions:Question[]){

		this.questionSet = questions;
		this.modId = profile.modId;
		this.modTitle = profile.modTitle;
		this.dateCreated = profile.date_created;
		this.difficulty = profile.difficulty;
		this.author = profile.author;
	}

}
