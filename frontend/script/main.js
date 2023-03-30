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
    //   document.getElementById("vacation").innerHTML = response.section2.text;
}


// getServerData();