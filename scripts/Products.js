import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = "<ul>"

    for (const product of products) {
        html += `<li data-type="product" data-productname="${product.name}" data-price="${product.price}">${product.name}</li>`
    }

    html += "</ul>"

    return html
}


document.addEventListener(
    "click",
    (theClickEvent) => {
        const clickTarget = theClickEvent.target

        if(clickTarget.dataset.type === "product"){
            
            const productPrice = clickTarget.dataset.price
            const productName = clickTarget.dataset.productname
            
            window.alert(`${productName} costs $${productPrice} `)

        }

    }
)
