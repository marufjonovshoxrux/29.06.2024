const container = document.createElement('div')
const five = document.querySelector('#five')
const all = document.querySelector('#all')
let card = []
let cart_total = 0
container.classList.add('container')

document.body.append(container);



reload(arr, container, createUserBox)
reload(card, scroll, CardUser)


five.onclick = () => {
    reload(arr.slice(0, 5), container, createUserBox);
};

all.onclick = () => {
    reload(arr, container, createUserBox);
};


// const btn =  document.querySelector('#open')
// const dialog = document.querySelector('dialog')
// const closed = document.querySelector('#closed')

// btn.onclick = () => {
//     dialog.show()
// }


// closed.onclick = () => {
//     aside.classList.add('close')

// }


const openMenu = document.querySelector('[data-menu]')
const dialog = document.querySelector('dialog')
const closeMenu = document.querySelector('[data-close]')



openMenu.onclick = () => {
    dialog.show()
}


closeMenu.onclick = () => {
    dialog.close()
}