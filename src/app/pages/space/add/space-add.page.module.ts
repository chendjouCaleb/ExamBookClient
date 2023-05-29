import {NgModule} from "@angular/core";
import {Route, RouterModule, Routes} from "@angular/router";
import {SpaceAddPage} from "./space-add.page";
import {SpaceAddIdentifierPage} from "./identifier/space-add-identifier.page";
import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {SpaceAddState} from "./space-add.state";
import {SpaceAddInfoPage} from "./info/space-add-info.page";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {SpaceAddPicturePage} from "@app/pages/space/add/picture/space-add-picture.page";

const routes: Routes = [
  {
    path: '', component: SpaceAddPage, children: [
      {path: 'identifier', component: SpaceAddIdentifierPage},
      {path: 'info', component: SpaceAddInfoPage},
      {path: 'picture', component: SpaceAddPicturePage},
      {path: '', redirectTo: 'identifier', pathMatch: 'full'}
    ]
  }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatFormFieldModule, MatCheckboxModule, MatInputModule, MatButtonModule, ReactiveFormsModule, MatIconModule],
  declarations: [ SpaceAddPage, SpaceAddIdentifierPage, SpaceAddInfoPage, SpaceAddPicturePage ],
  providers: [ SpaceAddState ]
})
export class SpaceAddPageModule {

}
