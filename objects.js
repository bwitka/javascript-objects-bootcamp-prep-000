var playlist = {
  'John Lennon': "imagine", 
};

function updatePlaylist(playlist, artistName, songTitle) {
  
  return playlist;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
  return playlist;
}