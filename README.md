# Twitter Picker

Twitter Picker is a free tool designed to facilitate the creation of contests and the selection of winners from a tweet using a retweet picker.

## How It Works

1. **Enter Tweet Link/ID:** Input the link or ID of the tweet you want to draw winners from.
2. **Fetch Retweeters:** Twitter Picker retrieves and displays all users who retweeted the tweet.
3. **Apply Filters:** Customize filter requirements to exclude bots or non-compliant users to ensure fairness.
4. **Draw Winners:** Conduct a random draw to select the winners from the filtered list of retweeters.

## Tech Stack

- **Tailwind CSS:** Utilized for designing and styling the user interface with a utility-first CSS framework.
- **TypeScript:** Adds static type definitions to JavaScript, enabling more robust and maintainable code.
- **React:** The primary library for building the user interface, facilitating the creation of interactive components.
- **Axios:** Handles HTTP requests to interact with the Twitter API and retrieve data.
- **dotenv:** Manages environment variables securely, ensuring sensitive information such as API keys are not exposed.

## Key Features

- **Retweet Collection:** Gather a list of users who have retweeted a specific tweet.
- **Customizable Filters:** Apply filters to exclude bots or non-compliant users from the draw.
- **Random Winner Selection:** Randomly select winners from the filtered list of retweeters.

## Example Usage

1. **Enter Tweet Link/ID:** Provide the link or ID of the tweet you want to draw winners from.
2. **Fetch Retweeters:** Twitter Picker will fetch and display all users who have retweeted the tweet.
3. **Apply Filters:** Customize filters to exclude bots or apply other criteria.
4. **Draw Winners:** Conduct a random draw to select the winners.

## Benefits

- **Fair and Transparent:** Ensures that contests are fair and transparent by providing a clear process for winner selection.
- **Easy to Use:** Simple interface and straightforward process make it easy for anyone to create and manage contests.
- **Secure:** Utilizes environment variables to keep sensitive information secure.
