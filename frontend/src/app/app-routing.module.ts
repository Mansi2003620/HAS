import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../modules/user/login/login.component';



const routes: Routes = [
   { path: 'login', component: LoginComponent },
  {
    path:'',
    loadChildren: () =>
      import('../../modules/home/home.module').then(m => m.HomeModule)
  },
  
  {
    path:'user',
    loadChildren: () =>
      import('../../modules/user/user.module').then(m => m.UserModule)
  },
  {
    path:'doctor',
    loadChildren: () =>
      import('../../modules/doctor/doctor.module').then(m => m.DoctorModule)
  },
  {
    path:'patient',
    loadChildren: () =>
      import('../../modules/patient/patient.module').then(m => m.PatientModule)

  },
  {
    path:'medical-history',
    loadChildren: () =>
      import('../../modules/medical-history/medical-history.module').then(m => m.MedicalHistoryModule)
   },
   {
    path:'prescription',
    loadChildren: () =>
      import('../../modules/prescription/prescription.module').then(m =>m.PrescriptionModule )
   },
   {
   path:'appointment',
   loadChildren: () =>
    import('../../modules/appointment/appointment.module').then(m =>m.AppointmentModule )
   },
   {
    path:'admin',
    loadChildren:()=>
      import('../../modules/admin/admin.module').then(m=>m.AdminModule)
   }
//    { path: 'patient/dashboard',
//      loadChildren: () =>
//        import('../../modules/patient/patient.module').then(m => m.PatientModule) },

//  { path: 'doctor/dashboard',
//      loadChildren: () =>
//        import('../../modules/doctor/doctor.module').then(m => m.DoctorModule) }



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
