//  Demak biz ishimizni boshladik 
// Dastur nomi TT(Testing Time)
// Dastur 27.09.23 sanada tuzib boshlandi
//  Dastur tuzish rejasi => har bir bo'lak alohida funksiyalar orqali avval yasab olinadi va  user uchun qulay tartibda joylashtirib chiqiladi.
// Dastur muallifi Sherxon Muhammadiyev


// version 2.2.3
// hususiyatlari 
// prompt da varianltlar kiritamiz
// kiritilgan javoblarni qiymati orqali tekshiramiz
// userga natija haqda habar berish
// har safar sayt  yangilanganda savollar variantlari almashib keladi
// savollar ishlaib bo'linganda yana ishlash yoki chiqish haqda so'rash 
// exit kalit so'zi orqali dasturdan chiqish
// user kiritgan ma'lumotlarni tahlil qiladi (siz A belgisini kiritganingizda dastur uni a deb hisoblaydi)
// user variant belgilashda adashib umuman variantda yo'q belgini kiritganda shu savolni ishlash uchun qaytadan imkoniyat beradi
// o'qituvchilar uchun kabinet yaratish imkoniyati
// o'qituvchilar uchun  parolni almashtirish hususiyati mavjud
// kiritilgan parol 8 ta belgidan kam bo'lsa qayta kiritishni so'rash
// user kirganda o'qituvchi  yoki talaba bo'limlaridan birini tanlashi










let count = 0;
savollar = [
    {
        savol: "5+5=?",
        variantlar: [10, 20, 11, 22],
        javob: 10
    },

    {
        savol: "10+10=?",
        variantlar: [10, 20, 11, 22],
        javob: 20
    }
    ,

    {
        savol: "10+1=?",
        variantlar: [10, 20, 11, 22],
        javob: 11
    },

    {
        savol: "11*2=?",
        variantlar: [10, 20, 11, 22],
        javob: 22
    },

    {
        savol: "34-14=?",
        variantlar: [10, 20, 11, 22],
        javob: 20
    },

    {
        savol: "5*2=?",
        variantlar: [10, 20, 11, 22],
        javob: 10
    },

    {
        savol: "12-1=?",
        variantlar: [10, 20, 11, 22],
        javob: 11
    },

    {
        savol: "5+5=?",
        variantlar: [10, 20, 11, 22],
        javob: 10
    },

    {
        savol: "23-1=?",
        variantlar: [10, 20, 11, 22],
        javob: 22
    },

    {
        savol: "22-11=?",
        variantlar: [10, 20, 11, 22],
        javob: 11
    },

    {
        savol: "7+4=?",
        variantlar: [10, 20, 11, 22],
        javob: 11
    }

]









function changePassword() {
    name = prompt("yangi loginni kiriting");
    password = prompt("yangi parolni kiriting");
    if (password.length<8) {alert("kamida 8 belgidan iborat parol kiriting");changePassword()}
    else {alert("login parolingiz muaffaqiyatli almashtirildi");teachers()}
}

function addTest(){
    let checkAdd=true;
    while (checkAdd) {
        savol1 = prompt("savolni kiriting");
        var1 = prompt("a variant");
        var2 = prompt("b variant");
        var3 = prompt("c variant");
        var4 = prompt("d vairant");
        question = prompt(`Siz tuzgan savol ${savol1}\na)${var1}\nb)${var2}\nc)${var3}\nd)${var4}\nTo'g'ri javobni kiriting`);
        savollar.push({
        savol: savol1,
        variantlar:[var1,var2,var3,var4],
        javob:question
        });
        checkAdd = prompt("yana savol kiritasizmi?\n1=.ha\n0=>yo'q");
        if (checkAdd == 0) {
        checkAdd= false;
        }
    }
}








let name = "Sherxon"
let password = "veneralove"
function teachers() {
    userName = prompt("foydalanuvchi nomini kiriting")
    userPassword = prompt("parolni kiriting")
    if (userName != name || userPassword != password) { alert("login yoki parol hato,qaytadan urunib ko'ring"); teachers() }
    else {
        alert("siz dasturga muaffaqiyatli kirdingiz")
        teacherWant = prompt("kerakli bo'limni tanlang\n1=>login parolni almashtirish\n2=>test qo'shish\n3=>Testni tahrirlash")
        switch (teacherWant) {
            case "1":changePassword(); break;
            case "2":addTest();break;
            case "3":alert("ozroq kuting bu funksiya hali ishlamaydi");editTest();break;
        }
    }
}


let whoYou = prompt("kerakli bo'limni tanlang\n1=>O'qituvchilar uchun\n2=>Talabalar uchun");
switch(whoYou){
    case "1":teachers();break;
    case "2":students();break;
    case _: alert("siz hato bo'limni tanladingiz");break;
}




