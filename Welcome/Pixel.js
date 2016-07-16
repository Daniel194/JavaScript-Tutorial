var array = "[[1032, 11, 82, 82], [902, 20, 78, 78], [22, 9, 77, 77 ], [372, 8, 64, 64], [192, 30, 81, 81 ], [550, 24, 82, 82], [516, 399, 88, 88 ], [25, 202, 99, 99], [856, 185, 73, 73 ], [690, 196, 89, 89], [674, 372, 93, 93 ], [862, 360, 89, 89], [353, 223, 68, 68 ], [528, 219, 80, 80], [1016, 366, 95, 95 ], [201, 384, 82, 82], [362, 381, 70, 70 ]]";

$('#logo').click(function () {
    var img = $('#logo').find('img');

    if ($(img).attr('src') == 'image/on.png') {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $(img).attr('src', 'image/off.png');
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $(img).attr('src', 'image/on.png');
    }
});


$('.myImg').click(function () {
    var img = $('#img01');
    $('#pictureModal').css('display', 'block');
    $(img).attr('src', this.src);
    $(img).attr('alt', this.alt);
    $('#caption').html(this.alt);

    var naturalHeight = this.naturalHeight;
    var naturalWidth = this.naturalWidth;
    var height = $(img).height();
    var width = $(img).width();

    var faces = JSON.parse(array);

    faces.forEach(function (item) {
        var marginLeft = (width * item[0]) / naturalWidth + (window.innerWidth - width) / 2;
        var marginTop = (height * item[1]) / naturalHeight + 100;
        var divWidth = (width * item[2]) / naturalWidth;
        var divHeight = (height * item[3]) / naturalHeight;

        var div = document.createElement("div");
        div.setAttribute('class', 'face');
        div.style.marginTop = marginTop.toString() + "px";
        div.style.marginLeft = marginLeft.toString() + "px";
        div.style.width = divWidth.toString() + "px";
        div.style.height = divHeight.toString() + "px";

        $(div).attr("data-toggle", "tooltip");
        $(div).attr("data-placement", "top");
        $(div).attr("title", "Face");

        $('#pictureModal').append(div);
    });

    $('[data-toggle="tooltip"]').tooltip();

});


$('#closePicture').click(function () {
    $('#pictureModal').css('display', 'none');
    $('.face').remove();
});


$('.add-picture').click(function () {
    $('#addPictureModal').css('display', 'block');
});


$('#closeAdd').click(function () {
    $('#addPictureModal').css('display', 'none');
});


$('.add').click(function () {
    $('#addPictureModal').css('display', 'none');
});

$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});