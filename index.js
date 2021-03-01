function _createAll() {
    _createHeader();
    _createLogo();
    _createNav();
    _createCatalog();
    // _creatSearch();
    _createProductList();
    _createFiltersColumn();
}
_createAll();

function _createHeader() {
    const header = document.createElement("header");
    document.body.appendChild(header);

    var topRow = document.createElement("div");
    topRow.classList.add("top-row");
    document.querySelector("header").appendChild(topRow);

    var bottomRow = document.createElement("div");
    bottomRow.classList.add("bottom-row");
    document.querySelector("header").appendChild(bottomRow);
}

function _createLogo() {
    const logoWrapper = document.createElement('a');
    const logoImg = document.createElement('img');

    logoWrapper.href = "index.html";
    logoWrapper.classList.add('logo-wrapper');
    logoImg.classList.add('img-fluid');
    logoImg.src = "img/logo.jpg";

    document.querySelector(".top-row").appendChild(logoWrapper);
    document.querySelector(".logo-wrapper").appendChild(logoImg);
}

function _createNav() {
    let nav = document.createElement("nav");
    nav.className = "navigation";

    const itemArray = [{
            title: 'О нас',
            href: 'about.html'
        },
        {
            title: 'Контакты',
            href: 'contacts.html'
        },
        {
            title: 'Доставка и оплата',
            href: 'dilivery.html'
        },
        {
            title: 'Блог',
            href: 'blog.html'
        },
        {
            title: 'Магазин',
            href: 'store.html'
        },
        {
            title: 'Вакансии',
            href: 'vakancies.html'
        },
    ];

    function creatItem(item) {
        return `<li id="${item.title}" class="item"><a href="${item.href}">${item.title}</a></li>`;
    };

    const templatesItem = itemArray.map(item => creatItem(item));
    const htmlItem = templatesItem.join(' ');

    nav.insertAdjacentHTML("afterBegin", htmlItem);
    document.querySelector(".top-row").appendChild(nav);

    let navItem = document.querySelectorAll(".navigation li");

    function _allRemove() {
        navItem.forEach(function (e) {
            e.classList.remove('active');
        });
    }

    function _thisAdd() {
        for (var x = 0; x < navItem.length; x++) {
            navItem[x].onclick = function (e) {

                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                } else {
                    _allRemove();
                    this.classList.add('active');
                };
            };
        };
    };
    _thisAdd();
}

function _createCatalog() {
    const btnCatalog = document.createElement("button");
    btnCatalog.className = "btn btn-primary";
    btnCatalog.innerText = "Каталог";
    document.querySelector(".bottom-row").appendChild(btnCatalog);



    const catalog = document.createElement("div");
    catalog.className = "catalog-container";
    document.querySelector(".bottom-row").appendChild(catalog);

    const catalogColumn = [{
            title: "First list",
            href: "first-list.html"
        },
        {
            title: "Second list",
            href: "second-list.html"
        },
        {
            title: "Third list",
            href: "third-list.html"
        },
    ];

    function createColumn(column) {
        return `<ul class="list">
                    <a href="${column.href}">${column.title}</a>
                </ul>`;
    };

    const templatesColumn = catalogColumn.map(column => createColumn(column));
    const htmlColumn = templatesColumn.join(' ');

    catalog.insertAdjacentHTML("afterBegin", htmlColumn);
    //  document.querySelector(".catalog-container").innerHTML = htmlColumn;

    const overlay = document.createElement('div');
    overlay.className = "catalog-overlay";
    document.body.appendChild(overlay);

    function openCatalog() {
        btnCatalog.onclick = () => {
            catalog.classList.toggle('show');
            overlay.classList.toggle('show');
            document.body.classList.toggle('overflow-hidden');
        };
    };
    openCatalog();

    function closeCatalog() {
        overlay.onclick = function () {
            this.classList.remove('show');
            catalog.classList.remove('show');
            document.body.classList.remove('overflow-hidden');
        };
    };
    closeCatalog();
};

function _createProductList() {
    const listWrapper = document.createElement('div');
    listWrapper.className = 'list-wrapper';
    document.querySelector("body").appendChild(listWrapper);

    let productList = [{
            owner: "Шумейко Никита Максимович",
            src: "img/product/product-1.jpg",
            brand: "Suszuki",
            color: "red",
            year: "2010",
            second_hand: false,
        },
        {
            owner: "Жданов Никодим Львович",
            src: "img/product/product-2.jpg",
            brand: "Mercedes",
            color: "black",
            year: "2015",
            second_hand: false,
        },
        {
            owner: "Бородай Ян Иванович",
            src: "img/product/product-3.jpg",
            brand: "BMW",
            color: "blue",
            year: "2009",
            second_hand: false,
        },
        {
            owner: "Маслов Огюст Романович",
            src: "img/product/product-4.jpg",
            brand: "Volkswagen",
            color: "blue",
            year: "2000",
            second_hand: true,
        },
        {
            owner: "Колобов Зенон Александрович",
            src: "img/product/product-5.jpg",
            brand: "Волга",
            color: "blue",
            year: "1956",
            second_hand: true,
        },
        {
            owner: "Щукин Орландо Григорьевич",
            src: "img/product/product-6.jpg",
            brand: "Запопрожец",
            color: "white",
            year: "1968",
            second_hand: true,
        },
        {
            owner: "Тягай Макар Богданович",
            src: "img/product/product-7.jpg",
            brand: "Mustang",
            color: "green",
            year: "1990",
            second_hand: true,
        },
        {
            owner: "Мельников Пётр Андреевич",
            src: "img/product/product-8.jpg",
            brand: "Volkswagen",
            color: "white",
            year: "2007",
            second_hand: false,
        },
        {
            owner: "Сирко Илларион Васильевич",
            src: "img/product/product-9.jpg",
            brand: "Ford",
            color: "orange",
            year: "2010",
            second_hand: false,
        },
        {
            owner: "Барановский Фёдор Леонидович",
            src: "img/product/product-10.jpg",
            brand: "DOGE RAM",
            color: "black",
            year: "2017",
            second_hand: false,
        },
        {
            owner: "Андреев Пётр Леонидович",
            src: "img/product/product-11.jpg",
            brand: "Reno",
            color: "brown",
            year: "2012",
            second_hand: false,
        },
        {
            owner: "Игнатьев Феликс Юхимович",
            src: "img/product/product-12.jpg",
            brand: "KIA",
            color: "yelow",
            year: "2011",
            second_hand: false,
        },
        {
            owner: "Филатов Витольд Виталиевич",
            src: "img/product/product-13.jpg",
            brand: "ВАЗ",
            color: "blue",
            year: "1978",
            second_hand: true,
        },
        {
            owner: "Тарасов Чеслав Виталиевич",
            src: "img/product/product-14.jpg",
            brand: "MITSUBISHI OUTLANDER",
            color: "white",
            year: "2020",
            second_hand: false,
        },
        {
            owner: "Шухевич Чарльз Платонович",
            src: "img/product/product-15.jpg",
            brand: "Audi",
            color: "green",
            year: "2014",
            second_hand: false,
        },
        {
            owner: "Мухин Зенон Анатолиевич",
            src: "img/product/product-16.jpg",
            brand: "Audi",
            color: "blue",
            year: "2014",
            second_hand: false,
        },
        {
            owner: "Котовский Орест Викторович",
            src: "img/product/product-17.jpg",
            brand: "Audi",
            color: "red",
            year: "2014",
            second_hand: false,
        },
        {
            owner: "Королёв Оскар Львович",
            src: "img/product/product-18.jpg",
            brand: "Ford",
            color: "red",
            year: "2016",
            second_hand: false,
        },
        {
            owner: "Авдеев Богдан Петрович",
            src: "img/product/product-19.jpg",
            brand: "Ford",
            color: "white",
            year: "2010",
            second_hand: true,
        },
        {
            owner: "Щербаков Фёдор Викторович",
            src: "img/product/product-20.jpg",
            brand: "BMW",
            color: "blue",
            year: "2018",
            second_hand: true,
        },
        {
            owner: "Голубой Князь",
            src: "img/product/product-21.jpg",
            brand: "Афганский Вариант",
            color: "red",
            year: "1965",
            second_hand: true,
        },
    ];

    function creatProductThumb(product) {
        return `<a class="product-thumb">
                    <img src="${product.src}" class="product-img img-fluid">
                    <h4 class="product-brand">${product.brand}</h4>
                    <h5 class="product-owner">Владелец: ${product.owner}</h5>
                    <h6 class="product-color">Цвет: ${product.color}</h6>
                    <p class="product-year">Год выпуска ${product.year}</p>
                    <p class="product-second_hand">Б/У ${product.second_hand}</p>
                    
                </a>`;
    };

    const templatesProduct = productList.map(product => creatProductThumb(product));
    const htmlProduct = templatesProduct.join(' ');

    listWrapper.insertAdjacentHTML("afterbegin", htmlProduct);
};

function _createFiltersColumn() {
    const filtersContainer = document.createElement("div");
    filtersContainer.className = "filters-container";

    const filtersTitle = [];
    var productBrand = document.querySelectorAll(".product-brand");

    function  allBrand() {
        productBrand.forEach(function (title) {
           var title = title.textContent;
           filtersTitle.unshift(title);
        });
    } allBrand();
    
   
    console.log(filtersTitle);
    



    // var input = [{value:1},{value:2}],
    // result = [];
    // input.forEach(v => result.push({ 'key': v }));
    
    // console.log(result);
    // // output = input.map(value => ({ "key": value }) );
    // console.log(output);
 


var filterItem = `<div class="filter-item">
                         <h3>Бренд</h3>
                  </nav>`;
//const templatesFilters = productList.map(column => createFilters(column));

//  const templatesFilters = productList.map(column => createFilters(column));
//  const htmlFilters = templatesFilters.join(' ');
document.querySelector(".list-wrapper").insertAdjacentHTML("afterbegin", filterItem);
};