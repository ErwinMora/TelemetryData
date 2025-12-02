import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { GraphsService } from '../../../core/graph/graphs.service';

@Component({
  selector: 'app-temperature',
  imports: [ChartModule],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent implements OnInit {
  tempChartData: any;
  tempChartOptions: any;

  constructor(private _graphsService: GraphsService) { }

  ngOnInit(): void {
    this.loadTemperatureChart();
  }

  loadTemperatureChart() {
    this._graphsService.graphapi().subscribe({
      next: (response) => {
        const telemetry = response.data;

        if (!Array.isArray(telemetry)) {
          console.error("response.data no es un arreglo");
          return;
        }

        // Guardar temperatura mínima y máxima por fecha
        const tempByDate: {
          [date: string]: {
            min: number;
            max: number;
          };
        } = {};

        telemetry.forEach(item => {
          const fecha = item.timestamp.split('T')[0]; // YYYY-MM-DD

          if (!tempByDate[fecha]) {
            tempByDate[fecha] = {
              min: item.temperatura,
              max: item.temperatura
            };
          } else {
            // Mínima
            if (item.temperatura < tempByDate[fecha].min) {
              tempByDate[fecha].min = item.temperatura;
            }

            // Máxima
            if (item.temperatura > tempByDate[fecha].max) {
              tempByDate[fecha].max = item.temperatura;
            }
          }
        });

        // Ordenar fechas
        const fechas = Object.keys(tempByDate).sort();

        // Arreglos para gráfica
        const tempMin = fechas.map(f => tempByDate[f].min);
        const tempMax = fechas.map(f => tempByDate[f].max);

        // Dataset para ChartJS / PrimeNG
        this.tempChartData = {
          labels: fechas,
          datasets: [
            {
              label: 'Temperatura mínima (°C)',
              data: tempMin,
              borderColor: '#29B6F6',
              fill: false
            },
            {
              label: 'Temperatura máxima (°C)',
              data: tempMax,
              borderColor: '#E53935',
              fill: false
            }
          ]
        };

        // Opciones de gráfica
        this.tempChartOptions = {
          responsive: true,
          plugins: {
            legend: { position: 'top' }
          },
          scales: {
            y: { beginAtZero: false }
          }
        };
      },

      error: (err) => console.error(err)
    });
  }
}
