import { Shape } from './shape';
import { Circle } from './circle';
import { Rectangle } from './rectangle';


export class ShapeFactory {
    static createShape(name: string, options:any): Shape | null {
        switch (name.toLowerCase()) {
            case 'circle':
                return new Circle(options.radius, options.color);
            case 'rectangle':
                return new Rectangle(options.width, options.height, options.color);
            default:
                return null;
        }
    }
}