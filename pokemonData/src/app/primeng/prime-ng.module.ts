import { NgModule } from '@angular/core';

/* Importacios propias de PrimeNg */
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    DividerModule,
    TableModule,
    SplitterModule
  ],
  exports: [
    ButtonModule,
    DividerModule,
    TableModule,
    SplitterModule
  ]
})
export class PrimeNgModule { }
