

document.addEventListener('DOMContentLoaded',function() {

    const wind = $(window);
    const winHeight = wind.height();
    const navbar = document.querySelector(".navbar");
    const btn_burger = document.querySelector(".burger");
    const menu_list = document.querySelector("#navbar_menu");
    const btn_up = document.querySelector("#btn_up");
    const btn_submit = document.querySelector(".submit");
    const arrow_btn = document.querySelector(".animated");
    const width = document.body.clientWidth;
    const details = [...document.querySelectorAll("details")];
    const arraySections=[...document.querySelectorAll('.wrapper')];
    const mass_li = [...menu_list.querySelectorAll("li")];
    const form_popup = document.querySelector(".form_popup");

    //details block
    const  accordion = (event) => {
        if (!event.target.open) return;
        let detail = event.target.parentNode.children;
        for (let i = 0; i < detail.length; i++) {
            if (detail[i].tagName !== "DETAILS" ||
                !detail[i].hasAttribute('open') ||
                event.target === details[i]) {
                continue;
            }
            detail[i].removeAttribute("open")
        }
    };
    details.map(d => {
        d.addEventListener("toggle", accordion);
    });

       // closes menu for click
     mass_li.map(e => {
            e.querySelector("a").addEventListener('click', ()=> {
                (width <= 960) ? menu_list.classList.remove('hidden') : null;
            })
     });

    menu_list.addEventListener('click', ()=> {
        (width <= 960) ? menu_list.classList.remove('hidden') : null;
    });
    //scroll animation
    wind.scroll(function () {
        let winScrollTop = $(this).scrollTop();

    //navbar animation
        (winScrollTop > 100)? navbar.classList.add("navbar_scroll"):navbar.classList.remove("navbar_scroll");
        //btn-up
        if (winScrollTop > 300){
            btn_up.classList.remove("hidden_btn_up");
            btn_up.classList.add("show_btn_up")
        }else{
           btn_up.classList.remove("show_btn_up");
            btn_up.classList.add("hidden_btn_up")
        }
            //section animation
            arraySections.map(element => {
            let positionElement = element.offsetTop;
            let title = element.querySelector('h2');
            let content = element.querySelector('.content');
            let arrayDivs = [...content.querySelectorAll('div')];
            let scrollingToElement = positionElement - winHeight;
            if (winScrollTop > scrollingToElement) {
                $(title).animate({opacity:1}, 1000, "swing");
                arrayDivs.map(div =>{
                    $(div).animate({marginLeft: "0px", opacity:1}, 1000, "swing");
                });
            }
        });
    });

    //ancor scroll
    $('.scrollto a').on('click', function() {
        let href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 1000,   // по умолчанию «400»
            easing: "swing" // по умолчанию «swing»
        });
        return false;
    });

    $(btn_up).on('click', function(e) {
        $('html, body').animate({scrollTop:0}, 1000);
    });

   /* btn_submit.addEventListener('click', (e)=> {
        setTimeout(()=>{
            //$(form_popup).animate({opacity:1}, 2000, "swing");
            form_popup.classList.add('popup_visible');
            }, 1000
        );
        setTimeout(()=>{
           // $(form_popup).animate({opacity:0}, 1000, "swing");
            form_popup.classList.remove('popup_visible');
            }, 6000
        )
    });*/

    //open/close burger-menu
     btn_burger.addEventListener("click", function (e) {
         //e.stopPropagation();
         $(menu_list).toggleClass('hidden');
       });

     //animated dbarrow
    arrow_btn.animate([
        // keyframes
        { transform: 'translate3D(0, 0, 0)' },
        { transform: 'translate3D(0, -10px, 0)' },
        { transform: 'translate3D(0, 0, 0)' }
    ], {
        // timing options
        duration: 1000,
        iterations: Infinity
    });

 });

