import { NgModule } from '@angular/core';
import { CobenLibHospiComponent } from './coben-lib-hospi.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CobenLibHospiComponent],
  imports: [
    RouterModule.forChild([
      { path: 'hospi', component: CobenLibHospiComponent }
    ])
  ],
  exports: [CobenLibHospiComponent]
})
export class CobenLibHospiModule { }
