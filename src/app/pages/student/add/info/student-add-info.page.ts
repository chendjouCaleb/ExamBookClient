import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentAddRemember} from "@app/pages/student/add/student-add.remember";
import {LocalDate, TemporalAccessor} from "@js-joda/core";

@Component({
  templateUrl: 'student-add-info.page.html',
  encapsulation: ViewEncapsulation.None
})
export class StudentAddInfoPage {
  form = new FormGroup({
    firstName: new FormControl<string>(this._remember.firstName),
    lastName: new FormControl<string>(this._remember.lastName),
    sex: new FormControl<string>(this._remember.sex),
    birthDate : new FormControl(this._remember.birthDate ? new Date(this._remember.birthDate.toString()) : null)
  });

  constructor(private _remember: StudentAddRemember,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.form.valueChanges.subscribe(value => {
      this._remember.firstName = value.firstName;
      this._remember.lastName = value.lastName;
      this._remember.sex = value.sex;
      this._remember.birthDate = LocalDate.ofYearDay(value.birthDate.getFullYear(), value.birthDate.getDate())
    })
  }

  next() {
    this._router.navigate(['picture'], { relativeTo: this._route.parent });
  }

  back() {
    this._router.navigate(['code'], {relativeTo: this._route.parent});
  }
}
