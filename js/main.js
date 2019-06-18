/* =================================
------------------------------------
	Pulse - Restaurant HTML Template
	Version: 1.0
 ------------------------------------ 
 ====================================*/

"use strict";

$(window).on("load", function () {
  /*------------------
		Preloder
	--------------------*/
  $(".loader").fadeOut();
  $("#preloder")
    .delay(400)
    .fadeOut("slow");
});

(function ($) {
  /*------------------
		Navigation
	--------------------*/
  $(".nav-switch").on("click", function (event) {
    $(".main-menu").slideToggle(400);
    event.preventDefault();
  });

  /*------------------
		Background Set
	--------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(".hero-slider")
    .owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      mouseDrag: false,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      items: 1,
      autoplay: true
    })
    .on("changed.owl.carousel", function (event) {
      $(".hero-slider .owl-dots:last-child").remove();
      currentHSnumber();
    });
  var dot = $(".hero-slider .owl-dot");
  dot.each(function () {
    var index = $(this).index() + 1;
    if (index < 10) {
      $(this)
        .html("0")
        .append(index);
      $(this).append("<span>.</span>");
    } else {
      $(this).html(index);
      $(this).append("<span>.</span>");
    }
  });
  function currentHSnumber() {
    $(".hero-slider .owl-dots")
      .clone()
      .appendTo(".hero-slider");
    $(".hero-slider .owl-dots:last-child").addClass("owl-dots-number");
    var av = $(".owl-dots-number").innerHeight() / 2;
    $(".owl-dots-number").css("marginTop", -av);
  }
  currentHSnumber();

  /*------------------
		Testimonials 
	--------------------*/
  $(".testimonials-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    autoplay: true
  });

  /*------------------
		Brands Slider
	--------------------*/
  $(".brands-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    margin: 40,
    autoplay: true,
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3
      },
      768: {
        items: 5
      }
    }
  });

  /*------------------
		Accordions
	--------------------*/
  $(".panel-link").on("click", function (e) {
    $(".panel-link").removeClass("active");
    var $this = $(this);
    if (!$this.hasClass("active")) {
      $this.addClass("active");
    }
    e.preventDefault();
  });

  /*------------------
		Circle progress
	--------------------*/
  $(".circle-progress").each(function () {
    var cpvalue = $(this).data("cpvalue");
    var cpcolor = $(this).data("cpcolor");
    var cpid = $(this).data("cpid");

    $(this).append(
      '<div class="' +
      cpid +
      '"></div><div class="progress-value"><h3>' +
      cpvalue +
      "%</h3></div>"
    );

    if (cpvalue < 100) {
      $("." + cpid).circleProgress({
        value: "0." + cpvalue,
        size: 123,
        thickness: 6,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)"
      });
    } else {
      $("." + cpid).circleProgress({
        value: 1,
        size: 240,
        thickness: 3,
        fill: cpcolor,
        emptyFill: "rgba(0, 0, 0, 0)"
      });
    }
  });
})(jQuery);

/* Initialize restaurants */
function init_index() {
  var restaurants = [];
  //first load
  if (sessionStorage.getItem("init_finished") == null) {
    //flag that restaurants are already initialized
    sessionStorage.setItem("init_finished", true);

    sessionStorage.setItem("current_order", 0);

    //create restaurants
    //TODO add more restaurants
    var Atos = {
      name: "Atos", //ime restorana
      sum: 0, //suma ocena
      count: 0, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/atos.jpeg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      desc_en : "Lovely restaurant",
      page: " atos.html",
      page_en: " atos_en.html",
      menu_page: "atos_menu.html",
      menu_page_en: "atos_menu_en.html",
      meal_types: "Italijanska kuhinja",
      meals: [
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
       
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
      ]
    };
    restaurants.push(Atos);

    var ChezNik = {
      name: "Chez Nik", //ime restorana
      sum: 0, //suma ocena
      count: 0, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/cheznik.jpg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      desc_en : "Lovely restaurant",
      page: " nik.html",
      page_en: " nik.html",
      menu_page: "nik_menu.html",
      menu_page_en: "nik_menu_en.html",
      meal_types: "Domaca kuhinja",
      meals: [
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
      ]
    };
    restaurants.push(ChezNik);

    var Frans = {
      name: "Frans", //ime restorana
      sum: 0, //suma ocena
      count: 0, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Vracar", //opstina
      adr: "Adresa",
      img: "img/logo/frans.jpg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      desc_en : "Lovely restaurant",
      page: " frans.html",
      page_en: " frans.html",
      menu_page: "frans_menu.html",
      menu_page_en: "frans_menu_en.html",
      meal_types: "Domaca kuhinja",
      meals: [
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
      ]
    };
    restaurants.push(Frans);

    var SoIBiber = {
      name: "So i biber", //ime restorana
      sum: 8, //suma ocena
      count: 3, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Novi Beograd", //opstina
      adr: "Adresa",
      img: "img/logo/soibiber.jpg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      desc_en : "Lovely restaurant",
      page: " biber.html",
      page_en: " biber_en.html",
      menu_page: "biber_menu.html",
      menu_page_en: "biber_menu_en.html",
      meal_types: "Domaca kuhinja",
      meals: [
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
      ]
    };
    restaurants.push(SoIBiber);

    var Poncho = {
      name: "Poncho", //ime restorana
      sum: 4, //suma ocena
      count: 1, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Zvezdara", //opstina
      adr: "Adresa",
      img: "img/logo/poncho.jpeg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      desc_en : "Lovely restaurant",
      page: " poncho.html",
      page_en: " poncho.html",
      menu_page: "poncho_menu.html",
      menu_page_en: "poncho_menu_en.html",
      meal_types: "Brza hrana",
      meals: [
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
      ]
    };
    restaurants.push(Poncho);

    var Marukoshi = {
      name: "Marukoshi", //ime restorana
      sum: 10, //suma ocena
      count: 2, //broj ocena (da bi smo mogli nakon ocenjivanja da racunamo prosek)
      mun: "Stari Grad", //opstina
      adr: "Adresa",
      img: "img/logo/marukoshi.jpg", //lokacija slike
      desc: "Lep restoran", //opis restorana
      desc_en : "Lovely restaurant",
      page: " marukoshi.html",
      page_en: " marukoshi.html",
      menu_page: "marukoshi_menu.html",
      menu_page_en: "marukoshi_menu_en.html",
      meal_types: "Japanska hrana",
      meals: [
        {
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },{
          "name": "Teleca corba",
          "name_en" : "Veal stew",
          "price": 350,
          "desc" : "Veoma ukusno",
          "desc_en": "Tasty",
          "img": "img/food/teleca_corba.jpg"
        },
      ]
    };
    restaurants.push(Marukoshi);


    sort_by_avg(restaurants);

    //store sorted restaurants to sessionStorage
    sessionStorage.setItem("restaurants", JSON.stringify(restaurants));
    console.log(restaurants);
  }


  if(is_on_english_page()){
    load_top_restaurants_en();
  }
  else
    load_top_restaurants();
  
}

function is_on_english_page(){

  var split = window.location.href.split('/');
  console.log(split);
  //split('/');
  var page = split[split.length - 1];
  var regex = /.*_en\.html/

  if(page.match(regex)){
    return true;
  }

  return false;
  //console.log(page);

}

/* sort restaurants by avg */
function sort_by_avg(restaurants) {
  for (var i = 0; i < restaurants.length; i++) {
    for (var j = i + 1; j < restaurants.length; j++) {
      var avg_i = 0;
      if (restaurants[i].count > 0)
        avg_i = restaurants[i].sum / restaurants[i].count;
      var avg_j = 0;
      if (restaurants[j].count > 0)
        avg_j = restaurants[j].sum / restaurants[j].count;

      // console.log(restaurants[i].name, restaurants[j].name, avg_i, avg_j);
      if (avg_i < avg_j) {
        var temp = restaurants[i];
        restaurants[i] = restaurants[j];
        restaurants[j] = temp;
      }
    }
  }
}

/* load top restaurants */
function load_top_restaurants() {
  //gets array of all restaurants
  var restaurants = JSON.parse(sessionStorage.getItem("restaurants"));
  //sort the array just in case
  sort_by_avg(restaurants);
  console.log(restaurants);

  //get top 3 restaurants
  var top1_img = restaurants[0].img;
  var top1_name = restaurants[0].name;
  var top1_desc = restaurants[0].desc;
  var top1_page = restaurants[0].page;

  var top2_img = restaurants[1].img;
  var top2_name = restaurants[1].name;
  var top2_desc = restaurants[1].desc;
  var top2_page = restaurants[1].page;

  var top3_img = restaurants[2].img;
  var top3_name = restaurants[2].name;
  var top3_desc = restaurants[2].desc;
  var top3_page = restaurants[2].page;


  document.getElementById("top1_image").src = top1_img;
  document.getElementById("top1_link").innerHTML = top1_name;
  document.getElementById("top1_link").href = top1_page;
  document.getElementById("top1_desc").innerHTML = top1_desc;

  document.getElementById("top2_image").src = top2_img;
  document.getElementById("top2_link").innerHTML = top2_name;
  document.getElementById("top2_link").href = top2_page;
  document.getElementById("top2_desc").innerHTML = top2_desc;

  document.getElementById("top3_image").src = top3_img;
  document.getElementById("top3_link").innerHTML = top3_name;
  document.getElementById("top3_link").href = top3_page;
  document.getElementById("top3_desc").innerHTML = top3_desc;
}

function load_top_restaurants_en() {
  //gets array of all restaurants
  var restaurants = JSON.parse(sessionStorage.getItem("restaurants"));
  //sort the array just in case
  sort_by_avg(restaurants);
  console.log(restaurants);
  //get top 3 restaurants
  var top1_img = restaurants[0].img;
  var top1_name = restaurants[0].name;
  var top1_desc = restaurants[0].desc_en;
  var top1_page = restaurants[0].page_en;

  var top2_img = restaurants[1].img;
  var top2_name = restaurants[1].name;
  var top2_desc = restaurants[1].desc_en;
  var top2_page = restaurants[1].page_en;

  var top3_img = restaurants[2].img;
  var top3_name = restaurants[2].name;
  var top3_desc = restaurants[2].desc_en;
  var top3_page = restaurants[2].page_en;

  console.log(top1_desc);

  document.getElementById("top1_image").src = top1_img;
  document.getElementById("top1_link").innerHTML = top1_name;
  document.getElementById("top1_link").href = top1_page;
  document.getElementById("top1_desc").innerHTML = top1_desc;

  document.getElementById("top2_image").src = top2_img;
  document.getElementById("top2_link").innerHTML = top2_name;
  document.getElementById("top2_link").href = top2_page;
  document.getElementById("top2_desc").innerHTML = top2_desc;

  document.getElementById("top3_image").src = top3_img;
  document.getElementById("top3_link").innerHTML = top3_name;
  document.getElementById("top3_link").href = top3_page;
  document.getElementById("top3_desc").innerHTML = top3_desc;
}

function addRating(id, rating) {
  var restaurants = JSON.parse(sessionStorage.getItem("restaurants"));

  restaurants[id]['sum'] += rating;
  restaurants[id]['count'] += 1;

  sessionStorage.setItem("restaurants", JSON.stringify(restaurants));
  window.location.reload();
}

function getStarRating(id) {
  return "<fieldset class=\"rating\"> \
  <input type=\"radio\" id=\"star5_" + id + "\" name=\"rating\" value=\"5\" onclick=\"addRating(" + id + ",5)\" /><label class = \"full\" for=\"star5_" + id + "\" title=\"Awesome - 5 stars\"></label> \
  <input type=\"radio\" id=\"star4_" + id + "\" name=\"rating\" value=\"4\" onclick=\"addRating(" + id + ",4)\" /><label class = \"full\" for=\"star4_" + id + "\" title=\"Pretty good - 4 stars\"></label> \
  <input type=\"radio\" id=\"star3_" + id + "\" name=\"rating\" value=\"3\" onclick=\"addRating(" + id + ",3)\" /><label class = \"full\" for=\"star3_" + id + "\" title=\"Meh - 3 stars\"></label> \
  <input type=\"radio\" id=\"star2_" + id + "\" name=\"rating\" value=\"2\" onclick=\"addRating(" + id + ",2)\" /><label class = \"full\" for=\"star2_" + id + "\" title=\"Kinda bad - 2 stars\"></label> \
  <input type=\"radio\" id=\"star1_" + id + "\" name=\"rating\" value=\"1\" onclick=\"addRating(" + id + ",1)\" /><label class = \"full\" for=\"star1_" + id + "\" title=\"Sucks big time - 1 star\"></label> \
</fieldset>";
}


function filterRestaurants(restaurants) {

  var labelToMealType = {
    "Kuhinja-BrzaHrana": "Brza hrana",
    "Kuhinja-DomacaKuhinja": "Domaca kuhinja",
    "Kuhinja-Italijanska": "Italijanska kuhinja",
    "Kuhinja-Japanska": "Japanska hrana"
  }

  // If no labels are checked, return all restaurants.
  var filterMealTypes = [];

  for (var labelId in labelToMealType) {
    if (document.getElementById(labelId).checked == true)
      filterMealTypes.push(labelToMealType[labelId])
  }

  if (filterMealTypes.length == 0)
    return restaurants;

  var filteredRestaurants = [];

  for (var i = 0; i < restaurants.length; i++) {
    if (filterMealTypes.includes(restaurants[i].meal_types))
      filteredRestaurants.push(restaurants[i]);
  }  
  
  return filteredRestaurants;
}

function sort_restaurants(restaurants, sortOrder) {
  if (sortOrder == 1) {
    restaurants.sort(function (a,b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();

      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });

    return restaurants;
  }
  else if (sortOrder == 2) {
    restaurants.sort(function (a,b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();

      if (x < y) return 1;
      if (x > y) return -1;
      return 0;
    });

    return restaurants;
  }
  else {
    alert ("BAD SORT ORDER");
    return [];
  }
}

function setSortOrder(sortOrder) {
  sessionStorage.setItem("restaurantsSortOrder", sortOrder);
}

function load_all_restaurants(resetSortOrder) {
  var restaurants = JSON.parse(sessionStorage.getItem("restaurants"));
  var html_to_insert = "";
  var english = is_on_english_page();

  restaurants = filterRestaurants(restaurants);

  if (resetSortOrder)
    sessionStorage.setItem("restaurantsSortOrder", 1);

  var sortOrder = sessionStorage.getItem("restaurantsSortOrder");
  restaurants = sort_restaurants(restaurants, sortOrder);

  for (var i = 0; i < restaurants.length; i++) {

    var restaurant_page;
    var restaurant_desc;

    if(english){
      restaurant_page = restaurants[i].page_en;
      restaurant_desc = restaurants[i].desc_en;
    }else{
      restaurant_page = restaurants[i].page;
      restaurant_desc = restaurants[i].desc;  
    }


    html_to_insert += (
      "<div class=\"col-md-2 col-sm-6\" style = \"padding-top:20px\">" +
      "<img src=\"" + restaurants[i].img + "\" style=\"width: 100%\">" +
      "</div>" +
      "<div class=\"col-md-4 col-sm-6\" style=\"padding : 20px\">" +
      "<h3 class=\"text-left \"><a style=\"color:black \" href=\"" + restaurant_page + "\">" + restaurants[i].name + "</a></h3>" +
      "<p class=\"text-left\">" + restaurant_desc + "</p><br />" +
      "</div>");

  }

  document.getElementById("main_tag").innerHTML = html_to_insert;
}


function load_all_restaurants_delivery(resetSortOrder) {
  var restaurants = JSON.parse(sessionStorage.getItem("restaurants"));
  var html_to_insert = "";
  var english = is_on_english_page();

  restaurants = filterRestaurants(restaurants);

  if (resetSortOrder)
    sessionStorage.setItem("restaurantsSortOrder", 1);

  var sortOrder = sessionStorage.getItem("restaurantsSortOrder");
  restaurants = sort_restaurants(restaurants, sortOrder);

  for (var i = 0; i < restaurants.length; i++) {
   
    var restaurant_page;
    var restaurant_desc;

    if(english){
      restaurant_page = restaurants[i].menu_page_en;
      restaurant_desc = restaurants[i].desc_en;
    }else{
      restaurant_page = restaurants[i].menu_page;
      restaurant_desc = restaurants[i].desc;  
    }


    html_to_insert += (
      "<div class=\"col-md-2 col-sm-6\" style = \"padding-top:20px\">" +
      "<img src=\"" + restaurants[i].img + "\" style=\"width: 100%\">" +
      "</div>" +
      "<div class=\"col-md-4 col-sm-6\" style=\"padding : 20px\">" +
      "<h3 class=\"text-left \"><a style=\"color:black \" href=\"" + restaurant_page + "\">" + restaurants[i].name + "</a></h3>" +
      "<p class=\"text-left\">" + restaurant_desc + "</p><br />" +
      "</div>");

  }

  document.getElementById("main_tag").innerHTML = html_to_insert;
}

function load_restaurants_from(mun, resetSortOrder) {
  var restaurants = JSON.parse(sessionStorage.getItem("restaurants"));
  var html_to_insert = "";
  var restaurants_from = [];

  var english = is_on_english_page();

  for (var i = 0; i < restaurants.length; i++) {
    if (restaurants[i].mun === mun) {
      restaurants_from.push(restaurants[i]);
    }
  }

  if (restaurants_from.length === 0) {

    window.alert("Nema restorana iz ove opstine");
    window.location = "index.html"                //note obrati paznju na jezik ovde !!

  } else {

    // Filter restaurants
    restaurants_from = filterRestaurants(restaurants_from);

    // Sort restaurants.
    if (resetSortOrder)
      sessionStorage.setItem("restaurantsSortOrder", 1);

    var sortOrder = sessionStorage.getItem("restaurantsSortOrder");
    restaurants_from = sort_restaurants(restaurants_from, sortOrder);

    for (var i = 0; i < restaurants_from.length; i++) {

      var restaurant_page;
      var restaurant_desc;

      if(english){
        restaurant_page = restaurants_from[i].page_en;
        restaurant_desc = restaurants_from[i].desc_en;
      }else{
        restaurant_page = restaurants_from[i].page_en;
        restaurant_desc = restaurants_from[i].desc;  
      }

      html_to_insert += (
        "<div class=\"col-md-2 col-sm-6\">" +
        "<img src=\"" + restaurants_from[i].img + "\" style=\"width: 100%\">" +
        "</div>" +
        "<div class=\"col-md-4 col-sm-6\" style=\"padding : 10px\">" +
        "<h3 class=\"text-left \"><a style=\"color:black \" href=\"" + restaurant_page + "\">" + restaurants_from[i].name + "</a></h3>" +
        "<p class=\"text-left\">" + restaurant_desc + "</p><br />" +
        "</div>");
    }

    document.getElementById("main_tag").innerHTML = html_to_insert;
  }
}
//english enabled
function load_single_restaurant_menu(name) {

  var html_to_insert = "";
  var restaurants = JSON.parse(sessionStorage.getItem("restaurants"));
  var restaurant;
  var meal_count;

  //add restaurant name to the breadcrumb
  if(is_on_english_page())
    document.getElementById("bc_restaurant").innerHTML = name + " menu";
  else
    document.getElementById("bc_restaurant").innerHTML = name + " meni";
  
    document.getElementById("rest_name").innerHTML = name + "<span>.</span>";
  
    //get data bout the restaurant
  for (var i = 0; i < restaurants.length; i++) {

    if (restaurants[i].name == name) {
      restaurant = restaurants[i];
      meal_count = restaurant.meals.length;
      break;
    }

  }

  //just in case 
  if (restaurant != null) {

    var first_col_count = Math.ceil(meal_count / 2);


    var menuText = "Meni";

    if (is_on_english_page()) {
      menuText = "Our Menu";
    }

    //insert container
    html_to_insert = html_to_insert + "<div class=\"container\"> <div class=\"section-title text-white\">	<i class=\"flaticon-003-chicken-2\"></i>	<h2>"+ menuText +"</h2> </div>";

    //menu tab nav
    html_to_insert = html_to_insert +
      "<div class=\"tab-content menu-tab-content\"> <div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"tab-1\"> <div class=\"row\"> <div class=\"col-lg-6\">";

    //adding menu items
    for (var i = 0; i < first_col_count; i++) {

      var meal_name;
      var meal_desc;
      if(is_on_english_page()){
        console.log("Am on english page");
        meal_name = restaurant.meals[i].name_en;
        meal_desc = restaurant.meals[i].desc_en;
      }else{
        meal_name = restaurant.meals[i].name;  
        meal_desc = restaurant.meals[i].desc;
      }


      html_to_insert = html_to_insert +
        "<div class=\"menu-item\">" +
        "<img src = \"" + restaurant.meals[i].img + "\" onclick = \"add_item('" + meal_name + "'," + restaurant.meals[i].price + ",'" + restaurant.name + "')\">" +
        "<h5 style = \"padding-top : 20px\"onclick = \"add_item('" + meal_name + "'," + restaurant.meals[i].price + ",'" + restaurant.name + "')\">" +
        meal_name + "</h5> <div class=\"mi-meta\">" +
        "<p>" + meal_desc + "</p>" +
        "<div class=\"menu-price\">" + restaurant.meals[i].price + "</div> </div> </div>";
    }

    //add row break
    html_to_insert = html_to_insert + "</div> <div class=\"col-lg-6\">";

    //adding more menu items
    for (var i = first_col_count; i < meal_count; i++) {
      var meal_name;
      var meal_desc;
      if(is_on_english_page()){
        meal_name = restaurant.meals[i].name_en;
        meal_desc = restaurant.meals[i].desc_en;
      }else{
        meal_name = restaurant.meals[i].name;  
        meal_desc = restaurant.meals[i].desc;
      }


      html_to_insert = html_to_insert +
        "<div class=\"menu-item\">" +
        "<img src = \"" + restaurant.meals[i].img + "\" onclick = \"add_item('" + meal_name + "'," + restaurant.meals[i].price + ",'" + restaurant.name + "')\">" +
        "<h5 style = \"padding-top : 20px\"onclick = \"add_item('" + meal_name + "'," + restaurant.meals[i].price + ",'" + restaurant.name + "')\">" +
        meal_name + "</h5> <div class=\"mi-meta\">" +
        "<p>" + meal_desc + "</p>" +
        "<div class=\"menu-price\">" + restaurant.meals[i].price + "</div> </div> </div>";
    }

    //closing tags
    html_to_insert = html_to_insert +
      "</div> </div> </div> </div> ";

    html_to_insert = html_to_insert +
    "<div class = \"offset-sm-5 col-sm-1\">" +
      "<button class=\"btn btn-warning\" onclick = \"go_to_current_order()\">";
      
    if(is_on_english_page()){
      html_to_insert+="Submit order";
    }else{
      html_to_insert+="Naruci";
    }
      
    html_to_insert += "</button>" +
    "</div>";

    document.getElementById("menu").innerHTML = html_to_insert;
  } else {
    window.alert("Ne postoji restoran!!!");
  }
}

function load_single_restaurant(name) {

  console.log(name);

  var restaurants = JSON.parse(sessionStorage['restaurants']);

  var restaurant = 5;
  for(var i = 0; i < restaurants.length; i++){
    console.log("Restoran");
    console.log(restaurants[i],name);

    if(restaurants[i].name == name){
      restaurant = restaurants[i];
      break;
    }
  }

  console.log(restaurant);

  var desc;

  if(is_on_english_page()){
    desc = restaurant.desc_en;
  }else{
    desc = restaurant.desc;
  }

  var rating = 0;

  if(restaurant.count != 0)
    rating = restaurant.sum/restaurant.count;

  document.getElementById("bc_restaurant").innerHTML = name;
  document.getElementById("title").innerHTML = name;
  document.getElementById("about").innerHTML = desc;
  document.getElementById("cur_rating").innerHTML = rating.toFixed();
}

//add item to local storage on index - restaurant 
//todo finish this
function add_item(item, price, restaurant) {
  if(is_on_english_page())
    window.alert("Ordered " + item + " from " + restaurant + " for " + price + " dinars");
  else
    window.alert("Narucio " + item + " iz " + restaurant + " za " + price + " dinara");

  var id = sessionStorage.getItem("current_order")
  var orders = JSON.parse(sessionStorage.getItem(id));

  var order = {
    "item": item,
    "price": price,
    "restaurant": restaurant
  }

  if (orders == null)
    orders = [];

  orders.push(order);

  sessionStorage.setItem(id, JSON.stringify(orders));

  console.log(sessionStorage.getItem(id));
}

function go_to_finalize_order() {

  if (is_on_english_page()) {
    window.location = "finalize_order_en.html";
  }
  else {
    window.location = "finalize_order.html";
  }
}

function go_to_current_order(){
  if (is_on_english_page()) {
    window.location = "current_order_en.html";
  }
  else{
    window.location = "current_order.html";
  }
}

//called from finalize_order
function next_order() {

  var name = document.form.name.value;
  var surname = document.form.surname.value;
  var addr = document.form.addr.value;
  var email = document.form.email.value;
  var phone = document.form.phone.value;

  var email_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  //TODO add phone regex
  var phone_regex = /a/;

  if (email_regex.test(email)) {

    var prevous_orders = JSON.parse(sessionStorage.getItem("prevous_orders"));

    if (prevous_orders == null) {
      prevous_orders = [];
    }

    var curr = sessionStorage.getItem("current_order");

    var item = {
      "name": name,
      "surname": surname,
      "addr": addr,
      "email": email,
      "phone": phone,
      "meals": sessionStorage.getItem(curr)
    }

    prevous_orders.push(item);
    curr = +curr + 1;
    sessionStorage.setItem("current_order", curr);
    sessionStorage.setItem("prevous_orders", JSON.stringify(prevous_orders));


    //TODO - redirect na sve porudzbine kad bude gotova stranica 
    
    if (is_on_english_page()) {
      window.location = "my_orders_en.html";
    }
    else {
      window.location = "my_orders.html";
    }
  } else {
    window.alert("Uneli ste nevalidne podatke");
  }
}

//loads page delivery.html
function list_current_order() {

  var current_order = sessionStorage.getItem("current_order");
  var order = JSON.parse(sessionStorage.getItem(current_order));

  var html_to_insert = "";

  if (order != null && order.length > 0) {


    var headerString = "Vasa Narudzbina";

    if (is_on_english_page()) {
      headerString = "Your Order";
    }

    //before orders
    html_to_insert = html_to_insert + "<div class=\"container\"> " +
      "<div class=\"section-title\">" +
      "<i class=\"flaticon-007-spaguetti\"></i>" +
      "<h2>"+ headerString +"</h2>" +
      "</div>" +
      "<div class=\"tab-content menu-tab-content\">" +
      "<div class=\"tab-pane fade show active\" id=\"tab-1\" role=\"tabpanel\" aria-labelledby=\"tab-1\">" +
      "<div class=\"row menu-dark\">" +
      "<div class=\"col-lg-12\">";

    //order items            
    for (var i = 0; i < order.length; i++) {
      html_to_insert = html_to_insert +
        "<div class=\"menu-item\">" +
        "<h5>" + order[i].item + "</h5>" +
        "<div class=\"mi-meta\">" +
        "<p>" + order[i].restaurant + "</p>" +
        "<div class=\"menu-price\">" + order[i].price + "</div>" +
        "</div></div>";
    }



    //after orders
    html_to_insert = html_to_insert + "</div> </div> </div> </div> </div>"

    document.getElementById("delivery_body").innerHTML = html_to_insert;
  } else {
    window.alert("Narudzbina ne postoji");
    window.location = "index.html";
  }

}

//loads page my_orders.html
function list_my_orders() {

  var my_orders = JSON.parse(sessionStorage.getItem("prevous_orders"));

  if (my_orders.length == 0) {
    //NOTE obrati paznju na jezik
    window.alert("Nema narudzbina");
    window.location = "index.html";
  }

  var html_to_insert = "";

  for (var i = 0; i < my_orders.length; i++) {

    var sum = 0;

    html_to_insert = html_to_insert + "<div class = \"col-sm-12 col-md-6\">" +
      "<h3 align = \"center\" > Porudzbina broj: " + (+i + 1) + "</h3>" +
      " <table class=\"table table-striped\">" +
      "<tbody>" +
      "<tr>" +
      "<td align=\"center\">Ime :</td>" +
      "<td align=\"center\">" + my_orders[i].name + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Preizme :</td>" +
      "<td align=\"center\">" + my_orders[i].surname + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Adresa :</td>" +
      "<td align=\"center\">" + my_orders[i].addr + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Email :</td>" +
      "<td align=\"center\">" + my_orders[i].email + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Telefon :</td>" +
      "<td align=\"center\">" + my_orders[i].phone + "</td>" +
      "</tr>";

    //TODO meals
    var meals = JSON.parse(my_orders[i].meals);
    for (var j = 0; j < meals.length; j++) {
      html_to_insert = html_to_insert +
        "<tr>" +
        "<td align=\"center\">Jelo :</td>" +
        "<td align=\"center\">" + meals[j].item + " iz " + meals[j].restaurant + "</td>" +
        "</tr>";

      sum = +sum + meals[j].price;
    }

    //add total price
    html_to_insert = html_to_insert +
      "<tr>" +
      "<td align=\"center\">Ukupna cena:</td>" +
      "<td align=\"center\">" + sum + "</td>" +
      "</tr>";


    //close table
    html_to_insert = html_to_insert +
      "</tbody> </table></div>";

  }

  document.getElementById("orders").innerHTML = html_to_insert;

}

//loads page my_orders.html
function list_my_orders_en() {

  var my_orders = JSON.parse(sessionStorage.getItem("prevous_orders"));

  if (my_orders.length == 0) {
    //NOTE obrati paznju na jezik
    window.alert("You have no orders.");
    window.location = "index_en.html";
  }

  var html_to_insert = "";

  for (var i = 0; i < my_orders.length; i++) {

    var sum = 0;

    html_to_insert = html_to_insert + "<div class = \"col-sm-12 col-md-6\">" +
      "<h3 align = \"center\" > Number of Orders: " + (+i + 1) + "</h3>" +
      " <table class=\"table table-striped\">" +
      "<tbody>" +
      "<tr>" +
      "<td align=\"center\">First Name :</td>" +
      "<td align=\"center\">" + my_orders[i].name + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Last Name :</td>" +
      "<td align=\"center\">" + my_orders[i].surname + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Address :</td>" +
      "<td align=\"center\">" + my_orders[i].addr + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Email :</td>" +
      "<td align=\"center\">" + my_orders[i].email + "</td>" +
      "</tr>" +
      "<tr>" +
      "<td align=\"center\">Telephone :</td>" +
      "<td align=\"center\">" + my_orders[i].phone + "</td>" +
      "</tr>";

    //TODO meals
    var meals = JSON.parse(my_orders[i].meals);
    for (var j = 0; j < meals.length; j++) {
      html_to_insert = html_to_insert +
        "<tr>" +
        "<td align=\"center\">Meal :</td>" +
        "<td align=\"center\">" + meals[j].item + " from " + meals[j].restaurant + "</td>" +
        "</tr>";

      sum = +sum + meals[j].price;
      console.log(meals[j]);
    }

    //add total price
    html_to_insert = html_to_insert +
      "<tr>" +
      "<td align=\"center\">Total Price:</td>" +
      "<td align=\"center\">" + sum + "</td>" +
      "</tr>";


    //close table
    html_to_insert = html_to_insert +
      "</tbody> </table></div>";

  }

  document.getElementById("orders").innerHTML = html_to_insert;

}

function exportOrdersToPdf(lang) {
  var doc = new jsPDF();

  var my_orders = JSON.parse(sessionStorage.getItem("prevous_orders"));

  var A4_CENTER = 105;


  var PDF_STRING = {
    "serbian": {
      my_orders: "Moje Narudzbine",
      order:  "Narudzbina",
      contact: "Kontakt",
      meal: "Jelo",
      total_price: "Ukupna Cena",
      file : "MojeNarudzbine"
    },
    "english": {
      my_orders: "My Orders",
      order:  "Order",
      contact: "Contact",
      meal: "Meal",
      total_price: "Total Price",
      file : "MyOrders"
    }
  };

  var lang_strings = PDF_STRING[lang];


  // Header
  var aboveHeader = 10;
  doc.text(lang_strings.my_orders, A4_CENTER, aboveHeader, {align: "center"});

  // Body
  var marginBetweeenOrders = 10;
  var marginAfterText = 10;

  console.log(my_orders);

  var current_y = aboveHeader + marginAfterText + marginBetweeenOrders;
  for (var i = 0; i < my_orders.length; i++) {

    var orderName = lang_strings.order + " #" + (i + 1);
    doc.text(orderName, 10, current_y);

    var osobaText = lang_strings.contact + ": " + my_orders[i].name + " " + my_orders[i].surname + ", " + my_orders[i].addr;
    doc.text(osobaText, 10, current_y + marginAfterText);

    var meals = JSON.parse(my_orders[i].meals);

    var totalPrice = 0;
    for (var j = 0; j < meals.length; j++) {
      
      var mealText = lang_strings.meal + " #" + (j + 1) + ": " + meals[j].item;
      doc.text(mealText, 10, current_y + (2 + j) * marginAfterText)

      totalPrice += meals[j].price;
    }

    var totalPriceText = lang_strings.total_price + ": " + totalPrice;
    doc.text(totalPriceText, 10, current_y + (2 + meals.length) * marginAfterText);

    current_y += (3 + meals.length) * marginAfterText + marginBetweeenOrders;
  }



  doc.save(lang_strings.file + '.pdf');
}