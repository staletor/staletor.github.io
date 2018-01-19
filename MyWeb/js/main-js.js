/**
 * Created by ststokke on 9/30/2017.
 */

$(document).ready(function(){

    var chatWrapper = $('#chat-wrapper');
    var welBackOne = $('#welcome-back-one');
    var welBackTwo = $('#welcome-back-two');
    var welBackThree = $('#welcome-back-three');
    var backChatOne = $('#back-chat-one');
    var backChatTwo = $('#back-chat-two');
    var welDivOne = $('#chat-welcome-one');
    var welDivTwo = $('#chat-welcome-two');
    var welDivThree = $('#chat-welcome-three');
    var fineDiv = $('#you-fine-chat');
    var aboutMeChat = $('#about-me-chat');
    var aboutMeMoreChat = $('#about-me-more-chat');
    var aboutMeOne = $('#about-me-one');
    var aboutMeTwo = $('#about-me-two');
    var aboutMeThree = $('#about-me-three');
    var aboutMeFour = $('#about-me-four');
    var aboutMeFive = $('#about-me-five');
    var aboutWorkChat = $('#about-work-chat');
    var aboutWorkOne = $('#about-work-one');
    var aboutWorkTwo = $('#about-work-two');
    var aboutWorkThree = $('#about-work-three');
    var laterPortfolioChat = $('#later-portfolio-chat');
    var aboutPortfolioChat = $('#about-portfolio-chat');
    var aboutPortfolioOne = $('#about-portfolio-one');
    var aboutPortfolioTwo = $('#about-portfolio-two');
    var aboutPortfolioThree = $('#about-portfolio-three');
    var likePortfolioChat = $('#like-portfolio-chat');
    var aboutPortfolioFour = $('#about-portfolio-four');
    var dislikePortfolioChat = $('#dislike-portfolio-chat');
    var aboutPortfolioFive = $('#about-portfolio-five');
    var contactChat = $('#contact-chat');
    var aboutContactOne = $('#about-contact-one');
    var chatEndOne = $('#chat-end-one');
    var chatEndTwo = $('#chat-end-two');
    
    
     
    function scrolling() {
        var totalHeight = 0;
        $("#chat-wrapper").children().each(function(){
            totalHeight = totalHeight + $(this).outerHeight(true);
        });
        $("#chat-wrapper").animate({ scrollTop:totalHeight-$("#main").height()+100 }, 600);
        
    }
    
    function addchatright(i) {
        $(chatWrapper).append(i);
        scrolling();
    }
    
    function addchatleft(j) {
        $(chatWrapper).append(j);
        setTimeout(function () {
            $(j).addClass("stop-typing");
            scrolling();
        }, 2000);
        scrolling()
    }
    
    function showoption(k) {
        $(k).addClass("show-option");
    }

    function hideoption(l) {
        $(l).removeClass("show-option");
    }

    function removeoption(m) {
        $(m).addClass("remove-option");
    }

    function enableoption(n) {
        $(n).removeClass("remove-option");
        $(n).removeClass("show-option");
    }


    var dob = '1984-10-19';
    if(dob != '') {
        var str = dob.split('-');
        var firstdate = new Date(str[0], str[1], str[2]);
        var today = new Date();
        var dayDiff = Math.ceil(today.getTime() - firstdate.getTime()) / (1000 * 60 * 60 * 24 * 365);
        var age = parseInt(dayDiff);
        $('#age').html(age + ' years old');
    }

    function togglemenu() {
        $("#main-menu").toggleClass("menu-open");
    }

    function togglex() {
        $("#main-menu").toggleClass("menu-x");
    }

    function toggleportfolio() {
        $("#portfolio-wrapper").toggleClass("portfolio-open");
        $(".portfolio-project-container").removeClass("project-open");
        $(".portfolio-project-container").css({"height": "0px"});
        $("#main-menu").removeClass('menu-open');
        $('.right-wrapper').removeClass('project-open');
        $('#slider .headContainer').removeClass("project-open");
        $("#portfolio-wrapper").removeClass('project-open');
        setTimeout(function () {
            $('.headImage').css({"height": slideHeight });
            $('.headImage').removeClass("project-open");
            $('.headContainer').css({"top": slideHeight/3 });
            $('header').removeClass('project-open');
        }, 1);
        togglex();
        setTimeout(function () {
            $('#header-wrapper').toggleClass("wide-header");
        }, 200);
        if ( $("header").hasClass("project-open")) {
            setTimeout(function () {
                $(".control_prev").removeClass("control-open");
                $(".control_next").removeClass("control-open");
            }, 400);
        } else {
                setTimeout(function () {
                    $(".control_prev").toggleClass("control-open");
                    $(".control_next").toggleClass("control-open");
                }, 400);
            }
    }
 
    $("#main-menu").on('click', function (event) {
            event.stopPropagation();
            if ( $( this ).hasClass( "menu-x" ) ) {
                toggleportfolio() 
            }
            else {
                togglemenu()
            }
    });

    $(".menu-open").click(function(e){
        e.stopPropagation();
    });

    $(document).click(function(){
        $("#main-menu").removeClass('menu-open');
    });
        
    $(".portfolio-button").click(function (event) {
        event.stopPropagation();
        toggleportfolio()     
    });
        

    $(".clear-button").click(function () {
        localStorage.clear();
    });

    $("#item-three").on('click', function () {
            $('link[title="colors-theme"]')[0].disabled=false;
    });
    
    $("#item-four").on('click', function () {
            $('link[title="colors-theme"]')[0].disabled=true;
    });

    if (localStorage.getItem("visitor") === null) {
        addchatleft(welDivOne);
        setTimeout(function () {
            addchatleft(welDivTwo);
            showoption("#you-fine-option");
            setTimeout(function () {
                $("#txt_name").focus();
            }, 2700);
        }, 2400);

    }
    else {
        var bla = localStorage.getItem("visitor", bla);
        $('.re-visitor-name').html(bla);
        addchatleft(welBackOne)
        setTimeout(function () {
            addchatleft(welBackTwo);
            showoption("#yes-portfolio-option");
            showoption("#contact-option-two");
            showoption("#not-visitor-option");
        }, 2400);
    }

    $("#yes-portfolio-option").click(function(){
        addchatright(backChatOne);
        removeoption("#yes-portfolio-option");
        hideoption("#yes-portfolio-option");
        hideoption("#not-visitor-option");
        removeoption("#about-work-option");
        removeoption("#show-portfolio-option-two");
        hideoption("#contact-option-two");        
        setTimeout(function(){
            addchatleft(aboutPortfolioOne);
            setTimeout(function(){
                var timer = setInterval(function(){
                    $("#count_num").html(function(i,html){

                        if(parseInt(html)>0)
                        {
                            return parseInt(html)-1;
                        }
                        else
                        {
                            clearTimeout(timer);
                            return "Open portfolio";
                        }
                    });

                },1000);
                setTimeout(function(){
                    toggleportfolio();
                }, 2500);
            }, 2000);
            setTimeout(function () {
                showoption("#contact-option-two");
            }, 5000);
        }, 1000);
    });

    $("#not-visitor-option").click(function(){
        localStorage.clear();
        addchatright(backChatTwo);
        hideoption("#yes-portfolio-option");
        hideoption("#not-visitor-option");
        hideoption("#contact-option-two");
        setTimeout(function(){
            addchatleft(welBackThree);
        }, 1000);
        setTimeout(function(){
            addchatleft(welDivTwo);
            showoption("#you-fine-option");
            setTimeout(function () {
                $("#txt_name").focus();
            }, 2700);
        }, 4000);
    });
    
    $("#submit-name").click(function(){
        var bla = $('#txt_name').val();
        $('.visitor-name').html(bla);
        localStorage.setItem("visitor", bla);
        addchatright(fineDiv);
        hideoption("#you-fine-option");
        removeoption("#you-fine-option");
        setTimeout(function(){
            addchatleft(welDivThree);
            showoption("#about-me-option");
            showoption("#about-work-option");
        }, 600);
        
    });

    $('#txt_name').bind("enterKey",function(e){
        var bla = $('#txt_name').val();
        $('.visitor-name').html(bla);
        localStorage.setItem("visitor", bla);
        addchatright(fineDiv);
        hideoption("#you-fine-option");
        removeoption("#you-fine-option");
        setTimeout(function(){
            addchatleft(welDivThree);
            showoption("#about-me-option");
            showoption("#about-work-option");
        }, 600);
    });
    $('#txt_name').keyup(function(e){
        if(e.keyCode == 13)
        {
            $(this).trigger("enterKey");
        }
    });


    $("#about-me-option").click(function(){
        addchatright(aboutMeChat);
        removeoption("#about-me-option");
        enableoption("#about-me-more-option");
        hideoption("#about-me-option");
        hideoption("#about-work-option");
        hideoption("#contact-option");
        hideoption("#show-portfolio-option");
        setTimeout(function(){
            addchatleft(aboutMeOne);
        }, 1000);
        setTimeout(function(){
            addchatleft(aboutMeTwo);
        }, 4000);
        setTimeout(function(){
            addchatleft(aboutMeThree);
            showoption("#about-me-more-option");
            showoption("#about-work-option");
            showoption("#contact-option");
        }, 7000);
    });
    
    $("#about-me-more-option").click(function () {
        addchatright(aboutMeMoreChat);
        removeoption("#about-me-more-option");
        hideoption("#about-me-more-option");
        hideoption("#about-work-option");
        hideoption("#contact-option");
        setTimeout(function () {
            addchatleft(aboutMeFour);
        }, 1000);
        setTimeout(function () {
            addchatleft(aboutMeFive);
            if ($("#about-work-option").is( ".remove-option" ) && $("#contact-option").is( ".remove-option" )) {
                setTimeout(function(){
                    addchatleft(chatEndOne);
                    setTimeout(function(){
                        addchatleft(chatEndTwo);
                    }, 3700);
                }, 6000);
            }

            else {
                showoption("#about-work-option");
                showoption("#contact-option");
            }
        }, 4000);
        setTimeout(function () {
            scrolling();
        }, 6100);
    })

    $("#about-work-option").click(function(){
        addchatright(aboutWorkChat);
        removeoption("#about-work-option");
        hideoption("#about-work-option");
        hideoption("#about-me-option");
        hideoption("#about-me-more-option");
        enableoption("#contact-option");
        setTimeout(function(){
            addchatleft(aboutWorkOne);
        }, 800);
        setTimeout(function(){
            addchatleft(aboutWorkTwo);
        }, 3500);
        setTimeout(function(){
            addchatleft(aboutWorkThree);
            showoption("#show-portfolio-option");
            showoption("#not-portfolio-option");
        }, 6500);
    });

    
    
    $("#show-portfolio-option").click(function () {
        addchatright(aboutPortfolioChat);
        removeoption("#show-portfolio-option");
        hideoption("#not-portfolio-option");
        hideoption("#about-me-option");
        setTimeout(function(){
            addchatleft(aboutPortfolioOne);
            setTimeout(function(){
                var timer = setInterval(function(){
                    $("#count_num").html(function(i,html){

                        if(parseInt(html)>0)
                        {
                            return parseInt(html)-1;
                        }
                        else
                        {
                            clearTimeout(timer);
                            return "Open portfolio"; 
                        }
                    });

                },1000);
                setTimeout(function(){
                    toggleportfolio();
                    setTimeout(function(){
                        addchatleft(aboutPortfolioThree);
                        showoption("#like-portfolio-option");
                        showoption("#dislike-portfolio-option");
                    }, 500);
                }, 2500);
            }, 2000);
        }, 800);
    });

    $("#like-portfolio-option").click(function(){
        addchatright(likePortfolioChat);
        hideoption("#like-portfolio-option");
        hideoption("#dislike-portfolio-option");
        setTimeout(function(){
            addchatleft(aboutPortfolioFour);
            showoption("#contact-option");
            showoption("#about-me-option");
            showoption("#about-me-more-option");
        }, 800);
    });

    $("#dislike-portfolio-option").click(function(){
        addchatright(dislikePortfolioChat);
        hideoption("#like-portfolio-option");
        hideoption("#dislike-portfolio-option");
        setTimeout(function(){
            addchatleft(aboutPortfolioFive);
            showoption("#contact-option");
            showoption("#about-me-option");
            showoption("#about-me-more-option");
        }, 800);
    });
    
    $("#not-portfolio-option").click(function () {
        addchatright(laterPortfolioChat);
        removeoption("#not-portfolio-option");
        hideoption("#show-portfolio-option");
        setTimeout(function(){
            addchatleft(aboutPortfolioTwo);
            showoption("#about-me-option");
            showoption("#about-me-more-option");
            showoption("#contact-option");
        }, 800);
    });
    
    $("#contact-option").click(function () {
        addchatright(contactChat);
        hideoption("#about-me-option");
        hideoption("#about-me-more-option");
        hideoption("#contact-option");
        hideoption("#not-visitor-option");
        hideoption("#yes-portfolio-option");
        removeoption("#contact-option");
        setTimeout(function(){
            addchatleft(aboutContactOne);
            
            if ($("#about-me-option").is( ".remove-option" ) && $("#about-me-more-option").is( ".remove-option" ) && $("#about-work-option").is( ".remove-option" )) {
                setTimeout(function(){
                    addchatleft(chatEndOne);
                    setTimeout(function(){
                        addchatleft(chatEndTwo);
                    }, 3700);
                }, 4000);
            }
            
            else {
                showoption("#about-me-option");
                showoption("#about-me-more-option");
                showoption("#about-work-option");
            }
        }, 800);
    });

    $("#contact-option-two").click(function () {
        addchatright(contactChat);
        hideoption("#contact-option-two");
        hideoption("#not-visitor-option");
        hideoption("#yes-portfolio-option");
        hideoption("#about-me-option");
        removeoption("#contact-option-two");
        setTimeout(function(){
            addchatleft(aboutContactOne);
            showoption("#show-portfolio-option-two");
        }, 800);
    });

    $("#show-portfolio-option-two").click(function () {
        addchatright(aboutPortfolioChat);
        removeoption("#show-portfolio-option-two");
        hideoption("#show-portfolio-option-two");
        hideoption("#about-me-option");
        setTimeout(function(){
            addchatleft(aboutPortfolioOne);
            setTimeout(function(){
                var timer = setInterval(function(){
                    $("#count_num").html(function(i,html){

                        if(parseInt(html)>0)
                        {
                            return parseInt(html)-1;
                        }
                        else
                        {
                            clearTimeout(timer);
                            return "Open portfolio";
                        }
                    });

                },1000);
                setTimeout(function(){
                    toggleportfolio();
                }, 2500);
            }, 2000);
        }, 800);
    });
       
    
    /* --- PORTFOLIO --- */

    var slideCount = $('#slider ul li').length;
    var slideWidth = $(window).width();
    var slideHeight = $('#portfolio-wrapper').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('.headImage').css({ height: slideHeight });
    $('.headImage img').css({ height: slideHeight });
    $('.headContainer').css({ top: slideHeight/3 });
    $('.control_next').css({ top: slideHeight/2 });
    $('.control_prev').css({ top: slideHeight/2 });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li').css({ width: slideWidth });

    $(window).resize(function () {
        slideCount = $('#slider ul li').length;
        slideWidth = $(window).width();
        slideHeight = $('#portfolio-wrapper').height();
        sliderUlWidth = slideCount * slideWidth;
    
        $('#slider').css({ width: slideWidth, height: slideHeight });
    
        $('.headImage').css({ height: slideHeight });
        $('.headImage img').css({ height: slideHeight });
        $('.headContainer').css({ top: slideHeight/3 });
        $('.control_next').css({ top: slideHeight/2 });
        $('.control_prev').css({ top: slideHeight/2 });
    
        $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
        $('#slider ul li').css({ width: slideWidth });
    
        
    });

    $('#slider ul li:last-child').prependTo('#slider ul');
    
    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 400, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
        var target = $("#portfolio-indicator div.active").index();
        if (target === 0) {
            target = $("#portfolio-indicator div").length;
        }
        target = target - 1;
        indication(target);
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 400, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
        var target = $("#portfolio-indicator div.active").index();
        if (target === $("#portfolio-indicator div").length - 1) {
            target = -1;
        }
        target = target + 1
        indication(target);
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
 
    /* find a way to disable key input when not needed */
        $(window).on('keydown', function (e) {
            if (e.keyCode === 37) // left
                moveLeft();
            else if (e.keyCode === 39) // right
                moveRight();
        });

        
    $("#slider ul li").on( "swipeleft", swipeleftHandler );
    function swipeleftHandler( event ){
        moveRight()
    }

    $("#slider ul li").on( "swiperight", swiperightHandler );
    function swiperightHandler( event ){
        moveLeft()
    }

    $("#portfolio-indicator div:first-child").addClass("active");

    function indication(target) {
        $("#portfolio-indicator div").removeClass("active").eq(target).addClass("active");
    }
    
    function openproject(o) {
        $(o).click(function () {
            var projID = $(this).attr('href');
            $(projID).addClass('project-open');
            $(projID + ' .right-wrapper').addClass('project-open');
            $("#portfolio-wrapper").addClass('project-open');
            var totalHeight = 0;
            setTimeout(function () {
                $(projID + ' .right-wrapper').children().each(function () {
                    totalHeight += $(this).outerHeight(true);
                });
                $(projID).css({"height": totalHeight + slideHeight/2});
                $(".control_prev").toggleClass("control-open");
                $(".control_next").toggleClass("control-open");
                $('.headImage').css({"height": slideHeight/2 });
                $('.headImage').addClass("project-open");
                $('.headContainer').css({"top": slideHeight/8 });
                $('header').addClass('project-open');
                $('#slider .headContainer').addClass("project-open");
            }, 1);
        });
    }
    
    function closeproject(o) {
        $(o).click(function () {
            var projID = $(this).attr('href');
            $(projID).removeClass('project-open');
            $(projID + ' .right-wrapper').removeClass('project-open');
            $('#slider .headContainer').removeClass("project-open");
            $("#portfolio-wrapper").removeClass('project-open');
            setTimeout(function () {
                $(".control_prev").toggleClass("control-open");
                $(".control_next").toggleClass("control-open");
                $('.headImage').css({"height": slideHeight });
                $('.headImage').removeClass("project-open");
                $('.headContainer').css({"top": slideHeight/3 });
                $('header').removeClass('project-open');
                $(projID).css({"height": "0px"});
            }, 1);
        });
    }

    function nextproject(o,p) {
        $(o).click(function () {
            var projID = p;
            $(projID).addClass('project-open');
            $(projID + ' .right-wrapper').addClass('project-open');
            moveRight();
            $(window).scrollTop(0);
            $("#portfolio-wrapper").addClass('project-open');
            var totalHeight = 0;
            setTimeout(function () {
                $(projID + ' .right-wrapper').children().each(function () {
                    totalHeight += $(this).outerHeight(true);
                });
                $(projID).css({"height": totalHeight + slideHeight/2});
                $(".control_prev").toggleClass("control-open");
                $(".control_next").toggleClass("control-open");
                $('.headImage').css({"height": slideHeight/2 });
                $('.headImage').addClass("project-open");
                $('.headContainer').css({"top": slideHeight/8 });
                $('header').addClass('project-open');
                $('#slider .headContainer').addClass("project-open");
            }, 1);
        });
    }
    
    openproject('#readSC');
    closeproject('.closeSC');
    openproject('#readBirk');
    closeproject('.closeBirk');
    nextproject('#readBirkNext', '#BirkProject');

    function closestickytop(r) {
        var $window = $(window);
        var scrollEnough = slideHeight/2 + 50;
        $window.scroll(function () {
            if ($window.scrollTop() >= scrollEnough) {
                $(r + " .bottom").addClass("project-open");
            } else {
                $(r + " .bottom").removeClass("project-open");
            }
        });
    }
    
    closestickytop('#SCProject');
    closestickytop('#BirkProject');

    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);

    //Function to the css rule
    function checkSize(){
        if ($(".right-wrapper").css("float") == "none" ){

        }
    }

    /*if ($(".right-wrapper").css("float") == "none" ){

        $(window).scroll(function() {
            sdistance = Math.abs($(window).scrollTop());
            var stranslate = "translateY(-" + sdistance/2 + "px)";
            $(".headImage").css({"transform": stranslate, "-moz-transform": stranslate, "-webkit-transform": stranslate});
            $(".headContainer").css({"transform": stranslate, "-moz-transform": stranslate, "-webkit-transform": stranslate});
        });

    }*/
    
});