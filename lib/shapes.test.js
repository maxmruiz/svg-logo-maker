const { Circle } = require('./shapes');

describe('Circle', () => {
  test('should create correct SVG for a circle', () => {
    const color = '#FF5733';
    const circle = new Circle(color);
    const svgOutput = circle.toSVG();
    const expectedSVG = `<circle cx="150" cy="100" r="50" fill="${color}" />`;

    expect(svgOutput).toBe(expectedSVG);
  });
});
