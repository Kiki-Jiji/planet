# Commentary

This is a desktop app for writing commentary for statistical releases. It creates standalone binaries which can be installed on your machine. 

It uses Electron to run the App and React as a dynamic frontend.

> It is in development

## Development

In a terminal run

```terminal
npm run serve
```
This will start a server to render the react frontend in real time which is useful for development. You can see the react frontend by navigating to `localhost::3000`. This can be used to edit the frontend in real time BUT this thread will not be able to access the Electron and Node runtime so any interaction with Node will crash the browser app. 

In a second terminal run

```terminal
npm run
```

This will start Electron with the React frontend running live. You can edit the frontend and backend in this version. 