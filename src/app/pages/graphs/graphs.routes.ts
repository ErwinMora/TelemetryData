import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import { HomeComponent } from './home/home.component';

export const GRAPH_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'telemetry', component: TelemetryComponent}
];