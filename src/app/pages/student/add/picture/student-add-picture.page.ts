import {Component, ViewEncapsulation} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {SpaceAddState} from "@app/pages/space/add/space-add.state";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentAddRemember} from "@app/pages/student/add/student-add.remember";
import {ImagePickerDialog} from "@app/components/image-picker";

@Component({
  templateUrl: 'student-add-picture.page.html',
  encapsulation: ViewEncapsulation.None
})
export class StudentAddPicturePage {
  imageUrl: string = this._remember.imageUrl || '/assets/icons/picture.png';

  constructor(private _remember: StudentAddRemember,
              private _route: ActivatedRoute,
              private _router: Router,
              private _imagePickerDialog: ImagePickerDialog) {

  }

  open() {
    const dialogRef = this._imagePickerDialog.open({});
    dialogRef.subscribe(value => {
      if(value && value.blob) {
        this.imageUrl = value.url;
        this._remember.imageUrl = this.imageUrl;
      }
    })
  }

  next() {
    this._router.navigate(['specialities'], {relativeTo: this._route.parent});
  }

  back() {
    this._router.navigate(['info'], {relativeTo: this._route.parent});
  }
}
