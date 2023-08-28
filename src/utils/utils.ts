// URL maker
export const slug = (leter: string) => {
    if (leter) {
        return leter
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "");
    }
    return ""
};
// swiper breakpoints
export const swiperBreakpoints = (target: any) => {
    return Object.assign(target, {
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1124: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
    });
}

// image properties of HeroSlider in homePage
export const sliderImages = [
    {
        alt: "Enim feugiat",
        path: "/NFT2.png",
        width: 410,
        height: 511,
    },
    {
        alt: "Placerat porta",
        path: "/NFT3.png",
        width: 410,
        height: 511,
    },
    {
        alt: "nulla amet",
        path: "/NFT4.png",
        width: 410,
        height: 511,
    }
]

// collections of SomeNfts in homePage
const collections = [
    {
        title: "suspendisse collection",
        imgs: [
            "/Collection1.png"
        ],
        dimension: 370
    },
    {
        title: "senectus collection",
        imgs: [
            "/Collection2.png"
        ],
        dimension: 370
    },
    {
        title: "fermentum collection",
        imgs: [
            "/Collection3.png"
        ],
        dimension: 370
    },
    {
        title: "parturient collection",
        imgs: [
            "/Collection4.png"
        ],
        dimension: 370
    }
]
// images of RecentDrops in homePage
export const recentDrops = [
    {
        alt: "Enim amet",
        path: "/NFT5.png",
        width: 430,
        height: 511,
    },
    {
        alt: "porta cerat",
        path: "/NFT6.png",
        width: 430,
        height: 511,
    },
    {
        alt: "feugiat nulla",
        path: "/NFT7.png",
        width: 430,
        height: 511,
    },
    {
        alt: "bitur cura",
        path: "/NFT8.png",
        width: 430,
        height: 511,
    },
]

