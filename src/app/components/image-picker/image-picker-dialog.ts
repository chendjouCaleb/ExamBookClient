import {Injectable} from "@angular/core";
import {ImagePickerOptions} from "./image-picker-options";
import {Observable} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ImagePickerValue} from "./image-picker-value";
import {ImagePicker} from "@app/components/image-picker/image-picker";

@Injectable()
export class ImagePickerDialog {
  constructor(private dialog: MatDialog) {}

  open(config?: ImagePickerOptions): Observable<ImagePickerValue> {
    const dialogRef = this.dialog.open(ImagePicker, {width: '840px'});
    //dialogRef.componentInstance.ratio = config?.ratio ?? 1;

    return dialogRef.afterClosed();
  }
}
