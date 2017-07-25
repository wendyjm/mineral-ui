/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import { createStyledComponent } from '@mineral-ui/component-utils';
import FormField from '../../FormField';
import TextInput from '@mineral-ui/text-input';

const DemoLayout = createStyledComponent('div', {
  '& > *': {
    marginBottom: '1rem'
  }
});

export default {
  title: 'Messages',
  description: '',
  scope: { DemoLayout, FormField, TextInput },
  source: `<DemoLayout>
  <FormField label="Sample" message="This is help text">
    <TextInput />
  </FormField>
  <FormField label="Sample" message="Success! You've done it." variant="success">
    <TextInput />
  </FormField>
  <FormField label="Sample" message="Oops, please check the formatting and try again." variant="warning">
    <TextInput />
  </FormField>
  <FormField label="Sample" message="Sorry, that username's already taken. Try another?" variant="error">
    <TextInput />
  </FormField>
</DemoLayout>`
};
