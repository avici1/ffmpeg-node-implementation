const spawn = require('child_process').spawn
const bitrate = '96K';
spawn('ffmpeg', ['-i', 'sample3.wav', '-b:a', bitrate, 'sample4.mp3']);

