import { Component, EventEmitter, Output } from '@angular/core';
import { NewTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTaskComponent {
  
  @Output() 
  cancel = new EventEmitter<void>();

  @Output()
  add = new EventEmitter<NewTaskData>()
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';
  
  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
