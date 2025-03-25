# Country Data Dashboard

This project is a full-stack web application that displays country information using the REST Countries API. It consists of a frontend built with React/Next.js and a backend built with Node.js/Express.

## Project Structure

- `country-data-frontend/`: Contains the code for the frontend (React/Next.js).
- `country-data-backend/`: Contains the code for the backend (Node.js/Express).

## Prerequisites

- Node.js (v14.x or higher)
- npm

## Installation and Running

You can use the `start.sh` script to automate the installation and running of the application. Follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/0xkaushal/elanco-assignment.git
    ```
2. Navigate to the project directory:
    ```bash
    cd elanco-assignment
    ```
3. Make the `start.sh` script executable:
    ```bash
    chmod +x start.sh
    ```
4. Run the `start.sh` script:
    ```bash
    ./start.sh
    ```

The script will install the dependencies, build the project, and start both the frontend and backend servers.

## Running the Project Mannually

To start the backend server, use the following command:

```bash
cd ../country-data-backend
npm run dev
```

The backend server should now be running at [http://localhost:3001](http://localhost:3001).

To start the frontend development server, use the following command:

```bash
cd country-data-frontend
npm start
```

The frontend development server should now be running at [http://localhost:3000](http://localhost:3000).

## Building the Project

To build the frontend for production, run:

```bash
cd country-data-frontend
npm run build
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
