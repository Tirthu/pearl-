
Email Service

This project implements a resilient email sending service in TypeScript. It includes features such as retry logic with exponential backoff, fallback mechanisms between providers, idempotency, rate limiting, and status tracking.

## Key Features

Retry Mechanism: Automatically retries sending emails with exponential backoff on failure.
Fallback Mechanism: Switches between two mock email providers if one fails.
Idempotency: Prevents duplicate email sends.
Rate Limiting: Ensures emails are sent at a controlled rate.
Status Tracking: Tracks the status of email sending attempts.
## Bonus Features
Circuit Breaker Pattern: Helps in handling failures and preventing overload.
Simple Logging: Logs important events and errors.
Basic Queue System: Manages email sending requests.
## Project Structure
src/
EmailService.ts: Contains the main EmailService class implementation.
MockProviders.ts: Contains mock email providers used for testing.
tests/
EmailService.test.ts: Contains unit tests for EmailService.
jest.config.js: Jest configuration file.
tsconfig.json: TypeScript configuration file.
package.json: Project metadata and dependencies.
server.ts: Entry point for the email service.
## Installation
git clone <repository-url>
cd email-service
npm install
npx tsc
node dist/server.js
npx jest

## License
This project is licensed under the MIT License - see the LICENSE file for details.