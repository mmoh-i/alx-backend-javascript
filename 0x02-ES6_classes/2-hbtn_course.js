/**
 * Holberton Courses.
 */
export default class HolbertonCourse {
  /**
   * Creating a new {}.
   */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }
  /**
   *  to get the new list of course.
   */
  get name() {
    return this._name;
  }

  /**
   * setting the name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a sring');
    }
    this._name = value;
  }

  /**
   * To get  the length with type int.
   */
  get length() {
    return this._length;
  }

  /**
   * Setting the length.
   */
  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('length musst be a number');
    }
    this._value;
  }

  /**
   * To get array of students
   */
  get students() {
    return this._students;
  }

  /**
   * settign the students array.
   */
  set students(value) {
    if (!(value instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (!value.every((student) => typeof student === 'string')) {
    throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }

}
