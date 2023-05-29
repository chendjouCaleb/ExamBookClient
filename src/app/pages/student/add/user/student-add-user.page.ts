import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";
import { StudentAddRemember } from "../student-add.remember";

@Component({
  templateUrl: 'student-add-user.page.html',
  encapsulation: ViewEncapsulation.None
})
export class StudentAddUserPage {
  form = new FormGroup({
    userId: new FormControl<string>(this._remember.userId)
  })

  constructor(private _remember: StudentAddRemember,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.form.valueChanges.subscribe(value => {
      this._remember.userId = value.userId;
    });
  }

  next() {
    this._router.navigate(['code'], {relativeTo: this._route.parent});
  }
}
