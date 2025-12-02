import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

import { WeatherComponent } from '../weather/weather.component';
import { HumedityComponent } from '../humedity/humedity.component';
import { TemperatureComponent } from '../temperature/temperature.component';

@Component({
  selector: 'app-home',
  imports: [SharedModule, WeatherComponent, HumedityComponent, TemperatureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
