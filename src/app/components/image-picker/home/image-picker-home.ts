import {ChangeDetectionStrategy, Component, ViewEncapsulation} from "@angular/core";
import {MatStepper} from "@angular/material/stepper";
import {ImagePicker} from "../image-picker";

@Component({
  templateUrl: 'image-picker-home.html',
  selector: '[image-picker-home]',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagePickerHome {
  constructor(private _stepper: MatStepper,
              private _picker: ImagePicker) {}

  onselect(input: HTMLInputElement) {
    const file = input.files[0];
    const fileReader = new FileReader();
    fileReader.addEventListener('load', event => {
      this._picker.imageUrl = event.target.result.toString();
      this._stepper.next();
    })
    fileReader.readAsDataURL(file)

  }
}
