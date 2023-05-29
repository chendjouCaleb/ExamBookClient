import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: 'space-add-identifier.page.html',
  encapsulation: ViewEncapsulation.None
})
export class SpaceAddIdentifierPage {
  form = new FormGroup({
    identifier: new FormControl<string>(this._spaceAddState.identifier)
  });

  constructor(private _spaceAddState: SpaceAddState,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.form.controls.identifier.valueChanges.subscribe(value => {
      this._spaceAddState.identifier = value;
    });
  }

  next() {
    this._router.navigate(['info'], {relativeTo: this._route.parent});
  }
}
