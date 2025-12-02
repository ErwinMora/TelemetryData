import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { SharedModule } from '../../../shared/shared.module';
import { GraphsService } from '../../../core/graph/graphs.service';


@Component({
  selector: 'app-weather',
  imports: [SharedModule, ChartModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit {

  tempChartData: any;
  tempChartOptions: any;

  constructor(private graphsService: GraphsService) { }

  ngOnInit(): void {
    this.loadTemperatureChart();
  }

  loadTemperatureChart() {
    this.graphsService.graphapi().subscribe({
      next: (response) => {

        const telemetry = response.data;
        if (!Array.isArray(telemetry)) {
          console.error("ERROR: response.data no es un arreglo");
          return;
        }

        // Objeto para contar lecturas por fecha
        const dailyCount: { [key: string]: number } = {};

        telemetry.forEach((item: any) => {
          const date = new Date(item.timestamp).toISOString().split('T')[0];
          if (!dailyCount[date]) {
            dailyCount[date] = 0;
          }
          dailyCount[date] += 1;
        });

        // Etiquetas y datos
        const labels = Object.keys(dailyCount).sort();
        const data = labels.map(date => dailyCount[date]);
        this.tempChartData = {
          labels,
          datasets: [
            {
              label: 'Cantidad de Lecturas',
              data,
              backgroundColor: 'rgba(72, 212, 170, 0.6)',
              borderColor: 'rgba(66, 197, 134, 0.6)',
              borderWidth: 1
            }
          ]
        };

        this.tempChartOptions = {
          responsive: true,
          plugins: {
            legend: { labels: { color: '#333' } }
          },
          scales: {
            x: { ticks: { color: '#555' } },
            y: {
              ticks: { color: '#555', stepSize: 1 },
              title: { display: true, text: 'Cantidad de lecturas' },
              beginAtZero: true
            }
          }
        };

      },
      error: (err) => console.error('Error obteniendo telemetría:', err)
    });
  }
}
