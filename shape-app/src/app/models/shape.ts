export interface Shape {
    name: string;
    color: string;

    getArea(): number;
    getSquare(): number;
    describe(): void;
}