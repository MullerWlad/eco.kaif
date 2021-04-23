$(document).ready(function () {
    //libs
    var eurasia = 0.734637
    var northeastasia = 0.450965906
    var asiaandpacific = 0.74858934
    var middleeast = 0.388345789
    var europe = 0.97435895
    var africa = 0.125945939
    var centralsouthamerica = 0.5234052
    var northamerica = 0.92384825

    //functions
    getEco = ( region, age ) => {
        var age_ = () => { if ( age < 11 ) { return 0.5 } if ( age >= 11 && age < 18 ) { return 1 } if ( age >= 18 && age < 40 ) { return 0.7 } if ( age >= 40 && age < 60 ) { return 0.4 } if ( age >=60 ) { return 0.5 } }
        return 0.5 * ( region + age_() );
    }

    /*---Функионал к самописной трее---*/
    $('.option-form').hide();
    $('.select-form .option-form:first-child').show();

    // Получение значения из селектора
    function getValue(obj){
        return $(obj).children(':visible').text();
    };

    // При нажатии на пункт
    $('.option-form').click(function(){
        $('.indicator-block').hide();
        $('.query').hide();
        $('.indicator').remove();

        if($(this).parent().children(':visible').length == 1){
            $(this).parent().children().show();
        }else{
            $(this).parent().children().hide();
            $(this).show();
        };

        if ((getValue($(this).parent()) != "Выберите регион мира") && $('.block-around-table').children(':visible').length != 0) {
            $('.special-icon').hide();
        } else {
            $('.records').remove();
            $('.special-icon').show();
        };
        if (getValue($(this).parent()) == "Выберите регион мираeurasianorth east asiaasia and pacificmiddle easteuropeafricacentral south americanorth america") {
            $('.records').remove();
            $('.special-icon').show();
        };
        if (getValue($(this).parent()) == "Выберите регион мира") {

        };
    });

    $('.indicator-block').hide();
    $('.query').hide();

    motion = ( region, age ) => {
        $('.indicator-block').show();

        var proz = getEco(region, age).toFixed(2) * 100;
        $('.indicator-block').empty();
        $('.indicator-block').append('<p class="horizon-display-between text-blue text-size-easy gilroy-bold indicator">' + proz + '%</p>');

        if (proz < 33) { $('.indicator').css({'background' : '#ffa7a7', 'width' : proz + '%'}); $('.query').show(); }
        if (proz >= 33 && proz < 60) { $('.indicator').css({'background' : '#ffffaa', 'width' : proz + '%'}); }
        if (proz >= 60) { $('.indicator').css({'background' : '#7fff7f', 'width' : proz + '%'}); }
    }

    //methods
    $('.result').click(() => {
        var age = parseInt(document.getElementById('elem').value);
        var country = getValue('.select-form');

        switch ( country ) {
            case "eurasia" : motion(eurasia, age); break;
            case "north east asia" : motion(northeastasia, age); break;
            case "asia and pacific" : motion(asiaandpacific, age); break;
            case "middle east" : motion(middleeast, age); break;
            case "europe" : motion(europe, age); break;
            case "africa" : motion(africa, age); break;
            case "central south america" : motion(centralsouthamerica, age); break;
            case "north america" : motion(northamerica, age); break;
        }
    })
})