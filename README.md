# superbird-doom
![doom](https://user-images.githubusercontent.com/6026391/197948690-672939b5-4459-4d39-a355-9fa2c00c7ccb.gif)

Doom ([yvesgurcan/jsdoom](https://github.com/yvesgurcan/jsdoom)) on [Spotify Car Thing](https://carthing.spotify.com/).

Thanks to [frederic/superbird-bulkcmd](https://github.com/frederic/superbird-bulkcmd) and [pajowu/superbird-custom-webapp](https://github.com/pajowu/superbird-custom-webapp) for making this possible.

## Setup
### Prepare the Car Thing
Enable adb by following the steps in [frederic/superbird-bulkcmd](https://github.com/frederic/superbird-bulkcmd) to [put the device in USB burning mode](https://github.com/frederic/superbird-bulkcmd#guide--u-boot-shell-over-usb-usb-burning-mode) and [enable ADB](https://github.com/frederic/superbird-bulkcmd#boot-kernel-from-usb-to-enable-adb-access).

### Build and deploy doom for superbird
Clone the repository:

`git clone https://github.com/adriancampos/superbird-doom/`


Run `./deploy.sh` to build and (temporarily) deploy doom on the Car Thing.


## Resources

* <https://github.com/frederic/superbird-bulkcmd>
* <https://github.com/pajowu/superbird-custom-webapp>
* <https://github.com/yvesgurcan/jsdoom>
