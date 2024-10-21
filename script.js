function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });

      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordion() {
  const acoordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";
  acoordionList[0].classList.add(activeClass);
  acoordionList[0].nextElementSibling.classList.add(activeClass);

  if (acoordionList.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    acoordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

function initScrollSuave (){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    
    // const topo = section.offsetTop;
    // window.scrollTo({
    //   top: topo,
    //   behavior: 'smooth',
    // });

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  // Iteração para adicionar event listener a cada link
  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollSection);
  });
}

initScrollSuave();
