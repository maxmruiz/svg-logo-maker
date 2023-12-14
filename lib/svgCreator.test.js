const createSVGContent = require('./svgCreator');

describe('createSVGContent', () => {
  test('should generate correct SVG content', () => {
    const answers = {
      text: 'Hi',
      textColor: '#000000',
      shape: 'circle',
      shapeColor: '#FF5733'
    };
    const svgContent = createSVGContent(answers);

    expect(svgContent).toContain(answers.text);
    expect(svgContent).toContain(answers.textColor);
    expect(svgContent).toContain(answers.shapeColor);
  });
});
