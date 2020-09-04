$(function () {
    $(".header__timer").eTimer({
        etType: 0, etDate: "08.09.2020.2.0", etTitleText: "", etTitleSize: 20, etShowSign: 2, etSep: ":", etFontFamily: "Arial", etTextColor: "snow", etPaddingTB: 0, etPaddingLR: 11, etBackground: "transparent", etBorderSize: 0, etBorderRadius: 0, etBorderColor: "white", etShadow: " 0px 0px 9px -13px #fdfdfd", etLastUnit: 4, etNumberFontFamily: "Arial", etNumberSize: 35, etNumberColor: "#fefefe", etNumberPaddingTB: 0, etNumberPaddingLR: 0, etNumberBackground: "transparent", etNumberBorderSize: 0, etNumberBorderRadius: 5, etNumberBorderColor: "transparent", etNumberShadow: "inset 0px 0px 10px 0px transparent"
    });
    $('.etSep').css({
        padding: '0px 20px',
        color: 'white'
    });
    $('.etSign').css({
        textTransform: 'uppercase',
        fontSize: '11px',
        color: 'white',
    });
    $('.etUnit.etSeconds, .etUnit.etMinutes, .etUnit.etHours, .etUnit.etDays').css({
        textAlign: 'center',
    });
    $('.header__timer.eTimer').css({
        display: 'flex',
        justifyContent: 'center'
    });
    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $('.etSep').css({
                padding: '0px 5px',
            })
            $('.header__timer.eTimer').css({
                marginBottom: '20px',
            })
            $('.reviews__info-block').slick({
                arrows: false,
                autoplay: true,
            })
        } else if($(window).width() > 768) {
            window.location.reload();
        }
    })
})