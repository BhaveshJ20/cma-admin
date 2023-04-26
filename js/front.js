$(document).ready(function () {


    // ------------------------------------------------------- //
    // Sidebar
    // ------------------------------------------------------ //
    $('.sidebar-toggler').on('click', function () {
        $('.sidebar').toggleClass('shrink show');
        $('.sidebar-toggler').toggleClass('show');
    });

    // ------------------------------------------------------- //
    // Custom Scrollbar
    // ------------------------------------------------------ //

    if ($(window).outerWidth() > 992) {
        $(".sidebar").mCustomScrollbar({
            scrollInertia: 200
        });
    }

    // ------------------------------- //
	// CLASS FOR MAC OS.JS
    // ------------------------------- //

    if(navigator.userAgent.indexOf('Mac') > 0){
        $('body').addClass('mac-os');
    }

    // ------------------------------- //
	// Dropify.js
    // ------------------------------- //
    $('.dropify').dropify();

    $('.profile-photo').dropify({
        messages: {
            'default': ''
        }
    });

    $('.education-addmore').dropify({
        messages: {
            'default': '<div class="dropify-message f-bold text-primary mt-3">Add more</div>'
        }
    });

    $('.workhistory-add').dropify({
        messages: {
            'default': '<div class="dropify-message f-bold text-primary mt-3">Add</div>'
        }
    });

    $('.skill-category').dropify({
        messages: {
            'default': '<div class="dropify-message f-bold text-primary mt-3">Add new skill category</div>'
        }
    });

    $('.add-project-img').dropify({
        messages: {
            'default': '<div class="dropify-message f-bold text-primary mt-3">Add project images</div>'
        }
    });
    
    $('.add-technology').dropify({
        messages: {
            'default': ''
        }
    });

    $('.add-more-projects').dropify({
        messages: {
            'default': '<div class="dropify-message f-bold text-primary mt-3">Add more projects </div>'
        }
    });

    $('.drag-drop-addmore').dropify({
        messages: {
            'default': '<div class="dropify-message f-bold text-primary mt-3">Add more </div>'
        }
    });
    
    
    
    

    // ------------------------------- //
	// bootstrap-datepicker.js
    // ------------------------------- //
    $('.datepicker').datepicker({
        format: 'D, M d, yyyy',
        autoclose: true
    });

    // ------------------------------------------------------ //
    // For demo purposes, can be deleted
    // ------------------------------------------------------ //

    var stylesheet = $('link#theme-stylesheet');
    $( "<link id='new-stylesheet' rel='stylesheet'>" ).insertAfter(stylesheet);
    var alternateColour = $('link#new-stylesheet');

    if ($.cookie("theme_csspath")) {
        alternateColour.attr("href", $.cookie("theme_csspath"));
    }

    $("#colour").change(function () {

        if ($(this).val() !== '') {

            var theme_csspath = 'css/style.' + $(this).val() + '.css';

            alternateColour.attr("href", theme_csspath);

            $.cookie("theme_csspath", theme_csspath, { expires: 365, path: document.URL.substr(0, document.URL.lastIndexOf('/')) });

        }

        return false;
    });

});


Cookies.set('active', 'true');