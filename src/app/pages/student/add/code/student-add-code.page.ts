import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentAddRemember} from "@app/pages/student/add/student-add.remember";

@Component({
  templateUrl: 'student-add-code.page.html',
  encapsulation: ViewEncapsulation.None
})
export class StudentAddCodePage {
  form = new FormGroup({
    code: new FormControl(this._remember.code)
  });

  constructor(private _remember: StudentAddRemember,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.form.valueChanges.subscribe(value => {
      this._remember.code = value.code;
    });
  }

  next() {
    this._router.navigate(['info'], {relativeTo: this._route.parent});
  }

  back() {
    this._router.navigate(['user'], {relativeTo: this._route.parent});
  }
}
