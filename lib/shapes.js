// Triangle class
class Triangle {
    constructor(color) {
        this.color = color;
    }

    toSVG() {
        const points = '150,10 250,190 50,190';
        return `<polygon points="${points}" fill="${this.color}" />`;
    }
}
/**
 * Triangles as we know have 3 sides along with three vertices/corners, so to be able to position the 
 * triangle we have to align each point by it's x and y coordinate. As shown in the code `150,10 250,190 50,190`
 * each point is being aligned like so: the first vertice, 150, 10, is being positioned at point 150 in the x coordinate
 * and point 10 in the y coordinate. The same logic applies to the rest of the vertices. 
 */

// Circle class
class Circle {
    constructor(color) {
        this.color = color;
    }

    toSVG() {
        const cx = 150;
        const cy = 100;
        const r = 50;
        return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${this.color}" />`;
    }
}
/**
 * The <circle> element uses cx (x coordinates in the center of circle), cy (y coordinates in the center of circle),
 * and r (radius). Using similar logic to the Triangle class, I position the circle in the circle and set the radius to 50
 * to extend itself from the center, essentially making it larger.
 */

// Square class
class Square {
    constructor(color) {
        this.color = color;
    }

    toSVG() {
        const x = 100;
        const y = 50;
        const size = 100;
        return `<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="${this.color}" />`;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
};