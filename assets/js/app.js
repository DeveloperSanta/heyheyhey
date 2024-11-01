var volume, audio, currentPlaying, buttonIcon, isPaused;

var playlist = {
	AConArtistGame1: function() {
		audio = new Audio('assets/audio/AConArtistGame1.mp3');
	},
	AConArtistGame2: function() {
		audio = new Audio('assets/audio/AConArtistGame2.mp3');
	},
	AllHeyheyheys: function() {
		audio = new Audio('assets/audio/AllHeyheyheys.mp3');
	},
	BeAScammersGame: function() {
		audio = new Audio('assets/audio/BeAScammersGame.mp3');
	},
	Bitconnect1: function() {
		audio = new Audio('assets/audio/Bitconnect1.mp3');
	},
	Bitconnect2: function() {
		audio = new Audio('assets/audio/Bitconnect2.mp3');
	},
	Bitconnect3: function() {
		audio = new Audio('assets/audio/Bitconnect3.mp3');
	},
	Bitconnect4: function() {
		audio = new Audio('assets/audio/Bitconnect4.mp3');
	},
	Excited: function() {
		audio = new Audio('assets/audio/Excited.mp3');
	},
	FaithAndBelief: function() {
		audio = new Audio('assets/audio/FaithAndBelief.mp3');
	},
	FriendsFromVietnam1: function() {
		audio = new Audio('assets/audio/FriendsFromVietnam1.mp3');
	},
	FriendsFromVietnam2: function() {
		audio = new Audio('assets/audio/FriendsFromVietnam2.mp3');
	},
	FriendsFromVietnam3: function() {
		audio = new Audio('assets/audio/FriendsFromVietnam3.mp3');
	},
	FriendsFromVietnam4: function() {
		audio = new Audio('assets/audio/FriendsFromVietnam4.mp3');
	},
	FriendsFromVietnam5: function() {
		audio = new Audio('assets/audio/FriendsFromVietnam5.mp3');
	},
	GoAllOverTheWorld: function() {
		audio = new Audio('assets/audio/GoAllOverTheWorld.mp3');
	},
	HeyEveryBody1: function() {
		audio = new Audio('assets/audio/HeyEveryBody1.mp3');
	},
	HeyEveryBody2: function() {
		audio = new Audio('assets/audio/HeyEveryBody2.mp3');
	},
	Heyheyhey1: function() {
		audio = new Audio('assets/audio/Heyheyhey1.mp3');
	},
	Heyheyhey2: function() {
		audio = new Audio('assets/audio/Heyheyhey2.mp3');
	},
	Heyheyhey3: function() {
		audio = new Audio('assets/audio/Heyheyhey3.mp3');
	},
	HoneyThisIsReal1: function() {
		audio = new Audio('assets/audio/HoneyThisIsReal1.mp3');
	},
	HoneyThisIsReal2: function() {
		audio = new Audio('assets/audio/HoneyThisIsReal2.mp3');
	},
	IAmFinanciallyIndependently: function() {
		audio = new Audio('assets/audio/IAmFinanciallyIndependently.mp3');
	},
	IAmIndependently: function() {
		audio = new Audio('assets/audio/IAmIndependently.mp3');
	},
	IAmSoExcited1: function() {
		audio = new Audio('assets/audio/IAmSoExcited1.mp3');
	},
	IAmSoExcited2: function() {
		audio = new Audio('assets/audio/IAmSoExcited2.mp3');
	},
	IAmSoExcited3: function() {
		audio = new Audio('assets/audio/IAmSoExcited3.mp3');
	},
	IAmSoHonour: function() {
		audio = new Audio('assets/audio/IAmSoHonour.mp3');
	},
	IAmSoProud: function() {
		audio = new Audio('assets/audio/IAmSoProud.mp3');
	},
	IBelieveThisRoom1: function() {
		audio = new Audio('assets/audio/IBelieveThisRoom1.mp3');
	},
	IBelieveThisRoom2: function() {
		audio = new Audio('assets/audio/IBelieveThisRoom2.mp3');
	},
	Independently: function() {
		audio = new Audio('assets/audio/Independently.mp3');
	},
	ISay: function() {
		audio = new Audio('assets/audio/ISay.mp3');
	},
	ISayWhatAmIGonnaDo: function() {
		audio = new Audio('assets/audio/ISayWhatAmIGonnaDo.mp3');
	},
	IWantToTellYouSomething: function() {
		audio = new Audio('assets/audio/IWantToTellYouSomething.mp3');
	},
	Laugh1: function() {
		audio = new Audio('assets/audio/Laugh1.mp3');
	},
	Laugh2: function() {
		audio = new Audio('assets/audio/Laugh2.mp3');
	},
	Laugh3: function() {
		audio = new Audio('assets/audio/Laugh3.mp3');
	},
	LetMeTellYou1: function() {
		audio = new Audio('assets/audio/LetMeTellYou1.mp3');
	},
	LetMeTellYou2: function() {
		audio = new Audio('assets/audio/LetMeTellYou2.mp3');
	},
	LetMeTellYouILoooooooove: function() {
		audio = new Audio('assets/audio/LetMeTellYouILoooooooove.mp3');
	},
	Loooooooove: function() {
		audio = new Audio('assets/audio/Loooooooove.mp3');
	},
	Mmhmmhnonono: function() {
		audio = new Audio('assets/audio/Mmhmmhnonono.mp3');
	},
	MoneyFromAnotherAccount: function() {
		audio = new Audio('assets/audio/MoneyFromAnotherAccount.mp3');
	},
	MyWife: function() {
		audio = new Audio('assets/audio/MyWife.mp3');
	},
	OnTheTable1: function() {
		audio = new Audio('assets/audio/OnTheTable1.mp3');
	},
	OnTheTable2: function() {
		audio = new Audio('assets/audio/OnTheTable2.mp3');
	},
	OnTheTable3: function() {
		audio = new Audio('assets/audio/OnTheTable3.mp3');
	},
	SoMuchMoney: function() {
		audio = new Audio('assets/audio/SoMuchMoney.mp3');
	},
	ThankYouCarlos: function() {
		audio = new Audio('assets/audio/ThankYouCarlos.mp3');
	},
	ThatsAScam: function() {
		audio = new Audio('assets/audio/ThatsAScam.mp3');
	},
	TheSeed: function() {
		audio = new Audio('assets/audio/TheSeed.mp3');
	},
	TheWorld: function() {
		audio = new Audio('assets/audio/TheWorld.mp3');
	},
	TheWorldIsNotAnymoreTheWayItUsedToBe: function() {
		audio = new Audio('assets/audio/TheWorldIsNotAnymoreTheWayItUsedToBe.mp3');
	},
	ToTheBank1: function() {
		audio = new Audio('assets/audio/ToTheBank1.mp3');
	},
	ToTheBank2: function() {
		audio = new Audio('assets/audio/ToTheBank2.mp3');
	},
	WatsoWatsoWatso: function() {
		audio = new Audio('assets/audio/WatsoWatsoWatso.mp3');
	},
	WatsoWatsoWatsoUp: function() {
		audio = new Audio('assets/audio/WatsoWatsoWatsoUp.mp3');
	},
	WatsoWatsoWatsoUpBitconnect: function() {
		audio = new Audio('assets/audio/WatsoWatsoWatsoUpBitconnect.mp3');
	},
	Waves: function() {
		audio = new Audio('assets/audio/Waves.mp3');
	},
	WeAreBuildingTheEntireWorld: function() {
		audio = new Audio('assets/audio/WeAreBuildingTheEntireWorld.mp3');
	},
	WeAreChangingTheWorld1: function() {
		audio = new Audio('assets/audio/WeAreChangingTheWorld1.mp3');
	},
	WeAreChangingTheWorld2: function() {
		audio = new Audio('assets/audio/WeAreChangingTheWorld2.mp3');
	},
	WeAreStartingToWatchItGoAllOverTheWorld: function() {
		audio = new Audio('assets/audio/WeAreStartingToWatchItGoAllOverTheWorld.mp3');
	},
	WeWillChangeTheWorld: function() {
		audio = new Audio('assets/audio/WeWillChangeTheWorld.mp3');
	},
	Whaaat: function() {
		audio = new Audio('assets/audio/Whaaat.mp3');
	},
	WhatAmIGonnaDo: function() {
		audio = new Audio('assets/audio/WhatAmIGonnaDo.mp3');
	},
	WhoaThatsReal: function() {
		audio = new Audio('assets/audio/WhoaThatsReal.mp3');
	},
	Wow1: function() {
		audio = new Audio('assets/audio/Wow1.mp3');
	},
	Wow2: function() {
		audio = new Audio('assets/audio/Wow2.mp3');
	},
	WowwowWhatsUp: function() {
		audio = new Audio('assets/audio/WowwowWhatsUp.mp3');
	},
	Yes: function() {
		audio = new Audio('assets/audio/Yes.mp3');
	},
	YesThankYouCarlos: function() {
		audio = new Audio('assets/audio/YesThankYouCarlos.mp3');
	},
	YouKnowWhat: function() {
		audio = new Audio('assets/audio/YouKnowWhat.mp3');
	},
	YoureGonnaLoseYourMoney: function() {
		audio = new Audio('assets/audio/YoureGonnaLoseYourMoney.mp3');
	},
}

Player = {
	playToEnd: function(audio, $button) {
		var isPlaying = true;

		setInterval(function() {
			if (isPlaying && audio.ended) {
				isPlaying = false;
				$button.removeClass('stop').addClass('play');

				clearInterval();
			}
		}, 100)
	}
}


$(document).ready(function(){
	// Semantic UI Range
	$('#volume-slider').range({
		min: 0,
		max: 10,
		start: 3,
		onChange: function(val) {
			$("#volume").html(val)
			volume = val / 10;
			if (audio) {
				audio.volume = volume;
			}
		}
	});

	$("#player .button").on('click', function() {
		$buttonIcon = $(this).find('.icon')

		if ($buttonIcon.hasClass('stop') && audio && !audio.ended) {
			isPaused = true;
			audio.pause();
			$buttonIcon.removeClass('stop').addClass('play');
		} else {
			$buttonIcon.removeClass('play').addClass('stop');
			
			clip = $(this).attr('id');
			currentPlaying = clip;
			playlist[clip]();
			audio.volume = volume;
			audio.play();

			Player.playToEnd(audio, $buttonIcon);
		}
	});

});