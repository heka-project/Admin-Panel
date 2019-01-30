jQuery(document).ready(function ($) {
    var path = window.location.pathname.split('/').pop();

    if (path === '') {
        path = 'visitorHome.aspx';
    }

    var target = $('ul li a[href="' + path + '"]');
    target.addClass('active');
});
