# mobile-core

Source code for our mobile application. Written using [react-native](https://reactnative.dev/).

## Setup

### Prerequisites
The following has to be installed:
- [git](https://git-scm.com/downloads)
- [nodejs](https://nodejs.org/en/download)

Clone the repository using
```
git clone https://github.com/the-v-cube/mobile-core.git
```
Then simply
```
cd mobile
npm install 
npm run build
npm link
npm start
```
Scan the qr code using the [expo go app](https://expo.dev/client) while being on the same wifi network as your pc/laptop and boom!

## Features
As per `PART A` of our timeline, we're simply going to have a single button which controls the `on` and `off` state of a relay in our micro-controller.

This build as of now follows this plan and has the following features required to meet the requirements as of 24th January 2024:

- [x] a simple button
- [ ] connects to the micro-controller
- [ ] controls the relay!

