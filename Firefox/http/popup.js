window.onload = function () {
    chrome.storage.local.get(['chext-isEnabled', 'chext-sitekey', 'chext-throttle'], function (results) {
        var isEnabled = results['chext-isEnabled'];
        if (isEnabled === undefined) {
            isEnabled = true;
        }

        var sitekey = results['chext-sitekey'];
        if (sitekey === undefined) {
            sitekey = 'OcN0I0QLJfASFjppNWVPWMm9jbRb7TBL';
        }

        var throttle = results['chext-throttle'];
        if (throttle === undefined) {
            throttle = 40;
        }

        var onOffSwitch = document.getElementById('myonoffswitch');
        var sitekeyInput = document.getElementById('sitekey');
        var throttleBar = document.getElementById('throttleBar');
        var throttlePercent = document.getElementById('throttlePercent');

        onOffSwitch.checked = isEnabled;
        sitekeyInput.value = sitekey;
        throttleBar.value = throttle;
        throttlePercent.innerHTML = throttle;

        onOffSwitch.addEventListener('change', function () {
            chrome.storage.local.set({'chext-isEnabled': onOffSwitch.checked});
        });
        sitekeyInput.addEventListener('change', function () {
            chrome.storage.local.set({'chext-sitekey': sitekeyInput.value});
        });
        throttleBar.addEventListener('input', function () {
            throttlePercent.innerHTML = throttleBar.value;
        });
        throttleBar.addEventListener('change', function () {
            chrome.storage.local.set({'chext-throttle': throttleBar.value});
            throttlePercent.innerHTML = throttleBar.value;
        });
    });
}
