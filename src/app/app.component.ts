import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Planning-Your-Meal-Reservation';
  loadFeature = 'dish';

  onNavigate(event: string) {
    this.loadFeature = event;
  }
}
