!(function (n) {
  var e = {};
  function t(a) {
    if (e[a]) return e[a].exports;
    var s = (e[a] = {
      i: a,
      l: !1,
      exports: {},
    });
    return n[a].call(s.exports, s, s.exports, t), (s.l = !0), s.exports;
  }
  (t.m = n),
    (t.c = e),
    (t.d = function (n, e, a) {
      t.o(n, e) ||
        Object.defineProperty(n, e, {
          enumerable: !0,
          get: a,
        });
    }),
    (t.r = function (n) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(n, "__esModule", {
          value: !0,
        });
    }),
    (t.t = function (n, e) {
      if ((1 & e && (n = t(n)), 8 & e)) return n;
      if (4 & e && "object" == typeof n && n && n.__esModule) return n;
      var a = Object.create(null);
      if (
        (t.r(a),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          value: n,
        }),
        2 & e && "string" != typeof n)
      )
        for (var s in n)
          t.d(
            a,
            s,
            function (e) {
              return n[e];
            }.bind(null, s)
          );
      return a;
    }),
    (t.n = function (n) {
      var e =
        n && n.__esModule
          ? function () {
              return n.default;
            }
          : function () {
              return n;
            };
      return t.d(e, "a", e), e;
    }),
    (t.o = function (n, e) {
      return Object.prototype.hasOwnProperty.call(n, e);
    }),
    (t.p = ""),
    t((t.s = 0));
})([
  function (n, e, t) {
    "use strict";
    t.r(e);
    t(1);
    (() => {
      const n = document.querySelector("#content"),
        e = document.createElement("div");
      e.classList.add("tab-content"),
        (e.innerHTML =
          '<div id="home" class="active" data-tab-content>\n  <div class="hero">\n    <h1>You craving something amazing today?</h1>\n    <p>Scratch-Kitchen!</p>\n    <div class="btn-container">\n      <a data-tab-target="#menu" class="order-now">Order Now!</a>\n    </div>\n  </div>\n  <div class="info">\n    <div class="address">\n      <span><i class="fi-xnsuxl-map-marker-solid"></i></span>\n      <p>123 Winwood Ave<br />Miami, FL 33333</p>\n    </div>\n    <div class="hours">\n      <span><i class="fi-cnsuhl-clock-solid"></i></span>\n      <p>\n        <span>Mon-Thurs:</span>10am-11pm<br /><span>Fri-Sun:</span\n        >12pm-12am\n      </p>\n    </div>\n  </div>\n</div>'),
        n.appendChild(e);
    })(),
      (() => {
        const n = document.querySelector("#content"),
          e = document.createElement("div");
        e.setAttribute("id", "menu"),
          e.setAttribute("data-tab-content", ""),
          (e.innerHTML =
            '\n  <div class="hero">\n  <h1>Menu</h1>\n  <img src="./images/chef.png" alt="" width="50" height="50" />\n</div>\n<div class="menu-container">\n  <div class="menu-item">\n    <img src="./images/sandwich.png" alt="" />\n    <div class="item-content">\n      <h4>Sandwich: <span>$9.99</span></h4>\n      <p>\n        All the fixins, we call it the meat surprise\n             </p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/pasta.png" alt="" />\n    <div class="item-content">\n      <h4>Leftover Pasta: <span>$0.99</span></h4>\n      <p>Unlike anything on the menu, but is that a good thing?</p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/catFood.png" alt="" />\n    <div class="item-content">\n      <h4>Mittens\' Meal: <span>$6.49</span></h4>\n      <p>Give Mittens an extra meal!\nYou didn\'t want the cat food, did you?</p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/donutFood.png" alt="" />\n    <div class="item-content">\n      <h4>Pink Frosted: <span>$1.99</span></h4>\n      <p>Fresh baked donut, Simpson\'s style</p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/cake.png" alt="" />\n    <div class="item-content">\n      <h4>Slice O Chocolate: <span>$6.99</span></h4>\n      <p>Tip: Ask for extra whipped cream</p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/drink.png" alt="" />\n    <div class="item-content">\n      <h4>Fountain Drink: <span>$2.99</span></h4>\n      <p>\n        Generic Brand Products Available\n             </p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/coffee.png" alt="" />\n    <div class="item-content">\n      <h4>Black Coffee: <span>$3.99</span></h4>\n      <p>\n        Cream and sugar?\n      </p>\n    </div>\n  </div>\n  <div class="menu-item">\n    <img src="./images/fries.png" alt="" />\n    <div class="item-content">\n      <h4>French Fries: <span>$5.99</span></h4>\n      <p>\n        Reasonably priced side\n       you know you want some fries\n      </p>\n    </div>\n  </div>\n</div>'),
          n.appendChild(e);
      })(),
      (() => {
        const n = document.querySelector("#content"),
          e = document.createElement("div");
        e.setAttribute("id", "contact"),
          e.setAttribute("data-tab-content", ""),
          (e.innerHTML =
            '\n    <div class="hero">\n    <h1>How Can We Help?</h1>\n  </div>\n  <div class="contact-container">\n    <div class="info">\n      <div class="address">\n        <p>\n          <i class="fi-xnsuxl-map-marker-solid"></i>123 Winwood Ave<br /Miami\n          ,Fl 33333\n        </p>\n      </div>\n      <div class="hours">\n        <p>\n          <i class="fi-cnsuhl-clock-solid"></i\n          ><span>Mon-Thurs:</span>10am-11pm<br /><span>Fri-Sun:</span\n          >12pm-12am\n        </p>\n      </div>\n      <div class="phone">\n        <p><i class="fi-xnsrxl-phone-solid"></i>(111)-222 3456</p>\n      </div>\n      <div class="contact-form">\n        <form onsubmit="return false">\n          <h3><i class="fi-xwsuxl-envelope-solid"></i>Looking to Franchise?</h3>\n          <div class="input-box">\n            <input type="text" required />\n            <span>Full Name</span>\n          </div>\n          <div class="input-box">\n            <input type="text" required />\n            <span>Email</span>\n          </div>\n          <div class="input-box">\n            <textarea required></textarea>\n            <span>We love hearing from you...</span>\n          </div>\n          <input type="submit" value="Send" />\n        </form>\n      </div>\n    </div>\n    <iframe\n      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114968.83906851624!2d-80.26020002999611!3d25.77795403532759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b4206f1f80d9%3A0x87962a8eb8223143!2sBayside%20Marketplace!5e0!3m2!1sen!2sus!4v1681273013547!5m2!1sen!2sus"\n      width="600"\n      height="450"\n      frameborder="0"\n      style="border: 0"\n      allowfullscreen=""\n      aria-hidden="false"\n      tabindex="0"\n    ></iframe>\n  </div>'),
          n.appendChild(e);
      })();
    const a = document.querySelectorAll("[data-tab-target]"),
      s = document.querySelectorAll("[data-tab-content]"),
      i = document.querySelector(".class1");
    i.addEventListener("click", () => {
      document.querySelector("ul").classList.toggle("active"),
        i.classList.toggle("toggle");
    }),
      a.forEach((n) =>
        n.addEventListener("click", () => {
          const e = document.querySelector(n.dataset.tabTarget);
          s.forEach((n) => {
            n.classList.remove("active");
          }),
            a.forEach((n) => {
              n.classList.remove("blue");
            }),
            n.classList.add("blue"),
            e.classList.add("active");
        })
      ),
      document.querySelector(".order-now").addEventListener("click", () => {
        document
          .querySelector('[data-tab-target="#menu"]')
          .classList.add("blue");
      }),
      document
        .querySelector('[type="submit"]')
        .addEventListener("click", () => {
          document.querySelector("form").reset();
        }),
      console.log(`Today is ${new Date().toUTCString()}. Very nice.`);
  },
  function (n, e) {
    (() => {
      const n = document.querySelector("#content"),
        e = document.createElement("header");
      (e.innerHTML =
        '\n  <nav>\n  <h2>Popular-Local-Restaurant</h2>\n  <a href="#" class="class1">\n    <span class="line line1"></span>\n    <span class="line line2"></span>\n    <span class="line line3"></span>\n  </a>\n  <ul class="links">\n    <li data-tab-target="#home" class="tab blue">Home</li>\n    <li data-tab-target="#menu" class="tab">Menu</li>\n    <li data-tab-target="#contact" class="tab">Contact us</li>\n  </ul>\n</nav>'),
        n.appendChild(e);
    })();
  },
]);
