import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from './truncate';
import { TimeSincePipe } from './timesince';



@NgModule({
  declarations: [
    TruncatePipe,
    TimeSincePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TruncatePipe,
    TimeSincePipe
  ]
})
export class PipesModule { }
