import {
    SET_SHOP_CATEGORIES,
    SET_NAVBAR_LINKS,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID
} from './type';

export function filterProductsWithCategoryId(_id) {
    return ({
        type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
        payload: _id
    })
}

export function fetchShopCategories() {
    return ({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                _id: 0,
                title: 'All'
            },
            {
                _id: 1,
                title: 'JavaScript'
            },
            {
                _id: 2,
                title: 'UI/UX'
            },
            {
                _id: 3,
                title: 'Linux'
            },
            {
                _id: 4,
                title: 'Python'
            },
            {
                _id: 5,
                title: 'UML'
            },
            {
                _id: 6,
                title: 'Ruby'
            },
        ]

    })
}


export function fetchShopProducts() {
    return ({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                _id: 0,
                title: 'JavaScript in the Browser',
                description:'Lorem ipsum dolor sit amet, cum ad elitr saperet, ne vis unum perfecto assueverit, nisl qualisque qui te. Labore accumsan quaestio ad nam, ea option minimum pri. Meis verear singulis sit ut, pro suscipit appetere cu, usu no nisl maiestatis. Probo voluptaria repudiandae usu an.',
                price: 2.99,
                belongsTo: [0, 1]
            },
            {
                _id: 1,
                title: 'Graph Database',
                description:'Lorem ipsum dolor sit amet, cum ad elitr saperet, ne vis unum perfecto assueverit, nisl qualisque qui te. Labore accumsan quaestio ad nam, ea option minimum pri. Meis verear singulis sit ut, pro suscipit appetere cu, usu no nisl maiestatis. Probo voluptaria repudiandae usu an.',
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                _id: 2,
                title: 'Full Stack Development',
                description:'Lorem ipsum dolor sit amet, cum ad elitr saperet, ne vis unum perfecto assueverit, nisl qualisque qui te. Labore accumsan quaestio ad nam, ea option minimum pri. Meis verear singulis sit ut, pro suscipit appetere cu, usu no nisl maiestatis. Probo voluptaria repudiandae usu an.',
                price: 5.99,
                belongsTo: [0, 1, 4]
            },
            {
                _id: 3,
                title: 'JavaScript Development',
                description:'Lorem ipsum dolor sit amet, cum ad elitr saperet, ne vis unum perfecto assueverit, nisl qualisque qui te. Labore accumsan quaestio ad nam, ea option minimum pri. Meis verear singulis sit ut, pro suscipit appetere cu, usu no nisl maiestatis. Probo voluptaria repudiandae usu an.',
                price: 4.89,
                belongsTo: [0, 1]
            },
            {
                _id: 4,
                title: 'User Interface Design',
                description:'Lorem ipsum dolor sit amet, cum ad elitr saperet, ne vis unum perfecto assueverit, nisl qualisque qui te. Labore accumsan quaestio ad nam, ea option minimum pri. Meis verear singulis sit ut, pro suscipit appetere cu, usu no nisl maiestatis. Probo voluptaria repudiandae usu an.',
                price: 10.99,
                belongsTo: [0, 2]
            },
            {
                _id: 5,
                title: 'User Experience Design',
                description:'Lorem ipsum dolor sit amet, cum ad elitr saperet, ne vis unum perfecto assueverit, nisl qualisque qui te. Labore accumsan quaestio ad nam, ea option minimum pri. Meis verear singulis sit ut, pro suscipit appetere cu, usu no nisl maiestatis. Probo voluptaria repudiandae usu an.',
                price: 2.99,
                belongsTo: [0, 2]
            },
            {
                _id: 6,
                title: 'Advanced Object Oriented Programming',
                description:'Lorem ipsum dolor sit amet, cum ad elitr saperet, ne vis unum perfecto assueverit, nisl qualisque qui te. Labore accumsan quaestio ad nam, ea option minimum pri. Meis verear singulis sit ut, pro suscipit appetere cu, usu no nisl maiestatis. Probo voluptaria repudiandae usu an.',
                price: 1.99,
                belongsTo: [0, 6]
            },
        ] 
    })
}