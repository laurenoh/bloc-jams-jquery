{
  $('#album-title').text(album.title);
  $('img#album-cover-art').attr('scr', album.albumArtUrl);
  $('.artist').text(album.artist);
  $('#release-info').text(album.releaseInfo);
}
