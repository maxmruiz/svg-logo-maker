const { Triangle, Circle, Square } = require('./shapes');

function createSVG(answers) {
    let shapeSVG;
    switch(answers.shape.toLowerCase()) {
        case 'triangle':
            const triangle = new Triangle(answers.shapeColor);
            shapeSVG = triangle.toSVG();
            break;
        case 'square':
            const square = new Square(answers.shapeColor);
            shapeSVG = square.toSVG();
            break;
        case 'circle':
            const circle = new Circle(answers.shapeColor);
            shapeSVG = circle.toSVG();
            break;
        default:
            shapeSVG = '';
    }

    const textSVG = `<text x="50%" y="50%" fill="${answers.textColor}" dominant-baseline="middle" text-anchor="middle">${answers.text}</text>`;

    let finalSVGContent = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n`;
    finalSVGContent += `    ${shapeSVG}\n`;
    finalSVGContent += `    ${textSVG}\n`;
    finalSVGContent += `</svg>`;

    return finalSVGContent;
}

module.exports = createSVG;