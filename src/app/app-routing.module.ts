import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePage} from "./pages/home/home.page";

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./pages/login/login.page.module').then(m => m.LoginPageModule) },
  {path: 'signUp', loadChildren: () => import('./pages/signUp/signUp.module').then(m => m.SignUpModule)},
  {path: 'spaces', loadChildren: () => import('./pages/space/space.page.module').then(m => m.SpacePageModule)},
  {path: 'students', loadChildren: () => import('./pages/student/student.page.module').then(m => m.StudentPageModule)},
  {path: 'home', component: HomePage },
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
