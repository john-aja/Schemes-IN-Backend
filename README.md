# Custom API - Schemes-IN

This repository contains a custom API developed using Express.js framework, TypeORM, and Postgres database. The API is designed to store, retrieve, and update data in the database, as well as provide an endpoint for sending emails to the admin using SMTP.

## Technologies Used 

The following technologies are used in the development of this API:

- Express.js: A web application framework for Node.js that simplifies the development of robust APIs.
  
- TypeORM: An Object-Relational Mapping (ORM) library for TypeScript and JavaScript that provides database integration and management.
  
- Postgres: A powerful, open-source relational database management system used for storing data.
  
- SMTP: Simple Mail Transfer Protocol is utilized for sending emails to the admin.

## Features

The Custom API offers the following features:

- CRUD Operations: The API allows users to perform Create, Read, and Update operations on the database.
  
- Database Interaction: Data is stored, retrieved, and updated in the Postgres database using the API endpoints.
  
- Email Functionality: Users can send emails to the admin using the provided endpoint with SMTP integration.

## Usage

Once the API is up and running, you can make HTTP requests to the provided endpoints using tools like cURL or Postman. Here are the available endpoints:

- **POST /api/getAllScheme**: Retrieves all data from the database.
  
- **POST /api/createScheme**: Creates a new data entry in the database.
  
- **GET /api/getScheme/:id**: Retrieves a specific data entry based on the provided ID.
  
- **POST /api/sendEmail**: Sends an email to the admin.

Make sure to include the necessary request parameters and data in the request body or URL, depending on the endpoint requirements.

## Installation

To set up the Custom API locally, follow these steps:

1. Clone the repository from GitHub: `git clone https://github.com/john-aja/Schemes-IN-Backend`
2. Navigate to the project directory: `cd schemes-in`
3. Install the dependencies: `npm install`
4. Configure the database connection in the `ormconfig.json` file.
5. Run the database migrations: `npm run typeorm migration:run`
6. Start the API server: `npm run start`

Ensure that you have a Postgres database set up and running with the appropriate credentials.

## Configuration

The Custom API can be configured using the following environment variables:

- **DB_HOST**: Hostname for the Postgres database.
  
- **DB_PORT**: Port number for the Postgres database.
  
- **DB_USERNAME**: Username for authenticating with the Postgres database.
  
- **DB_PASSWORD**: Password for authenticating with the Postgres database.
  
- **DB_DATABASE**: Name of the Postgres database.
  
- **SMTP_SERVICE**: Service for the SMTP.
  
- **SMTP_USERNAME**: Username for authenticating with the SMTP server.
  
- **SMTP_PASSWORD**: Password for authenticating with the SMTP server.
  
- **ADMIN_EMAIL**: Email address of the admin.

Ensure that you provide the correct values for these environment variables to enable the API to function properly.

## Contribution

Contributions to the Custom API are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b my-new-feature`
3. Make your desired changes to the codebase.
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push the branch to your fork: `git push origin my-new-feature`
6. Submit a pull request detailing your changes.


## Contact

***John***

Email: ***janakiram.0695@gmail.com***

Feel free to reach out with any questions, feedback, or suggestions. Your input is highly appreciated!
