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