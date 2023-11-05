document.addEventListener('DOMContentLoaded', ()=> {
    const cards = document.querySelectorAll('.card');
    const addMoreBtn = document.querySelector('.add-more');

    let cur = 0;
    let quantity = 8;

    if (window.screen.width <= 980){
        quantity = 8;
    }

    if(cards.length > quantity){
        addMoreBtn.classList.remove('hidden');

        cards.forEach((el, i) => {
            (i + 1) > quantity ? el.classList.add('hidden') : null;
        })
    }

    const hideLoadMore = () => {
        const res = [...cards].some(el => el.classList.contains('hidden'));
        if(!res){
            addMoreBtn.classList.add('hidden');
        }
    };

    hideLoadMore();

    addMoreBtn.addEventListener('click', ()=> {
        cur += quantity;
        const amount = cur + quantity;

        if(amount > 8) {
            cards.forEach(el =>  el.classList.remove('hidden'));
        } else {
            addMoreBtn.textContent = 'Load all';
            cards.forEach((el, i) => {
                if ((i + 1) >= cur && i < amount){
                    el.classList.remove('hidden');
                }
            });
        }
        hideLoadMore();
    });
});