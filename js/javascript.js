const lomakeElem = document.getElementById('lomake');
const inputElem = document.getElementById('input');
const listaElem = document.getElementById('lista');

lomakeElem.addEventListener('submit', (event) => {
    event.preventDefault();

    // Luo uusi

    const liElem = document.createElement('li');
    liElem.textContent = inputElem.value

    // lisää <li> listaan

    listaElem.appendChild(liElem);

    // Luoda remove-painike

    removeElem = document.createElement('button');
    removeElem.textContent = 'Remove';

    // Lisätä <button> li-elementtiin

    liElem.appendChild(removeElem);

    // Lisätä eventListener painikkeen

    removeElem.addEventListener('click', (event) => {

        liElem.remove();
        // console.log(event.target.parentElement);
        event.target.parentElement.remove()

    })

    removeElem.classList.add('removeElem');

    // Tyhjentää input

    lomakeElem.reset();

})