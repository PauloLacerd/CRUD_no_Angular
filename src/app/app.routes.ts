import { Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { FormComponent } from './form/form.component'
import { DataTableComponent } from './data-table/data-table.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'table', component: DataTableComponent}
]
