# ChatBot

Angular app which shows information that is being pulled from wit.ai to match the typed utterance.

## Development server

Run `npm install`, then `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Enivronment settings

If required, please update environment settings in environments\environment.ts
  witAi: {
    witAiClientId: 'NWWAVNE4P5J7OBHQOCS5KQOEULHYJKIQ',
    witAiGetInfoUrl: 'https://api.wit.ai/message'
  }

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
