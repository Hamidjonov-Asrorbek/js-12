let arr = [
    {
        name: "Noutbuk Acer",
        imgUrl: "https://images.uzum.uz/ckmem5kjvf2tgsrpdqmg/original.jpg",
        price: 2599000,
        color: "black",
        amount: 52
    },
    {
        name: "Noutbuk Lenovo",
        imgUrl: "https://images.uzum.uz/cld5q8tennt861iqbsog/original.jpg",
        price: 4997000,
        color: "black",
        amount: 1
    },
    {
        name: "Noutbuk Asus",
        imgUrl: "https://images.uzum.uz/cn06ejjifoubkc6ql1h0/original.jpg",
        price: 7911000,
        color: "blue",
        amount: 3
    },
    {
        name: "Noutbuk HP ",
        imgUrl: "https://images.uzum.uz/clna75nn7c6gg9idpf80/original.jpg",
        price: 5750000,
        color: "gray",
        amount: 6
    }
]

let product1List = document.querySelector("#product1List");

let title1 = document.querySelector(".title1");
title1.textContent = "Noutbuklar"

arr.forEach(({name, imgUrl, price, color, amount}) =>{
    product1List.innerHTML += `
    <li class="list1-item">
        <a href=${imgUrl} style='text-decoration: none; color: #000;' target=_blank>
            <img src="${imgUrl}" alt="" width='300' height='300' >
            <h3>${name}</h3>
            <p>Narxi: ${price}</p>
            <span  style='background: ${color};' class="color"></span>
            <p>Qolgan: ${amount}</p>
        </a>
    </li>`
})


let arr2 = [
    {
        name: "Smartfon Honor 90 Lite",
        imgUrl: "https://images.uzum.uz/co38bqf2u18gghcm40ng/original.jpg",
        price: 2999000,
        color: "blue",
        amount: 19
    },
    {
        name: "Smartfon Tecno Spark",
        imgUrl: "https://images.uzum.uz/cmtq3qjifoubkc6q8kfg/original.jpg",
        price: 1099000,
        color: "darkturquoise",
        amount: 2
    },
    {
        name: "Smartfon Vivo Y17s",
        imgUrl: "https://images.uzum.uz/cn5f1t925kub33f3eqm0/original.jpg",
        price: 1809000,
        color: "green",
        amount: 139
    },
    {
        name: "Smartfon Xiaomi Redmi A3 ",
        imgUrl: "https://images.uzum.uz/cnupchupom4ma10qf06g/original.jpg",
        price: 1498000,
        color: "black",
        amount: 28
    }
]

let title2 = document.querySelector(".title2");
title2.textContent = "Smartfonlar"

let product2List = document.querySelector("#product2List");


arr2.forEach(({name, imgUrl, price, color, amount}) =>{
    let li2 = document.createElement("li");
    
    li2.classList.add("list2-item");

    li2.innerHTML = `
        <a href=${imgUrl} style='text-decoration: none; color: #000;' target=_blank>
            <img src="${imgUrl}" alt="" width='300' height='300' >
            <h3>${name}</h3>
            <p>Narxi: ${price}</p>
            <span  style='background: ${color};' class="color"></span>
            <p>Qolgan: ${amount}</p>
        </a>`
    product2List.append(li2);
})