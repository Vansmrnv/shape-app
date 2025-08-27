import { Component, OnInit } from '@angular/core';
import { Circle } from './models/circle';
import { Rectangle } from './models/rectangle';
import { ShapeFactory } from './models/shape-factory';
import { Shape } from './models/shape';

@Component({
  selector: 'app-root',
  template: `
    <h1>Geometric Shapes</h1>
    @for (shape of shapes; track $index) {
      <p>{{ shape.name }} ({{ shape.color }}) → Area: {{ shape.getArea() }} | Area^2: {{ shape.getSquare() }}</p>
    }
  `,
})
export class AppComponent implements OnInit {
  shapes: Shape[] = [];

  ngOnInit(): void {
    const c1 = new Circle(5, 'blue'); // circle 1
    const r1 = new Rectangle(10, 20, 'red'); // rectangle 1

    const c2 = ShapeFactory.createShape('circle', { radius: 7, color: 'green' }); // circle 2
    const r2 = ShapeFactory.createShape('rectangle', { width: 5, height: 15, color: 'red' }); // rectangle 2
 
    this.shapes.push(c1, r1);
    if (c2) this.shapes.push(c2);
    if (r2) this.shapes.push(r2);

    this.shapes.forEach(shape => shape.describe());
  }
}
