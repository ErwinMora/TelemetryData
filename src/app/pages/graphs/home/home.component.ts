import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { WeatherComponent } from '../weather/weather.component';

@Component({
  selector: 'app-home',
  imports: [SharedModule, WeatherComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
