(function() {

    function setCurrentYear() {
        document.getElementById('currentYear').textContent = new Date().getFullYear();
    }

    function registerCopyButton() {
        const copyCommandBtn = document.getElementById('copyCommandBtn');
        const terminalCommand = document.getElementById('terminalCommand');

        // Copy to clipboard functionality
        copyCommandBtn.addEventListener('click', function() {
            const commandText = terminalCommand.textContent.trim();
            
            // Use the Clipboard API
            navigator.clipboard.writeText(commandText).then(function() {
                // Temporarily change button text to indicate successful copy
                copyCommandBtn.textContent = 'Copied!';
                copyCommandBtn.classList.remove('bg-gray-700', 'hover:bg-gray-600');
                copyCommandBtn.classList.add('bg-green-600');
                
                // Revert back after 2 seconds
                setTimeout(function() {
                    copyCommandBtn.textContent = 'Copy';
                    copyCommandBtn.classList.remove('bg-green-600');
                    copyCommandBtn.classList.add('bg-gray-700', 'hover:bg-gray-600');
                }, 2000);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
                alert('Failed to copy command. Please copy manually.');
            });
        });
    }

    function registerDownloadLink() {
        function updateDownloadLink() {
            const osSelector = document.getElementById('osSelector');
            const archSelector = document.getElementById('archSelector');
            const downloadLink = document.getElementById('downloadLink');
            const terminalCommand = document.getElementById('terminalCommand');

            const os = osSelector.value;
            const arch = archSelector.value;

            const baseUrl = 'https://github.com/captain-corp/captain/releases/latest/download/';
            const fileName = `captain_${os}_${arch}`;
            const downloadUrl = `${baseUrl}${fileName}`;

            downloadLink.href = downloadUrl;

            // Update terminal command based on selected OS and arch
            let command = '';
            switch (os) {
                case 'linux':
                    command = `wget -c ${downloadUrl}
                    chmod +x ${fileName}
                    ./${fileName}`.split('\n').map(line => line.trim()).join('\n');
                    break;
                case 'darwin':
                    command = `curl -LO ${downloadUrl}
                    chmod +x ${fileName}
                    ./${fileName}`.split('\n').map(line => line.trim()).join('\n');
                    break;
                case 'windows':
                    command = `Invoke-WebRequest -Uri ${downloadUrl} -OutFile ${fileName}
                    .\\${fileName}`.split('\n').map(line => line.trim()).join('\n');
                    break;
            }
            terminalCommand.textContent = command;
        }

        // Add event listeners to selectors
        const osSelector = document.getElementById('osSelector');
        const archSelector = document.getElementById('archSelector');

        if (!osSelector || !archSelector) {
            return;
        }

        osSelector.addEventListener('change', updateDownloadLink);
        archSelector.addEventListener('change', updateDownloadLink);

        // Initial setup
        updateDownloadLink();
    }


    document.addEventListener('DOMContentLoaded', function() {
        setCurrentYear();
        registerCopyButton();
        registerDownloadLink();
    });
})();