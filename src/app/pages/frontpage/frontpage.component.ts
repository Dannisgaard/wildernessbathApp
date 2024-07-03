import { Component } from '@angular/core';
import { TemperatureSymbolsComponent } from "../../components/temperature-symbols/temperature-symbols.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-frontpage',
    standalone: true,
    templateUrl: './frontpage.component.html',
    styleUrl: './frontpage.component.scss',
    imports: [TemperatureSymbolsComponent, RouterOutlet, RouterLink, RouterLinkActive]
    })
export class FrontpageComponent {

    
}
