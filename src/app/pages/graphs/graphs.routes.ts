import { Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { TelemetryComponent } from './telemetry/telemetry.component';
import { HomeComponent } from './home/home.component';
import { HumedityComponent } from './humedity/humedity.component';

export const GRAPH_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'weather', component: WeatherComponent },
    { path: 'humedity', component: HumedityComponent },
    { path: 'telemetry', component: TelemetryComponent}
];