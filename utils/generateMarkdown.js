// if users do not enter a test input 
const generateTest = testText => {
  if(!testText) {
    return '';
  }
  return`
  ## Tests
  ${data.test}
  `;
}

// if users do not enter a contributors input 
const generateContributors = contributorText => {
  if(!contributorText) {
    return '';
  }
  return`
  ## Contributing 
  ${data.contributors}
  `;
}



// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)

  ## Description 
  ${`description`}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.install}

  ## Usage 
  ${data.usage}

  ## License 
  This project is license under ${data.license}

  ${generateContributors()}

  ${generateTest()}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.email}. You can view more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
