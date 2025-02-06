let myChart = document.getElementById("speedChart").getContext("2d");

const xValues = [2015, 2016, 2017, 2018, 2019, 2020];
const yValues = [37, 44, 49, 51, 54, 56];

let popChart = new Chart(myChart, {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
      {
        fill: false,
        lineTension: 0.45,
        backgroundColor: "#e01e2e",
        borderColor: "#e01e2e",
        data: yValues,
        radius: 5,
        defaultFontSize: 16,
        
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
    },
    responsive: true,
    ticks: {
      //.. Other settings
      
      stepSize: 5 /* total/4 shows 0, 25%, 50%, 75%, 100% */,
      callback: function (value, index, values) {
        return `${(value / 700) * 100}%`;
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  },
});



const swiperElement = document.querySelector(".endSwiper__container");
if (swiperElement instanceof HTMLElement) {
    const swiper = new Swiper(swiperElement, {
        modules: [Navigation],
        loop: true,
        autoplay: {
            delay: 20000,
        },
        pagination: {
            el: ".endSwiper__pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".endSwiper__next",
            prevEl: ".endSwiper__prev",
        },
    });
}