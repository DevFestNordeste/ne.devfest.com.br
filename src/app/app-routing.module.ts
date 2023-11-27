import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent
  },
  {
    path: "programacao",
    component: ProgramacaoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
