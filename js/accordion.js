
var elements = document.querySelectorAll(".faq-item");
for (var i = 0; i < elements.length; i++) {
  elements[i].onclick = function () {
    
    let minus = this.querySelector('.minus');

    if (this.children[3].classList.contains('active-faq')){
      minus.classList.remove('active-faq-indicator');
      this.children[3].classList.remove('active-faq');
    }else {
      this.children[3].classList.add('active-faq');
      minus.classList.add('active-faq-indicator');
    }
  };
}