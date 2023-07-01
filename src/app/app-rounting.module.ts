import { RouterModule, Routes } from '@angular/router';

import { ResponsavelComponent } from './responsavel/responsavel.component';
import { NgModule } from '@angular/core';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path:'responsavel', component:ResponsavelComponent},
  {path:'sobre', component:SobreComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRountingModule { }
