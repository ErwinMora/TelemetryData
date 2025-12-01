import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { GraphsService } from '../../../core/graph/graphs.service';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-weather',
  imports: [SharedModule, ChartModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
}
