import { User } from '../User/user';

export class Teacher extends User {

	public firstName: String;
	public lastName: String;
	public registrationDate: Date;
	public username: String;
	public email: String;
	public password: String;
	public numStudents: number;
	public schoolId:String;


	constructor(profile){
			super(profile.username);
			this.registrationDate = new Date(); /* implement soon! */
			this.schoolId = profile.schoolId;
			this.numStudents = profile[0][0][0];
			this.firstName = profile.first_name;
			this.lastName = profile.last_name;
			this.username = profile.username;
			this.email = profile.email;
			this.password = profile.password;

	}


}
