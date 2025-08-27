# shape-app
Geometric Shapes

shape.ts:  
Creates Shape interface with   
Properties: name, color  
Methods: getArea(), getSquare(), describe()  

circle.ts:  
Implements Shape interface for Circle  
Properties: name, color, radius  
Methods: getArea(pi*r**2), getSquare(area sqaured), describe()  

rectangle.ts:  
Implements Shape interface for Rectangle  
Properties: name, color, width, height  
Methods: getArea(width * height), getSquare(area sqaured), describe()  

shape-factory.ts:  
Creates objects  

app.component.ts:  
Angular UI component  
Creates shapes:   
 -- directly using new Circle() circle.ts  
 -- using shape-factory.ts  
Pushes shapes into an array  
For each shape in array calls describe()  
Angular template renders shapes with @for   
