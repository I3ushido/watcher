import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'watcher';
  displayValue = '';
  count = 0;
  show = true;
  color = '';
  users = ['Iron-man', 'Spider-man', 'Bruce', 'Captain-america'];
  userDetails = [
    {
      name: 'Iron-man',
      email: 'Iron-man@marvel.com',
      socials: ['Facebook', 'Youtube'],
    },
    { name: 'Spider-man', email: 'Spider-man@marvel.com', socials: ['Line'] },
    { name: 'Bruce', email: 'Bruce@marvel.com', socials: ['gmail'] },
    {
      name: 'Captain-america',
      email: 'Captain-america@marvel.com',
      socials: ['instagram'],
    },
  ];
  fontColor = 'pink';
  bgColor = 'white';
  dataForm: any = {};
  list: any[] = [];
  data: any;
  today = Date();

  getRef(ref: any) {
    console.warn(ref);
  }

  getName(name: string | number) {
    console.log(name);
  }

  getValue(value: string) {
    console.log(value);
    this.displayValue = value;
  }
  counter(value: string) {
    value === 'add' ? this.count++ : this.count--;
  }
  updateColor() {
    this.fontColor = 'white';
    this.bgColor = 'pink';
  }
  getData(data: NgForm) {
    console.warn(data);
    this.dataForm = data;
  }

  toggleShow() {
    this.show = !this.show;
  }
  addTask(task: string) {
    this.list.push({ id: this.list.length, name: task });
    console.warn(this.list);
  }
  removeTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
    console.warn('remove id', id);
  }
  updateData(item: string) {
    this.title = item;
  }
  loginUser(item: any) {
    console.warn(item);
  }
}
