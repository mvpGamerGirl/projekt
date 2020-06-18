class script {
  constructor() {
    this.heroesArray = [
      { name: "AATROX", image: "image-box__image", wtf: "warrior, tank" },
      { name: "AHRI", image: "image-box__image--2", wtf: "mage, assasin" },
      { name: "AKALI", image: "image-box__image--3", wtf: "assasin" },
      { name: "ALISTAR", image: "image-box__image--4", wtf: "support" },
      { name: "AMUMU", image: "image-box__image--5", wtf: "tank, mage" },
      { name: "ANIVIA", image: "image-box__image--6", wtf: "mage, support" },
      { name: "ANNIE", image: "image-box__image--7", wtf: "mage" },
      { name: "APHELIOS", image: "image-box__image--8", wtf: "marksman" },
      { name: "ASHE", image: "image-box__image--9", wtf: "marksman, support" },
      { name: "AURELION SOL", image: "image-box__image--10", wtf: "mage" },
      { name: "AZIR", image: "image-box__image--11", wtf: "mage, marksman" },
      { name: "BARD", image: "image-box__image--12", wtf: "support" },
      { name: "BLITZCRANK", image: "image-box__image--13", wtf: "support, warrior, tank" },
      { name: "BRAND", image: "image-box__image--14", wtf: "mage" },
      { name: "BRAUM", image: "image-box__image--15", wtf: "support, tank" },
      { name: "CAITLYN", image: "image-box__image--16", wtf: "marksman" },
      { name: "CAMILLE", image: "image-box__image--17", wtf: "warrior, tank" },
      { name: "CASSIOPEIA", image: "image-box__image--18", wtf: "mage" },
      { name: "CHO`GATH", image: "image-box__image--19", wtf: "mage, tank" },
      { name: "CORKI", image: "image-box__image--20", wtf: "marksman" },
      { name: "DARIUS", image: "image-box__image--21", wtf: "warrior, tank" },
      { name: "DIANA", image: "image-box__image--22", wtf: "mage, warrior" },
      { name: "DR. MUNDO", image: "image-box__image--23", wtf: "tank, warrior" },
      { name: "DRAVEN", image: "image-box__image--24", wtf: "marksman" },
      { name: "EKKO", image: "image-box__image--25", wtf: "mage, assasin, warrior" },
      { name: "ELISE", image: "image-box__image--26", wtf: "assasin, warrior, mage" },
      { name: "EVELYNN", image: "image-box__image--27", wtf: "assasin, mage" },
      { name: "EZRAEL", image: "image-box__image--28", wtf: "marksman, mage" },
      { name: "FIDDLESTICK", image: "image-box__image--29", wtf: "mage, support" },
      { name: "FIORA", image: "image-box__image--30", wtf: "warrior, assasin" },
      { name: "FIZZ", image: "image-box__image--31", wtf: "mage, assasin, warrior" },
      { name: "GALIO", image: "image-box__image--32", wtf: "support, mage, tank" },
      { name: "GANKPLANK", image: "image-box__image--33", wtf: "warrior" },
      { name: "GAREN", image: "image-box__image--34", wtf: "warrior, tank" },
      { name: "GNAR", image: "image-box__image--35", wtf: "warrior, tank" },
      { name: "GRAGAS", image: "image-box__image--36", wtf: "warrior, mage," },
      { name: "GRAVES", image: "image-box__image--37", wtf: "marksman" },
      { name: "HECARIM", image: "image-box__image--38", wtf: "warrior, tank" },
      { name: "HEIMERDINGER", image: "image-box__image--39", wtf: "marksman, mage, support" },
      { name: "ILLAOI", image: "image-box__image--40", wtf: "warrior, tank" },
    ];
    this.createHeroesCards(1, null);
  }

  createHeroesCards(first, what) {
    if (first == 1) {
      this.generateCards(this.heroesArray);
    } else {
      this.generateCardsSpecific(this.heroesArray, what);
    }
  }

  generateCards(heroesArray) {
    document.getElementById("parentRow").innerHTML = "";
    heroesArray.forEach((element) => {
      let el = document.createElement("div");
      el.classList.add("col");
      el.classList.add("col--md50");
      el.classList.add("col--lg25");
      el.innerHTML = `<div class="image-box">
              <div class="image-box__image ${element.image}"></div>
              <div class="image-box__text text-color-white">
                  ${element.name} 
              </div>
          </div>`;
      document.getElementById("parentRow").appendChild(el);
    });
  }
  generateCardsSpecific(heroesArray, specific) {
    document.getElementById("parentRow").innerHTML = "";
    heroesArray.forEach((element) => {
      if (element.wtf.indexOf(specific) != -1) {
        let el = document.createElement("div");
        el.classList.add("col");
        el.classList.add("col--md50");
        el.classList.add("col--lg25");
        el.classList.add("image-box-opis")
        el.innerHTML = `<div class="image-box">
            <div class="image-box__image ${element.image}"></div>
            <div class="image-box__text text-color-white">
            ${element.name} 
            </div>
            </div>`;
        document.getElementById("parentRow").appendChild(el);
      }
    }); 
  }
}
let classScript;
function onLoadFunction() {
  classScript = new script();
}

