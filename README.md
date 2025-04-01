# Notification management system

This is a persistent notification system that allows for managing notifications across multiple instance with synchronization and persistance across page reloads.

## Features

- :white_check_mark: Display and manage notifications (success, error, info)
- :white_check_mark: Persist notifications across page reloads (using localStorage)
- :white_check_mark: Support multiple instance of notification widget, all synchronized
- :white_check_mark: Namespace support for different notification contexts
- :white_check_mark: Unread notification counter
- :white_check_mark: Clean, responsive Ui with TailwindCSS

## Instalation

After cloning the repository, you need to install all the necessary dependency:

```sh
npm install
```

Run the dev server for your app, use:

```sh
npm run dev
```

Run linter:

```sh
npm run lint
```

Run unit test:

```sh
npm run test:unit
```

Create a production bundle:

```sh
npm run build
```
