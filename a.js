const hexToDecimal = (_0x469fb2) => parseInt(_0x469fb2.replace('#', ''), 16);

(function () {
  const _0x3e695e = localStorage.acp.toString();
  window.sus = localStorage.acp.toString();
  const _0x468673 = Date;

  function _0x2b6a68() {
    try {
      console.log(
        '%c%c%cDRM CHECK FAILED',
        'font-size: 100px;',
        '',
        'color: #FF0000; font-size: 1.4em; background-color: #460000; border: .1em solid white; border-radius: 0.5em; padding: 1em; padding-left: 6em; padding-right: 6em; margin-left: 1.6em;'
      );
      document.open();
      document.write('');
      document.close();
      alert('drm check failed');
      confirm('re enter key?') &&
        (localStorage.acp = prompt('enter key here and reload'));
      Date = undefined;
      const _0xec792 = undefined;
      window.location.href = '';
    } catch {
      THREE = undefined;
      while (1) {}
    }
  }

  try {
    function _0x1b0121(_0x585a53, _0x34de6a) {
      var _0x3324fc = CryptoJS.AES.encrypt(_0x585a53, _0x34de6a);
      return _0x3324fc.toString();
    }

    function _0x5d3f55(_0x3c4f0e, _0x2fd253) {
      try {
        var _0x3328fc = CryptoJS.AES.decrypt(_0x3c4f0e, _0x2fd253);
        return _0x3328fc.toString(CryptoJS.enc.Utf8);
      } catch {
        _0x2b6a68();
      }
    }

    function _0x86cae5(_0x201047) {
      _0x201047 == undefined && _0x2b6a68();
      var _0x428c37 = new XMLHttpRequest();
      _0x428c37.open('POST', 'https://api.pixelmelt.cyou');
      _0x428c37.setRequestHeader('Content-Type', 'application/json');
      _0x428c37.onerror = function () {
        alert('Connection to auth server failed, Please try again');
        _0x2b6a68();
      };
      _0x428c37.onreadystatechange = function () {
        if (_0x428c37.readyState === 4) {
          JSON.parse(_0x428c37.responseText).message == 'invalid key' &&
            _0x2b6a68();
          if (JSON.parse(_0x428c37.responseText).message == 'verification') {
            var _0x171918 = document.createElement('script');
            _0x171918.type = 'text/javascript';
            _0x171918.async = true;
            _0x171918.src =
              'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js';
            var _0x5e32c9 = document.getElementsByTagName('script')[0];
            typeof CryptoJS != 'undefined' &&
              ((window.CryptoJS = undefined),
              console.log('HEY! NONE OF THAT!'),
              _0x2b6a68());
            _0x5e32c9.parentNode.insertBefore(_0x171918, _0x5e32c9);

            function _0x2e5cab() {
              try {
                if (typeof CryptoJS == 'undefined') {
                  setTimeout(_0x2e5cab, 100);
                  return;
                }
                var _0x5ab2c0 = new Date().getTime() / 1000;
                _0x5ab2c0 = _0x5ab2c0.toString().substring(0, 8);
                _0x5ab2c0 = _0x5ab2c0;
                window.DRM = _0x1b0121(_0x5ab2c0, localStorage.acp);
                var _0x109dd2 = _0x5d3f55(
                  JSON.parse(_0x428c37.responseText).data,
                  'rVCRVorcaA2WvPmtQ4yqMmZL'
                );
                _0x5ab2c0 != _0x109dd2 && _0x2b6a68();
              } catch {
                _0x2b6a68();
              }
            }
            _0x2e5cab();
          } else {
            _0x2b6a68();
          }
        }
      };
      var _0x4c1a90 =
        '{"type":"verify",\n            "key":"' + _0x201047 + '"}';
      _0x428c37.send(_0x4c1a90);
    }
    _0x86cae5(localStorage.acp.toString());
  } catch {
    _0x2b6a68();
  }

  function _0x22cc28() {
    try {
      function _0xdc4f1e(_0x127e0d, _0x1f0d43) {
        var _0x722f2a = CryptoJS.AES.encrypt(_0x127e0d, _0x1f0d43);
        return _0x722f2a.toString();
      }

      function _0x19d87d(_0x1dc8ff, _0xa1a6c3) {
        try {
          var _0x5ad2dc = CryptoJS.AES.decrypt(_0x1dc8ff, _0xa1a6c3);
          return _0x5ad2dc.toString(CryptoJS.enc.Utf8);
        } catch {
          _0x2b6a68();
        }
      }
      let _0x403532 = _0x19d87d(window.DRM, localStorage.acp),
        _0x721656 = new _0x468673().getTime() / 1000;
      _0x721656 = _0x721656.toString().substring(0, 8);
      _0x721656 != _0x403532 && _0x2b6a68();
    } catch {
      _0x2b6a68();
    }
  }
  setTimeout(_0x22cc28, 3000);
})();

var random = Math.floor(Math.random() * 101);
random <= 1 ?
  (console.log(
    '%c You have found the secret logo ',
    'background: #000; color: #8934C2'
  ),
    (window.nordicclient = true)) :
  (window.nordicclient = false);

console.log(
  '%c%c%cLOADING A-CLIENT V',
  'font-size: 100px;',
  '',
  'color: #8934C2; font-size: 1.4em; background-color: black; border: .1em solid white; border-radius: 0.5em; padding: 1em; padding-left: 6em; padding-right: 6em; margin-left: 1.6em;'
);

function help() {
  console.log(
    "%c A-Client console commands: \n ac.help() shows this dialogue \n ac.snipe() list players and their ID's \n ac.snipe(ID) show the given player on your radar \n ac.ecpcheck() find all players with ecp's \n ac.nordic() toggles the nordic experience \n ac.secondaryspam() rips through credits but can shoot extremely fast \n ac.autosecondary() automaticly shoots/drops every secondary you have \n ac.stealmod() steals the ship code for the game you are in \n ac.multibox(0,5) spawns 5 multibox bots on the first team ",
    'background: #000; color: #8934C2'
  );
}

setTimeout(function () {
  console.clear();
  console.log(
    '%c%c%cDONE',
    'font-size: 100px;',
    '',
    'color: #8934C2; font-size: 1.4em; background-color: black; border: .1em solid white; border-radius: 0.5em; padding: 1em; padding-left: 6em; padding-right: 6em; margin-left: 1.6em;'
  );
  setTimeout(function () {
    console.clear();
    window.nordicclient ?
      console.log(
        '%c\u2004\u2004\u2004%c\n%cMade By Pix#7008',
        'font-size: 200px; background:url(https://cdn.upload.systems/uploads/N4HCFRfF.png) no-repeat; background-size: contain;',
        '',
        'color: #8934C2; font-size: 1em; background-color: black; border: .1em solid white; border-radius: 0.5em; padding: 1em; padding-left: 1.6em; padding-right: 1.6em; margin-left: 1.6em;'
      ) :
      console.log(
        '%c\u2004\u2004\u2004%c\n%cMade By Pix#7008',
        'font-size: 100px; background:url(https://cdn.upload.systems/uploads/ngqIvMj0.png) no-repeat; background-size: contain;',
        '',
        'color: #8934C2; font-size: 1em; background-color: black; border: .1em solid white; border-radius: 0.5em; padding: 1em; padding-left: 1.6em; padding-right: 1.6em; margin-left: 1.6em;'
      );
    help();
  }, 1000);
}, 3000);