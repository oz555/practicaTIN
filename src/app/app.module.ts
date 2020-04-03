import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos.component';
import { AulasComponent } from './aulas/aulas.component';
import { ImgbotonComponent } from './imgboton/imgboton.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AulasComponent,
    ImgbotonComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
