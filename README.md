# gemchat

A simple and easy-to-use template to get started with building a chat bot using the **Gemini API** and **Node.js**.

## Features

- Easily executable in a local Node.js environment.
- Secure API key management using **dotenv**.
- A clear project structure for simple communication with the Gemini API.

---

## Getting Started

This template is perfect for anyone who wants to start developing their first AI chatbot.

### Prerequisites

- Node.js v18 or later
- npm

### Setup

1.  **Clone the repository**
    ```bash
    git clone https://github.com/auroraund/gemchat.git
    cd gemchat
    ```
2.  **Install the necessary packages**
    ```bash
    npm install
    ```
3.  **Set up your API key**
    - Get your Gemini API key from Google AI Studio.
    - Create a file named `.env` in the root of your project.
    - Add the following line to your `.env` file:
      ```
      GEMINI_API_KEY=your-api-key
      ```

---

## Usage

Run the chatbot from your terminal:

```bash
node main.js
```

You can modify the prompt for the AI by editing the main.js file.

## License

This project is licensed under the MIT License.
