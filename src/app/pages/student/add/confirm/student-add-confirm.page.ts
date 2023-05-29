import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentAddRemember} from "@app/pages/student/add/student-add.remember";
import {LocalDate, TemporalAccessor} from "@js-joda/core";

@Component({
  templateUrl: 'student-add-confirm.page.html',
  encapsulation: ViewEncapsulation.None
})
export class StudentAddConfirmPage {


  constructor(public remember: StudentAddRemember,
              private _route: ActivatedRoute,
              private _router: Router) {
  }

  next() {
    this._router.navigate(['specialities'], { relativeTo: this._route.parent });
  }

  back() {
    this._router.navigate(['code'], {relativeTo: this._route.parent});
  }
}
