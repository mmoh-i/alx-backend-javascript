export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployed: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: boolean | string | number | undefined;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName.charAt(0)}.${lastName}`;
};

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentConstructor {
  new(firsName: string, lastName: string): StudentInterface;
}

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework() {
    return "Currently working";
  }

  displayName() {
    return this.firstName;
  }
}
