let entries = [
    {
        id: 0,
        date: 'May 21, 2022',
        amount: 64
    }, 
    {
        id: 1,
        date: 'May 22, 2022',
        amount: 40
    }, 
    {
        id: 2,
        date: 'May 23, 2022',
        amount: 80
    }, 
    {
        id: 3,
        date: 'May 24, 2022',
        amount: 72
    }
]

let idTracker = 4

module.exports = {
    getEntries: (req, res) => {
        res.status(200).send(entries)
    },
    addEntry: (req, res) => {
        const {dateInput, amountInput} = req.body 
        entries.push({
            id: idTracker,
            date: dateInput, 
            amount: +amountInput
        })
        res.status(200).send(entries)
    },
    editEntry: (req, res) => {
        const {entryId} = req.params
        // console log the variables to help make sure you're getting the correct thing(s) back
        // console.log(entryId)
        // index is returning -1, which means it's undefined/can't find
        // another great way to debug is to make sure you're using methods correctly (.findIndex)
        // in this case, it's being used correctly
        // there's a type issue, as we were comparing two different data types
        // the code below should be:
        // const index = entries.findIndex(e => e.id === Number(entryId))
        const index = entries.findIndex(e => e.id === entryId)
        // console.log(index);
        entries[index].amount += 8
        res.status(200).send(entries)
    },
    deleteEntry: (req, res) => {
        const {entryId} = req.params
        const index = entries.findIndex(e => e.id === +entryId)
        entries.splice(index, 1)
        res.status(200).send(entries)
    }
}