import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { TelemetryComponent } from './telemetry/telemetry.component';

export const GRAPH_ROUTES: Routes = [
    { path: 'weather', component: WeatherComponent },
    { path: 'telemetry', component: TelemetryComponent}
];