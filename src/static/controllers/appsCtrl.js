'use strict';

angular.module('openappstore').controller('appsCtrl', function($scope, $state) {
    $scope.apps = {
        'openstore.mzanetti': {
            'id': 'openstore.mzanetti',
            'package': 'https://file.ac/w-fprv1yrTM/openstore.mzanetti_0.4_armhf.click',
            'version': '0.4',
            'icon': 'https://file.ac/w-fprv1yrTM/openstore.mzanetti.svg',
            'name': 'Open App Store',
            'tagline': 'App store for hacks, developer tools and other geeky things.',
            'description': 'Install hacks, developer tools and other geeky things on your phone. This opens the door to your new favorite playground. But remember, it can break your device. If you have version 0.1 installed, you need to manually upgrade to to 0.2 by downloading the packe from http://notyetthere.org/openstore/v1/openstore.mzanetti_0.2_armhf.click.',
            'source': 'https://code.launchpad.net/~mzanetti/+junk/openstore',
            'license': 'GPLv3',
            'filesize': '29194'
        },
        'tweakgeek.mzanetti': {
            'id': 'tweakgeek.mzanetti',
            'package': 'https://file.ac/w-fprv1yrTM/tweakgeek.mzanetti_0.3_armhf.click',
            'version': '0.3',
            'icon': 'https://file.ac/w-fprv1yrTM/tweakgeek.mzanetti.svg',
            'name': 'TweakGeek',
            'tagline': 'Geek up your phone!',
            'description': 'Access special settings on your device.',
            'source': 'https://code.launchpad.net/~mzanetti/+junk/tweakgeek',
            'license': 'GPLv3',
            'filesize': '21282'
        },
        'com.ubuntu.developer.rschroll.beru': {
            'id': 'com.ubuntu.developer.rschroll.beru',
            'package': 'https://file.ac/w-fprv1yrTM/com.ubuntu.developer.rschroll.beru_1.1.1_armhf.click',
            'srcpackage': 'https://file.ac/w-fprv1yrTM/com.ubuntu.developer.rschroll.beru_1.1.1.tar.bz2',
            'version': '1.1.1',
            'icon': 'https://file.ac/w-fprv1yrTM/com.ubuntu.developer.rschroll.beru.svg',
            'name': 'Beru',
            'tagline': 'Basic Ebook Reader for Ubuntu',
            'description': 'Beru allows you to read ebooks on your Ubuntu device. It keeps a library of books and saves your place in them. Beru also includes a browser to let you download books from the web. Note that only DRM-free Epubs are supported.',
            'source': 'https://github.com/rschroll/beru/',
            'license': 'GPLv3+',
            'filesize': '999362'
        },
        'bigmovingtext.mivoligo': {
            'id': 'bigmovingtext.mivoligo',
            'package': 'https://file.ac/w-fprv1yrTM/bigmovingtext.mivoligo_0.3_armhf.click',
            'version': '0.3',
            'icon': 'https://file.ac/w-fprv1yrTM/bigmovingtext.mivoligo.png',
            'name': 'Big Moving Text',
            'tagline': 'It\'s big, it\'s moving and it\'s text.',
            'description': 'Show what you want in large, friendly letters.\n\nThis version keeps the display on while there\'s text being displayed.',
            'source': 'https://code.launchpad.net/~mpredotka/big-moving-text/trunk',
            'license': 'Simplified BSD',
            'filesize': '331632'
        },
        'wifiscanner.mzanetti': {
            'id': 'wifiscanner.mzanetti',
            'package': 'https://file.ac/w-fprv1yrTM/wifiscanner.mzanetti_0.1_armhf.click',
            'version': '0.1',
            'icon': 'https://file.ac/w-fprv1yrTM/wifiscanner.mzanetti.svg',
            'name': 'WiFi Scanner',
            'tagline': 'A WiFi scanner',
            'description': 'Helps you finding a free WiFi channel.',
            'source': 'https://code.launchpad.net/~mzanetti/+junk/wifiscanner',
            'license': 'GPL v3',
            'filesize': '36504'
        }
    };

    $scope.app = null;
    if ($state.params.name && $scope.apps[$state.params.name]) {
        $scope.app = $scope.apps[$state.params.name];
    }

});