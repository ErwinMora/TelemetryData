import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

import { PaginatorModule } from 'primeng/paginator';
import { SharedModule } from '../../../shared/shared.module';
import { GraphsService } from '../../../core/graph/graphs.service';

@Component({
  selector: 'app-telemetry',
  imports: [TableModule, SharedModule, CommonModule, PaginatorModule],
  templateUrl: './telemetry.component.html',
  styleUrl: './telemetry.component.css'
})

export class TelemetryComponent implements OnInit {

  telemetryData: any[] = [];

  constructor(private _graphsService: GraphsService) { }

  ngOnInit(): void {
    this.loadTelemetry();
  }

  loadTelemetry() {
    this._graphsService.graphapi().subscribe({
      next: (response) => {
        // Validar que data venga en un array
        const data = Array.isArray(response.data) ? response.data : [];

        // Asignar a tu arreglo que alimenta la tabla
        this.telemetryData = data;
      },
      error: (err) => {
        console.error('Error cargando telemetría:', err);
      }
    });
  }
}