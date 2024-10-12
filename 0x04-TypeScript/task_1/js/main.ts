// Teacher interface
interface Teacher {
  readonly firstName: string,
  readonly lastName: string,
  fullTimeEmployee: boolean,
  yearsOfExperience?: number,
  location: string,
  [propName: string]: any
};

// Directors interface that extends the teachers interface
interface Directors extends Teacher {
  numberOfReports: number
};

// Function that prints the teacher's name in the format: "F. LastName"
const printTeacher = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`;

// Class representing a student
class StudentClass {
  firstName: string;
  lastName: string;

  // Constructor to initialize a student
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework = (): string => 'Currently working';

  displayName = (): string => this.firstName;
}

// Interface representing a constructor for the student class
interface StudentConstructor {
  (firstName: string, lastName: string): StudentClass;
}

// EXAMPLE USAGES
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const student1 = new StudentClass('Mohamed', 'Ali');

console.log(printTeacher(teacher3.firstName, teacher3.lastName));
console.log(director1);
console.log(teacher3);
console.log(student1.displayName());
console.log(student1.workOnHomework());