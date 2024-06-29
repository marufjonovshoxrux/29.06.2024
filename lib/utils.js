function reload(array, scroll, componen) {
    scroll.innerHTML = ' '

    for (let user of array) {
        const ct = componen(user)

        scroll.append(ct)
    }
}

