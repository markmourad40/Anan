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
    '14 سنة من': '14 years of',
    'الخبرة': 'experience',
    'عنان العقارية': 'Anan Real Estate',
    'رؤيتنا': 'Our vision',
    'قيمنا': 'Our principles',
    'رسالتنا': 'Our Mission',
    'قراءة المزيد': 'Read More',
    'تفاصيل المشروع': 'Project Details',
    'سياسة الخصوصية': 'Privacy Policy',
    'الشروط والاحكام': 'Terms & Conditions',
    'الأسئلة الشائعة': 'FAQ'
}
const ar = {
    'English': 'English',
    'الرئيسية': 'الرئيسية',
    'المشروعات': 'المشروعات',
    'الادارة التنفيذية': 'الادارة التنفيذية',
    'معلومات عنا': 'معلومات عنا',
    'تواصل معنا': 'تواصل معنا',
    '14 سنة من': '14 سنة من',
    'الخبرة': 'الخبرة',
    'عنان العقارية': 'عنان العقارية',
    'رؤيتنا': 'رؤيتنا',
    'قيمنا': 'قيمنا',
    'رسالتنا': 'رسالتنا',
    'قراءة المزيد': 'قراءة المزيد',
    'تفاصيل المشروع': 'تفاصيل المشروع',
    'سياسة الخصوصية': 'سياسة الخصوصية',
    'الشروط والاحكام': 'الشروط والاحكام',
    'الأسئلة الشائعة': 'الأسئلة الشائعة'
}

for (let index = 0; index < localizationArray.length; index++) {
    localizationArray[index].innerHTML = localStorage.getItem('lang') === 'en' ? en[localizationArray[index].innerHTML] : ar[localizationArray[index].innerHTML];   
}