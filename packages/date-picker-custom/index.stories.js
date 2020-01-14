import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DatePickerCustom from './src';

storiesOf('DatePickerCustom', module).add('with text', () => (
  <DatePickerCustom label="Some date" value={'2019-01-01'} />
));
