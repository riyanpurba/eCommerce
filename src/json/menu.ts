interface SubMenuItem {
    title: string;
    link: string;
}

interface MenuItem {
    title: string;
    link: string;
    subMenu?: SubMenuItem[];
}

interface Menu {
    menu: MenuItem[]
}

export const menuData: Menu = {
    "menu": [
        {
            "title": "Home",
            "link": "/"
        },
        {
            "title": "Shop",
            "link": "/shop",
            "subMenu": [
                {
                    "title": "Men",
                    "link": "/shop/men"
                },
                {
                    "title": "Women",
                    "link": "/shop/women"
                },
                {
                    "title": "Kids",
                    "link": "/shop/kids"
                }
            ]
        },
        {
            "title": "Categories",
            "link": "/categories",
            "subMenu": [
                {
                    "title": "Clothing",
                    "link": "/categories/clothing"
                },
                {
                    "title": "Shoes",
                    "link": "/categories/shoes"
                },
                {
                    "title": "Accessories",
                    "link": "/categories/accessories"
                },
                {
                    "title": "Sale",
                    "link": "/categories/sale"
                }
            ]
        },
        {
            "title": "Collections",
            "link": "/collections",
            "subMenu": [
                {
                    "title": "Summer Collection",
                    "link": "/collections/summer"
                },
                {
                    "title": "Winter Collection",
                    "link": "/collections/winter"
                },
                {
                    "title": "Holiday Collection",
                    "link": "/collections/holiday"
                }
            ]
        }
    ]
};