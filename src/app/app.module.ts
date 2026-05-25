import { NgModule } from '@angular/core';
import { App } from './app';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShareModule } from './shared/share.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    App,
    HeaderComponent,
    UserComponent,
  ],
  bootstrap: [App],
  imports: [BrowserModule, ShareModule, TasksModule],
})
export class AppModule {}
