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
import { PureComponent } from 'react';
import { createStyledComponent } from '@mineral-ui/component-utils';
import TextInput from '@mineral-ui/text-input';
import FormField from '../../FormField';

const DemoLayout = createStyledComponent('div', {
  '& > *': {
    marginBottom: '1rem'
  }
});

// TODO:
// Might need separate validation examples
// field validation example
// form validation example
// controlled vs. uncontrolled

export default {
  title: 'Simple Validation',
  description:
    'Enter keywords, "valid, invalid, or warning" to trigger different validation states.',
  scope: { DemoLayout, FormField, PureComponent, TextInput },
  source: `() => {
  class MyForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isInvalid: true,
        message: 'Please enter some text',
        value: '',
        variant: undefined
      };

      this.validate = this.validate.bind(this);
    }

    validate(event) {
      const value = event.target.value;
      if (value === 'invalid') {
        this.setState({
          isInvalid: true,
          message: 'You did something wrong. Try again?',
          value,
          variant: 'error'
        });
      } else if (value === 'warning') {
        this.setState({
          isInvalid: true,
          message: 'Oops, please check the value and try again.',
          value,
          variant: 'warning'
        });
      } else if (value === 'valid') {
        this.setState({
          isInvalid: false,
          message: 'Success! Good job.',
          value,
          variant: 'success'
        });
      } else {
        this.setState({
          isInvalid: true,
          message: 'Please enter some text',
          value,
          variant: undefined
        });
      }
    }

    render() {
      const { isInvalid, message, variant, value } = this.state;
      const FormFieldProps = {
        label: 'Sample',
        message,
        variant
      };
      const textInputProps = {
        isInvalid,
        onChange: this.validate,
        value
      };

      return (
        <DemoLayout>
          <FormField {...FormFieldProps}>
            <TextInput {...textInputProps} />
          </FormField>
        </DemoLayout>
      );
    }
  }

  return <MyForm />;
}`
};
