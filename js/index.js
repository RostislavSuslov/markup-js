function _createAll() {
    _createHeader();
    _createLogo();
    _createNav();
    _creatWrapper()
    _creatCatalogLayout();
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

function _creatWrapper() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    document.querySelector("body").appendChild(wrapper);
};

function _creatCatalogLayout(){
    const container = document.createElement('div');
    container.classList.add('container');
    document.querySelector(".wrapper").appendChild(container);

    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    
    let leftColumn = document.createElement('div');
    leftColumn.className = 'col-md-4 col-lg-3 left-column';
    document.querySelector(".wrapper .row").appendChild(leftColumn);

    let rightColumn = document.createElement('div');
    rightColumn.className = 'col-md-8 col-lg-9 right-column';
    document.querySelector(".wrapper .row").appendChild(rightColumn);
}

function _createProductList() {
    const productLoyout = document.createElement('div');
    productLoyout.className = 'product-layout';
    document.querySelector(".right-column").appendChild(productLoyout);

    let productList = [{
            href: "#",
            src: "img/product/product-1.jpg",
            owner: "Шумейко Никита Максимович",
            brand: "Suszuki",
            color: "red",
            year: "2010",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-2.jpg",
            owner: "Жданов Никодим Львович",
            brand: "Mercedes",
            color: "black",
            year: "2015",
            second_hand: false,
        },
        {
            href: "#",
            src: "https://cdn3.riastatic.com/photos/ir/new/auto/photo/opel_astra-k__372442018-620x415x70.jpg",
            owner: "Суслов Максим Евгеньевич",
            brand: "Opel",
            color: "Айс214124он",
            year: "2022",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-3.jpg",
            owner: "Бородай Ян Иванович",
            brand: "BMW",
            color: "blue",
            year: "2009",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-4.jpg",
            owner: "Маслов Огюст Романович",
            brand: "Volkswagen",
            color: "blue",
            year: "2000",
            second_hand: true,
        },
        {
            href: "#",
            src: "img/product/product-5.jpg",
            owner: "Колобов Зенон Александрович",
            brand: "Волга",
            color: "blue",
            year: "1956",
            second_hand: true,
        },
        {
            href: "#",
            src: "img/product/product-6.jpg",
            owner: "Щукин Орландо Григорьевич",
            brand: "Запопрожец",
            color: "white",
            year: "1968",
            second_hand: true,
        },
        {
            href: "#",
            src: "img/product/product-7.jpg",
            owner: "Тягай Макар Богданович",
            brand: "Mustang",
            color: "green",
            year: "1990",
            second_hand: true,
        },
        {
            href: "#",
            src: "img/product/product-8.jpg",
            owner: "Мельников Пётр Андреевич",
            brand: "Volkswagen",
            color: "white",
            year: "2007",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-9.jpg",
            owner: "Сирко Илларион Васильевич",
            brand: "Ford",
            color: "orange",
            year: "2010",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-10.jpg",
            owner: "Барановский Фёдор Леонидович",
            brand: "DOGE RAM",
            color: "black",
            year: "2017",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-11.jpg",
            owner: "Андреев Пётр Леонидович",
            brand: "Reno",
            color: "brown",
            year: "2012",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-12.jpg",
            owner: "Игнатьев Феликс Юхимович",
            brand: "KIA",
            color: "yelow",
            year: "2011",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-13.jpg",
            owner: "Филатов Витольд Виталиевич",
            brand: "ВАЗ",
            color: "blue",
            year: "1978",
            second_hand: true,
        },
        {
            href: "#",
            src: "img/product/product-14.jpg",
            owner: "Тарасов Чеслав Виталиевич",
            brand: "MITSUBISHI OUTLANDER",
            color: "white",
            year: "2020",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-15.jpg",
            owner: "Шухевич Чарльз Платонович",
            brand: "Audi",
            color: "green",
            year: "2014",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-16.jpg",
            owner: "Мухин Зенон Анатолиевич",
            brand: "Audi",
            color: "blue",
            year: "2014",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-17.jpg",
            owner: "Котовский Орест Викторович",
            brand: "Audi",
            color: "red",
            year: "2014",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-18.jpg",
            owner: "Королёв Оскар Львович",
            brand: "Ford",
            color: "red",
            year: "2016",
            second_hand: false,
        },
        {
            href: "#",
            src: "img/product/product-19.jpg",
            owner: "Авдеев Богдан Петрович",
            brand: "Ford",
            color: "white",
            year: "2010",
            second_hand: true,
        },
        {
            href: "#",
            src: "img/product/product-20.jpg",
            owner: "Щербаков Фёдор Викторович",
            brand: "BMW",
            color: "blue",
            year: "2018",
            second_hand: true,
        },
        {
            href: "#",
            src: "img/product/product-21.jpg",
            owner: "Голубой Князь",
            brand: "Афганский Вариант",
            color: "red",
            year: "1965",
            second_hand: true,
        },
    ];

    function creatProductThumb(product) {
        return `<a href="${product.href}" class="product-thumb">
                    <img src="${product.src}" class="product-img img-fluid">
                    <h3 class="product-brand" data-title="Бренды">${product.brand}</h3>
                    <h4 class="product-owner">Владелец: ${product.owner}</h4>
                    <h5 class="product-color" data-title="Цвет">Цвет: ${product.color}</h5>
                    <h6 class="product-year" data-title="Год выпуска">Год выпуска <b>${product.year}</b></h6>
                    <p class="product-second_hand" data-title="Б/У">Б/У: ${product.second_hand}</p>
                </a>`;
    };

    const templatesProduct = productList.map(product => creatProductThumb(product));
    const htmlProduct = templatesProduct.join(' ');

    productLoyout.insertAdjacentHTML("afterbegin", htmlProduct);
};

function _createFiltersColumn() {
    const productLoyout = document.querySelector(".product-layout");
    const filtersContainer = document.createElement("div");
    filtersContainer.className = "filters-container";

    const filterGroup = document.createElement("div");
    filterGroup.className = "filters-group";

    document.querySelector(".left-column").insertBefore(filtersContainer, document.querySelector(".left-column").firstChild);
    filtersContainer.insertBefore(filterGroup, filtersContainer.firstChild);

    const filtersTitleArr = [];
    const filtersItemsArr = [];
    var productBrand = document.querySelectorAll(".product-brand");

 

    function allBrand() {
        productBrand.forEach(function (title) {
           var titleAttr = title.getAttribute("data-title");
           filtersTitleArr.unshift(titleAttr)
            var title = title.textContent;
            title.toString();
            filtersItemsArr.unshift(title);
        });
    };
    allBrand();

    deleteDabble = filtersTitleArr.filter(function(item, pos) {
        return filtersTitleArr.indexOf(item) == pos;
    })

    var filtersTitleArrHtmL = deleteDabble.map(function (filterTitleAttr) {
        return `<h3 class="filter-tile">
                   ${filterTitleAttr}
                </h3>`;
    });
    
    console.log(filtersTitleArrHtmL)

    const joinFiltersTitle = filtersTitleArrHtmL.join(' ');

    filterGroup.insertAdjacentHTML("beforebegin", joinFiltersTitle);


    var htmlFilters = filtersItemsArr.map(function (filterItem) {
        return `<div class="filter-item-box">
                   <input type="checkbox" id="item-${filterItem}"checked>
                   <label for="item-${filterItem}">${filterItem}</label>
                </div>`;
    });


    const joinFilters = htmlFilters.join('');

    filterGroup.insertAdjacentHTML("afterbegin", joinFilters);
   
};