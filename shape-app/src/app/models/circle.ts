import { Shape } from './shape';

export class Circle implements Shape {
    name: string;
    color: string;
    radius: number;

    constructor(radius: number, color: string = 'black') {
        this.name = 'Circle';
        this.color = color;
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

    getSquare(): number {
        return Math.pow(this.getArea(), 2); 
    }

    describe(): void {
        console.log(
            `${this.name} | Color: ${this.color} | Radius: ${this.radius} | Area: ${this.getArea()} | Area^2: ${this.getSquare()}`
        );
    }
}