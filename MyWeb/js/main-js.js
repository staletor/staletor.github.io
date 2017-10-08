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
        
     $(".portfolio-button").click(function () {
        $("#portfolio-wrapper").toggleClass("portfolio-open");
    });

    $(".clear-button").click(function () {
        localStorage.clear();
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
                    $("#portfolio-wrapper").addClass("portfolio-open");
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
                    $("#portfolio-wrapper").addClass("portfolio-open");
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
                    $("#portfolio-wrapper").addClass("portfolio-open");
                }, 2500);
            }, 2000);
        }, 800);
    });
       
    
});