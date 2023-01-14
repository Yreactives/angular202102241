import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { MahasiswaSPAComponent } from './mahasiswa-spa/mahasiswa-spa.component';
import { OtentikasiGuard } from './otentikasi.guard';
import { ForexComponent } from './forex/forex.component';
import { CuacaComponent } from './cuaca/cuaca.component';
const routes: Routes = [
  {path : "", redirectTo : "login", pathMatch : "full"},
  {path: "admin", component : AdminComponent},
  {path : "login", component : LoginComponent},
  {path : "dashboard", component : DashboardComponent, canActivate : [OtentikasiGuard]},
  {path : "dashboard2", component : Dashboard2Component, canActivate : [OtentikasiGuard]},
  {path : "dashboard3", component : Dashboard3Component, canActivate : [OtentikasiGuard]},
  {path : "register", component : RegisterComponent},
  {path : "mahasiswa", component : MahasiswaComponent, canActivate : [OtentikasiGuard]},
  {path : "mahasiswaspa", component : MahasiswaSPAComponent, canActivate : [OtentikasiGuard]},
  {path : "forex", component : ForexComponent, canActivate : [OtentikasiGuard]},
  {path : "cuaca", component : CuacaComponent, canActivate : [OtentikasiGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
