console.log('qwertycamedy');

//header link
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};


//inputMask
let input = document.querySelector('.change__input'),
  im = new Inputmask('+38 999 999 9 999');

im.mask(input);
let inputTwo = document.querySelector('.request__input'),
  imTwo = new Inputmask('+38 999 999 9 999');

imTwo.mask(inputTwo);

//tab
const understandTabsBtn = document.querySelectorAll(".understand__tab-btn");
const understandTabsItems = document.querySelectorAll(".understand__tab-content");

understandTabsBtn.forEach(understandOnTabClick);

function understandOnTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      understandTabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      understandTabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

document.querySelector('.understand__tab-btn').click();


//accordions

const accordions = document.querySelectorAll('.understand__accordion-item');

accordions.forEach(item => {
  item.addEventListener('click', (e) => {
    const self = e.currentTarget,
      contentAll = document.querySelectorAll('.understand__accordion-content'),
      content = self.querySelector('.understand__accordion-content');

    accordions.forEach(item => {
      if (item != self) {
        item.classList.remove('active');
      }
    });
    contentAll.forEach(item => {
      item.style.maxHeight = null;
    });

    self.classList.toggle('active');

    if (self.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      content.style.maxHeight = null;
    }
  });
});


//modal
let openHeadBtn = document.querySelector('.header__button'),
  openBannerBtn = document.querySelector('.banner__button'),
  openFooterBtn = document.querySelector('.footer__button'),
  closeReqBtn = document.querySelector('.request__close'),
  modalRequest = document.querySelector('.request'),
  modalRequestInner = document.querySelector('.request__inner'),
  header = document.querySelector('.header');

openHeadBtn.addEventListener('click', () => {
  modalRequest.classList.add('active');
  modalRequestInner.classList.add('active');
  document.body.classList.add('lock');
  header.classList.add('modal-active');
});
openBannerBtn.addEventListener('click', () => {
  modalRequest.classList.add('active');
  modalRequestInner.classList.add('active');
  document.body.classList.add('lock');
  header.classList.add('modal-active');
});
openFooterBtn.addEventListener('click', () => {
  modalRequest.classList.add('active');
  modalRequestInner.classList.add('active');
  document.body.classList.add('lock');
  header.classList.add('modal-active');
});
closeReqBtn.addEventListener('click', () => {
  modalRequest.classList.remove('active');
  modalRequestInner.classList.remove('active');
  document.body.classList.remove('lock');
  header.classList.remove('modal-active');
});

modalRequest.addEventListener('click', (e) => {
  if (e.target.classList.contains('request')) {
    modalRequest.classList.remove('active');
    modalRequestInner.classList.remove('active');
    document.body.classList.remove('lock');
    header.classList.remove('modal-active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalRequest.classList.remove('active');
    modalRequestInner.classList.remove('active');
    document.body.classList.remove('lock');
    header.classList.remove('modal-active');
  }
})
