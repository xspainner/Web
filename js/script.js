/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */

(function ($) {
	'use strict';

	// Preloader js    
	$(window).on('load', function () {
		$('.preloader').fadeOut(100);
	});


	// navfixed
	$(window).scroll(function () {
		if ($('.navigation').offset().top > 50) {
			$('.navigation').addClass('nav-bg');
		} else {
			$('.navigation').removeClass('nav-bg');
		}
	});

	// masonry
	$('.masonry-wrapper').masonry({
		columnWidth: 1
	});

	// clipboard
	var clipInit = false;
	$('code').each(function () {
		var code = $(this),
			text = code.text();
		if (text.length > 2) {
			if (!clipInit) {
				var text, clip = new ClipboardJS('.copy-to-clipboard', {
					text: function (trigger) {
						text = $(trigger).prev('code').text();
						return text.replace(/^\$\s/gm, '');
					}
				});
				clipInit = true;
			}
			code.after('<span class="copy-to-clipboard">copy</span>');
		}
	});
	$('.copy-to-clipboard').click(function () {
		$(this).html('copied');
	});


	// match height
	$(function () {
		$('.match-height').matchHeight({
			byRow: true,
			property: 'height',
			target: null,
			remove: false
		});
	});

	// Accordions
	$('.collapse').on('shown.bs.collapse', function () {
		$(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
	}).on('hidden.bs.collapse', function () {
		$(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
	});

})(jQuery);



$(document).on('click', '.card-select', function(e) {
	e.preventDefault();

	if ($(this).attr('class') !== "card-select card-select-active") {
		$(this).toggleClass('card-select-active').siblings().removeClass('card-select-active');
		$(this).find(".selected").removeClass('d-none');
		$(this).siblings().find(".selected").addClass('d-none');

		if ($(".card-select-active")[0]) {
			let cPrice = $(".card-select-active")[0].getAttribute('data-price');
			let cDiscount = $(".card-select-active")[0].getAttribute('data-discount');
			let cCurrency = " บาท"
			
			if($(".card-select-active")[0].getAttribute('data-currency') != undefined)
				cCurrency = " " + $(".card-select-active")[0].getAttribute('data-currency')

			if ($(".card-select-active")[0]) {
				
				if ($('#quantity')[0] != undefined) {
					$('#quantity').val(1);
					$('#quantity')[0].disabled = false;
					$('#card-buying')[0].disabled = false;
				}

				if ($('#ref_1')[0] != undefined && $('#termgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = false;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = false;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = false;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = false;		
					
					$('#termgame-topup')[0].disabled = false;
				}
				

				if ($('#ref_1')[0] != undefined && $('#termgame-exchange')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = false;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = false;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = false;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = false;		
					
					$('#termgame-exchange')[0].disabled = false;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ctermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					$('#ref_2')[0].disabled = false;
					
					$('#ctermgame-topup')[0].disabled = false;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ptermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = false;
					
					$('#ptermgame-topup')[0].disabled = false;
				}

			} else {
				$('#priceTotal')[0].innerText = "ราคารวม  0.00 บาท"
				$('#discountPrice')[0].innerText = "0.00%"
				if ($('#quantity')[0] != undefined) {
					$('#quantity').val(1);
					$('#quantity')[0].disabled = true;
					$('#card-buying')[0].disabled = true;
				}

				if ($('#ref_1')[0] != undefined && $('#termgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = true;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = true;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = true;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = true;
					
					$('#termgame-topup')[0].disabled = true;
				}

				if ($('#ref_1')[0] != undefined && $('#termgame-exchange')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = true;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = true;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = true;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = true;
					
					$('#termgame-exchange')[0].disabled = true;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ctermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					$('#ref_2')[0].disabled = true;
					
					$('#ctermgame-topup')[0].disabled = true;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ptermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = true;
					
					$('#ptermgame-topup')[0].disabled = true;
				}

				$(this).find(".selected").toggleClass('d-none')
			}
		}
	}
});

/* BUY CARD PAGE */
$('#quantity').on('change', function() {
	let quantityCard = this.value;

	if (quantityCard <= 0)
		$('#card-buying')[0].disabled = true;
	else
		$('#card-buying')[0].disabled = false;

	let cCurrency = " บาท"
	
	if($(".card-select-active")[0].getAttribute('data-currency') != undefined)
		cCurrency = " " + $(".card-select-active")[0].getAttribute('data-currency')
	
	let cPrice = $(".card-select-active")[0].getAttribute('data-price');
	let cDiscount = $(".card-select-active")[0].getAttribute('data-discount');

	$('#priceTotal')[0].innerText = "ราคารวม  " + (cPrice * quantityCard).toFixed(2) + cCurrency
	$('#discountPrice')[0].innerText = cDiscount + " %"
});

$('#quantity').on('input', function() {
	this.value = this.value.replace(/[^\d]/g, '');
});

$(document).on('click', '.card-select', function(e) {
	e.preventDefault();

	if ($(this).attr('class') !== "card-select card-select-active") {
		$(this).toggleClass('card-select-active').siblings().removeClass('card-select-active');
		$(this).find(".selected").removeClass('d-none');
		$(this).siblings().find(".selected").addClass('d-none');

		if ($(".card-select-active")[0]) {
			let cPrice = $(".card-select-active")[0].getAttribute('data-price');
			let cDiscount = $(".card-select-active")[0].getAttribute('data-discount');
			let cCurrency = " บาท"
			
			if($(".card-select-active")[0].getAttribute('data-currency') != undefined)
				cCurrency = " " + $(".card-select-active")[0].getAttribute('data-currency')

			if ($(".card-select-active")[0]) {
				
				if($('#termewallet-topup')[0] != undefined || $('#termewallet-login')[0] != undefined)
					$('#priceTotal')[0].innerText = "ราคารวม  " + (parseInt(cPrice) + parseInt(cDiscount)).toFixed(2) + cCurrency
				else
					$('#priceTotal')[0].innerText = "ราคารวม  " + cPrice + cCurrency
					
				if($('#termewallet-topup')[0] != undefined || $('#termewallet-login')[0] != undefined)
					$('#discountPrice')[0].innerText = cDiscount + " บาท"
				else
					$('#discountPrice')[0].innerText = cDiscount + " %"
				
				if ($('#quantity')[0] != undefined) {
					$('#quantity').val(1);
					$('#quantity')[0].disabled = false;
					$('#card-buying')[0].disabled = false;
				}

				if ($('#ref_1')[0] != undefined && $('#termgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = false;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = false;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = false;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = false;		
					
					$('#termgame-topup')[0].disabled = false;
				}
				

				if ($('#ref_1')[0] != undefined && $('#termgame-exchange')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = false;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = false;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = false;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = false;		
					
					$('#termgame-exchange')[0].disabled = false;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ctermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					$('#ref_2')[0].disabled = false;
					
					$('#ctermgame-topup')[0].disabled = false;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ptermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = false;
					
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = false;
					
					$('#ptermgame-topup')[0].disabled = false;
				}
				

			} else {
				$('#priceTotal')[0].innerText = "ราคารวม  0.00 บาท"
				$('#discountPrice')[0].innerText = "0.00%"
				if ($('#quantity')[0] != undefined) {
					$('#quantity').val(1);
					$('#quantity')[0].disabled = true;
					$('#card-buying')[0].disabled = true;
				}

				if ($('#ref_1')[0] != undefined && $('#termgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = true;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = true;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = true;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = true;
					
					$('#termgame-topup')[0].disabled = true;
				}

				if ($('#ref_1')[0] != undefined && $('#termgame-exchange')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = true;
					
					if($('#ref_3')[0] != undefined)
						$('#ref_3')[0].disabled = true;
					if($('#ref_4')[0] != undefined)
						$('#ref_4')[0].disabled = true;
					if($('#ref_5')[0] != undefined)
						$('#ref_5')[0].disabled = true;
					
					$('#termgame-exchange')[0].disabled = true;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ctermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					$('#ref_2')[0].disabled = true;
					
					$('#ctermgame-topup')[0].disabled = true;
				}
				
				if ($('#ref_1')[0] != undefined && $('#ptermgame-topup')[0] != undefined) {
					$('#ref_1')[0].disabled = true;
					if($('#ref_2')[0] != undefined)
						$('#ref_2')[0].disabled = true;
					
					$('#ptermgame-topup')[0].disabled = true;
				}

				$(this).find(".selected").toggleClass('d-none')
			}
		}
	}
});

/* TERMGAME */
$(document).on('click', '#termgame-topup', function(e) {
	e.preventDefault();
	let targetElement = $(e.currentTarget);
	// Disabled Button
	toggleButton(targetElement);
	// Check Condition
	if ($("#ref_1").val().length <= 0) {
		sweetAlert("error", "ข้อความจากระบบ", "กรุณากรอกข้อมูลให้ครบด้วยครับ");
		toggleButton(targetElement);
	} else {
		// Send Http Request
		Swal.fire({
			icon: 'info',
			title: 'ข้อความจากระบบ',
			html: 'กำลังดำเนินการกรุณารอสักครู่',
			timerProgressBar: false,
			allowOutsideClick: false,
			allowEscapeKey: false,
			showConfirmButton: false,
		});
		
		let sendTo = undefined;
		if($("#ref_6")[0] != undefined)
			sendTo = $("#ref_6").val();
		else
			sendTo = $("#ref_3").val();
		
		if($("#ref_6")[0] == undefined && $("#ref_3")[0] != undefined) {
			sendRequest("POST", "v1/termgame/" + sendTo, {
				BuyId: $(".card-select-active")[0].getAttribute('data-id'),
				GameId: $("#ref_1").val(),
				Servers: $("#ref_2").val()
			}, function(e) {
				if (e.Code == 200) {
					sweetAlert("success", "ข้อความจากระบบ", e.Message);
					toggleButton(targetElement);
				} else {
					sweetAlert("error", "ข้อความจากระบบ", e.Message);
					toggleButton(targetElement);
				}
			});
		} else {
			sendRequest("POST", "v1/termgame/" + sendTo, {
				BuyId: $(".card-select-active")[0].getAttribute('data-id'),
				Ref1: $("#ref_1").val(),
				Ref2: $("#ref_2").val(),
				Ref3: $("#ref_3").val(),
				Ref4: $("#ref_4").val(),
				Ref5: $("#ref_5").val(),
				Ref6: $("#ref_6").val()
			}, function(e) {
				if (e.Code == 200) {
					sweetAlert("success", "ข้อความจากระบบ", e.Message);
					toggleButton(targetElement);
				} else {
					sweetAlert("error", "ข้อความจากระบบ", e.Message);
					toggleButton(targetElement);
				}
			});
		}
	}
});
/* CTERMGAME */
$(document).on('click', '#ctermgame-topup', function(e) {
	e.preventDefault();
	let targetElement = $(e.currentTarget);
	// Disabled Button
	toggleButton(targetElement);
	// Check Condition
	if ($("#ref_1").val().length <= 0) {
		sweetAlert("error", "ข้อความจากระบบ", "กรุณากรอกข้อมูลให้ครบด้วยครับ");
		toggleButton(targetElement);
	} else {
		// Send Http Request
		Swal.fire({
			icon: 'info',
			title: 'ข้อความจากระบบ',
			html: 'กำลังดำเนินการกรุณารอสักครู่',
			timerProgressBar: false,
			allowOutsideClick: false,
			allowEscapeKey: false,
			showConfirmButton: false,
		});
		
		sendRequest("POST", "v1/ctermgame", {
			BuyId: $(".card-select-active")[0].getAttribute('data-id'),
			GameId: $("#ref_1").val(),
			ServerId: $("#ref_2").val(),
			GameUrl: $("#ref_3").val()
		}, function(e) {
			if (e.Code == 200) {
				sweetAlert("success", "ข้อความจากระบบ", e.Message);
				toggleButton(targetElement);
			} else {
				sweetAlert("error", "ข้อความจากระบบ", e.Message);
				toggleButton(targetElement);
			}
		});
	}
});

/* PTERMGAME */
$(document).on('click', '#ptermgame-topup', function(e) {
	e.preventDefault();
	let targetElement = $(e.currentTarget);
	// Disabled Button
	toggleButton(targetElement);
	// Check Condition
	if ($("#ref_1").val().length <= 0) {
		sweetAlert("error", "ข้อความจากระบบ", "กรุณากรอกข้อมูลให้ครบด้วยครับ");
		toggleButton(targetElement);
	} else {
		// Send Http Request
		Swal.fire({
			icon: 'info',
			title: 'ข้อความจากระบบ',
			html: 'กำลังดำเนินการกรุณารอสักครู่',
			timerProgressBar: false,
			allowOutsideClick: false,
			allowEscapeKey: false,
			showConfirmButton: false,
		});
		
		sendRequest("POST", "v1/ptermgame", {
			BuyId: $(".card-select-active")[0].getAttribute('data-id'),
			GameId: $("#ref_1").val(),
			ServerId: $("#ref_2").val(),
			GameUrl: $("#ref_3").val()
		}, function(e) {
			if (e.Code == 200) {
				sweetAlert("success", "ข้อความจากระบบ", e.Message);
				toggleButton(targetElement);
			} else {
				sweetAlert("error", "ข้อความจากระบบ", e.Message);
				toggleButton(targetElement);
			}
		});
	}
});

// profile



// register


// processScroll
let processScroll = () => {
	let docElem = document.documentElement, 
	  docBody = document.body,
	  scrollTop = docElem['scrollTop'] || docBody['scrollTop'],
		scrollBottom = (docElem['scrollHeight'] || docBody['scrollHeight']) - window.innerHeight,
	  scrollPercent = scrollTop / scrollBottom * 100 + '%';
	
	// console.log(scrollTop + ' / ' + scrollBottom + ' / ' + scrollPercent);
	
	  document.getElementById("progress-bar").style.setProperty("--scrollAmount", scrollPercent); 
  }
  
document.addEventListener('scroll', processScroll);




function clickAlert() {
	swal("ผิดพลาด", "นี้เป็นเพียงเว็บทดลองเท่านั้นไม่สามารถเติมได้", "error");
}