import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  { path: 'add', loadChildren: () => import('./add/space-add.page.module').then(m => m.SpaceAddPageModule) },
  { path: ':spaceId/home', loadChildren: () => import('./home/space-home.page.module').then(m => m.SpaceHomePageModule) }
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class SpacePageModule {

}
