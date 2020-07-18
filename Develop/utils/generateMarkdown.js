// function to convert the user choice of license to a badge
function badge(answers) {
  if (answers.license === "apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (answers.license === "boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  } else
    return "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
}

// function to generate markdown for README
// creating the format of the README, placement and appearance
function generateMarkdown(data) {
  return `# Title ${data.title}
  ${badge(data)}

  ## Description: 
  ${data.description}

  ## Table of Contents: 
  [Installation](##Installation)
  [Usage](##Usage)
  [License](##License)
  [Contributing](##Contributing)
  [Tests](##Tests)
  [Questions](##Questions)

  ## Installation: 
  ${data.installation}

  ## Usage: 
  ${data.usage}

  ## License:
  The license this data is covered under: ${data.license} 

  ## Contributing: 
  ${data.contributing}

  ## Tests:
  The following tests were run to ensure accuracy:${data.tests}

  ## Questions: 
  GitHub Repo: https://github.com/${data.github} 
  Please contact me at <${data.email}> with any additional questions. 

`;
}

module.exports = generateMarkdown;
