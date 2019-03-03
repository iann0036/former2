$(document).ready(function() {
    $("#range-slider-1").ionRangeSlider();

    $("#range-slider-2").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 1000,
        to: 9000,
        type: 'double',
        prefix: "$",
        grid: true,
        grid_num: 10
    });

    $("#range-slider-3").ionRangeSlider({
        min: 0,
        max: 100,
        from: 50,
        step: 10,
        grid: true,
        grid_num: 10
    });

    $("#range-slider-4").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 1000,
        to: 9000,
        step: 500,
        type: 'double',
        postfix: "$",
        grid: true,
        grid_num: 10
    });

    $("#range-slider-5").ionRangeSlider({
        from: 30,
        to: 60,
        type: 'double'
    });

    $("#range-slider-6").ionRangeSlider({
        type: "double",
        min: 0,
        max: 100,
        from: 20,
        from_min: 10,
        from_max: 30,
        from_shadow: true,
        to: 80,
        to_min: 70,
        to_max: 90,
        to_shadow: true,
        grid: true,
        grid_num: 10
    });

    $("#range-slider-7").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 2000,
        to: 8000,
        type: 'double',
        grid: true,
        grid_num: 10,
        hide_min_max: true,
        hide_from_to: true
    });

    $("#range-slider-8").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 2000,
        to: 8000,
        type: 'double',
        grid: true,
        grid_num: 10,
        hide_min_max: true,
        hide_from_to: true
    });

    $("#range-slider-9").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 2000,
        to: 8000,
        type: 'double',
        grid: true,
        grid_num: 10,
        hide_min_max: true,
        hide_from_to: true
    });

    $("#range-slider-10").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 2000,
        to: 8000,
        type: 'double',
        grid: true,
        grid_num: 10,
        hide_min_max: true,
        hide_from_to: true
    });

    $("#range-slider-11").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 2000,
        to: 8000,
        type: 'double',
        grid: true,
        grid_num: 10,
        hide_min_max: true,
        hide_from_to: true
    });

    $("#range-slider-12").ionRangeSlider({
        min: 0,
        max: 10000,
        from: 2000,
        to: 8000,
        type: 'double',
        grid: true,
        grid_num: 10,
        hide_min_max: true,
        hide_from_to: true
    });
});
