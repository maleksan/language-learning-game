# Language Learning Question Game
Test
An interactive web application designed to help users learn a new language through a question game. The application generates vocabulary and grammar questions in a game format, based on the selected language and level of proficiency. Progress is tracked and the questions adapt based on user performance, providing a dynamic and personalized learning experience.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Usage](#usage)
3. [Contribution](#contribution)
4. [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js v14.0.0 or later
- npm package manager
- PlanetScale CLI

### Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your_username/LanguageLearningQuestionGame.git
```

2. Navigate to the project directory:

```bash
cd LanguageLearningQuestionGame
```

3. Install the required dependencies:

```bash
npm install
```

4. Setup your PlanetScale database following their [Getting Started Guide](https://planetscale.com/guides/getting-started).

5. Create a `.env.local` file and update the following line with your PlanetScale connection string:

```
NEXT_PUBLIC_PLANETSCALE_DB=<your-planetscale-connection-string>
```

## Usage

Start the development server:

```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

Select a language and your level of proficiency. The application will then start the game, generating vocabulary and grammar questions for you to answer. Your progress will be tracked and the difficulty level of the questions will be adjusted accordingly.

## Contribution

If you wish to contribute, please follow these steps:

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
