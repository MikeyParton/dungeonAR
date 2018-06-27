# dungeonAR

## Install Dependencies
```
/usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install node
brew install watchman
npm install -g react-native-cli
npm install -g ngrok
```

## Download the Viro Media app
https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8 (IPhone)
https://play.google.com/store/apps/details?id=com.viromedia.viromedia&hl=en_AU (Android)

Clone the repo and run
```
npm install
npm start
```

In the console you will see an NGrok package manager endpoint url.
Open the viromedia app, and in the menu select Enter Testbed. At the prompt enter the ngrok url from your console.
Now you're connected to the dev server!

Shake your device to bring up the debugger menu. You can enable live reloading.

## Resources

React Viro Docs

- https://github.com/viromedia/viro
- https://docs.viromedia.com/

A cool tutorial to follow
- https://arvrjourney.com/augmented-reality-with-react-native-15219f36e3f2
