import { NgModule } from '@angular/core';

/* Importacios propias de PrimeNg */
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { SplitterModule } from 'primeng/splitter';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DividerModule,
    DropdownModule,
    SplitterModule,
    ScrollerModule,
    TableModule,
  ],
  exports: [
    AutoCompleteModule,
    ButtonModule,
    CardModule,
    DividerModule,
    DropdownModule,
    SplitterModule,
    ScrollerModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
