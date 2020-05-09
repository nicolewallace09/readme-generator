// require modules 
// const fs = require('fs'); 
const inquirer = require('inquirer'); 

// const { writeFile, copyFile } = require('./utils/generateMarkdown.js');
const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false; 
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false; 
            }
        }

    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log('Please enter your project name!');
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project'
    }, 
    {
        type: '',
        name: 'license',
        message: 'What kind of license should your project have?'
    },
    {
        type: '',
        name: 'install',
        message: 'What command should be run to install dependencies?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use this app?'
    },
    {
        type: 'input',
        name: 'test', 
        message: 'What command should be run to run tests?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'What does the user need to know about contributing to the repo?'
    }
]);
};

questions();

// function to write README file
// function writeToFile(fileName, data) {
// } 

//fs.writeFile('./index.html', pageHTML, err => {
    //if(err) throw new Error (err);

    // success message 
    // console.log("README complete! Please check the text document");
// });

// function to initialize program
// function init() {

// }

// function call to initialize program
init();

