
window.mount = () => {
console.log("wish u would work xx")
jQuery(function($){
    $.datepicker.regional['pt-BR'] = {
        closeText: 'Fechar',
        prevText: '&#x3c;Anterior',
        nextText: 'Pr&oacute;ximo&#x3e;',
        currentText: 'Hoje',
        monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
        'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
        monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
        'Jul','Ago','Set','Out','Nov','Dez'],
        dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
        dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
        dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 0,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''};
        $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
    });
$(function() {
    $(".datepicker-js").datepicker();
});

// Altura box responsive
$(document).ready(function () {
    $('.boxHeight').matchHeight();
});

// Animate toggle X
$(document).ready(function () {
    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("active");
    });
});

// Hover efeito by BishFish
$('.copyright .logo-by').hover(
    function(){ $(this).addClass('animated swing') },
    function(){ $(this).removeClass('animated swing') }
    )

// Sidebar animate
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $(".wrapper").toggleClass("active");
});

// Fechar sidebar mobile
(function($) {
    var $window = $(window),
    $html = $('.wrapper');

    function resize() {
        if ($window.width() < 768) {
            return $html.removeClass('active');
        }
        $html.addClass('active');
    }
    
    $window
    .resize(resize)
    .trigger('resize');
})(jQuery);

// Add overlay mobile 767px
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("body").toggleClass("overlay");
});

// Tooltip
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

// Altura modal responsiva
$('.modal').on('show.bs.modal', function () {
    $('.modal-body').css('max-height',$( window ).height()*0.8);
});

//Mask
$(document).on("focus", ".input-tel", function() {
    $(this).inputmask('(99) 9999-999[9]',{
        "clearIncomplete": true
    });
});
$(document).on("focus", ".input-cel", function() {
    $(this).inputmask('(99) 99999-999[9]',{
        "clearIncomplete": true
    });
});
$(document).on("focus", ".input-data", function() {
    $(this).inputmask('99/99/9999',{
        "clearIncomplete": true
    });
});
$(document).on("focus", ".input-cep", function() {
    $(this).inputmask('99 999-999',{
        "clearIncomplete": true
    });
});
$(document).on("focus", ".input-hora", function() {
    $(this).inputmask('99:99',{
        "clearIncomplete": true
    });
});
$(document).on("focus", ".input-cpf", function() {
    $(this).inputmask('999.999.999-99',{
        "clearIncomplete": true
    });
});

// Input File
$(document).ready(function(){
    $('.custom-input-file').simpleFileInput({
        placeholder : 'Anexar arquivo »',
        buttonText : '<i class="fa fa-folder"></i>',
        allowedExts : ['png', 'gif', 'jpg', 'jpeg', 'pdf']
    });

    $('.js-file-img').simpleFileInput({
        placeholder : 'Enviar imagem »',
        buttonText : '<i class="fa fa-picture-o"></i>',
        allowedExts : ['png', 'gif', 'jpg', 'jpeg']
    });
})

// Color
$(function() {
    $('.js-colorpicker').colorpicker();
    $('.colorselector').colorselector();
});

// Scroll tabs
$('ul.nav-tabs li a').on('shown.bs.tab', function (e) {
    var href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, 1200);
});

// Editor TinyMCE
tinymce.init({
    selector: ".editor-tinymce-js",
    language: 'pt_BR',
    height: 300,
    plugins: [
    "advlist autolink autosave link image lists charmap print preview hr anchor pagebreak",
    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
    "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker textpattern"
    ],

    toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
    toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link unlink anchor image media code | insertdatetime preview | forecolor backcolor",
    toolbar3: "table | hr removeformat | subscript superscript | charmap emoticons | print fullscreen | ltr rtl | visualchars visualblocks nonbreaking template pagebreak restoredraft",
    content_css: [
    '//fonts.googleapis.com/css?family=Dosis:200,300,400,500,600,700,800',
    '//www.tinymce.com/css/codepen.min.css'],

    menubar: false,
    toolbar_items_size: 'small',
    
    init_instance_callback: function () {
        window.setTimeout(function() {
            $("#div").show();
        }, 1000);
    }
});

// Menu active class
// $(function(){
//     var url = window.location.pathname;  
//     var activePage = url.substring(url.lastIndexOf('/')+1);
//     $('.dropdown-menu li a').each(function(){  
//         var currentPage = this.href.substring(this.href.lastIndexOf('/')+1);
//         if (activePage == currentPage) {
//             $(this).parent().addClass('active'); 
//         } 
//     });
// });

function sidebarOpenSubmenu(){
    console.log("aaaa");
    $(document).ready(function() {
        $(".dropdown-menu li.active" ).closest('.dropdown').addClass('open');
    });
}
// Deixar aberto o submenu ativo

// Textarea "autoExpand"
$(document)
.one('focus.autoExpand', 'textarea.autoExpand', function(){
    var savedValue = this.value;
    this.value = '';
    this.baseScrollHeight = this.scrollHeight;
    this.value = savedValue;
})
.on('input.autoExpand', 'textarea.autoExpand', function(){
    var minRows = this.getAttribute('data-min-rows')|0, rows;
    this.rows = minRows;
    rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
    this.rows = minRows + rows;
});

/*
    Scrollbar custom
    http://manos.malihu.gr/jquery-custom-content-scroller/
*/

$(window).load(function() {
    if ($(".js-scrollbar-h").length) {
        var scrollHandler = $.noop,
        scrollHandlerWrapper = function() {
            scrollHandler();
        };

        $(".js-scrollbar-h").mCustomScrollbar({
            axis: "x",
            theme: "my-theme",
            advanced: { autoExpandHorizontalScroll: true }
        });
    }

    $(".sidebar-nav").mCustomScrollbar({
        axis: "y",
        theme: "minimal-dark"
    });
});

// Preview img input file
function readImage() {

    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("previewImgFile").src = e.target.result;
        };       
        file.readAsDataURL(this.files[0]);
    }
    $('.fileCustom').addClass('active'); // add class active img

    $("a.limpar-file").click(function () { // limpar campo
        $("#imgChooser").val("");
        $('.fileCustom').removeClass('active');
    });
}

// File href
$(".js-file-link").on('click', function (e) {
    e.preventDefault();
    $(".js-file:hidden").trigger('click');
    $(this).blur();
});

//document.getElementById("imgChooser").addEventListener("change", readImage, false);


$(".js-add-prescricao").click(function(){
    $("#addPrescricao").show()
});
$(".js-add-lembrete").click(function(){
    $("#addLembrete").show()
});


$(".js-card-recusar").on('click', function() {
    $(this).blur();
    swal({
        type: 'warning',
        title: "Atenção",
        text: "Deseja realmente recusar está consulta?",
        showCancelButton: true,
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não'

    }).then((result) => {
        if (result.value) {
            $(this).closest('.col-xs-12').find('.card').addClass("js-desabled");
            $(this).blur();
        }
    })
});


}

window.mount();
