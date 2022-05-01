const menu = [
    {
      id: 1,
      title: "F40",
      category: "100HP",
      horsepower: 140,
      img:
        "https://www.log.com.tr/wp-content/uploads/2019/10/2020bm1s4.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: 7 Lt / 100 km<br> Highway: 4.3 Lt / 100 km<br> Combined: 5-0 - 5.7 Lt / 100 km`,
    },
    {
      id: 2,
      title: "G42",
      category: "100HP",
      horsepower: 184,
      img:
        "https://s36.wheelsage.org/format/picture/picture-gallery/b/bmw/220i_coupe/bmw_220i_coupe_69_034d01f40e4b0983.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: -<br> Highway: -<br> Combined: 6.3 - 6.8 Lt / 100 km`,
    },
    {
      id: 3,
      title: "G20",
      category: "200HP",
      horsepower: 286,
      img:
        "https://www.auto-data.net/images/f21/BMW-3er-Sedan-G20.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: 5.4 - 5.7 Lt / 100 km<br> Highway: 3.9 - 4.2 Lt / 100 km<br> Combined: 4.4 - 4.7 Lt / 100 km`,
    },
    {
      id: 4,
      title: "G22",
      category: "200HP",
      horsepower: 258,
      img:
        "https://paultan.org/image/2020/11/G22-BMW-430i-M-Sport-Coupe-Thailand-launch-1.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: 7.3 - 7.7 Lt / 100 km<br> Highway: 4.8 - 5.3 Lt / 100 km<br> Combined: 5.7 - 6.1 Lt / 100 km`,
    },
    {
      id: 5,
      title: "G30",
      category: "100HP",
      horsepower: 190,
      img:
        "https://www.driving.co.uk/wp-content/uploads/sites/5/2017/03/P90247634_highRes_bmw-520d-m-sport.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: 4.7 - 5.0 Lt / 100 km<br> Highway: 3.8 - 4.1 Lt / 100 km<br> Combined: 4.1 - 4.5 Lt / 100 km`,
    },
    {
      id: 6,
      title: "F06",
      category: "300HP",
      horsepower: 313,
      img:
        "https://autotras.com/images/643/bmw-6-series-gran-coupe-f06-how-mach.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: 6.5 - 6.8 Lt / 100 km<br> Highway: 5.1 - 5.5 Lt / 100 km<br> Combined: 5.6 - 6.0 Lt / 100 km`,
    },
    {
      id: 7,
      title: "G11",
      category: "400HP",
      horsepower: 450,
      img:
        "https://i.ytimg.com/vi/E22tyeupY-s/maxresdefault.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: 11.4 - 11.6 Lt / 100 km<br> Highway: 6.2 - 6.4 Lt / 100 km<br> Combined: 8.1 - 8.3 Lt / 100 km`,
    },
    {
      id: 8,
      title: "E92",
      category: "400HP",
      horsepower: 420,
      img:
        "https://i.pinimg.com/originals/a4/59/72/a459722670b8a4c25555eecac353ab49.jpg",
      desc: `<strong>Fuel Consumption</strong><br> City: 15.9 Lt / 100 km<br> Highway: 8.5 Lt / 100 km<br> Combined: 11.2 Lt / 100 km`,
    },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
  
  const categories = menu.reduce((values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["All"]
  );
  // category
  const categoryList = () => {
    const categoryBtns = categories.map((category) => {
        return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`; // button css özellikleri
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".btn-item");
  
    //filter menu
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.id;
        console.log(category);
        const menuCategory = menu.filter((menuItem) => {
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        // category all ise, hepsini göster değilse category'e göre göster
        if (category === "All") {
          menuList(menu);
        } else {
          menuList(menuCategory);
        }
      });
    });
  };
  
  const menuList = (menuItems) => {
    let displayMenu = menuItems.map((item) => {
      return `<div class="menu-items col-lg-6 col-sm-12"> 
              <img
                src=${item.img}
                alt=${item.title}
                class="photo"
              />
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.horsepower}</h4>
                </div>
                <div class="menu-text">
                  ${item.desc}
                </div>
              </div>
            </div>
      `;
    });
    displayMenu = displayMenu.join("");
    section.innerHTML = displayMenu;
  };
  
  menuList(menu);
  categoryList();