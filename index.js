const form = document.getElementById('dataForm');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    // Form Submit Event
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Create a new row
        const newRow = dataTable.insertRow();

        // Insert new cells and append data
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);

        cell1.textContent = name;
        cell2.textContent = email;

        // Clear form fields after submission
        form.reset();
    });