document.addEventListener("DOMContentLoaded", function() {
    // Elements
    const connectBtn = document.getElementById("connect-btn");
    const startScanBtn = document.getElementById("start-scan-btn");
    const stopScanBtn = document.getElementById("stop-scan-btn");
    const robotStatus = document.getElementById("robot-status");
    const batteryLevel = document.getElementById("battery-level");
    const scanStatus = document.getElementById("scan-status");
    const currentPosition = document.getElementById("current-position");
    const hindringerLog = document.getElementById("hindringer-log");
    const scanSummary = document.getElementById("scan-summary");

    connectBtn.addEventListener("click", function() {
        robotStatus.textContent = "Tilkoblet";
        batteryLevel.textContent = "80%";
        connectBtn.disabled = true;
        startScanBtn.disabled = false;
    });

    startScanBtn.addEventListener("click", function() {
        scanStatus.textContent = "Aktiv";
        startScanBtn.disabled = true;
        stopScanBtn.disabled = false;
        // Simulating the robot's movement and detection
        setTimeout(() => {
            currentPosition.textContent = "(X: 5, Y: 7)";
            let hindringEntry = document.createElement("p");
            hindringEntry.textContent = "Hindring oppdaget ved (X: 5, Y: 7) kl. 14:30";
            hindringerLog.appendChild(hindringEntry);
        }, 2000);
    });

    stopScanBtn.addEventListener("click", function() {
        scanStatus.textContent = "Avsluttet";
        stopScanBtn.disabled = true;
        scanSummary.textContent = "1 hindring oppdaget, tid brukt: 2 sekunder";
    });
});

