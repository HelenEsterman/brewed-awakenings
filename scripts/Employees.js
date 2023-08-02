import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employees" data-id="${employee.id}" data-employeename="${employee.name}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener(
    "click",
    (theClickEvent) => {
        const clickTarget = theClickEvent.target

        if(clickTarget.dataset.type === "employees"){

            let productCounter = 0
            const employeeId = clickTarget.dataset.id
            const employeeName = clickTarget.dataset.employeename

            for (const order of orders) {
                if(parseInt(employeeId) === order.employeeId){

                    productCounter++
                }
            }
            window.alert(`${employeeName} sold ${productCounter} products`)
        }
    }
)

