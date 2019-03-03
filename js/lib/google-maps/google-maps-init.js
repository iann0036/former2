// Настройки маркера
var mapMarker = new google.maps.MarkerImage(
                    'img/google-map-marker.png', // my 16x48 sprite with 3 circular icons
                    new google.maps.Size(28,28),
                    null,
                    null,
                    new google.maps.Size(28,28)
                );

// Инициализация первой карты (France)
function initMap() {
    var secheltLoc = new google.maps.LatLng(48.863807, 2.339659);

    var myMapOptions = {
        zoom: 4,
        center: secheltLoc,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var theMap = new google.maps.Map(document.getElementById("map_canvas"), myMapOptions);


    var marker = new google.maps.Marker({
        position: {lat: 48.863807, lng: 2.339659},
        map: theMap,
        icon: mapMarker
    });

    var myOptions = {
        content:
            "<p><i class='font-icon font-icon-pin'></i>16, Yafo Street, 94142 PARIS</p>" +
            "<p><i class='font-icon font-icon-phone'></i>(+972 2) 629 06 32</p>" +
            "<p><i class='font-icon font-icon-mail'></i>johndoe@gmail.com</p>",
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-140, 0),
        zIndex: null,
        boxStyle: {
            width: "280px"
        },
        closeBoxURL: "img/close.png",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    };

    google.maps.event.addListener(marker, "click", function (e) {
        ib.open(theMap, this);
    });

    var ib = new InfoBox(myOptions);

    ib.open(theMap, marker);
}

// Инициализация второй карты (USA)
function initMap2() {
    var secheltLoc = new google.maps.LatLng(38.898526, -77.036884);

    var myMapOptions = {
        zoom: 4,
        center: secheltLoc,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var theMap = new google.maps.Map(document.getElementById("map_canvas_2"), myMapOptions);


    var marker = new google.maps.Marker({
        position: {lat: 38.898526, lng: -77.036884},
        map: theMap,
        icon: mapMarker
    });

    var myOptions = {
        content:
            "<p><i class='font-icon font-icon-pin'></i>Pennsylvania Ave NW, Washington, DC 20502, USA</p>" +
            "<p><i class='font-icon font-icon-phone'></i>(+972 2) 629 06 32</p>" +
            "<p><i class='font-icon font-icon-mail'></i>johndoe@gmail.com</p>",
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-140, 0),
        zIndex: null,
        boxStyle: {
            width: "280px"
        },
        closeBoxURL: "img/close.png",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    };

    google.maps.event.addListener(marker, "click", function (e) {
        ib.open(theMap, this);
    });

    var ib = new InfoBox(myOptions);

    ib.open(theMap, marker);
}

// Инициализация третьей карты (Singapore)
function initMap3() {
    var secheltLoc = new google.maps.LatLng(1.357974, 103.866923);

    var myMapOptions = {
        zoom: 7,
        center: secheltLoc,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var theMap = new google.maps.Map(document.getElementById("map_canvas_3"), myMapOptions);


    var marker = new google.maps.Marker({
        position: {lat: 1.357974, lng: 103.866923},
        map: theMap,
        icon: mapMarker
    });

    var myOptions = {
        content:
            "<p><i class='font-icon font-icon-pin'></i>Singapore</p>" +
            "<p><i class='font-icon font-icon-phone'></i>(+972 2) 629 06 32</p>" +
            "<p><i class='font-icon font-icon-mail'></i>johndoe@gmail.com</p>",
        disableAutoPan: false,
        maxWidth: 0,
        pixelOffset: new google.maps.Size(-140, 0),
        zIndex: null,
        boxStyle: {
            width: "280px"
        },
        closeBoxURL: "img/close.png",
        infoBoxClearance: new google.maps.Size(1, 1),
        isHidden: false,
        pane: "floatPane",
        enableEventPropagation: false
    };

    google.maps.event.addListener(marker, "click", function (e) {
        ib.open(theMap, this);
    });

    var ib = new InfoBox(myOptions);

    ib.open(theMap, marker);
}


$(document).ready(function() {

    initMap();

    // Расчет высоты карты
    function mapContactsHeight() {
        $('.contacts-page').each(function(){
            var box = $(this),
                boxHeader = box.find('.box-typical-header'),
                rightCol = box.find('.contacts-page-col-right:visible'),
                map = box.find('.map');

            if($(window).width() > 700) {
                // Если обычное состояние
                if (!box.hasClass('box-typical-full-screen')) {
                    map.height(
                        $(window).height() -
                        parseInt($('.page-content').css('padding-top')) -
                        parseInt($('.page-content').css('padding-bottom')) -
                        parseInt(box.css('margin-bottom')) - 2 -
                        boxHeader.outerHeight()
                    );
                } else {
                    // Если развернуто на весь экран
                    map.height(
                        $(window).height() - 2 - boxHeader.outerHeight()
                    );
                }

                if (map.height() < rightCol.outerHeight()) {
                    map.height(rightCol.outerHeight())
                }
            }
        });
    }

    mapContactsHeight();

    $(window).resize(function(){
        mapContactsHeight();
    });

    // При переключении вкладок
    $('a[href="#tab-contact-1"]').on('shown.bs.tab', function (e) {
        mapContactsHeight();
        initMap();
    });

    $('a[href="#tab-contact-2"]').on('shown.bs.tab', function (e) {
        mapContactsHeight();
        initMap2();
    });

    $('a[href="#tab-contact-3"]').on('shown.bs.tab', function (e) {
        mapContactsHeight();
        initMap3();
    });

    // Развернуть на весь экран
    $('.contacts-page').each(function(){
        var parent = $(this),
            btnExpand = parent.find('.action-btn-expand'),
            classExpand = 'box-typical-full-screen';

        btnExpand.click(function(){
            if (parent.hasClass(classExpand)) {
                parent.removeClass(classExpand);
                $('html').css('overflow','auto');
                parent.find('.tab-content').height('auto').css('overflow','visible');

                console.log('close');
            } else {
                parent.addClass(classExpand);
                $('html').css('overflow','hidden');
                parent.find('.tab-content').css('overflow','auto').height(
                    $(window).height() - 2 - parent.find('.box-typical-header').outerHeight()
                );

                console.log('open');
            }
            mapContactsHeight();
            initMap();
            initMap2();
            initMap3();
        });
    });


});



