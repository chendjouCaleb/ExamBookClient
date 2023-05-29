import {CommonModule} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgModule} from "@angular/core";
import {SignUpConfirmPage} from "./confirm/signUp-confirm.page";
import {SignUpEmailPage} from "./email/signUp-email.page";
import {SignUpInfoPage} from "./info/signUp-info.page";
import {SignUpPasswordPage} from "./password/signUp-password.page";
import {SignUpPage} from "./signUp.page";
import {RouterModule, Routes} from "@angular/router";
import {SignUpUsernamePage} from "./userName/signUp-username.page";

const routes: Routes = [
  {
    path: '', component: SignUpPage, children: [
      {path: 'confirm', component: SignUpConfirmPage},
      {path: 'username', component: SignUpUsernamePage },
      {path: 'email', component: SignUpEmailPage},
      {path: 'info', component: SignUpInfoPage},
      {path: 'password', component: SignUpPasswordPage},
      {path: '', redirectTo: 'username', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule, MatInputModule, MatFormFieldModule, MatCheckboxModule],
  declarations: [SignUpConfirmPage, SignUpEmailPage, SignUpInfoPage, SignUpPasswordPage, SignUpUsernamePage, SignUpPage],

})
export class SignUpModule {

}
