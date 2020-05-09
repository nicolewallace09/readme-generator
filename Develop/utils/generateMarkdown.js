// function to generate markdown for README
const generateMarkdown = data => {
  return `# ${data.title}
  // license 

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
  ${`install`}

  ## Usage 
  ${`usage`}

  ## License 
  This project is license under ${`license`}

  ## Contributing 
  ${`contributors`}

  ## Tests
  If there are any issues, please run ${`test`}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${`email`}. You can view more of my projects at ${`github`}.
`;
}

module.exports = generateMarkdown;
