
import "./css/main.css";
import "./css/imports/swiper.css";
import "./css/imports/jquery-modal.css";
import Swiper from 'swiper';
import 'rangeslider.js';
import 'lazysizes';
import tippy from 'tippy.js';
import 'jquery-modal/jquery.modal.js';

$(document).ready(function() {

  // tooltips (tippy.js)
  tippy('[data-tippy-content]', {
    theme: 'light-border',
    animation: 'shift-away-subtle',
    allowHTML: true
  });
  // tooltips ends

  // pricing calculator

  // Initially hide the pricing calc results elementPosition
  $('#EstimateResult, #TransferProportion, #Pensions').hide();

  // Add commas to the input fields
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  $(function(){
    // field1 (AUM) ///////////////////////////////////////////////////
    $('#field1').rangeslider({
        polyfill: false,
        onSlide: function(position, value){
          $('.content #input1').val(value);
        }
    });

    // Change the value of input field when slider changes
    $('#field1').on('input', function() {
      $('#input1').val(numberWithCommas(this.value));

      var inputRange = $('#field1');

      let attributes = {
        min: 0,
        max: 1000000000,
        step: 25000000
      };
      inputRange.attr(attributes);

    });

    // Change the value of slider field when input changes
    $('#input1').on('input', function() {
      if (this.value.length == 0) $('#field1').val(0).change();
      if (this.value.length == '') {
        this.value = ''
      } else {
        let calc = parseFloat(this.value.replace(/,/g, ''));
        var inputRange = $('#field1');
        let attributes = {
          min: 0,
          max: 1000000000,
          step: ''
        };
        inputRange.attr(attributes);
        inputRange.rangeslider('update', true);
        $('#field1').val(calc).change();
      }
    });

    // field 2 (Clients) ///////////////////////////////////////////////////
    $('#field2').rangeslider({
        polyfill: false,
        onSlide:function(position, value){
            $('.content #input2').val(value);
        }
    });

    // Change the value of input field when slider changes
    $('#field2').on('input', function() {
        $('#input2').val(numberWithCommas(this.value));
        var inputRange = $('#field2');
        let attributes = {
          min: 0,
          max: 50000,
          step: 1250
        };
        inputRange.attr(attributes);

    });
    // Change the value of slider field when input changes
    $('#input2').on('input', function() {
        if (this.value.length == 0) $('#field2').val(0).change();
        if (this.value.length == '') {
          this.value = ''
        } else {
        let calc = parseFloat(this.value.replace(/,/g, ''));
        var inputRange = $('#field2');
        let attributes = {
          min: 0,
          max: 50000,
          step: ''
        };
        inputRange.attr(attributes);
        inputRange.rangeslider('update', true);
        $('#field2').val(calc).change();
      }
    });


    $('#field3').rangeslider({
        polyfill: false,
        onSlide:function(position, value){
            $('.content #input3').val(value);
        },
        onSlideEnd:function(position, value){
        }
    });

    // Change the value of input field when slider changes
    $('#field3').on('input', function() {
        $('#input3').val(this.value);
        var inputRange = $('#field3');
        let attributes = {
          min: 0,
          max: 100,
          step: 5
        };
        inputRange.attr(attributes);
    });

    // Change the value of slider field when input changes
    $('#input3').on('input', function() {
        if (this.value.length == 0) $('#field3').val(0).change();
        if (this.value.length == '') {
          this.value = ''
        } else {
          var inputRange = $('#field3');
          let attributes = {
            min: 0,
            max: 100,
            step: ''
          };
          inputRange.attr(attributes);
          inputRange.rangeslider('update', true);
        $('#field3').val(this.value).change();
      }
    });

    $('#field4').rangeslider({
        polyfill: false,
        onSlide:function(position, value){
            $('.content #input4').val(value);
        },
        onSlideEnd:function(position, value){
        }
    });

    // Change the value of input field when slider changes
    $('#field4').on('input', function() {
        $('#input4').val(this.value);
        var inputRange = $('#field4');
        let attributes = {
          min: 0,
          max: 100,
          step: 5
        };
        inputRange.attr(attributes);
    });

    // Change the value of slider field when input changes
    $('#input4').on('input', function() {
        if (this.value.length == 0) $('#field4').val(0).change();
        if (this.value.length == '') {
          this.value = ''
        } else {
          var inputRange = $('#field4');
          let attributes = {
            min: 0,
            max: 100,
            step: ''
          };
          inputRange.attr(attributes);
          inputRange.rangeslider('update', true);
        $('#field4').val(this.value).change();
        }
    });


    $('#field5').rangeslider({
        polyfill: false,
        onSlide:function(position, value){
            $('.content #input5').val(value);
        },
        onSlideEnd:function(position, value){
        }
    });

    // Change the value of input field when slider changes
    $('#field5').on('input', function() {
        $('#input5').val(this.value);
        var inputRange = $('#field5');
        let attributes = {
          min: 0,
          max: 100,
          step: 5
        };
        inputRange.attr(attributes);
    });

    // Change the value of slider field when input changes
    $('#input5').on('input', function() {
        if (this.value.length == 0) $('#field5').val(0).change();
        if (this.value.length == '') {
          this.value = ''
        } else {
          var inputRange = $('#field5');
          let attributes = {
            min: 0,
            max: 100,
            step: ''
          };
          inputRange.attr(attributes);
          inputRange.rangeslider('update', true);
        $('#field5').val(this.value).change();
      }
    });


    $('#field6').rangeslider({
        polyfill: false,
        onSlide:function(position, value){
            $('.content #input5').val(value);
        },
        onSlideEnd:function(position, value){
        }
    });

    // Change the value of input field when slider changes
    $('#field6').on('input', function() {
        $('#input6').val(this.value);

        var inputRange = $('#field6');

        let attributes = {
          min: 0,
          max: 100,
          step: 5
        };
        inputRange.attr(attributes);
    });

    // Change the value of slider field when input changes
    $('#input6').on('input', function() {
        if (this.value.length == 0) $('#field6').val(0).change();
        if (this.value.length == '') {
          this.value = ''
        } else {
          var inputRange = $('#field6');
          let attributes = {
            min: 0,
            max: 100,
            step: ''
          };
          inputRange.attr(attributes);
          inputRange.rangeslider('update', true);
        $('#field6').val(this.value).change();
      }
    });
});


$('#calculate-settlement').on('click', function settlement(form){

  // field1 = AUM Num
  // field2 = Investors (using the service) Num
  // field3 = Pension (clients that have a pension) %
  // field4 = Decumulation (how many of you pension client are in decumulation) %
  // field5 = Intsruments Num

  let userInterfaces;
  let custodyCharge;
  let pensionCharges;

  let directDebits = (((($('#input2').val().replace(/,/g, '') * 0.5) * 12) * 0.5));

  let trading = Math.round(((($('#input1').val().replace(/,/g, '') * 0.000015)) * 12));

  let instruments = (($('#input5').val().replace(/,/g, '') * 36.5));

  let transfer = ($('#input6').val().replace(/,/g, ''));

  let pensionPercent = (($('#input2').val().replace(/,/g, '') / 100 * ($('#input3').val().replace(/,/g, ''))));

  let pensionPercentRemaining = (100 - ($('#input3').val().replace(/,/g, '')));

  let decumulationPercent = $('#input4').val();

  let decumulationFactor = ( 1 -  (1 / 100  * decumulationPercent));

  let transfers = (pensionPercent * 50 / 100 * transfer) + (( ($('#input2').val().replace(/,/g, '') - pensionPercent)) * 25 / 100 * transfer);

  let getpensionCharges = function(){
    if (togglePensions == true){
       pensionCharges = Math.round(((parseFloat((pensionPercent / 100 * decumulationPercent)) * 210) + (parseFloat(pensionPercent * decumulationFactor ) * 60)));
    } else {
      pensionCharges = 0;
    }
    return pensionCharges;
  }
  getpensionCharges();


  let getcustodyCharge = function() {
    let replace = $('#input1').val().replace(/,/g, '');
    let calc = (replace * 0.001);
    if (calc <= 36000) {
      custodyCharge = 36000;
    } else {
      custodyCharge = parseFloat((replace * 0.001));
    }
    return custodyCharge;
  }
  getcustodyCharge();

  let getuserInterfaces = function() {
    if ((($('#input2').val().replace(/,/g, '')) <= 3000) && (toggleInterfaces == true)) {
      userInterfaces = 43200;
    } else if ((($('#input2').val().replace(/,/g, '')) >= 3000) && (toggleInterfaces == true)){
      userInterfaces = ((($('#input2').val().replace(/,/g, '')) * 14.4));
    } else {
      userInterfaces =  0;
    }
    return userInterfaces;
  }
  getuserInterfaces();

  let custodyChargeTotal = Math.round(parseFloat(parseFloat(custodyCharge)));

  let transfersTotal = Math.round(parseFloat(transfers));
  let instrumentsTotal = Math.round(parseFloat(instruments));
  let userInterfacesTotal = Math.round(parseFloat(userInterfaces));

  let estOperatingCost = Math.round((parseFloat(custodyChargeTotal) + parseFloat(transfers) + parseFloat(directDebits) + parseFloat(instruments) + parseFloat(trading) + parseFloat(pensionCharges) + parseFloat(userInterfaces)));
  let secclCharges = Math.round((parseFloat(custodyChargeTotal) +  parseFloat(userInterfaces)));
  let variableCharges = Math.round((parseFloat(transfers) + parseFloat(pensionCharges) + parseFloat(instruments) + parseFloat(trading) + parseFloat(directDebits)));

  let estOperatingCostTotal = Math.round(parseFloat(parseFloat(estOperatingCost)));
  let secclChargesTotal = Math.round(parseFloat(parseFloat(secclCharges)));
  let variableChargesTotal = Math.round(parseFloat(parseFloat(variableCharges)));

  // Debug
  // console.log('custodyCharge: ' + custodyCharge);
  // console.log('custodyChargeTotal: ' + custodyChargeTotal);
  // console.log('directDebits: ' + directDebits);
  // console.log('instruments: ' + instruments);
  // console.log('trading: ' + trading);
  // console.log('pensionCharges: ' + pensionCharges);
  // console.log('pensionPercent: ' + pensionPercent);
  // console.log('pensionPercentRemaining: ' + pensionPercentRemaining);
  // console.log('userInterfaces: ' + userInterfaces);
  // console.log('transfers: ' + transfers);
  // console.log('transfer: ' + transfer);
  // console.log('toggleTransfers: ' + toggleTransfers);
  // console.log('variableCharges: ' + variableCharges);
  // console.log('variableChargesTotal: ' + variableChargesTotal);

  // output values displayed on the pricing page
  $('#secclCharges').text(('£' + secclChargesTotal.toLocaleString()));
  $('#variableCharges').text(('£' + variableChargesTotal.toLocaleString()));
  $('#estOperatingCost').text(('£' + estOperatingCostTotal.toLocaleString()));
  $('#custodyCharge').text(('£' + custodyChargeTotal.toLocaleString()));
  $('#directDebits').text(('£' + directDebits.toLocaleString()));
  $('#instruments').text(('£' + instrumentsTotal.toLocaleString()));
  $('#trading').text(('£' + trading.toLocaleString()));
  $('#pensionCharges').text(('£' + pensionCharges.toLocaleString()));
  $('#userInterfaces').text(('£' + userInterfacesTotal.toLocaleString()));
  $('#transfers').text(('£' + transfersTotal.toLocaleString()));
  $("#EstimateResult").slideDown();

  // capture output values for saving qoute
  $('#output-secclCharges').val(secclChargesTotal.toLocaleString());
  $('#output-variableCharges').val(variableChargesTotal.toLocaleString());
  $('#total_estimated_charges').val(estOperatingCostTotal.toLocaleString());
  $('#custody_charge_estimate').val(custodyChargeTotal.toLocaleString());
  $('#dd_charge_estimate').val(directDebits.toLocaleString());
  $('#instrument_charge_estimate').val(instrumentsTotal.toLocaleString());
  $('#trading_charge_estimate').val(trading.toLocaleString());
  $('#pension_charge_estimate').val(pensionCharges.toLocaleString());
  $('#ui_charge_estimate').val(userInterfacesTotal.toLocaleString());
  $('#transfer_charge_estimate').val(transfersTotal.toLocaleString());

  $('#output-secclCharges').attr('value', secclChargesTotal.toLocaleString());
  $('#output-variableCharges').attr('value', variableChargesTotal.toLocaleString());
  $('#total_estimated_charges').attr('value', estOperatingCostTotal.toLocaleString());
  $('#custody_charge_estimate').attr('value', custodyChargeTotal.toLocaleString());
  $('#dd_charge_estimate').attr('value', directDebits.toLocaleString());
  $('#instrument_charge_estimate').attr('value', instrumentsTotal.toLocaleString());
  $('#trading_charge_estimate').attr('value', trading.toLocaleString());
  $('#pension_charge_estimate').attr('value', pensionCharges.toLocaleString());
  $('#ui_charge_estimate').attr('value', userInterfacesTotal.toLocaleString());
  $('#transfer_charge_estimate').attr('value', transfersTotal.toLocaleString());

  // capture input values for saving qoute
  $('#aum_expected').val($('#input1').val().toLocaleString());
  $('#clients_expected').val($('#input2').val().toLocaleString());
  $('#sipp_proportion_expected').val($('#input3').val().toLocaleString()/ 100);
  $('#decumulation_proportion_expected').val($('#input4').val().toLocaleString()/ 100);
  $('#instrument_number_expected').val($('#input5').val().toLocaleString());
  $('#transfer_proportion_expected').val($('#input6').val().toLocaleString()/ 100);

  $('#aum_expected').attr('value', $('#input1').val().toLocaleString());
  $('#clients_expected').attr('value', $('#input2').val().toLocaleString());
  $('#sipp_proportion_expected').attr('value', $('#input3').val().toLocaleString()/ 100);
  $('#decumulation_proportion_expected').attr('value', $('#input4').val().toLocaleString()/ 100);
  $('#instrument_number_expected').attr('value', $('#input5').val().toLocaleString());
  $('#transfer_proportion_expected').attr('value', $('#input6').val().toLocaleString()/ 100);
});

// toggle on-off check boxes
let toggleInterfaces = false;
let togglePensions = false;
let toggleTransfers = false;

  $('#switchTransfers').click(function(){
      if($(this).is(':checked')){
        toggleTransfers = true
        $("#TransferProportion").slideDown();

      } else {
        toggleTransfers = false;
        $("#TransferProportion").slideUp();
      }
  });

  $('#switchPensions').click(function(){
      if($(this).is(':checked')){
        togglePensions = true
        $("#Pensions").slideDown();

      } else {
        togglePensions = false;
        $("#Pensions").slideUp();
      }
  });

  $('#switchUIs').click(function(){
      if($(this).is(':checked')){
        toggleInterfaces = true
        $('#ui_prospect').attr('value', 'Yes');
      } else {
        toggleInterfaces = false;
        $('#ui_prospect').attr('value', 'No');
      }
  });
// pricing calculator ends

// filter blog categories

  $('.category').on('click', function (e) {

      e.preventDefault();

      var $this = $(this),
          $links = $('.category');
          $('.category').removeClass('selected');
          $this.addClass('selected');

          $('.card').addClass('dn');
          $.each($links, function (k, v) {
            $this = $(v);
          if ($this.hasClass('selected')) {
              var cat = $this.data('categoryType');
              $('.card').addClass('dni');
              $('.card[data-category-type="'+cat+'"]').removeClass('dni');
          } if ($this.hasClass('selected') && ($this.data('categoryType') === 'all')) {
              $('.card').removeClass('dni');
          }
      });
  });

  // on click function for the functionality and who does what
  $('.exp').click(function(){
    event.stopPropagation();
    $(this).toggleClass('exp-active');
  });

  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
    //Checks if li has sub (ul) and adds class for toggle icon - just an UI


    $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
    //Checks if drodown menu's li elements have anothere level (ul), if not the dropdown is shown as regular dropdown, not a mega menu (thanks Luka Kladaric)

    $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

    //Adds menu-mobile class (for mobile toggle menu) before the normal menu
    //Mobile menu is hidden if width is more then 959px, but normal menu is displayed
    //Normal menu is hidden if width is below 959px, and jquery adds mobile menu
    //Done this way so it can be used with wordpress without any trouble

    $(".menu > ul > li").hover(
        function (e) {
            if ($(window).width() > 800) {
                $(this).children("ul").fadeIn(150);
                e.preventDefault();
            }
        }, function (e) {
            if ($(window).width() > 800) {
                $(this).children("ul").fadeOut(150);
                e.preventDefault();
            }
        }
    );
    //If width is more than 800px dropdowns are displayed on hover


    //the following hides the menu when a click is registered outside
    $(document).on('click', function(e){
        if($(e.target).parents('.menu').length === 0)
            $(".menu > ul").removeClass('show-on-mobile');
    });

    $(".menu > ul > li").click(function() {
        //no more overlapping menus
        //hides other children menus when a list item with children menus is clicked
        var thisMenu = $(this).children("ul");
        var prevState = thisMenu.css('display');
        $(".menu > ul > li > ul").fadeOut();
        if ($(window).width() < 800) {
            if(prevState !== 'block')
                thisMenu.fadeIn(150);
        }
    });
    //If width is less or equal to 800px dropdowns are displayed on click

    $(".menu-mobile").click(function (e) {
        $(".menu > ul").toggleClass('show-on-mobile');
        $(".menu").toggleClass('active');
        e.preventDefault();
    });
    //when clicked on mobile-menu, normal menu is shown as a list

// on scroll hide navigation drop down
  $(document).scroll(function() {
    if ( ($(document).scrollTop() >= 5) && ($('*').hasClass('homepage')) ) {
      $('nav').removeClass('theme-light').addClass('theme-dark');
      if ($('#resources, #company, #services').hasClass('active')) {
        $('#resources, #company, #services').removeClass('active');
      }
    } else if ( ($(document).scrollTop() >= 5)) {
      if ($('#resources, #company, #services').hasClass('active')) {
        $('#resources, #company, #services').removeClass('active');
      }
    }
     else if ($('*').hasClass('homepage')) {
      $('nav').removeClass('theme-dark').addClass('theme-light');
    }
  });

  function scrollTo(id) {
    var element = document.getElementById(id);
    var headerOffset = 226;
    var elementPosition = element.offsetTop;
    var offsetPosition = elementPosition - headerOffset;
  }

// Sharing popup

(function ($) {

    // jQuery function to prevent default anchor event and take the href and the title to make a share popup
    // @param  {[object]} e           [Mouse event]
    // @param  {[integer]} intWidth   [Popup width defalut 500]
    // @param  {[integer]} intHeight  [Popup height defalut 400]
    // @param  {[boolean]} blnResize  [Is popup resizeabel default true]

  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
    // Prevent default anchor event
    e.preventDefault();

    // Set values for window
    intWidth = intWidth || "500";
    intHeight = intHeight || "400";
    let strResize = blnResize ? "yes" : "no";

    // Set title and open popup with focus on it
    var strTitle =
        typeof this.attr("title") !== "undefined"
          ? this.attr("title")
          : "Social Share",
      strParam =
        "width=" +
        intWidth +
        ",height=" +
        intHeight +
        ",resizable=" +
        strResize,
      objWindow = window.open(this.attr("href"), strTitle, strParam).focus();
  };

  /* ================================================== */

  $(document).ready(function ($) {
    $(".customer.share").on("click", function (e) {
      $(this).customerPopup(e);
    });
  });
})(jQuery);

// Sharing popup ends

// swiper (swiper.js) used on the careers page
var swiper = new Swiper('.swiper-container', {
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
   effect: 'coverflow',
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
   pagination: {
     el: '.swiper-pagination',
     clickable: true,
   },
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
      },
    }
 });
});
