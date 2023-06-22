import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

export interface User {
  id: number;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // users!: any[];
  users!: User[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
