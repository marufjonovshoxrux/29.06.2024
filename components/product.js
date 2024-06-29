

function createUserBox(user) {
    const total_view = document.querySelector('#total_view')

    const box = document.createElement('div');
    const img_div = document.createElement('div');
    const text_div = document.createElement('div');
    const img = document.createElement('img');
    const text_h1 = document.createElement('h1');
    const text_p = document.createElement('p');
    const img_svg = document.createElement('div');
    const img_dollar = document.createElement('img');
    const span_dollar = document.createElement('span');
    const star_img = document.createElement('img');
    const span_star = document.createElement('span');
    const box_img = document.createElement('img');
    const span_box = document.createElement('span');
    const button = document.createElement('button');
    const img_item1 = document.createElement('div');
    const img_item2 = document.createElement('div');
    const img_item3 = document.createElement('div');


    box.id = `selector_${user.id}`

    box.classList.add('box');
    img_div.classList.add('img');
    text_div.classList.add('text');
    img.classList.add('img_size');
    img_svg.classList.add('img_svg');

    img.src = user.image;
    img.alt = 'img';
    text_h1.innerHTML = user.category;
    text_p.innerHTML = user.description.length > 100 ? user.description.slice(0, 100) + ('...') : user.description;
    text_p.title = user.description
    img_dollar.src = './public/svg/dollar.svg';

    span_dollar.innerHTML = user.price;
    star_img.src = './public/svg/star.svg';
    span_star.innerHTML = user.rating.rate;
    box_img.src = './public/svg/box.svg';
    span_box.innerHTML = user.rating.count;
    button.innerHTML = 'В избранное';

    box.append(img_div, text_div);
    img_div.append(img);
    text_div.append(text_h1, text_p, img_svg, button);
    img_svg.append(img_item1, img_item2, img_item3);
    img_item1.append(img_dollar, span_dollar);
    img_item2.append(star_img, span_star);
    img_item3.append(box_img, span_box);



    button.onclick = () => {
        const selected = Boolean(card.find(el => el.id === user.id));

        if (selected) {
            const idx = card.findIndex(el => el.id === user.id);
            card.splice(idx, 1);
            button.style.backgroundColor = 'white';
            button.style.color = 'black';
            button.innerHTML = 'В избранное';
        } else {
            card.push(user);
            button.style.backgroundColor = '#1680f8';
            button.style.color = 'white';
            button.innerHTML = 'Добавлено';
        }

       
        total_view.innerHTML = card.length;

       cart_total = 0
        reload(card, scroll, CardUser);
    };



    return box
}



