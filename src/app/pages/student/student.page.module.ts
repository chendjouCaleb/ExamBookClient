import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'add', loadChildren: () => import('./add/student-add.page.module').then(m => m.StudentAddPageModule) }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class StudentPageModule {

}
