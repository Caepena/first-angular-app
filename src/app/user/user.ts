import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  @Input({required: true}) user!: User;

  @Input({required: true}) selected!: boolean;

  // @Input({ required: true })
  // id!: string;

  // @Input({ required: true })
  // avatar!: string;

  // @Input({ required: true })
  // name!: string;

  @Output()
  select = new EventEmitter<string>();

  // select = output<string>()

  // avatar = input.required<string>()

  // name = input.required<string>()

  // imagePath = computed(() => {
  //   return'assets/users/' + this.avatar()
  // })

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
