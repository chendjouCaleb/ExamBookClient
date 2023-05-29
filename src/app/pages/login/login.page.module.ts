import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {LoginPage} from "./login.page";
import {LoginIdPage} from "./id/login-id.page";
import {LoginPasswordPage} from "./password/login-password.page";
import {RouterModule, Routes} from "@angular/router";
import {MatInputModule} from "@angular/material/input";

const routes: Routes = [
  {
    path: '', component: LoginPage, children: [
      {path: 'id', component: LoginIdPage},
      {path: 'password', component: LoginPasswordPage},
      {path: '', redirectTo: 'id', pathMatch: 'full'}
    ]
  },

]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), MatButtonModule, MatFormFieldModule, MatCheckboxModule, MatInputModule],
  declarations: [LoginPage, LoginIdPage, LoginPasswordPage]
})
export class LoginPageModule {

}
