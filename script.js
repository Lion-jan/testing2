//  Demak biz ishimizni boshladik 
// Dastur nomi TT(Testing Time)
// Dastur 27.09.23 sanada tuzib boshlandi
//  Dastur tuzish rejasi => har bir bo'lak alohida funksiyalar orqali avval yasab olinadi va  user uchun qulay tartibda joylashtirib chiqiladi.
// Dastur muallifi Sherxon Muhammadiyev

// version 1.0.0
//  yangiliklar 
// prompt da varianltlar kiritamiz
// kiritilgan javoblarni qiymati orqali tekshiramiz
// userga natija haqda habar berish








function students() {
    let count=0;
    savollar = [
        {
            savol: "5+5=?",
            variantlar:[10,20,11,22],
            javob:10
        },

        {
            savol: "10+10=?",
            variantlar:[10,20,11,22],
            javob:20
        },

        {
            savol: "10+1=?",
            variantlar:[10,20,11,22],
            javob:11
        },

        {
            savol: "11*2=?",
            variantlar:[10,20,11,22],
            javob:22
        },

        {
            savol: "34-14=?",
            variantlar:[10,20,11,22],
            javob:20
        },

        {
            savol: "5*2=?",
            variantlar:[10,20,11,22],
            javob:10
        },

        {
            savol: "12-1=?",
            variantlar:[10,20,11,22],
            javob:11
        },

        {
            savol: "5+5=?",
            variantlar:[10,20,11,22],
            javob:10
        },

        {
            savol: "23-1=?",
            variantlar:[10,20,11,22],
            javob:22
        },

        {
            savol: "22-11=?",
            variantlar:[10,20,11,22],
            javob:11
        },

        {
            savol: "7+4=?",
            variantlar:[10,20,11,22],
            javob:11
        }

    ]
   
    for(let i=0; i<=savollar.length-1;i++){
        let myAns = prompt(`${JSON.stringify(savollar[i].savol)}\nA)${savollar[i].variantlar[0]}\nB)${savollar[i].variantlar[1]}\nC)${savollar[i].variantlar[2]}\nD)${savollar[i].variantlar[3]}`)
        if ((myAns[0].toLowerCase()=="a"&&savollar[i].variantlar[0]==savollar[i].javob)||(myAns[0].toLowerCase()=="b"&&savollar[i].variantlar[1]==savollar[i].javob)||(myAns[0].toLowerCase()=="c"&&savollar[i].variantlar[2]==savollar[i].javob)||(myAns[0].toLowerCase()=="d"&&savollar[i].variantlar[3]==savollar[i].javob)) count++;
        console.log(myAns[0].toLowerCase(),savollar[i].variantlar[0],savollar[i].javob)
    }
    if (count ==savollar.length) alert("tabriklaymiz siz hamma savolga to'g'ri javob berdingiz")
    else if (count == 0) alert ("siz hech qaychi savolga javob bera olmadingiz")
    else  alert(`siz ${savollar.length} ta savoldan ${count} ta savolga  to'gri javob berdingiz `)
}

students()




