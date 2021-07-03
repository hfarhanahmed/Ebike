# Introduction

TODO: Give a short introduction of your project. Let this section explain the objectives or the motivation behind this project.

### Before you start

# OTOZ

- Read our [**Style Guide**](https://netsoltech.visualstudio.com/OTOZ/_git/otoz-react-native/commit/c2dbb59bd20d3e9af5383461dc4f0c725d54c83d/?_a=contents&path=/Javascript-style-guide.md)
- DO NOT use ~~**NPM**~~, We use [**Yarn**](https://yarnpkg.com/en/docs/getting-started)

## Prerequisites

-------------

- [**Android Studio**](https://developer.android.com/studio)
- [**Xcode**](https://itunes.apple.com/my/app/xcode/id497799835?mt=12) + [**CocoaPods**](https://guides.cocoapods.org/using/getting-started.html)
- [**Yarn**](https://yarnpkg.com/lang/en/docs/install/)
- **Node.js v8.+ LTS** recommend using [**NVM**](https://github.com/creationix/nvm#installation-and-update) | direct [download](https://nodejs.org/dist/v12.16.3/node-v12.16.3.pkg)

## Getting started

To init the project, run the following commands:

```bash
# install dependencies
yarn

yarn ios (Run on iOS)

yarn android (Run on Android)

## Special Scripts execute with one command
# Clean iOS Project
yarn clean:ios

# Clean Android Project
yarn clean:android

# Clean Project
yarn clean:all

# Deep Clean for whole project
yarn deepclean

# Generate debug APK for Android
yarn generate:apk

# Project Structure
|-- OTOZ
    |-- README.md
    |-- Javascript-style-guide
    |-- package.json
    |-- App
        |-- Config
        |-- Constants
        |-- Data
              |--Local (Storage)
	      |--Remote (Endpoints/S3)
	      |--Manifest
	      |--Middleware (Network call related - e.g logging)
        |-- external (URLS - webdomain)
        |-- Hooks (Custom hooks) 
        |-- Models (Filter screen)
        |-- Services (AXIO)
        |-- Navigation
            |-- Components
            |-- Contexts
            |-- Screens
		    |-- Generic Components (reuseable across different screens)
		    |-- Listing / Search
			  |-- Components
            |-- Navigation Container
        |-- Themes
		|-- Fonts/Icons/Styles
        |-- Translation
		|-- EN/FR/DE
        |-- User
        |-- Utils
	|-- Views
            |-- Shadow Views(Any Custom view)
	    |-- Webviews


# More information on CLI
```bash

yarn start --help

yarn android --help

yarn ios --help
```

## Provisioning Profile

TODO: Need to Create certificates in apple developer portal and update this link

# Build and Test

TODO: Describe and show how to build your code and run the tests.
