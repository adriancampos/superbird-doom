#!/bin/bash

npm i
npm run build

# See https://github.com/pajowu/superbird-custom-webapp/blob/main/scripts/load_webapp.sh
adb shell 'mountpoint /usr/share/qt-superbird-app/webapp/ > /dev/null && umount /usr/share/qt-superbird-app/webapp'
adb shell 'rm -rf /tmp/webapp'
adb push build/ /tmp/webapp
adb shell 'mount --bind /tmp/webapp /usr/share/qt-superbird-app/webapp'
adb shell 'supervisorctl restart superbird'

