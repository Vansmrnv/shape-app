import { Shape } from './shape';

export class Rectangle implements Shape {
    name: string;
    color: string;
    width: number;
    height: number;

    constructor(width: number, height: number, color: string = 'black') {
        this.name = 'Rectangle';
        this.color = color;
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }

    getSquare(): number {
        return Math.pow(this.getArea(), 2);
    }


    describe(): void {
        console.log(
            `${this.name} | Color: ${this.color} | Width: ${this.width} | Height: ${this.height} | Area: ${this.getArea()} | Area^2: ${this.getSquare()}`
        )
    }
}