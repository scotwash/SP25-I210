
const portfolioPhotos =[
    {
        name: "My First Fire",
        img: "https://fastly.picsum.photos/id/521/200/200.jpg?hmac=J25eIJlH4Vz83r581TpDZbrmu21tzbZMognm7gqkoWo",
    },

    {
        name: "Handy Hand",
        img: "https://fastly.picsum.photos/id/521/200/200.jpg?hmac=J25eIJlH4Vz83r581TpDZbrmu21tzbZMognm7gqkoWo",
    },

    {
        name: "Napsack",
        img: "https://fastly.picsum.photos/id/521/200/200.jpg?hmac=J25eIJlH4Vz83r581TpDZbrmu21tzbZMognm7gqkoWo",
    },
    {
        name: "Hot Tub Wild Feeder",
        img: "https://fastly.picsum.photos/id/521/200/200.jpg?hmac=J25eIJlH4Vz83r581TpDZbrmu21tzbZMognm7gqkoWo",
    },
        
    {
        name:"Toilet Meadow",
        img: "https://fastly.picsum.photos/id/521/200/200.jpg?hmac=J25eIJlH4Vz83r581TpDZbrmu21tzbZMognm7gqkoWo",
    },

    {
        name:"Pudding Punch",
        img: "https://fastly.picsum.photos/id/521/200/200.jpg?hmac=J25eIJlH4Vz83r581TpDZbrmu21tzbZMognm7gqkoWo",
    },
];


for (let index = 0; index < portfolioPhotos.length; index++) {
    const item = portfolioPhotos[index].name;
    const photosRef = document.querySelector("#photos");

   const photoPortfolio = portfolioPhotos[index].img;
   const photoImg = "<img src='" + photoPortfolio + "'alt='' />";
    
}