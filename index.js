// Import modules
const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const createSVG = require('./lib/svgCreator');

// Defining the color validation process that will be used in the prompt
const colorValidate = (value) => {
    const hexColorRegex = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    const colorNameRegex = /^[a-zA-Z]+$/;

    if (hexColorRegex.test(value) || colorNameRegex.test(value)) {
        return true; // Valid if it matches hex code pattern or is a color name
    } else {
        return 'Please enter a valid color name or hexadecimal code.';
    }
};


// User input prompts
const userInput = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter a 3 character word:',
        validate: function(value) {
            // Checking if the input is 3 characters long or less
            if (value.length > 3) {
                return 'Please enter a word no more than 3 characters.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color (name or hexadecimal) for your text:',
        validate: colorValidate // Color validation function defined previously
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Pick a shape for your logo:',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color (name or hexadecimal) for your shape:',
        validate: colorValidate
    }
];

// Creating SVG file per answers and shapes created.
inquirer.prompt(userInput).then(answers => {
    const svgContent = createSVG(answers);
    fs.writeFile('logo.svg', svgContent, (err) => {
        if (err) {
            console.error('Error creating your SVG file:', err);
        } else {
            console.log('Generated logo.svg');
        }
    });
});