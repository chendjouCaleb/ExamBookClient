import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ImagePickerHome} from "./home/image-picker-home";
import {ImagePicker} from "./image-picker";
import {ImagePickerDialog} from "./image-picker-dialog";
import {MatDialogModule} from "@angular/material/dialog";
import {MatStepperModule} from "@angular/material/stepper";
import {ImagePickerResize} from "@app/components/image-picker/resize/image-picker-resize";

@NgModule({
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, MatStepperModule],
  declarations: [ ImagePickerHome, ImagePicker, ImagePickerResize ],
  providers: [ ImagePickerDialog ]
})
export class ImagePickerModule {

}
