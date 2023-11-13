# Phase_2_Code_Challenge_APP[Bank of Flatiron]

## Overview

This React application is a mini web app for managing and displaying bank transactions. Users can view a table of transactions, add new transactions through a form, and filter transactions by typing into a search bar. The data is fetched from a local server running JSON DB server.

## Project Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Start the local server: `json-server --watch db.json`
5. In a separate terminal, start the React app: `npm start`

## Core Features

- View a table of all transactions.
- Add new transactions through a form (not persisted to the backend).
- Filter transactions by typing into the search bar.

## Bonus Features

- Sort transactions alphabetically by category or description.
- Delete a transaction to remove it from the table.

## Project Structure

Phase_2_Code_Challenge_APP/
|-- src/
| |-- components/
| |-- TransactionTable.js
| |-- TransactionForm.js
| |-- SearchBar.js
|-- App.js
|-- index.js
|-- db.json
|-- README.md


## Technology Used

- React
- json-server

## Contributors

- Peter Nyagol

## Acknowledgments

- I thank the TM EDwinna Bikeri for guidance and myself for working tierlessly to make sure this project is a success
