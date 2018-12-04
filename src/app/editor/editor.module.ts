import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordComponent } from './word/word.component';
import { LineComponent } from './line/line.component';
import { EditorComponent } from './editor/editor.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { IncrementPipe } from './increment.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [WordComponent, LineComponent, EditorComponent, IncrementPipe],
  exports: [WordComponent, LineComponent, EditorComponent, IncrementPipe],
})
export class EditorModule { }
