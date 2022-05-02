import '@testing-library/jest-dom';
import { configure as enzymeConfigure } from 'enzyme';
import { configure as reactTestingLibraryConfigure } from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16';
import { config } from 'react-transition-group';
import nock from 'nock';
import axios from 'axios'
import { setLogger } from 'react-query'

nock.disableNetConnect();
axios.defaults.adapter = require('axios/lib/adapters/http');
setLogger({
    log: console.log,
    warn: console.warn,
    error: () => {},
});
config.disabled = true;
enzymeConfigure({ adapter: new Adapter() });
reactTestingLibraryConfigure({ testIdAttribute: 'data-test-id' });
Object.defineProperty(window, 'location', {
    value: {
        href: ''
    }
});