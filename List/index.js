document.getElementById('insert-button').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    const listDisplay = document.getElementById('list-display');

    const newItem = textField.value.trim();
    
    if (newItem !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newItem;
        listDisplay.appendChild(listItem);
        textField.value = '';
    }
});
