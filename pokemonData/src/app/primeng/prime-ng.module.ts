import { NgModule } from '@angular/core';

/* Importacios propias de PrimeNg */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { SplitterModule } from 'primeng/splitter';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    CardModule,
    DividerModule,
    SplitterModule,
    ScrollerModule,
    TableModule,
  ],
  exports: [
    ButtonModule,
    CardModule,
    DividerModule,
    SplitterModule,
    ScrollerModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
