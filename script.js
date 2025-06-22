/* 
    5 JavaScript Functionalities:
        1. Date Class
        2. Switch Statement
        3. If-Else
        4. Function
        5. Let/Var
        6. Const
        7. GetElementByID
    
    Any Extra Functionalities not on the list:
        1. JSON in cart.js
        2. Try/Catch
*/

function playSound() 
{
    let audio = document.getElementById("button-click-sound");
    audio.play();
}

function showReviewTest() 
{
    document.getElementById("review-feedback-paragraph").innerHTML = "Thank you for submitting your review!";
}

function getDate()
{
    date = new Date();
    return date;
}

function checkDate()
{
    const halloweenDate = new Date('Oct 31, 2022');
    const thanksgivingDate = new Date('Nov 24, 2022');
    const christmasDate = new Date('Dec 25, 2022');
    currentDate = getDate();

    // switch(0)
    switch(currentDate.getMonth())
    {
        case halloweenDate.getMonth():
            try {
                document.body.style.backgroundColor = "orange";
                var event = document.getElementById("event");
                document.getElementById("holidayItem").innerHTML = "Halloween Shirt";
                document.getElementById("tableHolidayName").innerHTML = "Halloween T-shirt";
                document.getElementById("tableHolidayPrice").innerHTML = "$19.99";
                event.src = "image_audio/halloween_tshirt.jpg";
            } catch (error) {};
            if(document.title == "Merch Shop - Checkout") {
                document.getElementById("checkout-holiday-item").firstElementChild.innerText = "Halloween Shirt";
            }
            break;

        case thanksgivingDate.getMonth():
            try {
                document.body.style.backgroundColor = "peachpuff";
                var event = document.getElementById("event");
                document.getElementById("holidayItem").innerHTML = "Thanksgiving Sweater";
                document.getElementById("tableHolidayName").innerHTML = "Thanksgiving Sweater";
                document.getElementById("tableHolidayPrice").innerHTML = "$34.99";
                event.src = "image_audio/thanksgiving_sweater.jpg";
            } catch (error) {};
            if(document.title == "Merch Shop - Checkout") {
                document.getElementById("checkout-holiday-item").firstElementChild.innerText = "Thanksgiving Sweater";
            }
            break;

        case christmasDate.getMonth():
            try {
                document.body.style.backgroundColor = "lightskyblue";
                document.body.style.backgroundImage = "url('image_audio/snow_falling.gif')";
                document.getElementById("holidayItem").innerHTML = "Christmas Sweater";
                document.getElementById("tableHolidayName").innerHTML = "Christmas Sweater";
                document.getElementById("tableHolidayPrice").innerHTML = "$44.99";
                var event = document.getElementById("event");
                event.src = "image_audio/christmas_sweater1.jpg";
            } catch (error) {};
            if(document.title == "Merch Shop - Checkout") {
                document.getElementById("checkout-holiday-item").firstElementChild.innerText = "Christmas Sweater";
            }
            break;
        default:
            if(document.title == "Merch Shop - Checkout") {
                document.getElementById("checkout-holiday-item").remove();
            }
            try {
                document.getElementsByTagName("tr")[4].remove();
                document.getElementById("carouselHoliday").remove();
                document.getElementById("carouselButton").remove();
                document.getElementById("holidayItem").remove();
            } catch (error) {};
    }
}

function cartAlert()
{
    if (document.getElementById("cartAlert").innerText == "")
    {
        document.getElementById("cartAlert").innerText = "Success! The item was added to your cart.";
    }
    else
    {
        document.getElementById("cartAlert").innerText = "Success! another item was added to your cart.";
    }
}

function reviewAlert() {
    if(!document.getElementById("review-alert")){
        document.getElementById("review-form").innerHTML += '<div class="alert alert-success alert-dismissible" id="review-alert" style="display: none;"> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true"></button> <strong>Success!</strong> Your review has been submitted.</div>';
    }

    let alert = document.getElementById("review-alert");
    alert.style.setProperty("display", "");
}

function questionsAlert() {
    if(!document.getElementById("questions-alert")){
        document.getElementById("questions-form").innerHTML += '<div class="alert alert-success alert-dismissible" id="questions-alert" style="display: none;"> <button type="button" class="btn-close" data-bs-dismiss="alert" aria-hidden="true"></button> <strong>Success!</strong> Your questions have been submitted.</div>';
    }

    let alert = document.getElementById("questions-alert");
    alert.style.setProperty("display", "");
}