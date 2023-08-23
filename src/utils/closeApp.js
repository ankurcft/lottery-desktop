import { ipcRenderer } from "electron";

const handleCloseApp = () => {
    // Send a message to the main process to request app closure
    ipcRenderer.send('close-app');
};
export default handleCloseApp