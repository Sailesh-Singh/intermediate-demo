// Frontend JavaScript for Intermediate DevOps Demo
class DevOpsDemo {
    constructor() {
        this.baseUrl = window.location.origin;
        this.init();
    }

    async init() {
        await this.loadStatus();
        this.startStatusPolling();
    }

    async loadStatus() {
        try {
            const response = await fetch(`${this.baseUrl}/api/health`);
            const data = await response.json();
            
            const statusDisplay = document.getElementById('status-display');
            statusDisplay.innerHTML = `
                <h3 class="status-healthy">✅ System Healthy</h3>
                <p><strong>Status:</strong> ${data.status}</p>
                <p><strong>Version:</strong> ${data.version}</p>
                <p><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
            `;
        } catch (error) {
            console.error('Error loading status:', error);
            const statusDisplay = document.getElementById('status-display');
            statusDisplay.innerHTML = `
                <h3 class="status-error">❌ System Error</h3>
                <p>Unable to connect to the server</p>
            `;
        }
    }

    startStatusPolling() {
        // Poll status every 30 seconds
        setInterval(() => {
            this.loadStatus();
        }, 30000);
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new DevOpsDemo();
}); 