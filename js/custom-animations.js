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
        $isAnimatedel11 = $('.eleventh .is-animated');



    $('#fullpage').fullpage({
        verticalCentered: false,

        //to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
        css3: false,
        onLeave: function(index, nextIndex, direction) {


            /* this code is part of the onLeave callback */
            // Page 02
            if (index == 1 && nextIndex == 2 && direction == 'down') {
                $isAnimatedSecond.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedSecond.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 3 && nextIndex == 2 && direction == 'up') {
                $isAnimatedSecond.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedSecond.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 03 
            if (index == 2 && nextIndex == 3 && direction == 'down') {
                $isAnimatedThird.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedThird.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 4 && nextIndex == 3 && direction == 'up') {
                $isAnimatedThird.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedThird.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 04 
            if (index == 3 && nextIndex == 4 && direction == 'down') {
                $isAnimatedFourth.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedFourth.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 5 && nextIndex == 4 && direction == 'up') {
                $isAnimatedFourth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedFourth.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 05 
            if (index == 4 && nextIndex == 5 && direction == 'down') {
                $isAnimatedFifth.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedFifth.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 6 && nextIndex == 5 && direction == 'up') {
                $isAnimatedFifth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedFifth.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 06 
            if (index == 5 && nextIndex == 6 && direction == 'down') {
                $isAnimatedSixth.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedSixth.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 7 && nextIndex == 6 && direction == 'up') {
                $isAnimatedSixth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedSixth.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 07 
            if (index == 6 && nextIndex == 7 && direction == 'down') {
                $isAnimatedSeventh.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedSeventh.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 8 && nextIndex == 7 && direction == 'up') {
                $isAnimatedSeventh.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedSeventh.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 08 
            if (index == 7 && nextIndex == 8 && direction == 'down') {
                $isAnimatedEighth.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedEighth.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 9 && nextIndex == 8 && direction == 'up') {
                $isAnimatedEighth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedEighth.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 09 
            if (index == 8 && nextIndex == 9 && direction == 'down') {
                $isAnimatedNinth.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedNinth.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 10 && nextIndex == 9 && direction == 'up') {
                $isAnimatedNinth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedNinth.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 10 
            if (index == 9 && nextIndex == 10 && direction == 'down') {
                $isAnimatedTenth.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedTenth.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 11 && nextIndex == 10 && direction == 'up') {
                $isAnimatedTenth.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimatedTenth.removeClass('animated fadeInUp');
                }, 1750)
            }

            // Page 11 
            if (index == 10 && nextIndex == 11 && direction == 'down') {
                $isAnimated11.addClass('animated slideInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimated11.removeClass('animated slideInUp');
                }, 1750)
            }
            if (index == 12 && nextIndex == 11 && direction == 'up') {
                $isAnimated11.addClass('animated fadeInUp').css({ 'animation-delay': '.2s', 'animation-duration': '1.4s' });
                setTimeout(function() {
                    $isAnimated11.removeClass('animated fadeInUp');
                }, 1750)
            }
        },

    });
});