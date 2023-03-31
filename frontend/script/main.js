let swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//data fetch
async function getServerData() {
    const response = await fetch(
        `http://localhost:8000`
    ).then(function (res) {
        console.log(res);
        return res.json();
    });
    console.log(response);
    console.log(response.carousel.carousel3.roomType);
    //searchRoom section
    document.getElementById("room").style.backgroundImage = `url(${response.searchRoom.img})`;

    //welcomeNote section
    document.getElementById("welcomeNoteImg1").innerHTML = `<img class="w-100" src='${response.welcomeNote.img1}' alt="bedroomNotFound"/>`
    document.getElementById("welcomeNoteImg2").innerHTML = `<img class="w-100" src='${response.welcomeNote.img2}' alt="bedroomNotFound"/>`
    document.getElementById("welcomeNoteImg3").innerHTML = `<img class="w-100" src='${response.welcomeNote.img3}' alt="bedroomNotFound"/>`

    //carousel section
    document.getElementById("carousel1").innerHTML = `<img class="imgCarousel" src='${response.carousel.carousel1.img}' alt="bedroomNotFound"/>`
    document.getElementById("carousel2").innerHTML = `<img class="imgCarousel" src='${response.carousel.carousel2.img}' alt="bedroomNotFound"/>`
    document.getElementById("carousel3").innerHTML = `<img class="imgCarousel" src='${response.carousel.carousel3.img}' alt="bedroomNotFound"/>`

    // next button carousel
    document.getElementById("nextButton").addEventListener('click', () => {
        console.log(swiper.activeIndex);
        if (swiper.activeIndex === 0) {
            document.getElementById("roomType").innerHTML = `${response.carousel.carousel1.roomType}`;
            document.getElementById("price").innerHTML = `${response.carousel.carousel1.price}`;
        } else if (swiper.activeIndex === 1) {
            document.getElementById("roomType").innerHTML = `${response.carousel.carousel2.roomType}`;
            document.getElementById("price").innerHTML = `${response.carousel.carousel2.price}`;
        } else if (swiper.activeIndex === 2) {
            document.getElementById("roomType").innerHTML = `${response.carousel.carousel3.roomType}`;
            document.getElementById("price").innerHTML = `${response.carousel.carousel3.price}`;
        }
    })
    // prev button carousel
    document.getElementById("prevButton").addEventListener('click', () => {
        console.log(swiper.activeIndex);
        if (swiper.activeIndex === 0) {
            document.getElementById("roomType").innerHTML = `${response.carousel.carousel1.roomType}`;
            document.getElementById("price").innerHTML = `${response.carousel.carousel1.price}`;
        } else if (swiper.activeIndex === 1) {
            document.getElementById("roomType").innerHTML = `${response.carousel.carousel2.roomType}`;
            document.getElementById("price").innerHTML = `${response.carousel.carousel2.price}`;
        } else if (swiper.activeIndex === 2) {
            document.getElementById("roomType").innerHTML = `${response.carousel.carousel3.roomType}`;
            document.getElementById("price").innerHTML = `${response.carousel.carousel3.price}`;
        }
    })
    // experience section
    document.getElementById("wellness").innerHTML = `<img class="img-fluid" src='${response.experience.wellnessImg}' alt="wellness"/>`
    document.getElementById("giftCard").innerHTML = `<img class="img-fluid" src='${response.experience.giftCardImg}' alt="wellness"/>`
    document.getElementById("mikaltoShop").innerHTML = `<img class="img-fluid" src='${response.experience.mikaltoShopImg}' alt="wellness"/>`
    document.getElementById("experience").innerHTML = `<img class="img-fluid" src='${response.experience.experienceImg}' alt="wellness"/>`
}
getServerData();
let form = {
    "checkIn": "",
    "checkOut": "",
    "adults": "",
    "children": ""
}
// form submission
function formSubmit(event) {
    event.preventDefault();
    console.log("hello");
    console.log(document.getElementById("checkIn").value);
    console.log(document.getElementById("checkOut").value);
    console.log(document.getElementById("adults").value);
    console.log(document.getElementById("children").value);
    form.checkIn = document.getElementById("checkIn").value;
    form.checkOut = document.getElementById("checkOut").value;
    form.adults = document.getElementById("adults").value;
    form.children = document.getElementById("children").value;
    console.log(form);

    fetch("http://localhost:8000/", {
        method: "POST",
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(form),
    }).then(() => {
        alert("Form submitted!");
        document.getElementById("checkIn").value = null;
        document.getElementById("checkOut").value = null;
        document.getElementById("adults").value = "0";
        document.getElementById("children").value = "0";
    });
}