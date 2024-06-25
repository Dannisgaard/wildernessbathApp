import { Component } from '@angular/core';
import { TemperatureSymbolsComponent } from "../../components/temperature-symbols/temperature-symbols.component";

@Component({
    selector: 'app-frontpage',
    standalone: true,
    templateUrl: './frontpage.component.html',
    styleUrl: './frontpage.component.scss',
    imports: [TemperatureSymbolsComponent]
})
export class FrontpageComponent {

    
allTemps() {
    throw new Error('Method not implemented.');
}

}
