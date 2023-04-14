interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;

}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): sring;
}

class Director implements DirectorInterface {

  workFromHome() {
    return "Working from home";
  }

  getToWork() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks"
  }
}

class Teacher implements TeacherInterface {
  
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot have a break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): number | string {
  if (type(salary) === 'int' & salary < 500){
    
  }
}

interface Employee {
  name: string;
  role: string;
}

interface Director extends Employee {
  department: string;
}

interface Teacher extends Employee {
  subject: string;
}

function isDirector(employee: Employee): employee is Director {
  return (employee as Director).department !== undefined;
}

function executeWork(employee: Employee) {
  if (isDirector(employee)) {
    workDirectorTasks(employee as Director);
  } else {
    workTeacherTasks(employee as Teacher);
  }
}

function workDirectorTasks(director: Director) {
  console.log(`${director.name} is working on director tasks for the ${director.department} department.`);
}

function workTeacherTasks(teacher: Teacher) {
  console.log(`${teacher.name} is teaching ${teacher.subject}.`);
}
type subject = "Math" | "History";

function teachClass(todayClass: Subjects) {
  if (todayClass === "Math") {
    return "Teaching Math";
    }else if (todayClass === "History") {
      return "Teaching History";
    }
}

