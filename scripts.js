/* =========================================
   CURRENT DATE & TIME
========================================= */

function showDateTime() {

    const dateTimeElement =
        document.getElementById("datetime");

    if (dateTimeElement) {

        const now = new Date();

        dateTimeElement.innerHTML =
            "Current Date & Time: " +
            now.toLocaleString();

    }
}

showDateTime();

setInterval(showDateTime, 1000);


/* =========================================
   BREAKING NEWS TICKER
========================================= */

const breakingNews = [

    "New education policy announced today",

    "National development project begins",

    "Major sports tournament starts this week"

];

let newsIndex = 0;

const tickerText =
    document.getElementById("tickerText");


function changeBreakingNews() {

    if (tickerText) {

        newsIndex++;

        if (newsIndex >= breakingNews.length) {
            newsIndex = 0;
        }

        tickerText.innerText =
            breakingNews[newsIndex];

    }

}

setInterval(changeBreakingNews, 4000);


/* =========================================
   LOGIN CONFIRMATION POPUP
========================================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const username =
                document.getElementById("username").value;

            if (username.trim() === "") {

                alert("Please enter your username.");

                return;
            }

            alert(
                "Login form submitted successfully!"
            );

        }
    );

}


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Your message has been sent successfully!"
            );

            contactForm.reset();

        }
    );

}