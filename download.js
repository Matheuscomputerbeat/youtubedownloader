function downloadSong() {
    var youtubeLink = document.getElementById('youtubeLink').value;
    var videoId = youtubeLink.split('v=')[1];
    var downloadArea = document.getElementById('downloadArea');

    if (videoId) {
        var downloadUrl = 'https://www.y2mate.com/youtube/' + videoId + '/download/mp3';
        downloadArea.innerHTML = '<a href="' + downloadUrl + '" download>Download da Música</a>';
    } else {
        downloadArea.innerHTML = 'Por favor, insira um link válido do YouTube.';
    }
}
