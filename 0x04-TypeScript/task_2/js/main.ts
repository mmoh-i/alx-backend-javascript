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
