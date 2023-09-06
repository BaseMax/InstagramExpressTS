# Instagram Clone with Express.js and TypeScript

Welcome to the Instagram-Clone-Express-TS repository! This project aims to replicate the core features and functionality of the popular social media platform, Instagram, using Express.js and TypeScript. By building this clone, you'll gain hands-on experience in building a modern web application with a focus on backend development and API design.

## Features

- **User Authentication:** Implement a robust user authentication system, allowing users to sign up, log in, and reset their passwords securely.
- **Profile Management:** Enable users to create and edit their profiles, including uploading profile pictures and updating personal information.
- **Image Upload and Sharing:** Implement the ability for users to upload images, apply filters, and share them with their followers or the public.
- **News Feed:** Create a dynamic news feed that displays images and posts from users a person follows.
- **Comments and Likes:** Allow users to comment on posts, like posts, and see a list of their own posts, comments, and likes.
- **Direct Messaging:** Build a real-time direct messaging system that enables users to send private messages to each other.
- **Notifications:** Implement a notification system to alert users about new followers, likes, comments, and direct messages.
- **Search Functionality:** Develop a search feature that enables users to discover and follow other users, search for posts, and explore trending content.
- **Responsive Design:** Ensure the application is accessible and usable on various devices, including desktop and mobile.

## Tech Stack

- **Express.js:** A fast and minimalist web framework for Node.js.
- **TypeScript:** A statically typed superset of JavaScript, adding robustness to your codebase.
- **MongoDB:** A NoSQL database for storing user data, posts, and other information.
- **GraphQL:** A query language for APIs that provides a flexible and efficient way to request data.
- **Apollo Server:** A GraphQL server that integrates seamlessly with Express.
- **AWS S3:** Use Amazon S3 for storing user-uploaded images securely. بجای این از سرویس ابروان برای اپلود کردن فایل ها استفاده کنیم
- **Authentication:** Implement authentication using JWT (JSON Web Tokens) for secure user sessions.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/BaseMax/InstagramExpressTS.git
   ```

Navigate to the project directory:

  ```bash
  cd InstagramExpressTS
  ```

Install dependencies:

  ```bash
  npm install
  ```

Set up your environment variables by creating a `.env` file in the root directory. You can use the `.env.example` file as a template.

Start the development server:

  ```bash
  npm run dev
  ```

Visit `http://localhost:3000` in your web browser to access the Instagram Clone application.

## Project Structure

The project structure is organized as follows:

- `src/`: Contains the source code for the Express.js application.
- `src/graphql/`: Contains GraphQL schema definitions, resolvers, and mutations.
- `src/models/`: Defines the MongoDB schemas for data storage.
- `src/routes/`: Defines Express routes for handling HTTP requests.
- `src/utils/`: Contains utility functions and helper modules.
- `public/`: Contains static assets such as images and stylesheets.
- `views/`: Contains the views (HTML templates) for rendering the active/reset password/forget password pages.
- `tests/`: Includes test suites and test utilities.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please read our Contributing Guidelines for more information.

## License

This project is licensed under the GPL-3.0 License.

Copyright 2023, Max Base
