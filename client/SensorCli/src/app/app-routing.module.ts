import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorComponent } from './components/sensor/sensor.component';

const routes: Routes = [
  {
    path: 'sensor',
    component: SensorComponent,
  },
  { path: '', redirectTo: 'sensor', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: 'sensor',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
