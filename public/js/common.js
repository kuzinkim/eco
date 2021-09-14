var debugTimes = !1;
document.addEventListener("DOMContentLoaded", (function (e) {
    initSmoothScrolling();
    var t = function (e) {
            var t = e.querySelector(".js-more-btn"),
                o = e.querySelector(".js-service-text");
            (e.classList.add("is-hidden"), null !== o) && (o.innerHTML.length < 500 && (e.classList.add("is-button-hide"), e.classList.remove("is-hidden")));
            t.addEventListener("click", (function () {
                e.classList.toggle("is-hidden"), "развернуть" === t.innerText.toLowerCase() ? t.innerText = "Свернуть" : t.innerText = "Развернуть"
            }))
        },
        o = document.querySelectorAll(".js-hidden-container");
    if (o.length)
        for (var n = 0; n < o.length; n += 1) t(o[n]);
    !function () {
        var e, t, o = document.querySelectorAll(".product__tab-btn"),
            n = document.querySelectorAll(".characteristics"),
            s = document.querySelector(".js-popup-title"),
            i = document.querySelector(".js-product-button"),
            r = document.getElementById("product_title"),
            c = document.getElementById("product_id");

        function a() {
            if (this.classList.contains("is-active") || o.forEach((function (e) {
                e.classList.remove("is-active")
            })), this.classList.add("is-active"), screen.width < 768) {
            }
            var l;
            e = this.getAttribute("data-id"), t = this.getAttribute("data-text"), i.textContent = t, l = e, n.forEach((function (e) {
                var t = e.getAttribute("id");
                l == t ? e.classList.add("is-active") : e.classList.remove("is-active")
            })), r.setAttribute("value", t), c.setAttribute("value", "EcoWood " + e), s.textContent = "Получить предложение" == t ? "Получить КП на EcoWood " + e : "Узнать цену на EcoWood " + e
        }

        o.forEach((function (e) {
            e.addEventListener("click", a)
        }))
    }();
    var s = document.querySelector(".button-up");
    window.addEventListener("scroll", (function (e) {
        var t = window.pageYOffset,
            o = document.querySelector(".header");
        t >= o.clientHeight + 40 ? o.classList.add("is-fixed") : o.classList.remove("is-fixed"), (window.pageYOffset || document.documentElement.scrollTop) > 700 ? s.classList.add("is-show") : s.classList.remove("is-show")
    })), document.querySelectorAll(".button-more--element").forEach((function (e) {
        var t = e;
        t.addEventListener("click", (function (e) {
            var o = this.closest(".js-parent");
            if (o.classList.toggle("is-active"), "показать еще" === t.innerText.toLowerCase() || "другие модели" === t.innerText.toLowerCase() || "еще фото" === t.innerText.toLowerCase() || "другие преимущества" === t.innerText.toLowerCase()) t.innerText = "Скрыть";
            else {
                var n = t.getAttribute("data-text-btn");
                t.innerText = n, "Другие модели" !== n && window.scrollTo({
                    top: o.offsetTop
                })
            }
        }))
    }));
    var i = document.querySelector(".js-burg"),
        r = document.querySelector(".header__wrapper"),
        c = document.querySelector(".wrapper"),
        a = document.querySelectorAll(".header__menu-link");
    i.addEventListener("click", (function () {
        var e = document.querySelector(".header__inner");
        this.classList.contains("active") ? (this.classList.remove("active"), e.classList.remove("is-color"), r.classList.remove("is-active"), body.classList.remove("is-hidden"), c.classList.remove("overlay")) : (this.classList.add("active"), e.classList.add("is-color"), r.classList.add("is-active"), body.classList.add("is-hidden"), c.classList.add("overlay"))
    }));
    for (n = 0; n < a.length; n++) {
        a[n].addEventListener("click", (function (e) {
            var t = document.querySelector(".header__inner");
            r.classList.contains("is-active") && (r.classList.remove("is-active"), i.classList.remove("active"), c.classList.remove("overlay"), body.classList.remove("is-hidden"), t.classList.remove("is-color"))
        }))
    }
    const l = window.matchMedia("(max-width:767px)");
    let d;
    const u = function () {
            if (!0 !== l.matches) return !1 === l.matches ? m() : void 0;
            void 0 !== d && d.destroy(!0, !0)
        },
        m = function () {
            d = new Swiper(".swiper-container", {
                navigation: {
                    nextEl: ".project-button--next",
                    prevEl: ".project-button--prev"
                },
                autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !0
                },
                simulateTouch: !1
            })
        };
    l.addListener(u), u();
    var p = document.querySelector(".swiper-container");
    p.addEventListener("mouseenter", (function () {
        d.autoplay.stop()
    })), p.addEventListener("mouseleave", (function () {
        d.autoplay.start()
    }));
    var h = document.querySelectorAll(".js-popup-show"),
        f = document.querySelectorAll(".js-close");
    if (body = document.querySelector("body"), lockPadding = document.querySelectorAll(".lock-padding"), unlock = !0, timeOut = 400, h.length > 0)
        for (n = 0; n < h.length; n++) {
            h[n].addEventListener("click", (function (e) {
                var t = this.getAttribute("data-content"),
                    o = this.getAttribute("data-file");
                switch (y(document.querySelector("" + t), o), e.preventDefault(), t) {
                    case ".js-popup-price":
                        return ym(69751027, "reachGoal", "Order"), !0;
                    case ".js-popup-leasing":
                        return ym(69751027, "reachGoal", "Leasing"), !0;
                    case ".js-popup-feedback":
                        return ym(69751027, "reachGoal", "question"), !0;
                    default:
                        console.log(".js-popup-show")
                }
            }))
        }
    if (f.length > 0)
        for (n = 0; n < f.length; n++) {
            f[n].addEventListener("click", (function (e) {
                v(this.closest(".popup"), !0), e.preventDefault()
            }))
        }

    function y(e, t) {
        if (e && unlock) {
            var o = document.querySelector(".popup.open");
            if (o ? v(o, !1) : function () {
                var e = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                if (lockPadding.length > 0)
                    for (var t = 0; t < lockPadding.length; t++) {
                        lockPadding[t].style.paddingRight = e
                    }
                body.style.paddingRight = e, body.classList.add("is-hidden"), s.style.opacity = 0, unlock = !1, setTimeout((function () {
                    unlock = !0
                }), timeOut)
            }(), e.classList.add("open"), t) {
                var n = e.querySelector(".popup__content--project"),
                    i = document.createElement("img");
                i.setAttribute("src", "assets/images/" + t + ".jpg"), n.append(i)
            }
            e.addEventListener("click", (function (e) {
                e.target.closest(".popup__content") || v(e.target.closest(".popup"), !0)
            }))
        }
    }

    function v(e, t) {
        var o = e.getElementsByTagName("img");
        o.length && setTimeout((function () {
            if (e.classList.contains('popup--project')) {
                o[0].remove()
            }
        }), 400), unlock && (e.classList.remove("open"), t && (setTimeout((function () {
            for (var e = 0; e < lockPadding.length; e++) lockPadding[e].style.paddingRight = "0px";
            body.style.paddingRight = "0px", body.classList.remove("is-hidden"), s.style.opacity = 1
        }), timeOut), unlock = !1, setTimeout((function () {
            unlock = !0
        }), timeOut)))
    }

    function g(e) {
        var t = e.getAttribute("data-id");
        return ym(69751027, "reachGoal", t), !0
    }

    var phoneMaskInstances = {};
    var justValidateDefaultSettings = {
        rules: {
            name: {
                required: !0
            },
            email: {
                required: !0,
                email: !0
            },
            tel: {
                required: true,
            }
        },
        messages: {
            name: "Пожалуйста, введите ваше имя",
            email: "Пожалуйста, введите корректный адрес электронной почты",
            tel: "Пожалуйста, введите корректный номер телефона",
            text: "Пожалуйста, введите сообщение"
        },
        focusWrongField: !0,
        submitHandler: function (e, t, o) {
            g(e.querySelector(".js-send-button")), o({
                url: "../ajax.php",
                method: "POST",
                data: t,
                async: !0,
                callback: function (e) {
                    if ("success" == JSON.parse(e).status) {
                        var t = document.querySelector(".popup.open"),
                            o = document.querySelector(".js-popup-success");
                        t.classList.remove("open"), o.classList.add("open")
                    }
                }
            })
        }
    };
    var justValidateSettings = {
        '.js-form-leasing': {...justValidateDefaultSettings, rules: {tel: {
                    function: () => {
                        return phoneMaskInstances['.js-form-leasing'].validateMask();
                    }
                }}},
        '.js-form-price': {...justValidateDefaultSettings, rules: {tel: {
                    function: () => {
                        return phoneMaskInstances['.js-form-price'].validateMask();
                    }
                }}},
        '.js-form-feedback': {
            ...justValidateDefaultSettings, rules: {
                text: {
                    required: !0,
                    minLength: 0,
                    maxLength: 300
                },
                tel: {
                    function: () => {
                        return phoneMaskInstances['.js-form-feedback'].validateMask();
                    }
                }
            }
        }
    }

    for (let key of Object.keys(justValidateSettings)) {
        new window.JustValidate(key, justValidateSettings[key]);
    }

    function tabService() {
        var tabNav = document.querySelectorAll('.js-service-tab');
        // tabContent = document.querySelectorAll('.js-service-content'),
        // tabId

        tabNav.forEach(function (item) {
            item.addEventListener('click', selectTabNav);
        })

        function selectTabNav() {

            if (!this.classList.contains('is-active')) {
                tabNav.forEach(function (item) {
                    item.classList.remove('is-active');
                });
            }

            if (screen.width < 768) {
                var tabOffsetTop = this.getBoundingClientRect().top

                window.scrollBy({
                    top: tabOffsetTop
                })

                setTimeout(function () {

                    window.scrollBy({
                        top: -65
                    })
                }, 0)
            }

            this.classList.toggle('is-active');

            // tabDataText = this.getAttribute('data-service-id');
            // selectTabContent(tabDataText);
        }

        // function selectTabContent(tabName) {
        //     tabContent.forEach(function(item){
        //         var tabContentId = item.getAttribute('data-service-id');

        //         if(tabName == tabContentId){
        //             item.classList.add('is-active');
        //         }else{
        //             item.classList.remove('is-active');
        //         }
        //     });

        // }
    };

    tabService();

    // маска телефона с select
    const initialCountriesSettings = {
        bl: {
            mask: '+375 (00) 000-00-00',
            id: 'bl',
            name: 'Беларусь',
            img: 'data:image/png;base64,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',
            code: '+375'
        },
        ru: {
            mask: '+7 (000) 000-00-00',
            id: 'ru',
            name: 'Россия',
            img: 'data:image/png;base64,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',
            code: '+7',
        },
        kz: {
            mask: '+7 (000) 000-00-00',
            id: 'kz',
            name: 'Казахстан',
            img: 'data:image/png;base64,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',
            code: '+7',
        },
        arm: {
            mask: '+374-00-000-000',
            id: 'arm',
            name: 'Армения',
            img: 'data:image/png;base64,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',
            code: '+374',
        },
        azr: {
            mask: '+994-00-000-00-00',
            id: 'azr',
            name: 'Азербайджан',
            img: 'data:image/png;base64,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',
            code: '+994',
        },
        grz: {
            mask: '+995 (000) 000-000',
            id: 'grz',
            name: 'Грузия',
            img: 'data:image/png;base64,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',
            code: '+995',
        },
        krz: {
            mask: '+996 (000) 000-000',
            id: 'krz',
            name: 'Кыргызстан',
            img: 'data:image/png;base64,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',
            code: '+996',
        },
        mld: {
            mask: '+373 0000-0000',
            id: 'mld',
            name: 'Молдова',
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAUBUlEQVR42u1dCXhN1/Y/mUeJmBJBkJAEQeZZZI5EJJGBTDUm5hirCGIKVa0KiipaWjVWQw0l2mq05pil6m+IiNDyeP/39Cmv5ff22rnn5mYi4XJuIuf71nfucM4++6zf3mvvNey9BEFFj/v37xvfvn3b5datW8mMMhltKS4uPsLO5xhdZXSf0WMZ3Zf9dk52zRbZPclUBpUl1B/PPu7cuWPImBfIGDafMS6P0RNGUCIRQCtZ+XGFhYUm9RxnR0FBQUPGlCGMDjL6W5Fht28V4O6NffjntSz8cWUEHl6KwuOLrvgrvy2enDfmhHMCJ/E7/ff4ohu/9sHlEfxeKoPKKgcGPSuXUSrV4Y1iOgB11gp7sta+mTHgz1KGF+Je4SbGuDQ8/sUJOK8pZ/BLEyuLyqSy6Rn0LAUw/qS6sDqFUd3qNOPZi/ZiL3xSken3r69mLbY3nl4wUh7Dn0P0rIeXotmz15QH4wIDoh+rq2ZdYrwme7EURlfEF/296AhrjSPx5EKT18b0qujJhaasLqN4neQN4/bty6yxDK71QLCXcWZ0Qnyxoyf2sJYXq1zxojRSx6Nfg/iYodAjzjAgvGod44uKihqxyi8WZzJnzuXi2D4/PD2rpoKML09q+PNSL9YjjoogPGX0+W+//dastrT6KEb3qPJXCm4iZ1cyHp3SqgWMLzdOnNPmYrL48lURiH+w3hCp0rJeNoenFoMvvs1Hy4TdtY7x5el0+2AUbNmt2BsW5+fna6sU81n3bMsqdpwqWVB4E4PfPwy1kK8hBH9d6wHI0+uKPH17XBw0BcXXrotAHGONrY0qDbR3qGK5eVdhM3AvZ7xIdQIAGZ3p0guFufLZ0r2bN296SN3y/VlF/k0V2phzEUZRO8owv64BQHSqqQeubdwhgvAHox5StfxoRo+oIpmfn4JGj+wKzK+LABCdbOCIyws+EUF4zAbnhNfKfHqgOMWcujqvUsbXZQBE+nVspgjCE8aT+NfCfCb3AsSWP3zR0Wcyv64DwEEYN1cE4b+MQl4p82X2+Qf0wHHLjj+X+W8CAESXJi0QQfjPKxuYZVPNu/Sgd9efrhbz3xQAiC7PWy6CcEfpU1SmZGmxQg/TA9btyYd6SHY9AOXJwEFxdnRcqcoaKzCLCv751LVKp5r1AMimqM08cOPgMRGEhcoSPeGkgpNdx3rAtzVi/psGANHZLhGixkxmi6iXHXSbioa1/vMP1Zj5byIARBeHZcgNeIyavAwAn1JBm7+7KLft1ANQDWK2o4LNO0UQVr2osuUlih7z+F0vxPw3FgBGp60CUXzlGlfSajw1lbkRzxCCoxYffWHmv8kAcCVt/DyxF5yrkXuTwjXoxsNnCqAdll0PwIuSkRNuHMnjIDCJMqi6rV+D3fB/dFP41NyXYv4bDwCj/L5jxF5wpVq9gF2YRDccOHGlRgpXPQBVK2g3DhwSe0HC81q/GrvwPF3cM/3Hl2Z+PQAVekH+M4O/KGKNLjx+vqBK+76UAJzcLCB7ce0DgPwHRSfOiDFHoc8SPxRVjBFZR5XCfGUC8P0qAUunCFgzS8DWDwTcPSjgRg4LrDqj+gDwGdGYOSIAG6sMB2cXPCSneqOYb1QOgDu5An7ZLmBVhoBZAzUwMNgRs5IDMD7GFTNSmvH/VBmA0618UVx4g8eiVhoQzP4YSgit2XlBacxXtgi6tFNAipcOMu1NEGvXEpOTbLFgcAiWDA/HiHBXnNmqugAQXVufLQ7GgysDgELEEZWRKykAf54QcGV31QBsfl9AWjddRDpb47Px0diekcQpI9EP3654RqDVWQH52dICkN9HPhgfqEz8/E3ixzBih2QAFO0X4NVFG13aNsaWDyr+f2S9gC0LBfzrsIBp8T5y5hONiLDHre8rL/ePYwKi/NRgb2mGeaOlA+BUM0/cKhFDf927d89I0e4TQchs2n9RqcyvCQD3fhLgZqfPxcmW9HiEOLXDR+kVr3t4ouQ8IdaxDAAT4ttWWu4/2GAd4KKLGUn++Hp6IhL9umL+WGkAILr+1R5xMO6pKH4WKcPu8zIAJIQK+HBIGKb0KWnZK0dHordnxyrFSkpYR37tByk9OK1I16/0umBPgYsqKm/9O3HI7BcI/66WvDdJAYCCE/8Dxfn/WfrRYViOJAAUM9HhbG2OQAcrdGrdDOOjvRDfvQuf6RzbULk8Tw11YAOvG+YwhhLNG2VcadnxPQSsmxADH7s26B/ogG7sHO5qg6QwTUkAONctUQTglKL8f3r9RjE0Q7MlAYAUrIFBjnwgnRTXDUPDXDC8pyusmjdCxjAB1/eWY8pGNcxkImVMlAdnPn0eHmFdduEF0w/2fizA1U5AhLstL5vKnds/iH8O89KXBIA8Y2fcus5X5Ty5e/duA2r9roTIviOXlc78mgDg1L6kB/Rwas/Psd52iPTogCGhLghysMTsoQ258vXfUwIGh5vx66gHUC8Z19sL0V4dsWOxBi8v9zN1xPqZYnSkB4Id2/H/BgU7wbl9CyT728PNpiVCPHSkAYBR4Xc/ib3AieT/W/Rl0ZazkgLg18WSD5AxXp247KdWu+6dIGQOcsKiEe5YmuaJleO6YWyflpia3AVTEjtj3SR/rJrAxoGhbvz78EgrzBxogy+mBGDOIEe8m+qCDemByEj2QvfObThgAfZWGMZ6V6CrlmQAXF2+XgQgUZAtaFaq+eFFAAhzseYiguQ0tVKiZRPa4dZYU1wNb12GjgW1lH/+Ncyi0t9FKlplgvR4Lw7oxNhuiGK9akKMN4LctSUDQHTUsNnnLAJgK32JnJ4rKQAdLZrBsZ050wHM2Hy9ObqyOXu/YBtc620hr/gJRpPbNsFsHQtk69oiR7cTRhmaYqOODY7rdUGflg2wQc+67MsubMMHdo8OrfjZzbYVf0awhACIChkT/5sEMeDKddR+SQGgQXj9xDiM7e2J5SN78YF1z9zYMgBMbt2ETTfVkKtnh290OyA1Sg27lgoYYN2A/z+juSk+y1DD1wwceXfPasentak9nPk5RXaWbBBmdN43WRRBP1MPuEBfWifvUWkANuhY81nNZD8DHNLrjEFGTbiFlO5P66WJZTqWHJTv2G8jPPVUGoDTHULFHnCWALhOXxrH7FRpANK1W+Kv0wLGWZnw75/qtEO/LnqYnqyB5FZGchG1fKqAheMFlQbgVMvuYg+4JoiBVwZKtgFVF4C/2Xw9b9PzAZiv3ZorbGN8dfn3w0zmE8MXarfBMfb5OPu8mY0FP6wWkNFfQ7UBYKtsZADcFWTbvbwSJaw6ADiENEHfWJ3nAnCQiZ1ZKerc7j+hsxE+0WNTTsMWWKXbDgsbtMZ7jVpiZrImt/2MMWtSbQDItrT+3dcLAHnIZAA8khSAH9eqwTSgDdTc2yGJ6QBVAUAtPdOsOSbpmePdYRr4z/ES84VouiYFjT6TP2BIJ0NMMjXFNj3b5wJw6wfm4JkpYMkUaQGQTASRl6txkBV0G2ojkClIlQHwUbQ9Y14D3P9ZwE/rBHiYWSIlXK9SU3ZnI0v06W7AzdU5H6shoq01TmR1rhIAMnkfWCNgxTRpRZCkg/DuZQK8HQQ0s2qIOJ/OFQAYNGkyGrlOR+Y4A4RGuELXJQszRqjzsaM8AB26doKh24eYO94Qvkyh0/fZjN2r/aoEYNE7ArIYFe6VdhCWdBr6ZZYWeiQ3Q0BPYwg+HZAW6V4BAIOg/TAI2F1yZtTQKwve3m34rIjK+Ja1dtOOoTAI3Ffh2mcBMH2IgHPbXv8gfKZjWOk0VFTE3CRSxOaO04Dg1wkaRrrQc2jDAPCoHAAFsvIeDAuPVLlNPz6uAzz8PKHffUuFa/es9q0UgL4h2tj5kUSKmN9bZRSxra/CF1wTPWDT+2oIcm7PzRHedq2Z98qvAgAhvYMxdHBHmPnMQmvXRKQmmSE7q2T3FX/fVkhP1YSB/07oea6Gntty1htyqgQgm3nGMoaq84FbElNEXwVTRKkx7oikihiZiJNDzGDAeoGJrTkmx/lgV2YMB8A9fADSkvW4K/HgWgHGdinY9IEWNixQ5/dHBhpi6TQDNHZNZ6ZoAclRRtDpnM4B+GalTwUAZvZ3RL9wLZUxxnFzdJbE5mhXV2s4BtnBKbgRhFB75m7sjqUjAjFs6tvw7x2LCQM0sGc5m2b20YWu80JMHqKPnUtL7g/zNcS4FDN09OyJrHQd6Pttl4ugVfNtywAwgOkbUwbrMGOcnnTm6BVflpqjRYdMjsQOGQfmdBESPKFj0RDt3NtzETQ+xgH5e5mFNGEtFmeYoB/zBYwdbgM91yXwcjXBv4+U3L9tkTqMLdyg57UWLWycOOMNg3MwcfZQHPlCHZum9JUDMCjcHDMG2EqqCZdxyFB4hOiS1ArbLhkA/QLsMSnRHy42reDT1Ri9PDpidB+Tkinm97qYMy8ebaM3cObquS7GlFQ1Lm7ofxJNft1byGdA4SPfw6YVTnJN9504bw7AtmmJmDNSl50TVMclqeiUdxyeI7kxzo9FLKTFmbIB1Q6+4cY8XGXxRF2smxiBU+tcsHpZKJyTV8HA4yOk9TfG2kwBXb26wzBgJ2JHz8H2VR44uCSYeb0cuIZM5Q+Jaspl/6I0O4yMaS6pLeicT1JZp7xiWErakqOSApDetzsadbOFX3BrWPqZQS20K/6fabUjrIzRw6QZ4v0scWMfOel18PnH/nDvvxJGgTswesYY7FtjiT/z1LAsXQsxDtZIZWaLrXNLBumtLJjLp7M5Vk7Tx+AQJ0kBUBiA368QmEWrIaUEYGFKKLSd2FiQ7A1vV00MHNwA22Zrcs/X8DYN5SGLdB4T5Y6T69xw6CsH7F/QCymRDeXlrZ4h4GNdK8xpbM5FEDnyl0zSxNpZRpJbQwtKA7PCKg1NbBC5QzIAKH4nOcAB3l6NYNuWyXVnAQsMLbjVUzHsMCVKH19NTeARdN/MLDmTCYPM2uI1S4dpceDSmQOHnDSzhgsYFenIoyOkAuAkC00sriw0USaGaC9lRM84KBkANFD6OWvh0OdsLq/fGG9rteD+3n1LS7e7PPuVwJjoyAfSSXElc/yJsd78e7S/QZngrfFdjbCNuSeHaJkh1VmP2Z3UYGFqyCPkpABAYaXMD5VFR9Mm2vhsd75kcUEZQ9S5uFjJ1gCM1zKHvboBpvsalAm26uVtyFs8RTZMTyix81CoCc1wKKJu24el5f7+o4BAPSMM0TSFl4EBtx2R0S7AqakkcUHXvtxe9YpJcYEGTUeVaRmtzkue2MiioplFVDSuEU0L1cMAC2OkxpYwjX77cCLzCctiR21aNsGqMVH8M4Uavs0AyWafPe2acjO32AsWjFbHAMMmOLWhtBf9+KkAXxcJFmjcKKp6gYZsMN6s7CDd6rzkheyS6Ojyv/92gJQsFtuZWRLb79WpBWc4RcKZN24gj4ym2ZOZiSE2M4Ura2hPxAVrcObTDGoB8w+TA6d82aIOoTJLlGT6QBhddEKFFuld3cMcMcz+42RjhC8mxmItG6h7eOqgl7uNHICNk/vAx0mdhSCWmB3SItwxJknAo7yKcaWSLNJjC7aL8s4+f5Ge4jLVXtNyVQIAWlzRnc2GSMyQyOnWxQyjGXOzhoaVWR8Q5mKJ9BSBh6zT2rG2ZkZ8QZ8qLFH6JXF89ZapqvJCbYoJIs/ZurnMcGfbtAzziWitGAET6cec9v2FKlfLSLFQu7B0oXZ8jbYqUEYvUPaiOZoxWTRX44ssSG8g5k9L8IV5owZI6qmCWxUkjJPnJCDeVnermsElm3VcU8nNOsjpPoTNjhob6bOlTO1h0kDAF/NUdLOOoydFAAbUZLsa6gWnlWEfepWLqGla2raFgIK9qrlQ+9cJ74qy/2S1W7/CjIj8BE9UfcOm2z+o6IZN7YJefMMmBRDW1G9Z9oJblm3dI7b+T15mu8omso3nMPC9+k37qi16Rs6UB16x1t/4ZXdOpB1Unl69fhO2g/bWA/C8bSvto1BcULJtpdJSnrDCPiREj50rgEn0N/UAVKXxmnqh6MjJig4XZW5dTLlh6rcuroT5hg6KW1UeU3qeGdqQWkxV8t6X9Zt3V9i8+72VIvN/Z2TxKvPF8JQlE1fUb18v374+faHIfOKN4+vIG/OoumbrOp/AoVTZonUWwa8rhUl8fQqTCilM+kqRxIeno53LkvhUtcKmzibxWbhaMYlPvCDFIRNH/xL3GjJ+E9JYsciGgs27ROY/eOV5Y6rRE5xkIz9+YgkeOgyqu4nczjpFo+hwnsj833hspyocrAu2YpU5RBUjp/5Itu+EqCvUmVSGqVNFDZenKKGcOiqXzJMBMVMcnL/c9wsskupIMs9Sw5pqJvMs1xsiRAMe2Y/273qrlqaz1SmfzvYupWSvFTmFCwsLTRQTOp89fxBH9/rjSa1I6KyOh79GsITOx8okdKZ0LrUus7ZsgD5emtL821qQ0jxHMaX5adbqPYXafJArjkLxREc/EaULf3A5DU8uNJOc8U8umOLBldGKKcyJLpEPt8ZuRBUHQp1kKPlH5S9aXIj71z9jvSIGTy8YvT6mnzfiPfH+9bW8DgqMP88Y369G6UZqIRBqFB1GSzQpFlV8+du3CnGvcBNvjY9/cWFiSkuJA6oWL5PKpmfQsxSY/pDCBalOVDfhTTooIFgWAnOAYuYVmMKZdLdoP/5ZsJTPRh5eisbji+74K9+SiY3GrBXTPqFqnOgz/fZXvhW/hnrUg8uj+L1URjmGQ/asAyQaqQ5C/cHNGgaMIYGsJc5nzMkTZ1BKpKuMVrLy46qMTq4/Sg9aQSjzPyQymi2L3D4kW1B4VbbLy2MZ0eersv8OycTbbNm9TvLViCp4/A9K+WZZv5u+fgAAAABJRU5ErkJggg==',
            code: '+373'
        },
        tdz: {
            mask: '+992-00-000-0000',
            id: 'tdz',
            name: 'Таджикистан',
            img: 'data:image/png;base64,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',
            code: '+992',
        },
        trk: {
            mask: '+993-0-000-0000',
            id: 'trk',
            name: 'Туркмения',
            img: 'data:image/png;base64,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',
            code: '+993',
        },
        uzb: {
            mask: '+998-00-000-0000',
            id: 'uzb',
            name: 'Узбекистан',
            img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAM3klEQVR42u1dCXhUVxUeVktBKBbQWkHw86uKWtuy2Iq2UIEWKEuhWKgUK4goKKWoXT5QC5WW76NAQ9mRLUDYCSB7gFAgCQRCQiAECCGZNcmEBJKQfTme/+XdmZeZScjyZjJJ7vm+82Uy98199/3n3nPOPfe8ew0GP6XMzMwOKSkpfWw22wTm/zDvtFqtEfw3ljmROZO5UOVM9btY9Zqd6m8moA7UZZBUNdnt9nYM3kAGbAEDd4m5lJl0ZAhoNdc/1mg0dpSIMyUlJT3GoPyR+QxziRYwo8VKx69baVG4hf563Exj9puob5CRuq9Ppi5rjdRhVTI1X1bO+IzvUIZrcO2MEDMt5t+GxFuVulyEgXt9xTwFbWhSoBNRc+6Fw7i372AA8p2A22hXjIWmHTPRM1uM1Hp5Mhm+1IdR17NbTTSd6959xeIqkHy0hds0FG1r1MDzgw7nB44SD29i0DdFWWhEsInartQP8Idxu1VGGsn3DOR7ow0aYVxjQUzktrZsTMC35Af7A/Nt8aCRt6009aiZOq0x+gz0yrgzq64/HzPTxdvOUcFCSODOMrnBC4IfpjfzRfFg0Omj9pmo5fLkegfelVstN9Joth0n4iuopxgWRL8GB7zZbP4GNz5AeDKXEq004aBJMZj+BrwrN2MezuopIsEhiDLmwNTU1C4NpdePYs5A42+bbPQnHt6eDOqA4FQKiMmmmPRCis8sosXRWdR3Z4rfCAltnsbeF55BFcRdHg0j/VrXqz48egwFx1qpxwb3B+u3O4XOpxYQKL+kjD4Mv0dtVxn9dkR0W2+kHTEVRkNAXFxca78Cn4dnD25YJBp5x2yjiYfMylB2fZhZZzOpuFTBnpKzi6nnVqtXQBu4L7XSshf3pCr63lPZk+vN9MMtVo9q6Xf8TElOj+kCd7bu/mRo7cK7gQ/v6eH+EZZJgkw5xdR1g0V34NuvNtGc8/cU4S6IyqLvbXLeowWrtumnMygyrZA2xufQr/akVPjt6MN2OnAnj44a82j8sXSP9f840EjhCQ4hZFgslhfqu+e/zA3JRoPgz7evRJUM4h5ZWlYOfhF/eGFXitdUxmv/S6NCVm3zL953K/s293CovWMMsmsZPLOE+8VkeVBCX1tRuUpsz7PuzZctQggPmF+tr54/mrkADVkSYanUtcT3cRlFjt6/5lqOV3U2hNtprYkG709zK3tqs5W+H2ihIQfS3FQk7BDU0/P8+45rTFXeA6NpwTmzEEIhG+fxPgUfNxQu5qwT5iobO+qQ3QE+BoFWLTR0/tsJhxBKGZNxPgGf9d6vRc9/N8T80EZuufHAIQC4nI0FfMHvOYVQxPyKV8FX4/M5uOHfT5qr1cAbmU71s+pqdqMTAPiDUw4h5HrNMKuuZjpuNP9s9dVIdmGpQwAfX7iv20MPP5hWqzI4BJUZ2e9utNBPg2rnGn961iEEu+4uKmPXiisNxw2286SkJrEcvQXwBHsy8HCs7K1gEvfoSieYbfjz++zumnNK6LNL9xWvR+vLTzp5l6LshRTIavG57bYK9b7CRvtgUh6FmPJpRBUCrMowa7yjSF0na1zhF6j47E2r4obVpGFaFbRaJw/o3xfuUU5Rmcee/ioDibJ5ke7C7vJfs9IhDie7u6EIgaCtRp5DtKhlOAQLQ8BIFcIivVTPa5iCJ/MssGdgzUMGgRojHHu3SBcBwF1ETL/PDptbWW/+rp3qUrqWwQX9zgYzvbTXvQxuKH77dJDtoW5oVfyDTUYlGqCGLUbV1eh2FoG1SYdr1yitGwoCCI3REGt5yhGHPbjL3KkuAliPirawbmtWy8ZgOKPnC1obl9PoBQCsgqId9mBtbSdb/TCMMJwQEaxrcEyEIhCM++XulEYvhCfXGUUou7TGrqm6jBgDCSIjQZdZ47mKwbhuG6tWRY+wq1iVN/KbI/ZalcFwt1npuUNBPbp6R3Xhmc5JWmyNljeRroEfnrtl5dCtfr1i5hlnOBrexk8q8bl7sTHcm5hL19krQQRTu0iDkPHSK9lkzytRPB3tWgJc0rn8XRqXLYvNVgyuVi1M47oQlwrmunu7GPBhHMQLteRTmK2Axhy267aoE3ar3CtijTKpur2/Bf/gFn6EzAFvBMvwkKACjkzOjrineC2u1+27k0vp+aX0zXXuI/CfHHJGGUBzLYM/jzJPc47O7IaiDGFnT227xsJJzCrWdVXudV4DV0fB7WqNAr7wt/hB6A2rV5cH+7MruCQmiy7zxAj+Nz5rlyThYiKq2cND8A5lrVlF/Wybu7qAG4mZricXFXVBCJ7KMJKwQAQ1VBc31NP84mS8YxSMf1jvb8YXXsXFw73Q+5sqI+9JHQVxVSZ/IWMNFyJHpsUyCZxeDCwj1bwjxnhIVeoHWcVKXqUETl9G6F4VwLZK08H5gjzkaCJbTIKmLz/OWYDJ5Yv6+R4TgrlgqmIodu+n5Kd+LtkLbN19QBjjyZ4EgBRxMs/4SILlJTa9+5EwxqGe1E+JzWym0ge5JMk7VJqbSzaLEiMqzsjIaK+N+4yAZO6GXZAoeZnSwy8IYzxMq36W4MusMxESIS9T9rkIoYY+1/r/V/BlYcIdiZCXqTAhUQjgslb/l0H/lxUWSYS8TGUFhQSsEaZOT0//Onp/X0jEfvGyRMdHBKzVUdAL+v9t/JMp9b/PKPPceSGAtwzqC82UHR4pkfERZYVdEBOyuRDALvyTezFaIuMjyo28LFzR7QaRcFVw/aZExkdUEHdDqKBzGAHX8E+xLVUi4yMqtjheh70CASTjn5LMexIZH1FJeoYYAXcMIvEKcQpJvqHS7BwhgHSDut0Li6VEIuOryVhxsRBAgRRAveigkgoCUFRQWW6eBMZXKghhaY0KUoxw6b0siYyvBgA7PFojXO6GsmskyTdUZLY63VA5Eav/iVh5KOJSjETGV6EIxtoRinAE4zhCJ8k3lO0SjFPD0eESGR9RxldhznC0Y0EmOlYi4yOyx8Q6F2SQHoElyRROl5BLkj6YBTPGKeWpKeVLktpF+YL4WxIhb3tA7G1WWJTXpqVky7wgXxrghW6JWZbDITKF0MtsORIiXNChbqmJVpOJjM8OkEB5iY3P9Cdg7JaaqKoh7KVMo4I/JMPSFyV7gV8PdiTnnvKUHY1NtGlz1CEJlpd46+Ujlb8xKV7QMFnM1GXNCAmYztx5zXACtpW+oKEaY+xoznspL5Sg6czTj31e9StK6nxgKC6KSrxGrZa9LIHTiYHlpcSrD39JjzSvqY7ZN1uCpxO/eeBf1XtNVfui9on4CGq29CUJYB25+Zf9+UXt88L4jqvRVgVwmySIdeOx++c4ziQAttXdqmaysAWPLB8ogawlA7uLt2OFAN6pyXY1GAXR+OG0o9Ijqi3POL5Y6P6oavd+jUeEdYLSRHMSdV83VgJaQ+627g3esCmpdhs2aYSwDhLcfeWENMg1NLx7r5wUvX9NXbar7KRuPMf7538iwa0m//7QfEfiFff+x+u6cyJ2UClLshjp6c3vSIAfwj03vc3bViYr21bqduQJV7a4/ICGWOq4aqgEuhJ+jLGJuBXtvuCi59bFgVEHqQXrOAl4RW65bABvVXnEccSJ7ufMYENqcVRJQMR2aZQ1DCwWhW8V4Kcxd/PmeTHKkSXvn1wmwVd5zunVAnxg85wvzo1RDnD4y7FFTR78mSFfOI4yYR7sqyNMxokjTGaHrmqyamcOP7vmCJM36+MQH+U42s/ObmpShhkGd2HYFu0hPuMM9UGqOspCQ/bwbLnT6uFNwtXcEXNcgJ/j9XNjqjESeqmWn8LZB/7RpgmNFnw82/mEGAF+qpLb6Q/EQ7ArNyYMDcOMGeufzRuRSoK+n3BwrgiuKUeU4EwdvzvMkwXxsTDO+6+GNoooatd1Y/io9RD/PszTZTSMEAE8hLLhJbVdMbhBLqZgJN8yOna4SseR7A3iTGGj0dhRe6AzYkgj9n7QINQS2jiSswPFSpY40BnHuTS4k7VVAx0pjgiHkZ58+FNq7YcpL0gdeWP/bDp9I1J7pHk09/pfGBoyYSkOqXhioV+MCCzXfWvtyHoHHm1AWzQ9HnwTa7g1Xkb0c0E0hw7F+qh4ULPVouSiIiG4w8ohPgMd98I9cW+0QQP8VQZ+ItXkuJEGKIhmyA7DK5rIRRUPj7zJ4NhTSnypz9Yp1Gb5IN0Af3TFIOobNEWpG/dwAT0P6YJoE9pmaEqEhGA1BSYUOfMaUBSBIKFpScQ2ei8kQNHPzwdNVVxbqA30YoQEwPj8xNpRShmuQS7OrBMBtCQ8SKlDTYrVMu4VCtWINhgkKWGNtgzIQO6JCxicS8KD0pETmVdz/WMrzU6W5CS8QaiuP7zFPE/N3A5TXyhMVHd5KVQZnxPVsjBVvc1Tf9vL8TaiH9L/Abw7PiUAFacuAAAAAElFTkSuQmCC',
            code: '+998',
        },
        ukr: {
            mask: '+{38\\0} (00) 000-00-00',
            id: 'ukr',
            name: 'Украина',
            img: 'data:image/png;base64,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',
            code: '+380',
        }
    }

    class PhoneMask {
        constructor(node, countries, countriesSettings) {
            if (!node) {
                console.warn('Нет селектора инпута для маски');
                return false;
            }
            this.node = typeof node === 'string' ? document.querySelector(node) : node;
            this.countriesSettings = countriesSettings ? {
                ...initialCountriesSettings,
                ...countriesSettings,
            } : initialCountriesSettings;
            this.countries = countries || Object.keys(this.countriesSettings);


            this.initMask();
            this.createHTML();
        }

        initMask() {

            this.imask = IMask(this.node, {mask: '+{7} (000) 000-00-00'});

            // this.imask.on('complete', function(){
            //     console.log('sdawd')
            // })
        }

        validateMask() {
            return this.imask.masked.isComplete;
        }

        createHTML() {
            const wrapper = document.createElement('div');
            wrapper.classList.add('js-phone-wrapper');
            this.node.parentNode.appendChild(wrapper);
            wrapper.appendChild(this.node);

            const errorSpan = document.createElement('span');
            errorSpan.className = 'js-error is-error';
            wrapper.appendChild(errorSpan);

            const countryBtn = document.createElement('div');
            countryBtn.className = 'country-btn js-country-btn';
            const countryImg = document.createElement('img');
            countryImg.setAttribute('width', '24');
            countryImg.setAttribute('height', '24');
            countryImg.setAttribute('src', 'data:image/png;base64,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');
            countryBtn.appendChild(countryImg);
            wrapper.appendChild(countryBtn);
            countryImg.insertAdjacentHTML('afterend', '<svg width="16" height="16" viewBox="0 0 16 16" fill="#9e9e9e"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.247 6.342a1 1 0 011.412-.095L8 9.171l3.341-2.924a1 1 0 011.318 1.506l-4 3.5a1 1 0 01-1.317 0l-4-3.5a1 1 0 01-.095-1.411z"></path></svg>');
            this.countryImg = countryImg;

            const outerWrapper = document.createElement('div');
            outerWrapper.className = 'js-field phone-outer-wrapper';
            wrapper.parentNode.appendChild(outerWrapper);
            outerWrapper.appendChild(wrapper);
            outerWrapper.appendChild(this.createCountriesHTML());

            this.wrapper = outerWrapper;
            this.bindSelectActions();
        }

        createCountriesHTML() {
            const countriesWrapper = document.createElement('div');
            countriesWrapper.className = 'country-select is-ru'
            const countriesWrapperInner = document.createElement('div');
            countriesWrapperInner.className = 'country-select__inner';
            this.countrySelect = countriesWrapper;

            countriesWrapper.appendChild(countriesWrapperInner);

            this.countries.map((el) => {
                countriesWrapperInner.appendChild(this.createCountryHTML(el))
            });

            return countriesWrapper;
        }

        createCountryHTML(countryCode) {
            const {mask, id, name, img, code} = this.countriesSettings[countryCode];

            const itemNode = document.createElement('div');
            itemNode.className = 'country-select__item js-country-phone';
            itemNode.classList.add(id);
            itemNode.setAttribute('data-mask', mask);
            itemNode.setAttribute('data-id', id);

            const itemWrapNode = document.createElement('div');
            itemWrapNode.className = 'country-select__item-wrap';
            const imgNode = document.createElement('img');
            imgNode.setAttribute('width', '24');
            imgNode.setAttribute('height', '24');
            imgNode.setAttribute('alt', name);
            imgNode.setAttribute('src', img);
            const nameNode = document.createElement('span');
            nameNode.className = 'country-select__name';
            nameNode.innerText = name;
            itemWrapNode.appendChild(imgNode);
            itemWrapNode.appendChild(nameNode);
            itemNode.appendChild(itemWrapNode);

            const codeNode = document.createElement('span');
            codeNode.className = 'country-select__code';
            codeNode.innerText = code;
            itemNode.appendChild(codeNode);

            this.bindChangeMask(itemNode, mask, id, img);

            return itemNode;
        }

        bindChangeMask(el, pmask, id, img) {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                this.imask.updateOptions({
                    mask: pmask,
                    lazy: false,
                    placeholderChar: '_'
                });
                this.imask.typedValue = '';

                this.countrySelect.className = 'country-select is-' + id;
                this.countryImg.setAttribute('src', img);
                this.wrapper.querySelector('.js-country-btn').classList.remove('active');
            })
        }

        bindSelectActions() {
            const countryBtn = this.wrapper.querySelector('.js-country-btn');
            countryBtn.addEventListener('click', (e) => {
                e.preventDefault();
                countryBtn.classList.toggle('active');
                this.countrySelect.classList.toggle('active');
            })
        }
    }

    var bindForm = function (popup) {

        var form = popup.querySelector('.form');
        var key = Array.from(form.classList).filter((el) => el.search('js-form-') > -1).join('');
        phoneMaskInstances['.' + key] = new PhoneMask(form.querySelector('.js-phone-input'));
    }

    var popups = [...document.querySelectorAll('.js-popup-form')]

    for (var p = 0; p < popups.length; p++) {
        var popup = popups[p]

        bindForm(popup)
    }
})),
    function (e) {
        Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function (e) {
            for (var t = this; t;) {
                if (t.matches(e)) return t;
                t = t.parentElement
            }
            return null
        }), "NodeList" in window && !NodeList.prototype.forEach && (console.info("polyfill for IE11"), NodeList.prototype.forEach = function (e, t) {
            t = t || window;
            for (var o = 0; o < this.length; o++) e.call(t, this[o], o, this)
        }), e.forEach((function (e) {
            e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                value: function () {
                    var e = Array.prototype.slice.call(arguments),
                        t = document.createDocumentFragment();
                    e.forEach((function (e) {
                        var o = e instanceof Node;
                        t.appendChild(o ? e : document.createTextNode(String(e)))
                    })), this.appendChild(t)
                }
            })
        }))
    }([Element.prototype, Document.prototype, DocumentFragment.prototype]);