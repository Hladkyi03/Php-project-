<section class="catalog">
  <div class="container">
      <h2 class="catalog__title">Каталог пульсометрів</h2>
      <ul class="catalog__tabs">
          <li class="catalog__tab catalog__tab-active">
              <button>Для фітнеса</button>
          </li>
          <li class="catalog__tab">
              <button>для бігу</button>
          </li>
          <li class="catalog__tab">
              <button>для тріатлону</button>
          </li>
      </ul>

      <div class="filter-icon-container">
          <svg class="filter-icon" viewBox="0 0 24 24">
            <path fill="currentColor" d="M9 16h6v-2H9v2zm-6-4h18v-2H3v2zm0-6h12V4H3v2z"/>
          </svg>
          <select class="sort-options">
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name-asc" >Name: A to Z</option>
            <option value="name-desc"  selected>Name: Z to A</option>
          </select>
          <form class = "price-range">
              <label>Мінімальна ціна:</label>
              <input type="text" name="min_price">
              <label>Максимальна ціна:</label>
              <input type="text" name="max_price">
              <button class = "submit_btn">Застосувати фільтр</button>
          </form>
          <div class="chart_btn_wrapper">
              <button class="chart-btn" id="horizontalBar">Стовпчиковий графік</button>
              <button class="chart-btn" id="pie">Круговий графік</button>
              <button class="chart-btn" id="line">Лінійний графік</button>
          </div>
        </div>

      <div class="catalog__content  catalog__content_active" id = "fitness">
          </div>

              <div class="catalog__content" id = "running">
              </div>
                          
      <div class="catalog__content" id = "thriatlon">
      </div>

          </div>
  </section>