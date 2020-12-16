### Shoppify

#### Running the project

Clone this project

`git clone https://github.com/shashwatsahu/Shopping.git `

- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer

> Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ``` yarn ``` command in a terminal opened in the project folder.
> This command will look into the *package.json* file and install all the dependencies listed here.

- Install react-native-cli globally on your computer
```
yarn global add react-native-cli
```

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

> Please add local.properties file in this project and it should contains your Android Sdk path 
> e.g. sdk.dir = /Users/${folder name}/Library/Android/sdk

- Then, run the project in executing on your project folder:

- Then run `npm install` or `yarn`

```
react-native run-android
```

### iOS steps

## Run Simulator

```
react-native run-ios
```

## Run Real Device

- Open Xcode (`cd ios` and `open ShoppingApp.xcodeproj`)
- Select your iPhone and click play button

