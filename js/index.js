options = {
    month: "numeric",
    day: "numeric",
    hour12: true,
    timeZone: "America/Chicago",
};

let ShopIsOpen = true
let NextOpenTime = null

let message = "We're open today until 6:00 pm!"

const date = new Date()

let nextOpenMessage

let DayOfWeek = date.getDay()
let CurrentHours = date.getHours()

if (DayOfWeek === 6 && CurrentHours >= 18) {
    date.setDate(date.getDate()+3)

    message = "We'll next be open Tuesday, " + new Intl.DateTimeFormat("en-US", options).format(date) + " at 8:00 am"
}

if (DayOfWeek === 0) {ShopIsOpen = false
    date.setDate(date.getDate()+2)

    message = "We'll next be open Tuesday, " + new Intl.DateTimeFormat("en-US", options).format(date) + " at 8:00 am"
}

if (DayOfWeek === 1 || ((DayOfWeek > 1 && DayOfWeek < 6) && CurrentHours >= 18)) {
    message = "We'll open tomorrow at 8:00 am"
}

if (DayOfWeek > 1 && CurrentHours < 8) {message = "We open today at 8:00 am!"}


// if (ShopIsOpen == false) {message = "Sorry, we're closed!"}

document.onreadystatechange = () => {
    if (document.readyState === "interactive") {
        let openOrClosed = document.getElementById("openOrClosed")
        openOrClosed.innerText = message
        console.log(new Intl.DateTimeFormat("en-US", options).format(date));
    }
}