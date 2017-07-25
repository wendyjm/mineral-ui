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
import { createStyledComponent } from '@mineral-ui/component-utils';
import IconCheckCircle from '@mineral-ui/icon/dist/es/lib/IconCheckCircle';
import IconError from '@mineral-ui/icon/dist/es/lib/IconError';
import IconWarning from '@mineral-ui/icon/dist/es/lib/IconWarning';

type Props = {
  message: string,
  variant?: 'success' | 'warning' | 'error'
};

const icons = {
  error: <IconError color="currentColor" />,
  success: <IconCheckCircle color="currentColor" />,
  warning: <IconWarning color="currentColor" />
};

const formFieldMessageTheme = (props, baseTheme) => ({
  FormFieldMessage_color_text: baseTheme.color_gray_80,
  FormFieldMessage_color_text_error: baseTheme.color_text_danger,
  FormFieldMessage_color_text_success: baseTheme.color_text_success,
  FormFieldMessage_color_text_warning: baseTheme.color_text_warning,

  FormFieldMessage_fontSize: baseTheme.fontSize_ui,
  FormFieldMessage_fontWeight: baseTheme.fontWeight_semiBold
});

const formFieldMessageStyles = (props, baseTheme) => {
  let theme = formFieldMessageTheme(props, baseTheme);

  return {
    color: props.variant
      ? theme[`FormFieldMessage_color_text_${props.variant}`]
      : theme.FormFieldMessage_color_text,
    fontSize: theme.FormFieldMessage_fontSize,
    fontWeight: theme.FormFieldMessage_fontWeight
  };
};

const Root = createStyledComponent('div', formFieldMessageStyles, {
  displayName: 'FormFieldMessage',
  includeStyleReset: true
});

/**
 * FormFieldMessage component
 */
export default function FormFieldMessage({
  message,
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    variant,
    ...restProps
  };

  const icon = variant ? icons[variant] : undefined;

  return (
    <Root {...rootProps}>
      {icon}{message}
    </Root>
  );
}
