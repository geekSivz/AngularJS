import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';     // Add this
import { WorkInfoComponent } from './work-info/work-info.component';  // Add this
import { SkillsInfoComponent } from './skills-info/skills-info.component';  // Add this
import { ProjectInfoComponent } from './project-info/project-info.component';  // Add this
import { EducationalInfoComponent } from './educational-info/educational-info.component';  // Add this
import { DeclarationInfoComponent } from './declaration-info/declaration-info.component';  // Add this
import { PrintComponent } from './print/print.component';  // Add this

const routes: Routes = [
  {
    path: 'print',
    component: PrintComponent
  },
  {
    path: 'profile',
    component: PersonalInfoComponent
  },
  {
    path: 'work',
    component: WorkInfoComponent
  },
  {
    path: 'skills',
    component: SkillsInfoComponent
  },
  {
    path: 'project',
    component: ProjectInfoComponent
  },
  {
    path: 'education',
    component: EducationalInfoComponent
  },
  {
    path: 'declaration',
    component: DeclarationInfoComponent
  },
  { 
    path: '**', 
    component: PrintComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
