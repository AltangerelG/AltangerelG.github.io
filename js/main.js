var page = $("html, body");
var lastScrollTop = 0;

initializeHeaderMenuButtons();
initializeSortMenuButtons();
initializeProjectButtons();

//Preloads images in the carousels so they're hopefully ready when the user wants to see them. This must come before we call the function below.
$.preload = function() {
    for (var i = 0; i < arguments.length; i++) {
        $("<img />").attr("src", arguments[i]);
    }
};

$.preload("img/project1/1.jpg", "img/project1/2.jpg", 
	"img/project1/3.jpg", "img/project1/4.jpg",
"img/project1/5.jpg", "img/project1/6.jpg", "img/project1/7.jpg",
"img/project1/8.jpg", "img/project2/1.jpg", "img/project2/2.jpg",
"img/project2/3.jpg", "img/project2/4.jpg", "img/project3/1.jpg",
"img/project3/2.jpg", "img/project3/3.jpg", "img/project3/4.jpg",
"img/project3/5.jpg", "img/project3/6.jpg", "img/project3/7.jpg",
"img/project3/8.jpg", "img/project4/1.jpg", "img/project4/2.jpg",
"img/project4/3.jpg", "img/project4/4.jpg", "img/project4/5.jpg",
"img/project4/6.jpg", "img/project4/7.jpg", "img/project4/8.jpg",
"img/project4/9.jpg", "img/project4/10.jpg", "img/project5/1.jpg",
"img/project5/2.jpg", "img/project5/3.jpg", "img/project5/4.jpg",
"img/project5/5.jpg", "img/project5/6.jpg", "img/project7/1.jpg",
"img/project7/2.jpg", "img/project7/3.jpg" );




function initializeProjectButtons() {
    $(".all-projects").click(function() {

        if (this.classList.contains("project1")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project1/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Bus Card Balance Reader<br>Free version: <a href='https://t.ly/KU13' target='_blank'>t.ly/KU13</a></div>" +
                "It checks the balance of the bus transportation NFC card as well as last 10 transactions. I decompiled the existing app and developed it in my home country's language.<br><br>" +
                "As of August 2022, it has over 50,000 installs. It has a user rating of 4.6/5 stars of over 2.65K reviews."
            );
        }
        else if (this.classList.contains("project2")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project2/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/5.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project2/6.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Zaalandaa indoor courts app" +
            	"<br>Play Store link: <a href='https://zaalandaa.en.aptoide.com/app' target='_blank'>https://zaalandaa.en.aptoide.com/app</a></div>" +
                "It provides indoor courts information as a RecyclerView list. You can also filter with the cheapest court, most expensive court, and the nearest court. I used OpenStreetMap to show where is the court and it shows a route that how to get there. This project won the 'Best Business' and 'Audience Choice' awards at MIT Global Startup Lab Mongolia 2016."
            );
        }
        else if (this.classList.contains("project3")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project3/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div> " +
                "<div class='item'> <img src='img/project3/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project3/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Memo Chat<br><a href='https://chatlii-fb3b6.firebaseapp.com/' target='_blank'>chatlii-fb3b6.firebaseapp.com</a></div>Memo Chat is a " +
                "chat app that interacts with emojis and stickers. I built this using Vue.JS on frontend and Firebase for DB and backend. I deployed to Firebase hosting service. It has also Google login.");
        }
        else if (this.classList.contains("project4")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project4/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project4/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project4/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project4/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Zaalandaa PWA" +
            	"<br>Web link: <a href='https://basketball-20d1f.firebaseapp.com/' target='_blank'>https://basketball-20d1f.firebaseapp.com/</a></div>" +
                "I wrote this app to create a Progressive Web App (PWA) version of Zaalandaa mobile app." +
                "<br>They share same DB in Firebase. I deployed this app into Firebase hosting."
            );
        }

        else if (this.classList.contains("project5")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project5/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/5.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project5/6.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Mentor and Student website" +
                "<br>Web link: <a href='https://guide-sign.firebaseapp.com/' target='_blank'>https://guide-sign.firebaseapp.com/</a>" +
                "<br>Github link: <a href='https://github.com/AltangerelG/act2021-team2' target='_blank'>https://github.com/AltangerelG/act2021-team2</a></div>" +
                "I created this website for students who live in my home country to contact and get some advice from mentors who works and study in the USA. User can register as a mentor or a student. If mentor has registered, " +
                "he/she can add skills, add available time to talk. When student registered, student can see all the mentors, check their detailed profiles and request for an appointment. If mentor accept, event will be created." +
                "<br><br>I also participated with this project to a competition with 2 members. " +
                "I lead the team and we have won 2nd place with this project."
            );
        }
        else if (this.classList.contains("project6")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project6/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project6/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project6/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project6/4.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project6/5.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Localou local group meetings website" +
                "<br>Web link: <a href='https://localou-90108.web.app/' target='_blank'>https://localou-90108.web.app/</a></div>" +
                "Website for connect people with same interests. Demo version has Built with Vue.js. All groups data has been stored in Firebase DB."
            );
        }
        else if (this.classList.contains("project7")) {
            $(".carousel-inner").html(
                "<div class='item active'><img src='img/project7/1.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project7/2.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>" +
                "<div class='item'><img src='img/project7/3.jpg' onclick=\"showFullscreen(this.src)\" class='d-block img-fluid'></div>"
            );

            $(".modal-footer").html("<div class='modal-title'>Upcoming Games<br>Video link: <a href='https://www.youtube.com/watch?v=pPLaoyW__1s' target='_blank'>youtube.com/watch?v=pPLaoyW__1s</a>" +
            	"<br>Github link: <a href='https://github.com/gavingt/SunCalculator' target='_blank'>github.com/gavingt/SunCalculator</a></div>" +
                "Android app that fetches sunrise and sunset times for any date/city. Uses APIs for fetching sun data as well as timezone data. Built with a modern tech stack, leveraging MVVM, Retrofit, Moshi, Kotlin, and Coroutines."
            );
        }

        $('#myModal').modal("show");
    });
}


function showFullscreen(imageUrl) {
    window.open(imageUrl, '_blank');
}


function initializeSortMenuButtons() {
    $(".sortBtn").on("click", function() {
        console.log("click");
        $(".sortBtn").not(this).removeClass("sortBtnActive");
        $(this).addClass("sortBtnActive");
    });

    $(".all-button").click(function() {
        var allProjects = $(".all-projects");
        allProjects.css("display", "none");
        allProjects.fadeIn( "slow");
    });

    $(".web-button").click(function() {
        $(".all-projects").css("display", "none");
        $(".web-projects").fadeIn( "slow");

    });

    $(".android-button").click(function() {
        $(".all-projects").css("display", "none");
        $(".android-projects").fadeIn( "slow");

    });

    $(".other-button").click(function() {
        $(".all-projects").css("display", "none");
        $(".other-projects").fadeIn( "slow");

    });
}




function initializeHeaderMenuButtons () {

    $(".btn").on("click touchend", function (event) {
        $(this).addClass("activeBtn");
        $(this).removeClass("inactiveBtn");
        $(".btn").not(this).removeClass("activeBtn");  //remove "active" class from all nav-pills other than the one clicked


        if (event.type === "touchend") {
            setTimeout(function () {
                $(this).removeClass("activeBtn");
                $("#about_button").addClass("activeBtn");
            }, 1000);
        }

        if (this.id === "portfolio_button") {
            page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
                page.stop();
            });
            page.animate({scrollTop: $(".portfolio").offset().top}, 'slow', function () {
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });
        }
        else if (this.id === "contact_button") {
            page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
                page.stop();
            });
            page.animate({scrollTop: $(".contact").offset().top}, 'slow', function () {
                page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
            });
        }
    });


    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st <= lastScrollTop) {
            if (isElementInViewport(document.getElementById("about_button"))) {
                $("#about_button").attr("class", "btn activeBtn");
                $("#portfolio_button").removeClass("activeBtn");
                $("#contact_button").removeClass("activeBtn");
            }
        }
        lastScrollTop = st;
    });


    $(window).on({
        'touchmove': function (e) {
            $("#about_button").attr("class", "btn activeBtn");
            $("#portfolio_button").attr("class", "btn inactiveBtn").removeClass("activeBtn");
            $("#contact_button").attr("class", "btn inactiveBtn").removeClass("activeBtn");

            var touch = 'ontouchstart' in document.documentElement
                || navigator.maxTouchPoints > 0
                || navigator.msMaxTouchPoints > 0;

            if (touch) { // remove all :hover stylesheets
                try { // prevent exception on browsers not supporting DOM styleSheets properly
                    for (var si in document.styleSheets) {
                        var styleSheet = document.styleSheets[si];
                        if (!styleSheet.rules) continue;

                        for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                            if (!styleSheet.rules[ri].selectorText) continue;

                            if (styleSheet.rules[ri].selectorText.match(':hover')) {
                                styleSheet.deleteRule(ri);
                            }
                        }
                    }
                } catch (ex) {
                }
            }
        }
    });

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();

        return (
            rect.top >= -20
        );
    }


/*    var touch = 'ontouchstart' in document.documentElement
        || navigator.maxTouchPoints > 0
        || navigator.msMaxTouchPoints > 0;

    if (touch) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {
        }
    }*/

}
