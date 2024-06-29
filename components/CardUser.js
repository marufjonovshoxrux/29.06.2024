const CardUser = (user) => {
    let quantity = 1
    cart_total += Number((user.price * quantity).toFixed(2))
    const scroll = document.createElement('div');
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const img_div1 = document.createElement('img')
    const text_span = document.createElement('span')
    const button_plus = document.createElement('button')
    const span_numbers = document.createElement('span')
    const button_minus = document.createElement('button')
    const span_price = document.createElement('span')
    const button_remove = document.createElement('button')

    scroll.classList.add('scroll')
    div1.classList.add('div1')
    div2.classList.add('div2')
    div3.classList.add('div3')
    div4.classList.add('div4')
    text_span.classList.add('text_span')
    button_plus.classList.add('plus')
    span_numbers.classList.add('numbers')
    button_minus.classList.add('minus')
    span_price.classList.add('price')
    button_remove.classList.add('remove')

    img_div1.src = user.image;
    img_div1.alt = 'img'
    text_span.innerHTML = user.category;
    span_price.innerHTML = user.price;
    button_remove.innerHTML = 'Remove'
    button_plus.innerHTML = '+'
    button_minus.innerText = '-'
    span_numbers.innerText = quantity

    scroll.append(div1, div2, div3)
    div1.append(img_div1)
    div2.append(text_span, button_plus, span_numbers, button_minus)

    div3.append(span_price, button_remove)



    button_plus.onclick = () => {

        if (quantity < user.rating.count) {
            quantity++
            span_numbers.innerText = quantity
            calc_amout_total('plus')
            total_summa.innerHTML = cart_total.toFixed(2)

            return
        }
        alert('В наличие больше нет')
    };

    button_minus.onclick = () => {
        if (quantity > 0) {
            quantity--
            span_numbers.innerHTML = quantity
            calc_amout_total('minus')
            total_summa.innerHTML = cart_total.toFixed(2)

        }
    };

    button_remove.onclick = () => {
        const idx = card.indexOf(user);
        card.splice(idx, 1)
        total_view.innerHTML = card.length
        scroll.remove()
        // reload(card, scroll, CardUser);
        const product_div = document.querySelector(`#selector_${user.id}`)
        const btn = product_div.querySelector('button')
        btn.innerHTML = 'В избранное'
        btn.style.backgroundColor = 'white'
        btn.style.color = 'black'
    };


    function calc_amout_total(param) {
        span_price.innerHTML = (user.price * quantity).toFixed(2)
        const total_summa = document.querySelector('#total_summa')
        total_summa.innerHTML = cart_total.toFixed(2)
        if (param === 'plus') {
            cart_total += Number(user.price.toFixed())
        } else {
            cart_total -= Number(user.price.toFixed())
        }
        // console.log(cart_total);
    }




    return scroll;
};
const scroll = document.querySelector('.scroll');