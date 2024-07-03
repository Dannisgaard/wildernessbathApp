import { Injectable } from '@angular/core';

@Injectable()
export class Temperature {
    public _id: string | undefined;
    public received_at: Date | undefined;
    public temp: number | undefined;
}