import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';     // Add this
import { WorkInfoComponent } from './work-info/work-info.component';  // Add this
import { SkillsInfoComponent } from './skills-info/skills-info.component';  // Add this
import { ProjectInfoComponent } from './project-info/project-info.component';  // Add this
import { EducationalInfoComponent } from './educational-info/educational-info.component';  // Add this
import { DeclarationInfoComponent } from './declaration-info/declaration-info.component';  // Add this

const routes: Routes = [
  {
    path: '',
    component: PersonalInfoComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
