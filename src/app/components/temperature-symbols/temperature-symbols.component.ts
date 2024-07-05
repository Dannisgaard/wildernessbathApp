import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { TemperatureCurrent } from '../../shared/models/temperature-current';
import { TemperatureTempService } from '../../shared/services/temperature-temp-service';

@Component({
  selector: 'app-temperature-symbols',
  standalone: true,
  imports: [NgClass],
  templateUrl: './temperature-symbols.component.html',
  styleUrl: './temperature-symbols.component.scss'
})
export class TemperatureSymbolsComponent {

  protected currentSymbolClass1 = '';
  protected currentSymbolClass2 = '';
  protected currentSymbolClass3 = '';
  protected currentArrowClass = '';
  private currentTemperature: TemperatureCurrent = new TemperatureCurrent;
  private optimumTemperature: number = 39;
  private symbolStepTemperature = 1.5;

  constructor(
    private temperatureTempService: TemperatureTempService
  ) {
  }

  ngOnInit() {
    this.temperatureTempService.getCurrentTemperature().subscribe({
      next: (currentObserverValue) => {
        this.currentTemperature = currentObserverValue;
        this.setSymbols();
        this.setArrow();
      }
    });
    this.getTempTimer(new Date(new Date().getTime() + 2.5 * 60000));
  }

  setSymbols() {
    // start cold
    if (this.currentTemperature.temp <= this.optimumTemperature - (3 * this.symbolStepTemperature)) {
      this.currentSymbolClass1 = 'pingvin';
      this.currentSymbolClass2 = 'pingvin';
      this.currentSymbolClass3 = 'pingvin';
    }
    else if (this.currentTemperature.temp <= this.optimumTemperature - (2 * this.symbolStepTemperature)) {
      this.currentSymbolClass1 = 'pingvin';
      this.currentSymbolClass2 = 'pingvin';
      this.currentSymbolClass3 = 'champagne';
    }
    else if (this.currentTemperature.temp <= this.optimumTemperature - (1 * this.symbolStepTemperature)) {
      this.currentSymbolClass1 = 'pingvin';
      this.currentSymbolClass2 = 'champagne';
      this.currentSymbolClass3 = 'champagne';
    }
    else if (this.currentTemperature.temp <= this.optimumTemperature + (1 * this.symbolStepTemperature)) {
      this.currentSymbolClass1 = 'champagne';
      this.currentSymbolClass2 = 'champagne';
      this.currentSymbolClass3 = 'champagne';
    }
    else if (this.currentTemperature.temp <= this.optimumTemperature + (2 * this.symbolStepTemperature)) {
      this.currentSymbolClass1 = 'champagne';
      this.currentSymbolClass2 = 'champagne';
      this.currentSymbolClass3 = 'hummer';
    }
    else if (this.currentTemperature.temp <= this.optimumTemperature + (3 * this.symbolStepTemperature)) {
      this.currentSymbolClass1 = 'champagne';
      this.currentSymbolClass2 = 'hummer';
      this.currentSymbolClass3 = 'hummer';
    }
    else  {
      this.currentSymbolClass1 = 'hummer';
      this.currentSymbolClass2 = 'hummer';
      this.currentSymbolClass3 = 'hummer';
    }
  }

  setArrow() {
    switch (this.currentTemperature?.difference) {
      case 0: {
        this.currentArrowClass = 'arrowgreen';
        break;
      }
      case 1: {
        this.currentArrowClass = 'arrowred';
        break;
      }
      case -1: {
        this.currentArrowClass = 'arrowblue';
        break;
      }
      default: {
        this.currentArrowClass = '';
        break;
      }
    }
  }

  getTempTimer(expires: Date) {
    const now = new Date();
    expires.setMinutes(expires.getMinutes() - now.getTimezoneOffset());
    const diff = expires.getTime() - now.getTime();
    setTimeout(() => {
      this.temperatureTempService.getCurrentTemperature().subscribe({
        next: (currentObserverValue) => {
          this.currentTemperature = currentObserverValue;
          this.setSymbols();
          this.setArrow();
          this.getTempTimer(new Date(expires.getTime() + 2.5 * 60000));
        }
      });
    }, diff);
  }
}
