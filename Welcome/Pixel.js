$('#logo').click(function () {
    var img = $('#logo img').attr('src');

    if (img == 'image/on.png') {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        $('#logo img').attr('src', 'image/off.png');
    } else {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        $('#logo img').attr('src', 'image/on.png');
    }
});


$('.myImg').click(function () {
    $('#myModal').css('display', 'block');
    $('#img01').attr('src', this.src);
    $('#img01').attr('alt', this.alt);
    $('#caption').html(this.alt);
});


$('#close').click(function () {
    $('#myModal').css('display', 'none');
});