/* script.js */
function addJournalEntry() {
    let journalInput = document.getElementById("journal");
    let journalList = document.getElementById("journalList");
    if (journalInput.value) {
        let li = document.createElement("li");
        li.textContent = journalInput.value;
        journalList.appendChild(li);
        journalInput.value = "";
    }
}

function addReminder() {
    let reminderInput = document.getElementById("reminder");
    let reminderList = document.getElementById("reminderList");
    if (reminderInput.value) {
        let li = document.createElement("li");
        li.textContent = reminderInput.value;
        reminderList.appendChild(li);
        reminderInput.value = "";
    }
}
