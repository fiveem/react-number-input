import React from 'react';

import { storiesOf } from '@storybook/react';

import NumberInput from '../src'

storiesOf('NumberInput', module)
    .add('default', () => <NumberInput value="10px" />)