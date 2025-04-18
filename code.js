
    function generateCalendar(month, year) {
    const calendarDiv = document.getElementById('calendar');
    calendarDiv.innerHTML = ""; // Clear previous calendar
  
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Create the heading
    const heading = document.createElement('h2');
    heading.textContent = `${monthNames[month]} ${year}`;
    calendarDiv.appendChild(heading);
  
    // Create the table
    const table = document.createElement('table');
  
    // Table header for day names
    const daysRow = document.createElement('tr');
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day of days) {
      const th = document.createElement('th');
      th.textContent = day;
      daysRow.appendChild(th);
    }
    table.appendChild(daysRow);
  
    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
  
    // Get total days in the month
    const totalDays = new Date(year, month + 1, 0).getDate();
  
    let date = 1;
  
    // Create the calendar rows (5-6 weeks)
    for (let i = 0; i < 6; i++) {
      const row = document.createElement('tr');
  
      for (let j = 0; j < 7; j++) {
        const cell = document.createElement('td');
  
        if (i === 0 && j < firstDay) {
          cell.textContent = ""; // empty cells before the first day
        } else if (date > totalDays) {
          break; // stop if we've passed the last date
        } else {
          cell.textContent = date;
          date++;
        }
  
        row.appendChild(cell);
      }
  
      table.appendChild(row);
    }
  
    calendarDiv.appendChild(table);
  }
  
  // Load calendar for current month
  const today = new Date();
  generateCalendar(today.getMonth(), today.getFullYear());
  
