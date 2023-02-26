# MedCare
Google Solution Challenge Project

## Development - Firebase
#### Download and Install
Install the firebase CLI tool via the following command for seamless development.
You must have `nodejs` installed.
```
npm i -g firebase-tools
```

Alternately, read the docs by Google for a more classical installation.

#### Login to Firebase
```
firebase login
```
This opens up your Google Accounts list.
Select the Google account associated with this project.

This account is goes by the name `Delicious Melody`.
This account has a profile picture of a cat.

#### Test locally using Firebase
Firebase emulator allows testing the entirety of the app locally.
```
firebase emulators:start
```
Your app `index.html` will be served from the `public/` directory.

You'll be able to view your page on the `hosting` port.

See [`firebase.json`](firebase.json) for config information.

#### Deploy online
A GitHub CI/CD action has been set up to deploy the app automatically to the cloud.

All you need to do is create a new branch called `main-deploy` from `main`, and done.

Alternately, you can merge to `main-deploy` if it already exists on GitHub.

#### Preview
Please see the Firebase docs and add the instructions here.

#### Foot Notes
Please move the Firebase related instructions to a seperate file named `docs/CONTRIBUTE.md` and create an index in the `README.md`.

#### Regarding Android
There exists an Android app template at [CinexSoft/sozialmapk](https://github.com/CinexSoft/sozialmapk).

This template is suited for giving a husk of an Android app to a web app to turn it into a more parmanent install, with some additional features.

This means, Android is a valid technology for use in this project.
