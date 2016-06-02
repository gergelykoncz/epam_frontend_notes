function Student(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Student.prototype.toString = function () {
	return this.firstName + ' ' + this.lastName;
};

function StudentList(data) {
	this.data = data || {};
}

StudentList.prototype.getIdentifier = function (firstName, lastName) {
	return firstName + ';' + lastName;
};

StudentList.prototype.addStudent = function (firstName, lastName) {
	var student = new Student(firstName, lastName),
		identifier = this.getIdentifier(firstName, lastName);

	this.data[identifier] = student;
};

StudentList.prototype.removeStudent = function (firstName, lastName) {
	var identifier = this.getIdentifier(firstName, lastName);
	delete this.data[identifier];
};

StudentList.prototype.listStudents = function () {
	var key;
	for (key in this.data) {
		if (this.data.hasOwnProperty(key)) {
			console.log(this.data[key].toString());
		}
	}
};

var list = new StudentList();
list.addStudent("John", "Doe");
list.addStudent("John", "McClane");
list.addStudent("John", "Lennon");
list.addStudent("Axel", "Foley");
list.removeStudent("John", "Lennon");
list.listStudents();