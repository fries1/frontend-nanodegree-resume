// To Do
// write bio display function
// change bio.pictureURL to bio.biopic
// education.dates has to Integer graduation date
// education.majors, array of strings
// education.onlineCourse.dates has to be integer
var bio = {
	"name" : "Stefan Fries",
	"role" : "Software Engineer",
	"contacts" : {
		"mobile" : "+43676xxxxxxx",
		"email" : "stefanefries@googlemail.com",
		"github" : "fries1",
		"twitter" : "@SteFries",
		"location" : "Vienna"
	},
	"biopic" : "images/image004.jpg",
	"welcome message" : "Welcome and enjoy!",
	"skills" : ["JavaScript", "Python", "Java", "CSS", "HTML", "jQuery"]
};
bio.display = function(){
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
	var formattedEmail = HTMLemail.replace('%data%', bio["contacts"]["email"]);
	var formattedMobile = HTMLmobile.replace('%data%', bio["contacts"]["mobile"]);
	var formattedGithub = HTMLgithub.replace('%data%', bio["contacts"]["github"]);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio["contacts"]["twitter"]);
	var formattedLocation = HTMLlocation.replace("%data%", bio["contacts"]["location"]);
	var formattedWelcomeMsd = HTMLwelcomeMsg.replace('%data%', bio["welcome message"]);
	var formattedbiopic = HTMLbioPic.replace('%data%', bio["biopic"]);
	var formattedSkillsStart = HTMLskillsStart.replace('%data%', bio["skills"]);


	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedLocation);
	// included the footer contacts
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedLocation);
	$("#header").append(formattedbiopic);
	$("#header").append(formattedWelcomeMsd);
	$("#header").append(formattedSkillsStart);
	for(var i = 0; i < bio.skills.length; i++){
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkills);
	}
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
}
bio.display();

var work = {
	"jobs" : [
		{
			"employer" : "self-employed",
			"title" : "Professional Online-Pokerplayer",
			"location" : "Brighton/Hove, UK, Vienna, AUT",
			"dates" : "2009 - now",
			"description" : "I became one of the best and most successful Online-Pokerplayers in the world and defended that position over years. For the last six years I have been playing professionalonline poker and with the help of dedicated and self-reliant work, I have established myself asone of the world’s best online poker players. In the course of this activity I regularly proveboth excellent analytical skills as well as a high level of emotional stability even under highpressure. To succeed as an online poker professional it is of outmost importance to quicklygrasp complex and time critical situations and to derive logical and sound decisions underuncertainty. The ability to stay exceptionally focused on a task for an extended period of timeis just as crucial as an attention to detail. My motivation to prevail in the long-term in ahighly competitive environment is equally pronounced as my deep knowledge of the relevantstatistical and game theoretical concepts."
		}/*,
		{
			"employer" : "test",
			"title" : "ghost",
			"location" : "Brighton/Hove, UK, Vienna, AUT",
			"dates" : "2009-2015",
			"description" : "Became one of the best and most successful Online-Pokerplayers in the world and defended that position over years."
		}*/
	]
};

work.displayWork = function(){
	for(var i = 0; i < this.jobs.length; i++){
		$("#workExperience").append(HTMLworkStart)
		var formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
		var formattedJobTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
		var formattedLocation;
		/*console.log(this.jobs[i].location);
		for(var j = 0; j < this.jobs[i].location.length; j++){
			formattedLocation += HTMLworkLocation.replace("%data%", this.jobs[i].location[j]);
		}*/
		var formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
		var formattedDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
		var formmattedDesc = HTMLworkDescription.replace("%data%", this.jobs[i].description);
		$(".work-entry:last").append(formattedEmployer + formattedJobTitle);
		$(".work-entry:last").append(formattedLocation + formattedDates);
		$(".work-entry:last").append(formmattedDesc);
	}
}
work.displayWork();

var projects = {
	"projects" : [
		{
			"title" : "P1 - Build resume page",
			"dates" : "05/2015 - 05/2015",
			"description" : "Build a simple webpage showing projects I have worked on.",
			"images" : "images/ScreenShot.png"
		},
	],
	display : function(){
		for(var i = 0; i < this.projects.length; i++){
			var pstart = HTMLprojectStart;
			var ptitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
			var pdates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
			var pdesc = HTMLprojectDescription.replace("%data%", this.projects[i].description);
			var pimages = HTMLprojectImage.replace("%data%", this.projects[i].images);
			$("#projects").append(pstart);
			$(".project-entry:last").append(ptitle);
			$(".project-entry:last").append(pdates);
			$(".project-entry:last").append(pdesc);
			$(".project-entry:last").append(pimages);
		}
	}
}
projects.display();

var education = {
	"schools" : [
		{
			"name" : "University Erlangen-Nuernberg",
			"location" : "Nuremberg, Germany",
			"majors" : ["Software Engineering", "Database Systems"],
			"dates" : 2009,
			"degree" : "M.Sc. Business Information Systems",
			"url" : "https://www.fau.de/"
	 	},
	 	{
	 		"name" : "Adam-Kraf-Gymnasium",
	 		"location" : "Schwabach, Germany",
	 		"dates" : 2002,
	 		"degree" : "Allgemeine Hochschulreife",
	 		"majors" : ["Economy and Law", "English"],
	 		"url" : "http://www.akg-schwabach.de/"
	 	}
	],
	"onlineCourses" : [
		{
			"school" : "Udacity",
	 		"title" : "Front-End Developer Nanodegree",
	 		"date" : "2015",
	 		"url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
 		}
	]
};

education.displayEducation = function(){
	for(var i = 0; i < this.schools.length; i++){
		console.log('found education entry');
		var schoolStart = HTMLschoolStart;
		var schoolName = HTMLschoolName.replace("%data%", this.schools[i].name);
		var schoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
		var schoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
		var schoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);

		var schoolURL = HTMLschoolURL.replace("%data%", this.schools[i].url);
		$("#education").append(schoolStart);
		$(".education-entry:last").append(schoolName + schoolDegree);
		$(".education-entry:last").append(schoolDates);
		$(".education-entry:last").append(schoolLocation);
		var schoolMajor = "";
		for(var j = 0; j < this.schools[i].majors.length; j++){
			schoolMajor += HTMLschoolMajor.replace("%data%", this.schools[i].majors[j]);
		}
		$(".education-entry:last").append(schoolMajor);
		//$(".education-entry:last").append(schoolURL);
	}

	var HTMLonlineClasses = '<h3>Online Classes</h3>';
	$(HTMLonlineClasses).insertAfter(".education-entry:last")
	for(var i = 0; i < this.onlineCourses.length; i++){
		console.log('in for');
		var courseStart = HTMLschoolStart;
		var courseTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title);
		var courseSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school);
		var courseDate = HTMLonlineDates.replace("%data%", this.onlineCourses[i].date);
		var courseURL = HTMLschoolURL.replace("%data%", this.onlineCourses[i].url);
		$("#education").append(courseStart);
		$(".education-entry:last").append(courseTitle + courseSchool);
		$(".education-entry:last").append(courseDate);
		$(".education-entry:last").append(courseURL);
	}
}
education.displayEducation();

/*
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkills = HTMLskills.replace("%data%", bio["skills"]);
	$("#skills").append(formattedSkills);
}*/





$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});


function inName(name){
	name = name.trim();
	var first = name.split(' ')[0];
	var second = name.split(' ')[1];
	first = first[0].toUpperCase() + first.slice(1);
	return first + ' ' + second.toUpperCase();
}
$("#main").append(internationalizeButton);
console.log(inName('stefan fries'));



$("#main").append(work["position"]);
//$("#main").append(education.name);

$("#mapDiv").append(googleMap);

/*
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!
    newHTML = newHTML.replace(/<|>/g, "&lt;");
    //newHTML = newHTML.replace(">", "&gt;");
    // Don't delete this line!
    return newHTML;
};
*/

