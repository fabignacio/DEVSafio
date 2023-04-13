import { NgModule } from '@angular/core';

/* Importacios propias de PrimeNg */
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DividerModule,
    TableModule,
  ],
  exports: [
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DialogModule,
    DividerModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
