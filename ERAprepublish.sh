#!/usr/bin/env bash

cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/Dropbox/ERAProject/my-release-key.keystore platforms/android/ant-build/CordovaApp-release-unsigned.apk alias_name
~/android-sdk-macosx/build-tools/21.1.2/zipalign -v 4 platforms/android/ant-build/CordovaApp-release-unsigned.apk ERAProject.apk