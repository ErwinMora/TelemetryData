import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

import { GraphsService } from '../../../core/graph/graphs.service';

@Component({
  selector: 'app-humedity',
  imports: [ChartModule],
  templateUrl: './humedity.component.html',
  styleUrl: './humedity.component.css'
})

export class HumedityComponent implements OnInit {

  humChartData: any;
  humChartOptions: any;

  constructor(private _graphsService: GraphsService) { }

  ngOnInit(): void {
    this.loadHumedityChart();
  }

  loadHumedityChart() {
    this._graphsService.graphapi().subscribe({
      next: (response) => {
        const telemetry = response.data;

        if (!Array.isArray(telemetry)) {
          console.error("response.data no es un arreglo");
          return;
        }

        // Objeto para guardar la humedad mínima y máxima por fecha
        const humByDate: {
          [date: string]: {
            min: number;
            max: number;
          };
        } = {};

        telemetry.forEach(item => {
          const fecha = item.timestamp.split('T')[0];

          if (!humByDate[fecha]) {
            humByDate[fecha] = {
              min: item.humedad,
              max: item.humedad
            };
          } else {
            // Actualizar mínima
            if (item.humedad < humByDate[fecha].min) {
              humByDate[fecha].min = item.humedad;
            }
            // Actualizar máxima
            if (item.humedad > humByDate[fecha].max) {
              humByDate[fecha].max = item.humedad;
            }
          }
        });

        // ---- Ordenar fechas ----
        const fechas = Object.keys(humByDate).sort();

        // ---- Arreglos para gráfica ----
        const humMin = fechas.map(f => humByDate[f].min);
        const humMax = fechas.map(f => humByDate[f].max);

        // ---- Dataset para Chart ----
        this.humChartData = {
          labels: fechas,
          datasets: [
            {
              label: 'Humedad mínima (%)',
              data: humMin,
              borderColor: '#4CAF50',
              fill: false
            },
            {
              label: 'Humedad máxima (%)',
              data: humMax,
              borderColor: '#42A5F5',
              fill: false
            }
          ]
        };

        this.humChartOptions = {
          responsive: true,
          plugins: {
            legend: { position: 'top' }
          },
          scales: {
            y: { beginAtZero: true }
          }
        };
      },

      error: (err) => console.error(err)
    });
  }

}
