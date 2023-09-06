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

## GraphQL Queries/Mutations

| #   | Type       | Query/Mutation Name    | Description                                             | Example Request                                     | Example Response                                    |
| --- | ---------- | ---------------------- | ------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| 1   | Query      | `getUser`              | Get user details by ID                                  | ```graphql\nquery {\n  getUser(id: "123") {\n    username\n    email\n  }\n}``` | ```json\n{\n  "data": {\n    "getUser": {\n      "username": "user123",\n      "email": "user123@example.com"\n    }\n  }\n}``` |
| 2   | Query      | `getUsers`             | Get a list of all users                                | ```graphql\nquery {\n  getUsers {\n    username\n    email\n  }\n}``` | ```json\n{\n  "data": {\n    "getUsers": [\n      {\n        "username": "user1",\n        "email": "user1@example.com"\n      },\n      {\n        "username": "user2",\n        "email": "user2@example.com"\n      }\n    ]\n  }\n}``` |
| 3   | Mutation   | `createUser`           | Create a new user                                       | ```graphql\nmutation {\n  createUser(input: {\n    username: "newuser",\n    email: "newuser@example.com",\n    password: "password123"\n  }) {\n    id\n    username\n    email\n  }\n}``` | ```json\n{\n  "data": {\n    "createUser": {\n      "id": "456",\n      "username": "newuser",\n      "email": "newuser@example.com"\n    }\n  }\n}``` |
| 4   | Mutation   | `updateUser`           | Update user information                                 | ```graphql\nmutation {\n  updateUser(id: "123", input: {\n    username: "updateduser",\n    email: "updateduser@example.com"\n  }) {\n    username\n    email\n  }\n}``` | ```json\n{\n  "data": {\n    "updateUser": {\n      "username": "updateduser",\n      "email": "updateduser@example.com"\n    }\n  }\n}``` |
| 5   | Mutation   | `deleteUser`           | Delete a user                                           | ```graphql\nmutation {\n  deleteUser(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteUser": {\n      "id": "123"\n    }\n  }\n}``` |
| 6   | Query      | `getPost`              | Get post details by ID                                  | ```graphql\nquery {\n  getPost(id: "789") {\n    title\n    content\n  }\n}``` | ```json\n{\n  "data": {\n    "getPost": {\n      "title": "My Post",\n      "content": "This is the content of my post."\n    }\n  }\n}``` |
| 7   | Query      | `getPosts`             | Get a list of all posts                                | ```graphql\nquery {\n  getPosts {\n    title\n    content\n  }\n}``` | ```json\n{\n  "data": {\n    "getPosts": [\n      {\n        "title": "Post 1",\n        "content": "Content 1"\n      },\n      {\n        "title": "Post 2",\n        "content": "Content 2"\n      }\n    ]\n  }\n}``` |
| 8   | Mutation   | `createPost`           | Create a new post                                       | ```graphql\nmutation {\n  createPost(input: {\n    title: "New Post",\n    content: "This is a new post."\n  }) {\n    id\n    title\n    content\n  }\n}``` | ```json\n{\n  "data": {\n    "createPost": {\n      "id": "101",\n      "title": "New Post",\n      "content": "This is a new post."\n    }\n  }\n}``` |
| 9   | Mutation   | `updatePost`           | Update post information                                 | ```graphql\nmutation {\n  updatePost(id: "789", input: {\n    title: "Updated Post",\n    content: "This is an updated post."\n  }) {\n    title\n    content\n  }\n}``` | ```json\n{\n  "data": {\n    "updatePost": {\n      "title": "Updated Post",\n      "content": "This is an updated post."\n    }\n  }\n}``` |
| 10  | Mutation   | `deletePost`           | Delete a post                                           | ```graphql\nmutation {\n  deletePost(id: "789") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deletePost": {\n      "id": "789"\n    }\n  }\n}``` |
| 11  | Query      | `getComment`           | Get comment details by ID                               | ```graphql\nquery {\n  getComment(id: "123") {\n    text\n  }\n}``` | ```json\n{\n  "data": {\n    "getComment": {\n      "text": "This is a comment."\n    }\n  }\n}``` |
| 12  | Query      | `getComments`          | Get a list of all comments                             | ```graphql\nquery {\n  getComments {\n    text\n  }\n}``` | ```json\n{\n  "data": {\n    "getComments": [\n      {\n        "text": "Comment 1"\n      },\n      {\n        "text": "Comment 2"\n      }\n    ]\n  }\n}``` |
| 13  | Mutation   | `createComment`        | Create a new comment                                     | ```graphql\nmutation {\n  createComment(input: {\n    text: "New Comment"\n  }) {\n    id\n    text\n  }\n}``` | ```json\n{\n  "data": {\n    "createComment": {\n      "id": "201",\n      "text": "New Comment"\n    }\n  }\n}``` |
| 14  | Mutation   | `updateComment`        | Update comment information                               | ```graphql\nmutation {\n  updateComment(id: "123", input: {\n    text: "Updated Comment"\n  }) {\n    text\n  }\n}``` | ```json\n{\n  "data": {\n    "updateComment": {\n      "text": "Updated Comment"\n    }\n  }\n}``` |
| 15  | Mutation   | `deleteComment`        | Delete a comment                                         | ```graphql\nmutation {\n  deleteComment(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteComment": {\n      "id": "123"\n    }\n  }\n}``` |
| 16  | Query      | `getLike`              | Get like details by ID                                  | ```graphql\nquery {\n  getLike(id: "456") {\n    userId\n    postId\n  }\n}``` | ```json\n{\n  "data": {\n    "getLike": {\n      "userId": "789",\n      "postId": "101"\n    }\n  }\n}``` |
| 17  | Query      | `getLikes`             | Get a list of all likes                                | ```graphql\nquery {\n  getLikes {\n    userId\n    postId\n  }\n}``` | ```json\n{\n  "data": {\n    "getLikes": [\n      {\n        "userId": "123",\n        "postId": "101"\n      },\n      {\n        "userId": "456",\n        "postId": "202"\n      }\n    ]\n  }\n}``` |
| 18  | Mutation   | `createLike`           | Create a new like                                       | ```graphql\nmutation {\n  createLike(input: {\n    userId: "789",\n    postId: "101"\n  }) {\n    id\n    userId\n    postId\n  }\n}``` | ```json\n{\n  "data": {\n    "createLike": {\n      "id": "301",\n      "userId": "789",\n      "postId": "101"\n    }\n  }\n}``` |
| 19  | Mutation   | `deleteLike`           | Delete a like                                           | ```graphql\nmutation {\n  deleteLike(id: "456") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteLike": {\n      "id": "456"\n    }\n  }\n}``` |
| 20  | Query      | `getFollower`          | Get follower details by ID                              | ```graphql\nquery {\n  getFollower(id: "123") {\n    followerId\n    userId\n  }\n}``` | ```json\n{\n  "data": {\n    "getFollower": {\n      "followerId": "456",\n      "userId": "789"\n    }\n  }\n}``` |
| 21  | Query      | `getFollowers`         | Get a list of all followers                            | ```graphql\nquery {\n  getFollowers {\n    followerId\n    userId\n  }\n}``` | ```json\n{\n  "data": {\n    "getFollowers": [\n      {\n        "followerId": "123",\n        "userId": "789"\n      },\n      {\n        "followerId": "456",\n        "userId": "101"\n      }\n    ]\n  }\n}``` |
| 22  | Mutation   | `createFollower`       | Create a new follower                                   | ```graphql\nmutation {\n  createFollower(input: {\n    followerId: "123",\n    userId: "789"\n  }) {\n    id\n    followerId\n    userId\n  }\n}``` | ```json\n{\n  "data": {\n    "createFollower": {\n      "id": "401",\n      "followerId": "123",\n      "userId": "789"\n    }\n  }\n}``` |
| 23  | Mutation   | `deleteFollower`       | Delete a follower                                       | ```graphql\nmutation {\n  deleteFollower(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteFollower": {\n      "id": "123"\n    }\n  }\n}``` |
| 24  | Query      | `getFollowing`         | Get a list of all users a person follows                | ```graphql\nquery {\n  getFollowing(id: "123") {\n    userId\n    followingId\n  }\n}``` | ```json\n{\n  "data": {\n    "getFollowing": [\n      {\n        "userId": "123",\n        "followingId": "789"\n      },\n      {\n        "userId": "456",\n        "followingId": "101"\n      }\n    ]\n  }\n}``` |
| 25  | Mutation   | `createFollowing`      | Create a new following                                   | ```graphql\nmutation {\n  createFollowing(input: {\n    userId: "123",\n    followingId: "789"\n  }) {\n    id\n    userId\n    followingId\n  }\n}``` | ```json\n{\n  "data": {\n    "createFollowing": {\n      "id": "501",\n      "userId": "123",\n      "followingId": "789"\n    }\n  }\n}``` |
| 26  | Mutation   | `deleteFollowing`      | Delete a following                                       | ```graphql\nmutation {\n  deleteFollowing(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteFollowing": {\n      "id": "123"\n    }\n  }\n}``` |
| 27  | Query      | `getHashtag`           | Get hashtag details by name                              | ```graphql\nquery {\n  getHashtag(name: "travel") {\n    name\n    posts {\n      title\n    }\n  }\n}``` | ```json\n{\n  "data": {\n    "getHashtag": {\n      "name": "travel",\n      "posts": [\n        {\n          "title": "Travel Post 1"\n        },\n        {\n          "title": "Travel Post 2"\n        }\n      ]\n    }\n  }\n}``` |
| 28  | Query      | `getHashtags`          | Get a list of all hashtags                            | ```graphql\nquery {\n  getHashtags {\n    name\n  }\n}``` | ```json\n{\n  "data": {\n    "getHashtags": [\n      {\n        "name": "food"\n      },\n      {\n        "name": "fitness"\n      }\n    ]\n  }\n}``` |
| 29  | Mutation   | `createHashtag`        | Create a new hashtag                                     | ```graphql\nmutation {\n  createHashtag(input: {\n    name: "newhashtag"\n  }) {\n    id\n    name\n  }\n}``` | ```json\n{\n  "data": {\n    "createHashtag": {\n      "id": "601",\n      "name": "newhashtag"\n    }\n  }\n}``` |
| 30  | Mutation   | `deleteHashtag`        | Delete a hashtag                                         | ```graphql\nmutation {\n  deleteHashtag(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteHashtag": {\n      "id": "123"\n    }\n  }\n}``` |
| 31  | Query      | `getNotification`      | Get notification details by ID                          | ```graphql\nquery {\n  getNotification(id: "123") {\n    type\n    message\n  }\n}``` | ```json\n{\n  "data": {\n    "getNotification": {\n      "type": "like",\n      "message": "Your post was liked by user123."\n    }\n  }\n}``` |
| 32  | Query      | `getNotifications`     | Get a list of all notifications                        | ```graphql\nquery {\n  getNotifications {\n    type\n    message\n  }\n}``` | ```json\n{\n  "data": {\n    "getNotifications": [\n      {\n        "type": "follow",\n        "message": "You have a new follower, user456."\n      },\n      {\n        "type": "comment",\n        "message": "user789 commented on your post."\n      }\n    ]\n  }\n}``` |
| 33  | Mutation   | `createNotification`   | Create a new notification                               | ```graphql\nmutation {\n  createNotification(input: {\n    type: "like",\n    message: "Your post was liked by user123."\n  }) {\n    id\n    type\n    message\n  }\n}``` | ```json\n{\n  "data": {\n    "createNotification": {\n      "id": "701",\n      "type": "like",\n      "message": "Your post was liked by user123."\n    }\n  }\n}``` |
| 34  | Mutation   | `deleteNotification`   | Delete a notification                                   | ```graphql\nmutation {\n  deleteNotification(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteNotification": {\n      "id": "123"\n    }\n  }\n}``` |
| 35  | Query      | `getConversation`      | Get conversation details by ID                           | ```graphql\nquery {\n  getConversation(id: "123") {\n    participants {\n      username\n    }\n    messages {\n      text\n    }\n  }\n}``` | ```json\n{\n  "data": {\n    "getConversation": {\n      "participants": [\n        {\n          "username": "user1"\n        },\n        {\n          "username": "user2"\n        }\n      ],\n      "messages": [\n        {\n          "text": "Hello!"\n        },\n        {\n          "text": "Hi there!"\n        }\n      ]\n    }\n  }\n}``` |
| 36  | Query      | `getConversations`     | Get a list of all conversations                       | ```graphql\nquery {\n  getConversations {\n    participants {\n      username\n    }\n    messages {\n      text\n    }\n  }\n}``` | ```json\n{\n  "data": {\n    "getConversations": [\n      {\n        "participants": [\n          {\n            "username": "user1"\n          },\n          {\n            "username": "user2"\n          }\n        ],\n        "messages": [\n          {\n            "text": "Hello!"\n          },\n          {\n            "text": "Hi there!"\n          }\n        ]\n      },\n      {\n        "participants": [\n          {\n            "username": "user3"\n          },\n          {\n            "username": "user4"\n          }\n        ],\n        "messages": [\n          {\n            "text": "Hey!"\n          },\n          {\n            "text": "How are you?"\n          }\n        ]\n      }\n    ]\n  }\n}``` |
| 37  | Mutation   | `createConversation`   | Create a new conversation                               | ```graphql\nmutation {\n  createConversation(input: {\n    participants: ["user1", "user2"]\n  }) {\n    id\n    participants {\n      username\n    }\n  }\n}``` | ```json\n{\n  "data": {\n    "createConversation": {\n      "id": "801",\n      "participants": [\n        {\n          "username": "user1"\n        },\n        {\n          "username": "user2"\n        }\n      ]\n    }\n  }\n}``` |
| 38  | Mutation   | `addMessage`           | Add a message to a conversation                         | ```graphql\nmutation {\n  addMessage(conversationId: "123", text: "Hello, how are you?") {\n    text\n  }\n}``` | ```json\n{\n  "data": {\n    "addMessage": {\n      "text": "Hello, how are you?"\n    }\n  }\n}``` |
| 39  | Query      | `getBookmark`          | Get bookmark details by ID                              | ```graphql\nquery {\n  getBookmark(id: "123") {\n    postId\n    userId\n  }\n}``` | ```json\n{\n  "data": {\n    "getBookmark": {\n      "postId": "789",\n      "userId": "101"\n    }\n  }\n}``` |
| 40  | Query      | `getBookmarks`         | Get a list of all bookmarks                            | ```graphql\nquery {\n  getBookmarks {\n    postId\n    userId\n  }\n}``` | ```json\n{\n  "data": {\n    "getBookmarks": [\n      {\n        "postId": "123",\n        "userId": "456"\n      },\n      {\n        "postId": "789",\n        "userId": "101"\n      }\n    ]\n  }\n}``` |
| 41  | Mutation   | `createBookmark`       | Create a new bookmark                                   | ```graphql\nmutation {\n  createBookmark(input: {\n    postId: "123",\n    userId: "456"\n  }) {\n    id\n    postId\n    userId\n  }\n}``` | ```json\n{\n  "data": {\n    "createBookmark": {\n      "id": "901",\n      "postId": "123",\n      "userId": "456"\n    }\n  }\n}``` |
| 42  | Mutation   | `deleteBookmark`       | Delete a bookmark                                       | ```graphql\nmutation {\n  deleteBookmark(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteBookmark": {\n      "id": "123"\n    }\n  }\n}``` |
| 43  | Query      | `getReport`            | Get report details by ID                                | ```graphql\nquery {\n  getReport(id: "123") {\n    postId\n    userId\n    reason\n  }\n}``` | ```json\n{\n  "data": {\n    "getReport": {\n      "postId": "789",\n      "userId": "101",\n      "reason": "Spam"\n    }\n  }\n}``` |
| 44  | Query      | `getReports`           | Get a list of all reports                              | ```graphql\nquery {\n  getReports {\n    postId\n    userId\n    reason\n  }\n}``` | ```json\n{\n  "data": {\n    "getReports": [\n      {\n        "postId": "123",\n        "userId": "456",\n        "reason": "Harassment"\n      },\n      {\n        "postId": "789",\n        "userId": "101",\n        "reason": "Spam"\n      }\n    ]\n  }\n}``` |
| 45  | Mutation   | `createReport`         | Create a new report                                     | ```graphql\nmutation {\n  createReport(input: {\n    postId: "123",\n    userId: "456",\n    reason: "Harassment"\n  }) {\n    id\n    postId\n    userId\n    reason\n  }\n}``` | ```json\n{\n  "data": {\n    "createReport": {\n      "id": "1001",\n      "postId": "123",\n      "userId": "456",\n      "reason": "Harassment"\n    }\n  }\n}``` |
| 46  | Mutation   | `deleteReport`         | Delete a report                                         | ```graphql\nmutation {\n  deleteReport(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteReport": {\n      "id": "123"\n    }\n  }\n}``` |
| 47  | Query      | `getAdvertisement`     | Get advertisement details by ID                         | ```graphql\nquery {\n  getAdvertisement(id: "123") {\n    title\n    url\n  }\n}``` | ```json\n{\n  "data": {\n    "getAdvertisement": {\n      "title": "Ad Title",\n      "url": "https://example.com/ad"\n    }\n  }\n}``` |
| 48  | Query      | `getAdvertisements`    | Get a list of all advertisements                       | ```graphql\nquery {\n  getAdvertisements {\n    title\n    url\n  }\n}``` | ```json\n{\n  "data": {\n    "getAdvertisements": [\n      {\n        "title": "Ad 1",\n        "url": "https://example.com/ad1"\n      },\n      {\n        "title": "Ad 2",\n        "url": "https://example.com/ad2"\n      }\n    ]\n  }\n}``` |
| 49  | Mutation   | `createAdvertisement`  | Create a new advertisement                              | ```graphql\nmutation {\n  createAdvertisement(input: {\n    title: "New Ad",\n    url: "https://example.com/newad"\n  }) {\n    id\n    title\n    url\n  }\n}``` | ```json\n{\n  "data": {\n    "createAdvertisement": {\n      "id": "1101",\n      "title": "New Ad",\n      "url": "https://example.com/newad"\n    }\n  }\n}``` |
| 50  | Mutation   | `deleteAdvertisement`  | Delete an advertisement                                | ```graphql\nmutation {\n  deleteAdvertisement(id: "123") {\n    id\n  }\n}``` | ```json\n{\n  "data": {\n    "deleteAdvertisement": {\n      "id": "123"\n    }\n  }\n}``` |

Feel free to customize these queries, mutations, examples, and response outputs to match the specifics of your Instagram clone project.

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
