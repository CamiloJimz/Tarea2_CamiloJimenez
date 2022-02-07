import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'gameofthrones', loadChildren: () => import('./gameofthrones/gameofthrones.module').then(m => m.GameofthronesModule) }, { path: 'harrypotter', loadChildren: () => import('./harrypotter/harrypotter.module').then(m => m.HarrypotterModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
