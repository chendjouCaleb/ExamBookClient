import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ElementRef, EventEmitter,
  OnInit, Output,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";
import {ImagePicker} from "@app/components/image-picker/image-picker";
import Cropper from "cropperjs";
import {ImagePickerValue} from "@app/components/image-picker";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  templateUrl: 'image-picker-resize.html',
  selector: '[image-picker-resize]',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImagePickerResize implements OnInit {
  _cropper: Cropper;
  _resizeMode = false;
  _value: ImagePickerValue = {};

  ratio = 1;

  @ViewChild('imageElement')
  _imageElement: ElementRef<HTMLImageElement>;

  @Output()
  onchange = new EventEmitter<ImagePickerValue>();

  constructor(public _picker: ImagePicker,
              private changeDetector: ChangeDetectorRef,
              private _dialogRef: MatDialogRef<ImagePicker>) {
    console.log("dd")
  }

  ngOnInit() {
    this._picker.imageChange.subscribe(imageUrl => {
      this.changeDetector.markForCheck();
      this.startResize()
    })
  }

  startResize() {
    if (this._cropper) {
      this._cropper.destroy();
    }
    this._resizeMode = true;
    this._imageElement.nativeElement.src = this._picker.imageUrl;

    this._cropper = new Cropper(this._imageElement.nativeElement, {aspectRatio: this.ratio, movable: true});

    this.changeDetector.markForCheck();
  }

  end() {
    this._dialogRef.close(this._value);
  }

  endResize() {
    const canvas = this._cropper.getCroppedCanvas({width: 400, height: 400});
    canvas.toBlob((blob) => {

      this._value.blob = blob;
      this.onchange.emit(this._value);
      this.changeDetector.detectChanges();
    });

    this._value.url = canvas.toDataURL();
    this._imageElement.nativeElement.src = this._value.url;


    this._cropper.destroy();
    this._cropper = null;
    this._resizeMode = false;

    this.changeDetector.detectChanges();
  }

  ngOnDestroy(): void {
    if (this._cropper) {
      this._cropper.destroy();
    }

   // this._picker = null;
    this._value = null;
  }
}
