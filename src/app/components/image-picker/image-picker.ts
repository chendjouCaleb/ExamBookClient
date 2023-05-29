import {Component, ViewEncapsulation} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Component({
  templateUrl: 'image-picker.html',
  styleUrls: [ 'image-dialog.scss' ],
  encapsulation: ViewEncapsulation.None,
})
export class ImagePicker {
  private _imageUrl: string = '';
  get imageUrl(): string { return this._imageUrl;}

  set imageUrl(value: string) {
    this._imageUrl = value;
    this._imageChange.next(value);
  }

  get imageChange(): Observable<string> { return this._imageChange.asObservable(); }
  private _imageChange = new Subject<string>();
}
