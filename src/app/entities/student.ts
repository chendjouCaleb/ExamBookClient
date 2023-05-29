import {BaseEntity} from "@app/entities/entity";
import {Space} from "@app/entities/space";
import {Speciality} from "@app/entities/speciality";
import {LocalDate} from "@js-joda/core";

export class Student extends BaseEntity<number> {
  constructor(value?: any) {
    super(value);

    this.code = value.code;
    this.normalizedCode = value.normalizedCode;

    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.sex = value.sex;
    this.birthDate = LocalDate.parse(value.birthDate);

    this.spaceId = value.spaceId;
    this.userId = value.userId;
  }
  code: string = '';
  normalizedCode: string = '';

  firstName: string = '';
  lastName: string = '';
  sex: string = '';
  birthDate: LocalDate = LocalDate.now();

  userId: string = '';

  space: Space;
  spaceId: number;

  specialities : StudentSpeciality[] = [];
}

export class StudentSpeciality {
  student: Student;
  studentId: number;

  speciality: Speciality;
  specialityId: number;
}
