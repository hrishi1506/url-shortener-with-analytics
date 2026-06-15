# URL Shortener with Analytics

A Node.js application that allows users to create shortened URLs and track analytics for each shortened link.

## Features

- **URL Shortening**: Convert long URLs into short, easy-to-share links
- **Analytics Tracking**: Monitor click counts and usage statistics for each shortened URL
- **Simple API**: RESTful endpoints for creating and managing shortened URLs

## Project Structure

```
├── index.js              # Main application entry point
├── connection.js         # Database connection configuration
├── package.json          # Project dependencies and metadata
├── controllers/
│   └── url.js           # URL business logic and handlers
├── models/
│   └── url.js           # URL data model and schema
└── routes/
    └── url.js           # API route definitions
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/hrishi1506/url-shortener-with-analytics.git
cd url-shortener-with-analytics
```

2. Install dependencies:
```bash
npm install
```

3. Configure your database connection in `connection.js`

4. Start the application:
```bash
npm start
```

## Usage

### API Endpoints

- **Create a shortened URL**
  - POST `/api/urls`
  - Request body: `{ "originalUrl": "https://example.com/very/long/url" }`

- **Redirect to original URL**
  - GET `/api/urls/:shortCode`

- **Get analytics**
  - GET `/api/urls/:shortCode/analytics`

## Technologies Used

- Node.js
- Express.js (assumed)
- Database (configured in connection.js)

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

MIT
