// Modified ffmpeg-static
// Returns correct OS and Architecture

// os now asks for window.require
var os = window.require('os')
var path = require('path')

// Platform and arch are strings now
var platform = os.platform + ''
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
  throw new Error('Unsupported platform.')
}

var arch = os.arch + ''
if (platform === 'darwin' && arch !== 'x64') {
  throw new Error('Unsupported architecture.')
}

var ffmpegPath = path.join(
  'node_modules',
  'ffmpeg-static-electron-react',
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'ffmpeg.exe' : 'ffmpeg'
)

exports.path = ffmpegPath;