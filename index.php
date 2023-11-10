<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=MuseoModerno:wght@100;200;300;400;500;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.css">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Pulse</title>
</head>
<body>
        <?php include('promo.php'); ?>
    
        <?php include('section_benefits.php'); ?>
    
        <?php include('consultation.php'); ?>

        <?php include('carousel.php'); ?>

        <?php include('section_catalog.php'); ?>

        <?php include('section_reviews.php'); ?>
    
        <?php include('footer.php'); ?>

        <?php include('overlay.php'); ?>

    <div class="modal__subscribe">
        <div class="modal__subscribe-text">Підпишіться на наші оновлення</div>
        <div class="modal__subscribe_wrapper">
          <button class="button button-mini" id="subscribeBtn">Підписатися</button>
          <button class="button button-mini" id="cancelBtn">Відмовитись</button>
        </div>
      </div>

    <div id="myModal" class="chart-modal">
    <div class="modalContent">
        <div class="modal__close modal_close-chart">&times;</div>
        <canvas id="myChart"></canvas>
    </div>
    </div>


    <img src="icons/bucket.png" alt="cart" class= "cart_icon cart__open">
    <div onclick="topFunction()" id="myBtn" title="Go to top"></div>

    <?php include('cart.php'); ?>

    
<script>
  function showSubscriptionPopup() {
    if (!getCookie("subscriptionPopupShown")) {
      const modal = document.querySelector(".modal__subscribe");
      modal.style.display = "flex";
      
      const subscribeBtn = document.getElementById("subscribeBtn");
      subscribeBtn.addEventListener("click", subscribe);
      
      const cancelBtn = document.getElementById("cancelBtn");
      cancelBtn.addEventListener("click", cancel);
    }
  }

  function subscribe() {
    setCookie("subscriptionPopupShown", "true", 365);
    const modal = document.querySelector(".modal__subscribe");
    modal.style.display = "none";
    // добавить код для обработки подписки, например, отправку формы
  }

  function cancel() {
    const modal = document.querySelector(".modal__subscribe");
    modal.style.display = "none";
  }

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }

  function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  showSubscriptionPopup();
</script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.2/min/tiny-slider.js"></script>
    <script src = "js/script.js"></script>


    
</body>
</html>