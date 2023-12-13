localStorage.getItem('lang') === 'en' ? 
    document.getElementById('menuIcon').classList.add('dripicons-align-left') : 
    document.getElementById('menuIcon').classList.add('dripicons-align-right');

const localizationArray = document.getElementsByClassName('localize');

const en = {
    'English': 'عربى',
    'الرئيسية': 'Home',
    'المشروعات': 'Projects',
    'الادارة التنفيذية': 'Executive Management',
    'معلومات عنا': 'About Us',
    'تواصل معنا': 'Contact Us',
}
const ar = {
    'English': 'English',
    'الرئيسية': 'الرئيسية',
    'المشروعات': 'المشروعات',
    'الادارة التنفيذية': 'الادارة التنفيذية',
    'معلومات عنا': 'معلومات عنا',
    'تواصل معنا': 'تواصل معنا',
}

for (let index = 0; index < localizationArray.length; index++) {
    localizationArray[index].innerHTML = localStorage.getItem('lang') === 'en' ? en[localizationArray[index].innerHTML] : ar[localizationArray[index].innerHTML];   
}