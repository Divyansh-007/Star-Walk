function displayImage(data){
    $('#image').attr('src',data.url);
    $('#image').css({
        height : '100%',
        width : '100%'
    });
    console.log(data.title);
    $('#title').text(data.title);
}

$.ajax({
    url : 'https://api.nasa.gov/planetary/apod',
    method : 'GET',
    success : displayImage,
    data : {
        api_key : 'QbPYYs3lTNd0hVtMo1Y9lwLUmdILdd7gR3g2PpzR',
        thumbs : 'true',
    }
});