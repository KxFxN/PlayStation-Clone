showDiv();

function showDiv() {
  let slides = document.getElementsByClassName("sliders")[0].getElementsByClassName("slide");;
  let indicator = document.getElementsByClassName("container_indicators")[0].getElementsByClassName("indicators");
  let indicators= Array.from(indicator);

  indicators[0].className += " active";
  
  slides[0].style.display = "block";

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      if (index >= slides.length) {
        index = slides.length - 1;
      }
      if (index < 0) {
        index = 0;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < indicators.length; i++) {
        indicators[i].className = indicators[i].className.replace(" active", "");
      }
      slides[index].style.display = "block";
      indicators[index].className += " active";
    });
  });

  let slides_product = document.getElementsByClassName("sliders_product")[0].getElementsByClassName("slide");
  let indicators_product = document.getElementsByClassName("indicators_product")[0].getElementsByClassName("indicators");
  let indicators_array = Array.from(indicators_product);

  indicators_array[0].className += " active";

  slides_product[0].style.display = "flex";

  indicators_array.forEach((indicator, index) => {
    // ทำสิ่งต่าง ๆ ที่ต้องการกับ indicator และ index ได้ที่นี่
    indicator.addEventListener('click', () => {
        if (index >= slides_product.length) {
            index = slides_product.length - 1;
        }
        if (index < 0) {
            index = 0;
        }
        for (i = 0; i < slides_product.length; i++) {
            slides_product[i].style.display = "none";
        }
        for (i = 0; i < indicators_array.length; i++) {
            indicators_array[i].className = indicators_array[i].className.replace(" active", "");
        }
        slides_product[index].style.display = "flex";
        indicators_array[index].className += " active";
    });
  });
}

