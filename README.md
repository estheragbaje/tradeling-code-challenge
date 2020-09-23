# Tradeling Frontend Code Challenge Solution

This code works through the use of **React**, **TypeScript** and **Redux** to filter users, issues and repositories.

## The Task

There will be two input fields. The first is a search field for the user to type the text. While the other is a dropdown where user can either pick "Users", or "Repositories" to define the entities that they want to search.

When the user doesn't have any input or clears the input, the input fields should be shown in the middle of the page. [The Task](https://github.com/tradeling/coding-tasks/tree/develop/frontend-typescript)]

## The Approach

The approach taken to solve this task is divided into 5 phases:

### 1. Planning and Research

Checked out the Github API structure for users and repositories to identify the expected results.
In addition to this I made the decision to use Emotion for styling because it is lightweight and easy to use. Emotion is a library designed for writing css styles with JavaScript. [Emotion](https://emotion.sh/).

Octokit was chosen as the Official clients for the GitHub API in order to query users and repositories. [Octokit](https://www.npmjs.com/package/@octokit/rest).

Lastly, I researched into the libraries to be used in this project and chose to use Redux Toolkit because it makes it easier to write good Redux applications and speeds up development and allows one to write simpler code. [Redux Toolkit](https://redux-toolkit.js.org/)]

### 2. Styling and Design

Based on the API structure, I initially sketched out the user and repo cards for proper hierarchy of information.
After this, I later went on to flesh out this sketch into proper UI mockups for the desktop, tablet and mobile views.

### 3. Building User Interface

Once I had the UI design ready, I went ahead to populate the dummy api data and specified typescript definitions, types, interfaces as well as built the card components & lists, repo components & lists and search components.

I also built out the status states from loading, error and success states.
The styles and theme for the app was also created.

### 4. Setting up Reducer, Store and Redux-Persist

After the entire UI had been built, I then went ahead to set up the reducer and store to be used for both users and repos, following the documentation from Redux Toolkit.

In addition to this, I set up the redux-persist to ensure the data is cached in the store and persisted so that no more API calls is made if we already have the results for the search term.

### 5. General Code Cleanup

As a good practice, I went through the entire code to ensure consistency, clean up code and deleted redundant styles.

## The UI Design

The UI design for the Desktop, Tablet and Mobile screens were done in Figma

Here's the link to the design:
[[Figma Design](https://www.figma.com/file/4iXpoo26sm8LGA6AuQdc8I/Tradeling-Code-Challenge?node-id=0%3A1)]

## The Libraries Used

Redux Toolkit
Redux- Persist
Emotion
Octokit

## Helpful Commands

In the project directory, you can run:

- `yarn start` - runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
