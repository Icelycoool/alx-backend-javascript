// Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher inteface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class; implements director interface
class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

// Teacher class; implements teacher interface
class Teacher implements TeacherInterface {
  workFromHome = (): string => 'Cannot work from home';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

// Function that creates an employee
const createEmployee = (salary: number | string): Teacher | Director => Number(salary) < 500 ? new Teacher() : new Director();

// isDirector function
const isDirector = (employee: Teacher | Director): employee is Director => employee instanceof Director;

// executeWork function
const executeWork = (employee: Teacher | Director): void => {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Subject string literal
type Subjects = 'Math' | 'History';

// teachClass function
const teachClass = (todayClass: Subjects): string => todayClass === "Math" ? 'Teaching Math' : 'Teaching History';