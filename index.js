const inquirer = require('inquirer');
const jest = require('jest');

const userInput = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter a 3 character word:',
        validate: function(value) {
            // Checking if the input is 3 characters long or less
            if (value.length <= 3) {
                return true;
            }
            return 'Please enter a word no more than 3 characters.';
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Enter a color (name or hexadecimal):',
        validate: function(value) {
            const hexColorRange = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

            if (value === '' || hexColorRange.test(value) || typeof value === 'string') {
                return true;
            }
            return 'Please enter a valid color name or hexadecimal.';
        }
    }
];