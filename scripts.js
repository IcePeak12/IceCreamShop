window.startBarcodeScan = function (dotNetRef) {
    const html5QrCode = new Html5Qrcode("reader");
    html5QrCode.start(
        { facingMode: "environment" }, // back camera
        {
            fps: 10,
            qrbox: { width: 250, height: 250 }
        },
        (decodedText, decodedResult) => {
            html5QrCode.stop().then(() => {
                dotNetRef.invokeMethodAsync('OnBarcodeScanned', decodedText);
            });
        },
        (errorMessage) => {
            // console.log(`Scan error: ${errorMessage}`);
        })
        .catch(err => console.error("Error starting scan:", err));
};

window.restartScanner = () => {
    const config = { fps: 10, qrbox: 250 };

    html5QrcodeScanner.render(onScanSuccess, config);
};