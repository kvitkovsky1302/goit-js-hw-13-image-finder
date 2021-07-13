import * as PNotifyMobile from '@pnotify/mobile/';
import * as PNotifyCountdown from '@pnotify/countdown';
import { defaultModules } from '@pnotify/core';
defaultModules.set(PNotifyMobile, {});
export default {
    notMachResults: {
        type: 'error',
        title: 'Not found images',
        text: 'Please, enter query',
        delay: 2000,
        width: '300px',
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
    incorrectQuery: {
        type: 'error',
        title: 'Not found images',
        text: 'Please, enter correct query',
        delay: 2000,
        width: '300px',
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
    successMoreResult: {
        type: 'success',
        title: 'Found more images',
        delay: 2000,
        width: '300px',
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
    successResult: {
        type: 'success',
        title: 'Found 12 images',
        delay: 2000,
        width: '300px',
        modules: new Map([
            ...defaultModules,
            [PNotifyCountdown, {}]
        ])
    },
};