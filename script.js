// Dette grensesnittet er designet for effektiv interaksjon med Universal Robots UR5e.
// Koden sikrer rask og stabil kommunikasjon, minimerer latens og gir klare tilbakemeldinger
// til brukeren under robotoperasjoner.

// Mekanisme for tilbakemelding: For å gi brukeren kontinuerlig informasjon om robotens tilstand, spesielt under lengre operasjoner.
function showFeedback(message) {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.textContent = message;
    setTimeout(() => feedbackElement.textContent = '', 5000); // fjerner meldingen etter 5 sekunder
}
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

    // Buffer for DOM-elementer for å redusere gjentatte oppslag og forbedre ytelsen.
    const domCache = {
        robotStatus: document.getElementById('robot-status'),
        // ... flere cache-elementer kan legges til her
    };
    function isValidCommand(command) {
        return ['startScanMode', 'endScanMode', 'moveForward', 'moveBackward'].includes(command);
    }
    connectBtn.addEventListener("click", function() {
        robotStatus.textContent = "Tilkoblet";
        batteryLevel.textContent = "80%";
        connectBtn.disabled = true;
        startScanBtn.disabled = false;
    });
    function updateRobotStatus(status) {
        document.getElementById('robotStatus').querySelector('span').innerText = status;
    }

    startScanBtn.addEventListener("click", function() {
        scanStatus.textContent = "Aktiv";
        startScanBtn.disabled = true;
        stopScanBtn.disabled = false;
        // Simulating the robot's movement and detection
        setTimeout(() => {
            currentPosition.textContent = "(X: 5, Y: 7)";
            updateRobotStatus("Scanning...");
            let hindringEntry = document.createElement("p");
            hindringEntry.textContent = "Hindring oppdaget ved (X: 5, Y: 7) kl. 14:30";
            hindringerLog.appendChild(hindringEntry);
        }, 2000);
    });

    stopScanBtn.addEventListener("click", function() {
        scanStatus.textContent = "Avsluttet";
        stopScanBtn.disabled = true;
        updateRobotStatus("Idle");
        scanSummary.textContent = "1 hindring oppdaget, tid brukt: 2 sekunder";
    });

    document.getElementById('emergencyStop').addEventListener('click', function() {
        alert("NØDSTOPP aktivert! Robot stopper umiddelbart.");
        // Her kan vi legge til faktisk kode for å sende en nødstopp-kommando til roboten i en virkelig implementasjon.
    });
    // Modul for fremtidige robot-kommandoer
    const RobotCommands = {
        moveForward: function() {
            // logikk for å bevege roboten fremover
        },
        moveBackward: function() {
            // logikk for å bevege roboten bakover
        }
        // ... flere kommandoer kan legges til her
    };

});
