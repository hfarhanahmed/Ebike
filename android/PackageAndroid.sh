#!/bin/sh
#  ******************** BASIC PACKGING FOR ANDROID APP ********************

# ENV_VARIABLES
envionmentVariables(){

# PATH
pwd

# PROJECT_PATH
android_project_path=$(pwd)

# APK_PATH
apk_dir_path="$android_project_path/app/build/outputs/apk"
echo "$apk_dir_path"

# RELEASE_APK_PATH
apk_path="$apk_dir_path/app-release.apk"
}

apkBuild(){
# REMOVE_PATH
rm -rf $apk_path
echo "apk_path DELETED"
cd "$android_project_path"
echo "\033[37;45mPACKGING STARTED 🎉  🎉  🎉 \033[0m"
sleep 1

# START PACKGING
./gradlew assembleRelease

# APK_PATH（app_release.apk)
echo "\033[37;45mYOUR .apk file AVAILABLE AT THE PATH BELOW: \033[0m"
echo "$apk_path"
}

envionmentVariables
apkBuild

#TODO: Later will implement deliver build to PLAYSTORE/FIREBASE APP DISTRIBUTION