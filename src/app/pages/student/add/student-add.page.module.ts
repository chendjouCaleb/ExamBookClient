import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {StudentAddPage} from "./student-add.page";
import {StudentAddCodePage} from "./code/student-add-code.page";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {StudentAddInfoPage} from "./info/student-add-info.page";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {StudentAddUserPage}     from "./user/student-add-user.page";
import {StudentAddPicturePage}  from "./picture/student-add-picture.page";
import {StudentAddRemember}     from "./student-add.remember";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {ImagePickerModule} from "@app/components/image-picker";
import {StudentAddSpecialitiesPage} from "@app/pages/student/add/specialities/student-add-specialities.page";
import {MatListModule} from "@angular/material/list";
import {StudentAddConfirmPage} from "@app/pages/student/add/confirm/student-add-confirm.page";

const routes: Routes = [
  {
    path: '', component: StudentAddPage, children: [
      {path: 'code', component: StudentAddCodePage},
      {path: 'user', component: StudentAddUserPage},
      {path: 'info', component: StudentAddInfoPage},
      {path: 'picture', component: StudentAddPicturePage},
      {path: 'specialities', component: StudentAddSpecialitiesPage},
      {path: 'confirm', component: StudentAddConfirmPage},
      {path: '', redirectTo: 'user', pathMatch: 'full'}
    ]
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatFormFieldModule, MatCheckboxModule,
    MatInputModule, MatButtonModule, ReactiveFormsModule, MatIconModule, MatDatepickerModule, MatSelectModule,
    ImagePickerModule, MatListModule],
  declarations: [ StudentAddPage, StudentAddCodePage, StudentAddInfoPage, StudentAddPicturePage,
    StudentAddUserPage, StudentAddSpecialitiesPage, StudentAddConfirmPage ],
  providers: [ StudentAddRemember ]
})
export class StudentAddPageModule {

}
