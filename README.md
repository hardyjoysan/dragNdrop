# Drag & Drop Chart Dashboard

A drag and drop chart dashboard for Concentrix's Hackerearth test

## Installation

### Prerequisites

To get started, required Node.js > 12.x and MySQL installed in your machine .

#### Get Node.js

```bash
$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```
#### Configure ENV

Both client and server environment files must be configure before installing the package or running the application.
Rename .env.example file from both root and client folder to .env. Default configurations are there, only few indipendent informations needs to add.

#### Install modules

```bash
$ npm install
```
This will install both server and client packages required.

#### Seeder
A seeder has been configured for dummy data to work with. Use below command in root folder to update the database. Make sure .env file is filled with database credentials.

```bash
$ sequelize db:seed:all
```

## Usage

### Development

```bash
$ npm run dev
```

Open [localhost:3000](http://localhost:3000) in browser.

### Production

```bash
$ npm start
```

Oen [localhost:5000](http://localhost:5000) in browser.