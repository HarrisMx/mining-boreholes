import { Borehole } from './borehole';

export class WaterLevels extends Borehole {
    private _date: any;
    public get date(): any {
        return this._date;
    }
    public set date(value: any) {
        this._date = value;
    }
    private _reading: number;
    public get reading(): number {
        return this._reading;
    }
    public set reading(value: number) {
        this._reading = value;
    }
}
