// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

const filterIcon = document.querySelector('.filter-icon');
const sortOptions = document.querySelector('.sort-options');

filterIcon.addEventListener('click', function() {
  sortOptions.classList.toggle('show');
});

  const slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 'page',
    autoplay: true,
    autoplayTimeout: 8000,
    controls: false,
    autoplayButtonOutput: false,
    navPosition: "bottom",
    responsive: {
      320: {
        nav: true
      }},
    responsive: {
      993: {
        nav: false
      }
  }
   });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
  })

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
  });

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+38 (___) ___ ____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""

  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation, #order').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
});

});


const card = document.querySelector(".catalog-item")

setTimeout(function() {
  $('.overlay, #consultation').fadeIn('slow');
  document.body.style.overflow = "hidden"
  setTimeout(function() {
    $('.modal__close').fadeIn('slow');
  }, 3000);
}, 3000);

// Встановлюємо інтервал для подальшого показу блока
setInterval(function() {
  $('.overlay, #consultation').fadeIn('slow');
  document.body.style.overflow = "hidden"
  setTimeout(function() {
    $('.modal__close').fadeIn('slow');
  }, 3000);
}, 100000);


// Підгрузка з масиву

 const cardData = [
  {
    title: 'Пульсометр Polar FT1',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 4750,
    newPrice:  4500
  },
  {
    title: 'Пульсометр Polar FT2',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 4750,
    newPrice:  4800
  },
  {
    title: 'Пульсометр Polar FT3',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 4750,
    newPrice:  4900
  },
  {
    title: 'Пульсометр Sunto M2',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 4750,
    newPrice:  6500
  },
  {
    title: 'Пульсометр Sunto M2',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 4750,
    newPrice:  3500
  },
  {
    title: 'Пульсометр Sunto M3',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 4750,
    newPrice:  3400
  },
];

const cardDataRunning = [
  {
    title: 'Пульсометр Polar WT1',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 3750,
    newPrice:  3500
  }
];

const cardDataThriatlon = [
  {
    title: 'Пульсометр Polar WT1',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 3750,
    newPrice:  3500
  },

  {
    title: 'Пульсометр Polar WT5',
    description: 'Для перших кроків в тренуваннях, заснованих на серцевому ритмі',
    image: 'img/photo.png',
    oldPrice: 3750,
    newPrice:  3200
  }
]; 

const cardContainerFirst = document.getElementById("fitness");

let cardHTML = "";
cardData.forEach((card) => {
  cardHTML += `
  <div class="catalog-item animate__fadeInRight animate__animated">
  <div class="catalog-item__wrapper ">
      <div class="catalog-item__content catalog-item__content_active">
          <img src="${card.image}" alt="пульсометр" class="catalog-item__img">
          <div class="catalog-item__subheader">${card.title}</div>
          <div class="catalog-item__descr">
          ${card.description}
          </div>
          <a href ="#" class="catalog-item__link">ДЕТАЛЬНІШЕ</a>
          </div>
              <div class = "catalog-item__list_wrapper">
                  <ul class="catalog-item__list">
                      <li>Ви почуєте звукове повідомлення про потрібний пульс під час тренування;</li>
                      <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                      <li>Також ви побачите інформацію про витрати калорій за тренування;</li>
                      <li>Ви зможете переглянути дані по 10 тренуванням.</li>
                  </ul>
                  <a href="#" class="catalog-item__link-back">назад</a>
              </div>
              
          </div>
          <hr>
          <div class="catalog-item__footer">
              <div class="catalog-item__prices">
                  <div class="catalog-item__price-defolt">${card.oldPrice} грн.</div>
                  <div class="catalog-item__price-sale">${card.newPrice} грн.</div>
              </div>
              <button class="button button_item">КУПИТИ</button>
              <div class = "catalog-item__added">В кошику <span>&#10004;</span></div>
          </div>
      </div>
  `;
});

cardContainerFirst.innerHTML = cardHTML;

const cardContainerSecond = document.getElementById("running");

let cardHTML2 = "";
cardDataRunning.forEach((card) => {
  cardHTML2 += `
  <div class="catalog-item animate__fadeInRight animate__animated">
  <div class="catalog-item__wrapper ">
      <div class="catalog-item__content catalog-item__content_active">
          <img src="${card.image}" alt="пульсометр" class="catalog-item__img">
          <div class="catalog-item__subheader">${card.title}</div>
          <div class="catalog-item__descr">
          ${card.description}
          </div>
          <a href ="#" class="catalog-item__link">ДЕТАЛЬНІШЕ</a>
          </div>
              <div class = "catalog-item__list_wrapper">
                  <ul class="catalog-item__list">
                      <li>Ви почуєте звукове повідомлення про потрібний пульс під час тренування;</li>
                      <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                      <li>Також ви побачите інформацію про витрати калорій за тренування;</li>
                      <li>Ви зможете переглянути дані по 10 тренуванням.</li>
                  </ul>
                  <a href="#" class="catalog-item__link-back">назад</a>
              </div>
              
          </div>
          <hr>
          <div class="catalog-item__footer">
              <div class="catalog-item__prices">
                  <div class="catalog-item__price-defolt">${card.oldPrice} грн.</div>
                  <div class="catalog-item__price-sale">${card.newPrice} грн.</div>
              </div>
              <button class="button button_item">КУПИТИ</button>
              <div class = "catalog-item__added">В кошику <span>&#10004;</span></div>
          </div>
      </div>
  `;
});

cardContainerSecond.innerHTML = cardHTML2;

const cardContainerThird = document.getElementById("thriatlon");

let cardHTML3 = "";
cardDataThriatlon.forEach((card) => {
  cardHTML3 += `
  <div class="catalog-item animate__fadeInRight animate__animated">
  <div class="catalog-item__wrapper ">
      <div class="catalog-item__content catalog-item__content_active">
          <img src="${card.image}" alt="пульсометр" class="catalog-item__img">
          <div class="catalog-item__subheader">${card.title}</div>
          <div class="catalog-item__descr">
          ${card.description}
          </div>
          <a href ="#" class="catalog-item__link">ДЕТАЛЬНІШЕ</a>
          </div>
              <div class = "catalog-item__list_wrapper">
                  <ul class="catalog-item__list">
                      <li>Ви почуєте звукове повідомлення про потрібний пульс під час тренування;</li>
                      <li>Ви побачите інформативний графічний індикатор цільових тренувальних зон пульсу;</li>
                      <li>Також ви побачите інформацію про витрати калорій за тренування;</li>
                      <li>Ви зможете переглянути дані по 10 тренуванням.</li>
                  </ul>
                  <a href="#" class="catalog-item__link-back">назад</a>
              </div>
              
          </div>
          <hr>
          <div class="catalog-item__footer">
              <div class="catalog-item__prices">
                  <div class="catalog-item__price-defolt">${card.oldPrice} грн.</div>
                  <div class="catalog-item__price-sale">${card.newPrice} грн.</div>
              </div>
              <button class="button button_item">КУПИТИ</button>
              <div class = "catalog-item__added">В кошику <span>&#10004;</span></div>
          </div>
      </div>
  `;
});

cardContainerThird.innerHTML = cardHTML3;

(function($) {
  function toggleSlide(item){
      $(item).each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list_wrapper').eq(i).toggleClass('catalog-item__list_wrapper_active');
        })
      });
    };
  
     
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function() {
      $(this)
        .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
        
  
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__link-back');
  
    //modal
  
    $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('slow');
      setTimeout(function() {
        $('.modal__close').fadeIn('slow');
      }, 3000);
    });
    $('.modal__close').on('click', function() {
      $('.overlay, #consultation, #order, #thanks').fadeOut('slow');
      close.style.display = "none";
      document.body.style.overflow = ""
    });
  
  })(jQuery);
  

const modList = document.querySelectorAll('[data-scroll="no" ]')
const close = document.querySelector(".modal__close")

modList.forEach(mod => {
  mod.onclick = () => {
    document.body.style.overflow = "hidden"
    close.onclick = () => {
      document.body.style.overflow = ""
    }
  }
})


window.addEventListener('DOMContentLoaded', function(){
  let catalogeItems = document.querySelectorAll(".catalog-item"),
      buttons = document.querySelectorAll(".button_item");
      totalCost = document.getElementById("total_cost");
      count = 0;
  const cart = document.querySelector(".cart");
  const cartMain = document.querySelector(".cart_main");
  const open = document.querySelector(".cart__open");
  const close = document.querySelector(".cart__close");


  function openCart() {
    cart.style.display = 'block';
  }
  function closeCart() {
    cart.style.display = 'none';
  }

  function updSum(){
    const items = cartMain.querySelectorAll(".catalog-item");
    let summa = 0;

    items.forEach(function (item) {
      let price = item.querySelector('.catalog-item__price-sale');
          price = parseInt(price.innerText.replace(/[^\d]/g, "")),
          counter = item.querySelector(".cart__count");

          summa += price * counter.value;
    })

    totalCost.innerHTML = "";
    totalCost.innerHTML += "До сплати: " + summa + ' грн';
  }

  function changeCard(item, i) {
     let  btn = item.querySelector('button'),
          descr = item.querySelector('.catalog-item__descr'),
          wrapper = item.querySelector('.catalog-item__list_wrapper'),
          link = item.querySelector('.catalog-item__link'),
          wrapperCard = item.querySelector('.catalog-item__wrapper');
          footer = item.querySelector('.catalog-item__footer');
          deleteBtn = document.createElement("button");
          deleteText = document.createTextNode("Видалити");

      item.style.minHeight = '390px';
      wrapperCard.style.width = '100%';
      wrapperCard.style.minHeight = '270px';
      wrapperCard.style.alignItems = 'center';
      link.remove();
      btn.remove();
      descr.remove();
      wrapper.remove();
      footer.innerHTML += '<input type="number" class="cart__count" name="quantity" min="1" value = "1"></input>';
      footer.style.justifyContent = 'flex-start';
      footer.style.gap = '40px';
      deleteBtn.classList.add("cart__delete");
      deleteBtn.appendChild(deleteText);
      footer.appendChild(deleteBtn);


      deleteBtn.addEventListener('click', (e) => {
        e.currentTarget.parentNode.parentNode.remove();
        updSum();
        buttons[i].style.display  = "block";
        catalogeItems[i].querySelector(".catalog-item__added").style.display = "none";
      })

  }

  open.addEventListener('click', openCart);
  close.addEventListener('click', closeCart);

  buttonCopy = buttons[0];

  buttons.forEach((item, i) => {
    item.addEventListener('click', () => {
      
      let item = catalogeItems[i].cloneNode(true);

      changeCard(item, i);
    
      cartMain.appendChild(item);

      item.querySelector(".cart__count").addEventListener('change', updSum);

      updSum();
      buttons[i].style.display  = "none";
      catalogeItems[i].querySelector(".catalog-item__added").style.display = "block";
    })
  })



  // фільтр
// сортировка по цене (от меньшего к большему)
function sortByPriceAsc(a, b) {
  const aPrice = parseFloat(a.querySelector('.catalog-item__price-sale').textContent.replace('$', ''));
  const bPrice = parseFloat(b.querySelector('.catalog-item__price-sale').textContent.replace('$', ''));
  return aPrice - bPrice;
}

function sortByPriceDesc(a, b) {
  const aPrice = parseFloat(a.querySelector('.catalog-item__price-sale').textContent.replace('$', ''));
  const bPrice = parseFloat(b.querySelector('.catalog-item__price-sale').textContent.replace('$', ''));
  return bPrice - aPrice;
}

function sortByNameAsc(a, b) {
  const aName = a.querySelector('.catalog-item__subheader').textContent.trim().toLowerCase();
  const bName = b.querySelector('.catalog-item__subheader').textContent.trim().toLowerCase();
  return aName.localeCompare(bName);
}

function sortByNameDesc(a, b) {
  const aName = a.querySelector('.catalog-item__subheader').textContent.trim().toLowerCase();
  const bName = b.querySelector('.catalog-item__subheader').textContent.trim().toLowerCase();
  return bName.localeCompare(aName);
}


const sortSelect = document.querySelector('.sort-options');

// Вешаем обработчик события на изменение значения select
sortSelect.addEventListener('change', function() {
  // Определяем выбранную опцию фильтра
  const selectedOption = this.value;
  activeTab = document.querySelector('.catalog__content_active');
  
  // Находим все элементы каталога
  const items = activeTab.querySelectorAll('.catalog-item');
  
  // Преобразуем список элементов в массив
  const itemsArray = Array.prototype.slice.call(items);
  
  // Определяем функцию сортировки на основе выбранной опции фильтра
  let sortFunction;
  if (selectedOption === 'name-asc') {
    sortFunction = sortByNameAsc;
  } else if (selectedOption === 'name-desc') {
    sortFunction = sortByNameDesc;
  } else if (selectedOption === 'price-asc') {
    sortFunction = sortByPriceAsc;
  } else if (selectedOption === 'price-desc') {
    sortFunction = sortByPriceDesc;
  }
  
  // Сортируем массив элементов с помощью определенной функции сортировки
  itemsArray.sort(sortFunction);
  
  // Вставляем отсортированные элементы в DOM

  activeTab.innerHTML = '';
  itemsArray.forEach(function(item) {
    activeTab.appendChild(item);
  });
});

// Отримання елементів форми
const form = document.querySelector('.price-range');
const minPriceInput = form.querySelector('input[name="min_price"]');
const maxPriceInput = form.querySelector('input[name="max_price"]');
const submit_btn = form.querySelector('.submit_btn');

// Додавання обробника подій для форми
submit_btn.addEventListener('click', function(event) {
  // Зупинка дії за замовчуванням
  event.preventDefault();

  console.log("111");

  // Отримання значень з поля введення
  const minPrice = parseFloat(minPriceInput.value);
  const maxPrice = parseFloat(maxPriceInput.value);

  // Отримання всіх карточок товарів
  activeTab1 = document.querySelector('.catalog__content_active');
  const productCards = activeTab1.querySelectorAll('.catalog-item');

  console.log(productCards);

  // Перевірка кожної карточки товару на відповідність введеним критеріям ціни
  for (let i = 0; i < productCards.length; i++) {
    const cardPrice = parseFloat(productCards[i].querySelector('.catalog-item__price-sale').textContent);
    console.log(cardPrice)

    if (isNaN(minPrice) || cardPrice >= minPrice) {
      productCards[i].classList.remove('hidden-by-min-price');
    } else {
      productCards[i].classList.add('hidden-by-min-price');
    }

    if (isNaN(maxPrice) || cardPrice <= maxPrice) {
      productCards[i].classList.remove('hidden-by-max-price');
    } else {
      productCards[i].classList.add('hidden-by-max-price');
    }
  }
});

});


const buttons = Array.from(document.querySelectorAll('.chart-btn'));
const modal = document.getElementById("myModal");
const closeChart = document.querySelector('.modal_close-chart');
const overlay = document.querySelector(".overlay");

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
      document.body.style.overflow = 'hidden';
      overlay.style.display = 'block';
      const type = e.target.id;
      renderChart(type);
      modal.style.display = 'block';
  });
});

function displayGraph() {
    let prices = document.querySelectorAll('.catalog-item__price-sale');
    let graphData = [0, 0, 0];

    prices.forEach(function (price) {
        let priceValue = parseFloat(price.textContent.replace('$', ''));

        if (priceValue >= 100 && priceValue < 4000) {
            graphData[0]++;
        } else if (priceValue >= 4000 && priceValue < 4801) {
            graphData[1]++;
        } else if (priceValue >= 4802 && priceValue <= 10000) {
            graphData[2]++;
        }
    });
    return graphData;
}

function renderChart(type) {
    graphData = displayGraph();
    let ctx = document.getElementById("myChart").getContext('2d');
    let myChart = new Chart(ctx, {
        type: type,
        data: {
            labels: ["100грн - 4000грн", "4000грн - 4800грн", "4801грн - 10000грн"],
            datasets: [{
                label: type,
                data: graphData,
                borderColor: 'rgba(75, 192, 192, 0.2)',
                backgroundColor: [random_rgba(), random_rgba(), random_rgba(), random_rgba()],
            }]
        },
        options: {
            legend: {
                labels: {
                    fontColor: "black",
                    fontSize: 30
                }
            },
            responsive: true,
            scales: {
                yAxes: [{
                    ticks: {
                        fontColor: "black",
                        fontSize: 25,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }],
                xAxes: [{
                    ticks: {
                        fontColor: 'black',
                        fontSize: 25,
                        stepSize: 1,
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 1 + ')';
}

closeChart.onclick = function () {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    document.body.style.overflow = '';
}

