import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  templateUrl: 'space-add-picture.page.html',
  encapsulation: ViewEncapsulation.None
})
export class SpaceAddPicturePage {
  form = new FormGroup({
    name: new FormControl<string>(this._spaceAddState.name),
    isPublic: new FormControl(this._spaceAddState.isPublic)
  });

  constructor(private _spaceAddState: SpaceAddState,
              private _route: ActivatedRoute,
              private _router: Router) {
    this.form.valueChanges.subscribe(value => {
      this._spaceAddState.isPublic = value.isPublic;
      this._spaceAddState.name = value.name;
    })
  }

  next() {
    const model =
    this._router.navigate(['picture'], {relativeTo: this._route.parent});
  }

  back() {
    this._router.navigate(['identifier'], {relativeTo: this._route.parent});
  }
}
