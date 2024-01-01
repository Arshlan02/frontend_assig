const optionContainer = document.querySelector('.listContainer')

let options = optionContainer.querySelectorAll('.list_option');

function removeActiveStates() {
    options.forEach(option => {
        option.classList.remove('active');
        option.querySelector('.dropdownContainer').classList.remove('active');
    })
    console.log('callhua')
}
options.forEach(option => {
    console.log(option)
    option.addEventListener('click',(e) => {
        console.log('inside')
        removeActiveStates();
        option.classList.add('active');
        const dropDownOption = option.querySelector('.dropdownContainer');
        dropDownOption.classList.add('active');
    })
})



