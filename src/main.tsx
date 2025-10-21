import {BrowserRouter} from "react-router-dom";
import App from "./App.tsx";
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);

// Auto-unregister old service workers so users see the newest site version without asking them to unregister manually.
(async function unregisterOldServiceWorkers(){
    try{
        if ('serviceWorker' in navigator) {
            // don't try to reload multiple times in one session
            const reloadedFlag = sessionStorage.getItem('sw_unregistered_reload');
            const regs = await navigator.serviceWorker.getRegistrations();
            if (regs && regs.length) {
                let didUnregister = false;
                for (const r of regs) {
                    try {
                        const ok = await r.unregister();
                        if (ok) didUnregister = true;
                    } catch(e) {
                        // ignore individual unregister errors
                    }
                }
                // also try single registration remove as fallback
                try {
                    const single = await navigator.serviceWorker.getRegistration();
                    if (single) {
                        await single.unregister();
                        didUnregister = true;
                    }
                } catch(e) {}

                if (didUnregister && !reloadedFlag) {
                    // mark and reload once so client pulls fresh index and assets
                    try { sessionStorage.setItem('sw_unregistered_reload', '1'); } catch(e) {}
                    // small delay to let unregister finish
                    setTimeout(() => { window.location.reload(); }, 250);
                }
            }
        }
    } catch(err) {
        // swallow errors - this is best-effort cleanup
        console.warn('SW cleanup failed', err);
    }
})();
