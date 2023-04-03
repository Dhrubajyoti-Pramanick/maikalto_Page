
//data fetch
async function getServerData() {
    const response = await fetch(`http://localhost:8080`).then(function (res) {
        console.log(res);
        return res.json();
    });
    console.log(response);
    console.log(response.carousel.carousel3.roomType);
    // experience section
    document.getElementById(
        "wellness"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.wellnessImg}' alt="wellnessImg"/>`;
    document.getElementById(
        "giftCard"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.giftCardImg}' alt="giftCard"/>`;
    document.getElementById(
        "mikaltoShop"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.mikaltoShopImg}' alt="mikaltoShopImg"/>`;
    document.getElementById(
        "experience"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.experienceImg}' alt="experienceImg"/>`;
    document.getElementById(
        "shampoo"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.shampoo}' alt="wellnessImg"/>`;
    document.getElementById(
        "towel"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.towel}' alt="giftCard"/>`;
    document.getElementById(
        "brush"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.brush}' alt="mikaltoShopImg"/>`;
    document.getElementById(
        "incense"
    ).innerHTML = `<img class="img-fluid" src='${response.experience.incense}' alt="experienceImg"/>`;
}
getServerData();