// Mobile Menu

const body = document.getElementById('body');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.add('flex');
    body.classList.add('overflow-y-hidden');
    body.classList.add('h-full');
})

closeBtn.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    body.classList.remove('overflow-y-hidden');
    body.classList.remove('h-full');
})

// Feature Section

function switchTab(activeTab, inactiveTabs, activeFeature, inactiveFeatures) {
    activeTab.classList.add('tab-btn-border');
    inactiveTabs.forEach(tab => tab.classList.remove('tab-btn-border'));

    activeFeature.classList.add('flex');
    activeFeature.classList.remove('hidden');
    inactiveFeatures.forEach(feature => {
        feature.classList.add('hidden');
        feature.classList.remove('flex');
    });
}

const firstFeature = document.getElementById('first-feature')
const secondFeature = document.getElementById('second-feature')
const thirdFeature = document.getElementById('third-feature')

// Event Listeners for large screens

const firstTabBtnLg = document.getElementById('first-tab-btn-lg')
const secondTabBtnLg = document.getElementById('second-tab-btn-lg')
const thirdTabBtnLg = document.getElementById('third-tab-btn-lg')

firstTabBtnLg.addEventListener('click', () => {
    switchTab(firstTabBtnLg, [secondTabBtnLg, thirdTabBtnLg], firstFeature, [secondFeature, thirdFeature]);
});

secondTabBtnLg.addEventListener('click', () => {
    switchTab(secondTabBtnLg, [firstTabBtnLg, thirdTabBtnLg], secondFeature, [firstFeature, thirdFeature]);
});

thirdTabBtnLg.addEventListener('click', () => {
    switchTab(thirdTabBtnLg, [firstTabBtnLg, secondTabBtnLg], thirdFeature, [firstFeature, secondFeature]);
});

// Event Listeners for small screens

const firstTabBtnSm = document.getElementById('first-tab-btn-sm')
const secondTabBtnSm = document.getElementById('second-tab-btn-sm')
const thirdTabBtnSm = document.getElementById('third-tab-btn-sm')

firstTabBtnSm.addEventListener('click', () => {
    switchTab(firstTabBtnSm, [secondTabBtnSm, thirdTabBtnSm], firstFeature, [secondFeature, thirdFeature]);
});

secondTabBtnSm.addEventListener('click', () => {
    switchTab(secondTabBtnSm, [firstTabBtnSm, thirdTabBtnSm], secondFeature, [firstFeature, thirdFeature]);
});

thirdTabBtnSm.addEventListener('click', () => {
    switchTab(thirdTabBtnSm, [firstTabBtnSm, secondTabBtnSm], thirdFeature, [firstFeature, secondFeature]);
});

// FAQs

const faqContainer = document.querySelectorAll('.faq-container');

faqContainer.forEach(faq => {
    faq.addEventListener('click', () => {
        const answer = faq.querySelector('.answer');
        const arrowOpen = faq.querySelector('.arrow-open');
        const arrowClose = faq.querySelector('.arrow-close');
        answer.classList.toggle('active');
        arrowOpen.classList.toggle('hidden');
        arrowClose.classList.toggle('hidden');
    })
})

// Email Validation

function validateEmail() {
    const emailInput = document.getElementById('email-input');
    const inputValue = emailInput.value;

    const regex = /^[a-zA-Z0-9\.-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,8}$/;

    const errorMsg = document.getElementById('error-msg');
    const errorIcon = document.getElementById('error-icon');

    if (regex.test(inputValue)) {
        errorMsg.classList.add('hidden');
        errorIcon.classList.add('hidden');
        emailInput.value = ''
    } else {
        errorMsg.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
    }
}

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', validateEmail);

// Login Form

const loginBtnLg = document.getElementById('login-btn-lg');
const loginBtnSm = document.getElementById('login-btn-sm');
const loginCloseBtn = document.getElementById('login-close-btn');
const loginForm = document.getElementById('login-form');

const sections = {
    'nav': document.getElementById('nav'),
    'hero': document.getElementById('hero'),
    'features': document.getElementById('features'),
    'extensions': document.getElementById('extensions'),
    'faq': document.getElementById('faq'),
    'CTA': document.getElementById('CTA'),
    'footer': document.getElementById('footer'),
}


loginBtnLg.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    for (const section in sections) {
        sections[section].classList.add('blur-bg')
    }
});

loginBtnSm.addEventListener('click', () => {
    loginForm.classList.remove('hidden');
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('flex');
    for (const section in sections) {
        sections[section].classList.add('blur-bg')
    }
});

loginCloseBtn.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    for (const section in sections) {
        sections[section].classList.remove('blur-bg')
    }
});