//  Demak biz ishimizni boshladik 
// Dastur nomi TT(Testing Time)
// Dastur 27.09.23 sanada tuzib boshlandi
//  Dastur tuzish rejasi => har bir bo'lak alohida funksiyalar orqali avval yasab olinadi va  user uchun qulay tartibda joylashtirib chiqiladi.
// Dastur muallifi Sherxon Muhammadiyev


// version 1.1.0
// hususiyatlari 
// prompt da varianltlar kiritamiz
// kiritilgan javoblarni qiymati orqali tekshiramiz
// userga natija haqda habar berish
// har safar sayt  yangilanganda savollar variantlari almashib keladi
// savollar ishlaib bo'linganda yana ishlash yoki chiqish haqda so'rash 
// exit kalit so'zi orqali dasturdan chiqish







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

function students() {
    let check = true;
    while (check) {
        for (let i = 0; i <= savollar.length - 1; i++) {
            let a = Math.floor(Math.random() * 4)
            let myAns = prompt(`${JSON.stringify(savollar[i].savol)}\nA)${savollar[i].variantlar.at(a - 0)}\nB)${savollar[i].variantlar.at(a - 1)}\nC)${savollar[i].variantlar.at(a - 2)}\nD)${savollar[i].variantlar.at(a - 3)}`)
            if ((myAns[0].toLowerCase() == "a" && savollar[i].variantlar.at(a - 0) == savollar[i].javob) || (myAns[0].toLowerCase() == "b" && savollar[i].variantlar.at(a - 1) == savollar[i].javob) || (myAns[0].toLowerCase() == "c" && savollar[i].variantlar.at(a - 2) == savollar[i].javob) || (myAns[0].toLowerCase() == "d" && savollar[i].variantlar.at(a - 3) == savollar[i].javob)) count++;
            else if (myAns=="exit"){break;}
            else if (myAns[0].toLowerCase()!="a"&&myAns[0].toLowerCase() !="b"&&myAns[0].toLowerCase()!="c"&&myAns[0].toLowerCase()!="d") {i--;alert("faqat variant kiritish kerak,qaytadan uruning")}
        }
        if (count == savollar.length) alert(`tabriklaymiz siz ${savollar.length} savoldan hamma savolga to'g'ri javob berdingiz`)
        else if (count == 0) alert("siz hech qaychi savolga javob bera olmadingiz")
        else alert(`siz ${savollar.length} ta savoldan ${count} ta savolga  to'gri javob berdingiz `)
       let youWant= prompt("yana test ishlash uchun=> again\nchiqish uchun=> exit")
       if (youWant=="again"){students()}
       else if(youWant=="exit"){check=false;break;}
    }
}

students()

