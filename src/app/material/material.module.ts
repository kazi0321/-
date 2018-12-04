import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatMenuModule,
  MatProgressBarModule,
} from '@angular/material';

import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    OverlayModule,
    PortalModule,
    MatProgressBarModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatMenuModule,
    OverlayModule,
    PortalModule,
  ]
})
export class MaterialModule { }
