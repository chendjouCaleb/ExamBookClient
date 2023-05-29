import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentAddRemember} from "@app/pages/student/add/student-add.remember";
import {LocalDate, TemporalAccessor} from "@js-joda/core";
import {Speciality} from "@app/entities";

@Component({
  templateUrl: 'student-add-specialities.page.html',
  encapsulation: ViewEncapsulation.None
})
export class StudentAddSpecialitiesPage {
  specialities: Speciality[] = [
    new Speciality({name: 'Mathématiques',  id: 10, createdAt: '2023-05-18T18:21:32.395Z'}),
    new Speciality({name: 'Biologie',       id: 11, createdAt: '2023-05-18T18:21:32.395Z'}),
    new Speciality({name: 'Informatique',   id: 12, createdAt: '2023-05-18T18:21:32.395Z'}),
    new Speciality({name: 'Physique',       id: 13, createdAt: '2023-05-18T18:21:32.395Z'}),
    new Speciality({name: 'Chimie',         id: 14, createdAt: '2023-05-18T18:21:32.395Z'}),
  ];

  form = new FormGroup({
    specialityIds: new FormControl<number[]>(this._remember.specialityIds || []),
  });

  constructor(private _remember: StudentAddRemember,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.form.valueChanges.subscribe(value => {
      this._remember.specialityIds = value.specialityIds;
    })
  }


  next() {
    this._router.navigate(['confirm'], { relativeTo: this._route.parent });
  }

  back() {
    this._router.navigate(['picture'], {relativeTo: this._route.parent});
  }
}
