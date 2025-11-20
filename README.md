# Banking Application Automation | Cypress + Page Object Model

Comprehensive test automation suite for ParaBank banking application demonstrating financial services testing expertise.

## 🎯 Test Coverage

### Core Banking Flows
- ✅ User authentication (login/logout)
- ✅ Invalid credentials handling
- ✅ Account overview and balance display
- ✅ Account details navigation
- ✅ Fund transfer functionality
- ✅ Form validation (negative tests)
- ✅ Session management

## 📊 Test Results
- **Total Tests:** 7
- **Pass Rate:** 100%
- **Framework:** Cypress 15.7.0
- **Design Pattern:** Page Object Model
- **Reporting:** Mochawesome HTML reports

## 🛠 Technologies Used
- **Cypress** 15.7.0 - E2E automation framework
- **JavaScript** ES6 - Test scripting
- **Mochawesome** - HTML test reporting
- **Page Object Model** - Maintainable test architecture

## 📁 Project Structure

banking-automation-cypress/
├── cypress/
│ ├── e2e/
│ │ └── ui/
│ │ └── banking.cy.js # Banking test scenarios
│ ├── pages/
│ │ ├── LoginPage.js # Login page object
│ │ ├── AccountsPage.js # Accounts page object
│ │ └── TransferPage.js # Transfer page object
│ ├── support/ # Custom commands
│ └── reports/ # Test reports
├── cypress.config.js # Cypress configuration
└── README.md

text

## 🚀 How to Run

### Install Dependencies

npm install

text

### Run All Tests (Headless)

npx cypress run

text

### Run in Chrome (Headed Mode)

npx cypress run --browser chrome --headed

text

### Open Cypress Test Runner

npx cypress open

text

### View HTML Report
Open `cypress/reports/mochawesome.html` in your browser after test execution.

## 💼 Key Features
✅ **Financial Services Testing** - Banking-specific test scenarios  
✅ **Security Testing** - Authentication and authorization validation  
✅ **Page Object Model** - Scalable and maintainable architecture  
✅ **Negative Testing** - Error handling and edge cases  
✅ **Transaction Validation** - Fund transfer verification  
✅ **Clean Code** - Professional coding standards  

## 📈 Skills Demonstrated
- Banking/fintech application testing
- User authentication flows
- Transaction processing validation
- Page Object Model implementation
- Negative test scenarios
- Professional test documentation
- CI/CD ready automation

## 🏦 Test Scenarios

### 1. Authentication Tests
- Valid login with correct credentials
- Invalid login error handling
- Logout functionality

### 2. Account Management
- Account overview display
- Balance verification
- Account details navigation

### 3. Transaction Tests
- Fund transfer flow
- Empty amount validation
- Form error handling

## 👨‍💻 Author
**[Your Name]** - QA Automation Engineer  
Specializing in E2E automation for fintech and banking applications.

## 📫 Contact
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn]
- Email: [Your Email]

---

*This project demonstrates production-ready automation skills for financial services applications.*