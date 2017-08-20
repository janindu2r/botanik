// Author: Janindu Ranawake
// 19.08.2017


$(document).ready(function() {
    var $isAnimatedSecond = $('.second .is-animated'),
        $isAnimatedThird = $('.third .is-animated'),
        $isAnimatedFourth = $('.fourth .is-animated'),
        $isAnimatedFifth = $('.fifth .is-animated'),
        $isAnimatedSixth = $('.sixth .is-animated'),
        $isAnimatedSeventh = $('.seventh .is-animated'),
        $isAnimatedEighth = $('.eighth .is-animated'),
        $isAnimatedNinth = $('.nineth .is-animated'),
        $isAnimatedTenth = $('.tenth .is-animated'),
        $isAnimatedEleventh = $('.eleventh .is-animated');


    var $isAnimatedSecondSingle = $('.second .is-animated__single'),
        $isAnimatedThirdSingle = $('.third .is-animated__single'),
        $isAnimatedFourthSingle = $('.fourth .is-animated__single'),
        $isAnimatedFifthSingle = $('.fifth .is-animated__single'),
        $isAnimatedSixthSingle = $('.sixth .is-animated__single'),
        $isAnimatedSeventhSingle = $('.seventh .is-animated__single'),
        $isAnimatedEighthSingle = $('.eighth .is-animated__single'),
        $isAnimatedNinthSingle = $('.nineth .is-animated__single'),
        $isAnimatedTenthSingle = $('.tenth .is-animated__single'),
        $isAnimatedEleventhSingle = $('.eleventh .is-animated__single');




    $('#fullpage').fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8', 'page9', 'page10', 'page11'],
        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: false,
        onLeave: function(index, nextIndex, direction) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

            /* this code is part of the onLeave callback */
            // Page 02
            if (index == 1 && nextIndex == 2 && direction == 'down') {
                $isAnimatedSecond.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedSecondSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 3 && nextIndex == 2 && direction == 'up') {
                $isAnimatedSecond.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 03 
            if (index == 2 && nextIndex == 3 && direction == 'down') {
                $isAnimatedThird.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedThirdSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 4 && nextIndex == 3 && direction == 'up') {
                $isAnimatedThird.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 04 
            if (index == 3 && nextIndex == 4 && direction == 'down') {
                $isAnimatedFourth.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedFourthSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 5 && nextIndex == 4 && direction == 'up') {
                $isAnimatedFourth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 05 
            if (index == 4 && nextIndex == 5 && direction == 'down') {
                $isAnimatedFifth.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });

                $isAnimatedFifthSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 6 && nextIndex == 5 && direction == 'up') {
                $isAnimatedFifth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 06 
            if (index == 5 && nextIndex == 6 && direction == 'down') {
                $isAnimatedSixth.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedSixthSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 7 && nextIndex == 6 && direction == 'up') {
                $isAnimatedSixth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 07 
            if (index == 6 && nextIndex == 7 && direction == 'down') {
                $isAnimatedSeventh.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedSeventhSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 8 && nextIndex == 7 && direction == 'up') {
                $isAnimatedSeventh.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 08 
            if (index == 7 && nextIndex == 8 && direction == 'down') {
                $isAnimatedEighth.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedEighthSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 9 && nextIndex == 8 && direction == 'up') {
                $isAnimatedEighth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 09 
            if (index == 8 && nextIndex == 9 && direction == 'down') {
                $isAnimatedNinth.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedNinthSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 10 && nextIndex == 9 && direction == 'up') {
                $isAnimatedNinth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 10 
            if (index == 9 && nextIndex == 10 && direction == 'down') {
                $isAnimatedTenth.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedTenthSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 11 && nextIndex == 10 && direction == 'up') {
                $isAnimatedTenth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }

            // Page 11 
            if (index == 10 && nextIndex == 11 && direction == 'down') {
                $isAnimatedEleventh.addClass('animated slideInUp').css({ 'animation-delay': '.6s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'slideInUp');
                });
                $isAnimatedEleventhSingle.addClass('animated fadeInUp').css({ 'animation-delay': '1.5s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
            if (index == 12 && nextIndex == 11 && direction == 'up') {
                $isAnimatedEleventh.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' }).one(animationEnd, function() {
                    $(this).removeClass('animated ' + 'fadeInUp');
                });
            }
        }

    });
});