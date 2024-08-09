
# React Event Calendar

[![npm version](https://badge.fury.io/js/react-event-calendar.svg)](https://badge.fury.io/js/react-event-calendar)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Introduction

`react-event-calendar` is a customizable and lightweight calendar component for React applications, allowing you to display events seamlessly within your app. This package leverages the flexibility of `date-fns` for date manipulation and is styled with basic CSS to allow easy customization.

## Features

- Display events on a monthly calendar view.
- Navigate between months and years.
- Highlight days with events.
- Easy customization of styles and events.

## Installation

To install `custom-react-event-calendar`, use npm or yarn:

```bash
npm install custom-react-event-calendar
```

or

```bash
yarn add custom-react-event-calendar
```

## Usage

Here is a basic example of how to use `custom-react-event-calendar` in your React application:

```typescript
import React from 'react';
import Calendar from 'custom-react-event-calendar';

const App: React.FC = () => {
  const events = [
    { date: new Date(2024, 7, 6), title: 'Audit', description: 'Annual financial audit' },
    { date: new Date(2024, 7, 15), title: 'Holiday', description: 'Independence Day' },
    { date: new Date(2024, 7, 12), title: 'Announcement', description: 'New company policy announcement' },
  ];

  return (
    <div>
      <h1>Event Calendar</h1>
      <Calendar events={events} />
    </div>
  );
};

export default App;
```

### Props

- **`events`**: An array of event objects to be displayed on the calendar. Each event object should have the following structure:

  ```typescript
  interface Event {
    date: Date;
    title: string;
    description: string;
  }
  ```

## Customization

You can customize the calendar's appearance by overriding the default styles with your own CSS. Here are some class names you can target:

- `.calendar-container`
- `.calendar-header`
- `.calendar-month`
- `.calendar-day`
- `.calendar-event`
- `.highlight-event-day`

## Development

To contribute to this project, follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork to your local machine.
3. Create a new branch for your feature or bugfix.
4. Make your changes and commit them with descriptive commit messages.
5. Push your changes to your fork.
6. Submit a pull request to the original repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project uses [React](https://reactjs.org/) for building the user interface.
- Date manipulation is handled by [date-fns](https://date-fns.org/).

## Contact

For questions or feedback, please reach out to (mailto:vijaykrishnan1496@gmail.com).
