const form = document.querySelector('form')
const datepickerField = document.getElementById('datepicker')
const numberField = document.getElementById('number')
const entryContainer = document.getElementById('entry-container')

function dateTranslate(date) {
    const months = {
        '01': 'Jan', 
        '02': 'Feb', 
        '03': 'Mar', 
        '04': 'Apr', 
        '05': 'May', 
        '06': 'Jun', 
        '07': 'Jul', 
        '08': 'Aug', 
        '09': 'Sep', 
        '10': 'Oct', 
        '11': 'Nov', 
        '12': 'Dec'
    }
    const year = date.slice(0, 4)
    const monthNumber = date.slice(5, 7)
    const month = months[monthNumber]
    const day = date.slice(8, 10)

    return `${month} ${day}, ${year}`
}

function deleteEntry(id) {
    axios.delete(`http://localhost:4000/api/entries/${id}`)
        // should be "createEntriesHtml"
        .then(res => createsEntriesHtml(res.data))
}

function addWater(id) {
    axios.put(`http://localhost:4000/api/entries/${id}`)
        .then(res => createEntriesHtml(res.data))
}

function createEntriesHtml(arr) {
    entryContainer.innerHTML = ''
    arr.forEach(entry => {
        const entryDiv = document.createElement('div') 
        entryDiv.className = 'entry' 

        const dateDisplay = document.createElement('h3')
        dateDisplay.textContent = entry.date
        
        const amountDisplay = document.createElement('p')
        amountDisplay.textContent = `${entry.amount} ounces`

        const addBtn = document.createElement('button')
        addBtn.textContent = 'Add 8 oz.'
        addBtn.addEventListener('click', () => addWater(entry.id))

        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete Entry'
        deleteBtn.addEventListener('click', () => deleteEntry(entry.id))
        
        entryDiv.appendChild(dateDisplay)
        entryDiv.appendChild(amountDisplay)
        entryDiv.appendChild(addBtn)
        entryDiv.appendChild(deleteBtn)
        
        entryContainer.appendChild(entryDiv)
    })
}

function loadEntries() {
    axios.get('http://localhost:4000/api/entries')
        .then(res => createEntriesHtml(res.data))
}

function handleSubmit(e) {
    e.preventDefault()

    let dateString = dateTranslate(datepickerField.value)

    const body = {
        dateInput: dateString, 
        amountInput: numberField.value
    }

    axios.post('http://localhost:4000/api/entries', body)
        .then(res => {
            datepickerField.value = ''
            // datepickerField.value = '
            numberField.value = ''
            createEntriesHtml(res.data)
        })
}

form.addEventListener('submit', handleSubmit)
window.addEventListener('load', loadEntries)