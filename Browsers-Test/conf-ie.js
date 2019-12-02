/*
For 32-bit Windows installations, the key in the registry is
HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Internet Explorer\Main\FeatureControl\FEATURE_BFCACHE.
For 64-bit Windows installations, the key is HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\Microsoft\Internet
Explorer\Main\FeatureControl\FEATURE_BFCACHE. 
Note that the FEATURE_BFCACHE
subkey may or may not be present, and should be created if it is not present. 
Inside this key (FEATURE_BFCACHE), create a DWORD value named iexplore.exe with the value of 0.

Here you need to specify DWORD value named iexplore.exe with the value of 0 has to be set both for 64bit and 32 bit Windows.
*/

exports.config = {
//Connect to the external selenimum server and 
//test through browsers via selenium

  seleniumAddress: 'http://localhost:4444/wd/hub', 

localSeleniumStandaloneOpts: {
    jvmArgs: [
      '-Dwebdriver.ie.driver=./IEDriverServer_x64_3.141.0/IEDriverServer.exe'
    ]
  },
   
 
   specs: ['./test-ie.js'],

  capabilities: {
    'browserName': 'internet explorer',
     'version': 'ANY',
     'ignoreZoomSetting':true,
     'platform': 'ANY'
  },

// Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 50000,
        isVerbose: true,
        includeStackTrace: true

    }

};