import { NgModule } from '@angular/core';

/* Importacios propias de PrimeNg */
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    TableModule,
    SplitterModule
  ],
  exports: [
    ButtonModule,
    TableModule,
    SplitterModule
  ]
})
export class PrimeNgModule { }
