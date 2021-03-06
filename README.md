# ffmpeg-static-electron-react

This is a modified version of ffmpeg-static by Eugene Ware. It allows you to use ffmpeg-static within an a renderer process in Electron and React.

**[ffmpeg](https://ffmpeg.org) static binaries for Mac OSX and Linux and Windows.**

Supports macOS (64-bit), Linux (32 and 64-bit) and Windows (32 and 64-bit). The current ffmpeg version is `4.0`.

*Note:* The version of `ffmpeg-static` follows [SemVer](http://semver.org). When releasing new versions, **we do *not* consider breaking changes in `ffmpeg` itself**, but only the JS interface (see below). To stop `ffmpeg-static` from breaking your code by getting updated, [lock the version down](https://docs.npmjs.com/files/package.json#dependencies) or use a [lockfile](https://docs.npmjs.com/files/package-lock.json).

## Installation

This module is installed via npm:

``` bash
$ npm install ffmpeg-static-electron-react
```

## Example Usage

Returns the path of a statically linked ffmpeg binary on the local filesystem.

``` js
var ffmpeg = require('ffmpeg-static');
console.log(ffmpeg.path);
// /Users/eugeneware/Dropbox/work/ffmpeg-static/bin/darwin/x64/ffmpeg
```

## Sources of the binaries

[The build script](https://github.com/ddlinkz/ffmpeg-static-electron-react/blob/master/build/index.sh) downloads binaries from these locations:

- [Windows builds](https://ffmpeg.zeranoe.com/builds/win64/static/)
- [Linux builds](https://johnvansickle.com/ffmpeg/)
- [macOS builds](https://evermeet.cx/pub/ffmpeg/)

## Building the project

The `unzip`, `tar` and `7zr` CLI executables need to be installed. On macOS, use `brew install p7zip gnu-tar`. You must copy the build script into a `build/index.sh` file then at the base of the repository, run:

``` bash
$ npm run-script build
```
