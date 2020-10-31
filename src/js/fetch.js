const form = document.querySelector('form');
const total = document.getElementById('totalP')
const selected = document.getElementById('selected')
form.addEventListener('submit', (e) => {
    const totalP = total.innerHTML;
    const allS = selected.innerHTML;
    const box = document.querySelector('#data')
    e.preventDefault();

    box.textContent = 'loading....';
    fetch('/test?totalP=' + totalP + '&all=' + allS).then((res) => {

        res.json().then((data) => {
            if (data.error) {
                box.textContent = data.error;
            }
            else {
                box.textContent = data.data;
            }


        });
    })


}) 