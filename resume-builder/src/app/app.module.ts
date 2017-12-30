import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { SkillsInfoComponent } from './skills-info/skills-info.component';
import { EducationalInfoComponent } from './educational-info/educational-info.component';
import { WorkInfoComponent } from './work-info/work-info.component';
import { ProjectInfoComponent } from './project-info/project-info.component';
import { DeclarationInfoComponent } from './declaration-info/declaration-info.component';
import { PrintComponent } from './print/print.component';
import { ApiService } from './api.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    SkillsInfoComponent,
    EducationalInfoComponent,
    WorkInfoComponent,
    ProjectInfoComponent,
    DeclarationInfoComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
