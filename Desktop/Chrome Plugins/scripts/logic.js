(function() {
    let startTime = Date.now();
    let elapsedTime = 0;
    let timeoutId = null;
  
    // Create a container for the time tracker
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '10px';
    container.style.right = '10px';
    container.style.padding = '15px';
    container.style.backgroundColor = 'rgba(34, 34, 34, 0.9)';
    container.style.color = '#fff';
    container.style.fontSize = '14px';
    container.style.zIndex = '10000';
    container.style.borderRadius = '10px';
    container.style.fontFamily = 'Arial, sans-serif';
    container.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
    container.style.maxWidth = '200px';
    document.body.appendChild(container);
  
    // Add the heading
    const heading = document.createElement('h2');
    heading.innerText = 'Time Tracker';
    heading.style.textAlign = 'center';
    heading.style.margin = '0';
    heading.style.padding = '0';
    heading.style.fontSize = '18px';
    heading.style.fontWeight = 'bold';
    heading.style.color = '#FFD700';
    container.appendChild(heading);
  
    // Create a table for displaying the time
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.marginTop = '10px';
    container.appendChild(table);
  
    // Function to create a table row
    function createRow(labelText) {
      const row = document.createElement('tr');
      const label = document.createElement('td');
      label.innerText = labelText;
      label.style.paddingRight = '10px';
      label.style.color = '#FFD700';
      label.style.fontWeight = 'bold';
      row.appendChild(label);
      const value = document.createElement('td');
      value.innerText = '00';
      value.style.textAlign = 'right';
      value.style.fontWeight = 'bold';
      row.appendChild(value);
      table.appendChild(row);
      return value;
    }
  
    // Create rows for hours, minutes, and seconds
    const hoursValue = createRow('Hours:');
    const minutesValue = createRow('Minutes:');
    const secondsValue = createRow('Seconds:');
    
    // Create a row for the total time spent
    const totalTimeRow = document.createElement('tr');
    const totalTimeLabel = document.createElement('td');
    totalTimeLabel.innerText = 'Total Time:';
    totalTimeLabel.style.paddingRight = '10px';
    totalTimeLabel.style.fontWeight = 'bold';
    totalTimeLabel.style.color = '#FFD700';
    totalTimeRow.appendChild(totalTimeLabel);
    const totalTimeValue = document.createElement('td');
    totalTimeValue.colSpan = 2;
    totalTimeValue.style.textAlign = 'right';
    totalTimeValue.style.fontSize = '16px';
    totalTimeValue.style.fontWeight = 'bold';
    totalTimeValue.style.color = '#FFD700';
    totalTimeRow.appendChild(totalTimeValue);
    table.appendChild(totalTimeRow);
  
    function updateLabel() {
      const currentTime = Date.now();
      const totalElapsedTime = elapsedTime + (currentTime - startTime);
      
      const hours = Math.floor(totalElapsedTime / (1000 * 60 * 60));
      const minutes = Math.floor((totalElapsedTime % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((totalElapsedTime % (1000 * 60)) / 1000);
      
      hoursValue.innerText = String(hours).padStart(2, '0');
      minutesValue.innerText = String(minutes).padStart(2, '0');
      secondsValue.innerText = String(seconds).padStart(2, '0');
      
      const formattedTime = 
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      
      totalTimeValue.innerText = formattedTime;
  
      // Schedule the next update
      timeoutId = setTimeout(updateLabel, 10000);
    }
  
    function startTimer() {
      startTime = Date.now();
      updateLabel();
    }
  
    function stopTimer() {
      elapsedTime += Date.now() - startTime;
      clearTimeout(timeoutId);
    }
  
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    });
  
    startTimer();
  })();
  