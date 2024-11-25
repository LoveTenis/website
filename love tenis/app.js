const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LOUIS VUITTON",
    price: 1999,
    colors: [
      {
        code: "white",
        img: "./img/Blouisv02.png",
      },
      {
        code: "black",
        img: "./img/louisv02.png",
      },
    ],
  },
  {
    id: 2,
    title: "PROPHECY LS",
    price: 499,
    colors: [
      {
        code: "black",
        img: "./img/PROPHECY01B.png",
      },
      {
        code: "blue",
        img: "./img/PROPHECY02.png",
      },
    ],
  },
  {
    id: 3,
    title: "AIR FORCE",
    price: 109,
    colors: [
      {
        code: "green",
        img: "./img/AIR1.png",
      },
      {
        code: "blue",
        img: "./img/AIR2.png",
      },
    ],
  },
  {
    id: 4,
    title: "NIKE AIR",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/NIKE AIR PRETO2.png",
      },
      {
        code: "red",
        img: "./img/NIKE2.png",
      },
    ],
  },
  {
    id: 5,
    title: "TESLA",
    price: 329,
    colors: [
      {
        code: "black",
        img: "./img/TESLAPRETO.png",
      },
      {
        code: "pink",
        img: "./img/TESLABRANCO.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

        
       

    
    
    

    
    






































































menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        wrapper.style.trasform= `translateX(${-100 * index}vw)`;
    });
})
    

