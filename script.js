// Toggling Skill Tabs



const tabs = document.querySelectorAll('[data-target]');

const tabContent = document.querySelectorAll('[data-content]');



tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        const target = document.querySelector(tab.dataset.target);



        tabContent.forEach(tabContents => {

            tabContents.classList.remove('skills-active');

        })



        target.classList.add('skills-active');



        tabs.forEach(tab => {

            tab.classList.remove('skills-active');

        })



        tab.classList.add('skills-active');

    })

})



//Mix it up Sorting



let mixerPortfolio = mixitup('.work-container', {

    selectors: {

        target: '.work-card'

    },

    animation: {

        duration: 300

    }

});



// Active link changing



const linkWork = document.querySelectorAll('.work-item');



function activeWork() {

    linkWork.forEach(l => l.classList.remove('active-work'))

    this.classList.add('active-work')

}

linkWork.forEach(l => l.addEventListener('click', activeWork));



//Portfolio Popup



document.addEventListener('click', (e) => {

    if(e.target.classList.contains('work-button')){

        togglePortfolioPopup();

        portfolioItemDetails(e.target.parentElement);

    }

})



function togglePortfolioPopup() {

    document.querySelector('.portfolio-popup').classList.toggle('open');

}



document.querySelector('.portfolio-popup-close').addEventListener('click', togglePortfolioPopup);



function portfolioItemDetails(portfolioItem) {

    document.querySelector('.pp-thumbnail img').src = portfolioItem.querySelector('.work-img').src;

    document.querySelector('.portfolio-popup-subtitle span').innerHTML = portfolioItem.querySelector('.work-title').innerHTML;

    document.querySelector('.portfolio-popup-body').innerHTML = portfolioItem.querySelector('.portfolio-item-details').innerHTML;

}



//Services Popup

const modalViews = document.querySelectorAll('.services-modal');

const modelBtns = document.querySelectorAll('.services-button');

const modalCloses = document.querySelectorAll('.services-modal-close');



let modal = function(modalClick) {

    modalViews[modalClick].classList.add('active-modal');

}



modelBtns.forEach((modelBtn, i) => {

    modelBtn.addEventListener('click', () => {

        modal(i);

    })

})



modalCloses.forEach((modalClose) => {

    modalClose.addEventListener('click', () => {

        modalViews.forEach((modalView) => {

            modalView.classList.remove('active-modal');

        })

    })

})



//Swiper Testimonial



let swiper = new Swiper(".testimonials-container", {

    spaceBetween: 24,

    loop: true,

    grabCursor: true,

    pagination: {

      el: ".swiper-pagination",

      clickable: true,

    },

    breakpoints: {

        576: {

            slidesPerView: 2,

        },

        768: {

            slidesPerView: 2,

            spaceBetween: 48,

        },

    },

});



// Input Animation



const inputs = document.querySelectorAll('.input');



function focusFunc() {

    let parent = this.parentNode;

    parent.classList.add('focus');

}



function blurFunc() {

    let parent = this.parentNode;

    if(this.value == "") {

        parent.classList.remove('focus');

    }

}



inputs.forEach((input) => {

    input.addEventListener('focus', focusFunc);

    input.addEventListener('blur', blurFunc);

})



// Scroll Section Active Link



const sections = document.querySelectorAll('section[id]');



window.addEventListener('scroll', navHighlighter);



function navHighlighter() {

    let scrollY = window.pageYOffset;

    sections.forEach(current => {

        const sectionHeight = current.offsetHeight;

        const sectionTop = current.offsetTop - 50;

        const sectionId = current.getAttribute('id');



        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');

        }else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');

        }

    })

}



// Activating Sidebar



const navMenu = document.getElementById('sidebar');

const navToggle = document.getElementById('nav-toggle');

const navClose = document.getElementById('nav-close');



if(navToggle) {

    navToggle.addEventListener('click', () => {

        navMenu.classList.add('show-sidebar');

    })

}



if(navClose) {

    navClose.addEventListener('click', () => {

        navMenu.classList.remove('show-sidebar');

    })

}



/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({

    origin: 'top',

    distance: '60px',

    duration: 2500,

    delay: 400,

    // reset: true // اجعلها true إذا أردت تكرار الأنيميشن كل مرة تصعد وتنزل

})



// Home Section

sr.reveal(`.home-data`)

sr.reveal(`.home-img`, {delay: 500})

sr.reveal(`.home-social`, {delay: 600})

sr.reveal(`.my-info`, {interval: 100, origin: 'bottom'})

// About Section

sr.reveal(`.about-img`, {origin: 'left'})

sr.reveal(`.about-data`, {origin: 'right'})

// Skills Section

sr.reveal(`.skills-content`, {origin: 'bottom', interval: 100})

// Qualification Section

sr.reveal(`.qualification-container`, {origin: 'bottom'})

// // Services Section

// sr.reveal(`.services-content`, {interval: 100})

// Work/Portfolio Section

sr.reveal(`.work-filters`, {origin: 'top'})

sr.reveal(`.work-card`, {interval: 100})

// Contact Section

sr.reveal(`.contact-content`, {origin: 'left'})

sr.reveal(`.contact-form`, {origin: 'right'})

const contactForm = document.querySelector('.contact-form');
const sendBtn = document.querySelector('.btn-send');

// 1. تهيئة EmailJS (استبدل المفتاح العام هنا)
// ستجد طريقة الحصول عليه في الشرح أسفل الكود
(function() {
    emailjs.init("0HqKQwU5IeEc_J09h"); 
})();

const sendEmail = (e) => {
    e.preventDefault();

    // التحقق من الحقول
    const name = contactForm.querySelector('input[name="name"]').value;
    const email = contactForm.querySelector('input[name="email"]').value;
    const message = contactForm.querySelector('textarea[name="message"]').value;

    if(name === '' || email === '' || message === ''){
        alert('Please fill in all fields (Name, Email, Message).');
        return;
    }

    // 2. تشغيل أنيميشن "جاري الإرسال"
    sendBtn.classList.add('sending');

    // 3. إرسال البيانات عبر EmailJS
    // استبدل SERVICE_ID و TEMPLATE_ID بالخاصين بك
    emailjs.sendForm('service_blftzzo', 'template_tcb1bw9', contactForm)
        .then(() => {
            // نجاح الإرسال
            setTimeout(() => {
                // إظهار رسالة النجاح (يمكنك إضافة alert أو الاكتفاء بالأنيميشن)
                // alert('Message Sent Successfully ✅');
                
                // تفريغ الحقول
                contactForm.reset();
                
                // إزالة كلاس الأنيميشن بعد فترة ليعود الزر لطبيعته
                setTimeout(() => {
                    sendBtn.classList.remove('sending');
                }, 3000); 
            }, 2000); // تأخير بسيط لترك الصاروخ ينطلق
        }, (error) => {
            // فشل الإرسال
            alert('OOPS! Something went wrong...', error);
            sendBtn.classList.remove('sending');
        });
}

contactForm.addEventListener('submit', sendEmail);