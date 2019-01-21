import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginInfoComponent } from './login-info/login-info.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { ChapterListComponent } from './chapter-list/chapter-list.component';
import { ChapterComponent } from './chapter/chapter.component';
import { CoreComponent } from './core/core.component';
import { DefaultTipComponent } from './default-tip/default-tip.component';
import { OutputComponent } from './output/output.component';
import { MatChipsModule } from '@angular/material/chips';
import { AppRoutingModule } from './/app-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MaterialModule } from './material/material.module';
import { SharedModule } from './shared/shared.module';
import { UserTipComponent } from './user-tip/user-tip.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemListComponent } from './item-list/item-list.component';

import {
  MatAutocompleteModule,
  MatProgressBarModule,
  MatDividerModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { EditorModule } from './editor/editor.module';
import { OperatorComponent } from './editor/operator/operator.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginInfoComponent,
    ChapterComponent,
    ChapterListComponent,
    DetailComponent,
    CoreComponent,
    DefaultTipComponent,
    OutputComponent,
    UserTipComponent,
    OperatorComponent,
    ItemListComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    MatChipsModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatProgressBarModule,
    HttpClientModule,
    MatDialogModule,
    EditorModule,
    MatDividerModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  providers: [],
})
export class AppModule { }
