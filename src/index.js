import init from './engine/init';

// Prevent qt-superbird-app from restarting
new WebSocket('ws://localhost:8890');

if (navigator.serviceWorker) {
    window.addEventListener('load', async () => {
        try {
            await navigator.serviceWorker.register('/service-worker.js');
            console.log('SW registered.');
        } catch (registrationError) {
            console.error('SW registration failed.', registrationError);
        }
    });
}

setTimeout(init, 1);
