import { Injectable } from '@angular/core';

@Injectable()
export class TemperatureCurrent {
    public id: string | undefined;
    public received_at: Date | undefined;
    public temp: number = 0;
    public difference: number = 0;
}