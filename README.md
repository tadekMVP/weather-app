# Simple Weather App
This small project was created as a part of Backbase Coding Challenge exercise.

## Running locally
To run this project first you need to do is create account at [OpenWeatherMap](https://openweathermap.org/) and get API key. Then in `src/environments/environments`, set `openWeatherApiKey` value to received API key. Next simply run `ng serve` and go to `http://localhost:4200/`.

## Description
Simple application that presents a list of 5 european cities and it's current weather. Clicking on list item unfolds a panel with current time, temperature and wind strength on top. On the bottom of that panel user is presented with a horizontally scrollable list of forecasts for next 48 hours.

## Technologies
Project was created in newest Angular version with Angular Material.

## Modules
Application was split into 2 modules.
1. `AppCommonModule` containing some reusable components defining structure of the application
2. `WeatherModule` with all the logic around weather display. This module is being lazy loaded after go to `/weather` route

## Services
In application i created 3 services that contain different logic
1. `AppHttpService` defined in `AppMomdule` that defines http methods (only `get` was needed in this case) 
2. `LocationService` with a `getLocations` method that returns a mocked list of 5 chosen locations. I decided to do it that way because I imagine that real forecasting application would have a service like that.
3. `WeatherService` that is used to communicate with OpenWeatherData API. Contains 2 simple `get` methods, both using static `buildUrl` method which adds essential params to query.

## Typing
Interfaces can be found in `src/app/weather/models`. They have only those properties that were used in this application.
 
## Tests
Unfortunately I have very little experience with testing as in my current project we do not test frontend code. That's why I decided not to write any tests at all - this is a skill i do not have.  
