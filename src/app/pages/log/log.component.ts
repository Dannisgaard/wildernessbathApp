import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Temperature } from '../../shared/models/temperature';
import { TemperatureLogService } from '../../shared/services/temperature-log-service';
import { dateTimeFormatPipe } from '../../shared/pipes/dateTimeFormatPipe';

@Component({
  selector: 'app-log',
  standalone: true,
  imports: [
    dateTimeFormatPipe,
  ],
  templateUrl: './log.component.html',
  styleUrl: './log.component.scss'
})
export class LogComponent {
  public temperatures: Temperature[] = [];
  
  /**
   *
   */
  constructor(
    private temperatureLogService: TemperatureLogService
  ) {
    
  }

  ngOnInit() {
    this.temperatureLogService.getTemperatureLog().subscribe({
      next: (currentObserverValue) => {
        this.temperatures = currentObserverValue;
      }
    });
    }
  }

