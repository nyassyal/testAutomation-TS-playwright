type Circle = {radius: number};
type Rectangle = {width: number, height: number};
type Shape = Circle | Rectangle;

function calculateArea(shape: Shape): number {
    if ('radius' in shape) {
        // It's a Circle
        return Math.PI * shape.radius * shape.radius;
    } else {
        // It's a Rectangle
        return shape.width * shape.height;
    }
}

/**
  We need the 'in' operator to check if a property exists in an object type.
  This is useful when dealing with union types where the properties may vary.   
    The 'in' operator allows us to narrow down the type based on the presence of a specific property.
 */

    const circle: Circle = { radius: 5 };
    const rectangle: Rectangle = { width: 10, height: 20 };
    console.log(calculateArea(circle)); // Output: 78.53981633974483
    console.log(calculateArea(rectangle)); // Output: 200