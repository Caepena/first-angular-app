import { NgModule } from '@angular/core';
import { TasksComponent } from './tasks';
import { TaskComponent } from './task/task';
import { NewTaskComponent } from './new-task/new-task';
import { ShareModule } from '../shared/share.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TasksComponent, TaskComponent, NewTaskComponent],
  exports: [TasksComponent],
  imports: [ShareModule, CommonModule, FormsModule],
})
export class TasksModule {}
