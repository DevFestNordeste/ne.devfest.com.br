import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './shared/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './pages/header/header.component';
import { EventoComponent } from './pages/evento/evento.component';
import { PalestrantesComponent } from './pages/palestrantes/palestrantes.component';
import { CarouselModule } from 'primeng/carousel';
import { ParceriasComponent } from './pages/parcerias/parcerias.component';
import { FooterComponent } from './components/footer/footer.component';
import { VoluntariosComponent } from './pages/voluntarios/voluntarios.component';
import { LocalComponent } from './pages/local/local.component';
import { PatrocinioComponent } from './pages/patrocinio/patrocinio.component';
import { ProgramacaoComponent } from './pages/programacao/programacao.component';
import { LayoutComponent } from './pages/layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    EventoComponent,
    PalestrantesComponent,
    ParceriasComponent,
    FooterComponent,
    VoluntariosComponent,
    LocalComponent,
    PatrocinioComponent,
    ProgramacaoComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    CarouselModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }