import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorComponent } from './editor/editor.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatChipsModule, MatCardModule, MatListModule,
  MatGridListModule, MatDividerModule, MatInputModule, MatIconModule, } from '@angular/material';

import { FormsModule } from '@angular/forms';
import { IncrementPipe } from './increment.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
  declarations: [EditorComponent, IncrementPipe],
  exports: [EditorComponent, IncrementPipe],
})
export class EditorModule { }
