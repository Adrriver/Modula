
//Wizard interface defines global game properties
export interface Wizard {
	gameName:String;	
	teacher:String;
	class:String;
	dateCreated:String;
	keywords:String;
	grade:number;
	modules:Module[];
	invited:String;

}

export interface Module {
	
	modId: number;
	difficulty:number;
	questionCount:number;
	modName:String;
	questions:QAndA[];	

	
}
	

export interface QAndA {
	
	qNum:number;	
	question: String;
	correct:String;
	incorr_a:String;
	incorr_b:String;
	incorr_c:String;

}

