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
import React from 'react';
import {
  createStyledComponent,
  getNormalizedValue
} from '@mineral-ui/component-utils';

type Props = {
  /** Initial input value. Primarily for use with uncontrolled form components */
  defaultValue?: string,
  /** TODO */
  disabled?: boolean,
  /** Icon located at the start of the input */
  iconStart?: boolean,
  /** Icon located at the end of the input */
  iconEnd?: boolean,
  /** */
  inputRef?: (input: $FlowFixMe) => {},
  /** */
  invalid?: boolean,
  /** */
  name?: string,
  /** Handler called when input value changes */
  onChange?: (event: Object) => {},
  /** */
  placeholder?: string,
  /** */
  required?: boolean,
  /** */
  size?: 'small' | 'medium' | 'large',
  /** */
  type?: string,
  /** */
  value?: string,
  /** */
  variant?: 'success' | 'warning' | 'error'
};

const textInputTheme = (props, baseTheme) => ({
  TextInput_backgroundColor: baseTheme.color_white, // TODO: create baseTheme.backgroundColor_input?
  TextInput_backgroundColor_error: baseTheme.backgroundColor_input_danger,
  TextInput_backgroundColor_success: baseTheme.backgroundColor_input_success,
  TextInput_backgroundColor_warning: baseTheme.backgroundColor_input_warning,
  TextInput_borderColor: baseTheme.borderColor,
  TextInput_borderColor_error: baseTheme.borderColor_danger,
  TextInput_borderColor_success: baseTheme.borderColor_success,
  TextInput_borderColor_warning: baseTheme.borderColor_warning,
  TextInput_borderRadius: '0.4em',
  TextInput_borderWidth: '1px',
  TextInput_color_text: baseTheme.color_gray_80,
  TextInput_fontSize: baseTheme.fontSize_ui,
  TextInput_padding: baseTheme.spacing_single,
  [`TextInput_size_${props.size}`]: baseTheme[`size_${props.size}`]
});

const textInputStyles = (props, baseTheme) => {
  let theme = textInputTheme(props, baseTheme);

  return {
    backgroundColor: props.variant
      ? theme[`TextInput_backgroundColor_${props.variant}`]
      : theme.TextInput_backgroundColor,
    borderColor: props.variant
      ? theme[`TextInput_borderColor_${props.variant}`]
      : theme.TextInput_borderColor,
    borderRadius: theme.TextInput_borderRadius,
    borderStyle: 'solid',
    borderWidth: theme.TextInput_borderWidth,
    color: theme.TextInput_color_text,
    fontSize: getNormalizedValue(
      theme.TextInput_fontSize,
      baseTheme.fontSize_ui
    ),
    height: getNormalizedValue(
      theme[`TextInput_size_${props.size}`],
      baseTheme.fontSize_ui
    ),
    padding: getNormalizedValue(theme.TextInput_padding, baseTheme.fontSize_ui),
    width: '100%'
  };
};

const Root = createStyledComponent('input', textInputStyles, {
  displayName: 'TextInput',
  includeStyleReset: true,
  rootEl: 'input'
});

/**
 * TextInput component
 */
export default function TextInput({
  inputRef,
  invalid,
  required,
  size = 'medium',
  type = 'text',
  ...restProps
}: Props) {
  const rootProps = {
    'aria-invalid': invalid,
    'aria-required': required,
    innerRef: ref => {
      if (inputRef) {
        inputRef(ref);
      }
    },
    required,
    size,
    type,
    ...restProps
  };

  // TODO: input element needs wrapper with reset applied, then set fontSize on Input and use getNormalizedValue util
  // wrapper is also needed for icon positioning and likely other things

  return <Root {...rootProps} />;
}
