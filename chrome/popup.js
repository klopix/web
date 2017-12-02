window.onload = function () {
    chrome.storage.local.get(['chext-isEnabled', 'chext-sitekey', 'chext-throttle'], function (results) {
        var isEnabled = results['chext-isEnabled'];
        if (isEnabled === undefined) {
            isEnabled = true;
        }

        var sitekey = results['chext-sitekey'];
        if (sitekey === undefined) {
            sitekey = '49r95LB1nVh1fELw5FePfx5XUtTkwP6yiRhSqV6XszVFeAV7s6kaQqB3WhZVWbxiToa2mJ8Uf1jSjCtA6BA3pfpLL2zuzac';
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
