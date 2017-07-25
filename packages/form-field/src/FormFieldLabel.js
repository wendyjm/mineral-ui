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

type Props = {
  /** Any other content to be rendered within the label */
  children?: MnrlReactNode,
  /** ID of associated form control */
  htmlFor?: string,
  /** Visually hidden, though available for assistive technologies */
  isHidden?: boolean,
  /** Label text */
  label: string
};

const visuallyHiddenStyles = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px'
};

const formFieldLabelTheme = (props, baseTheme) => ({
  FormFieldLabel_color_text: baseTheme.color_gray_80,
  FormFieldLabel_fontSize: baseTheme.fontSize_ui,
  FormFieldLabel_fontWeight: baseTheme.fontWeight_semiBold
});

const formFieldLabelStyles = (props, baseTheme) => {
  let theme = formFieldLabelTheme(props, baseTheme);

  return {
    color: theme.FormFieldLabel_color_text,
    fontSize: theme.FormFieldLabel_fontSize,
    fontWeight: theme.FormFieldLabel_fontWeight
  };
};

const labelTextStyles = props => {
  return props.isHidden ? visuallyHiddenStyles : {};
};

const Root = createStyledComponent('label', formFieldLabelStyles, {
  displayName: 'FormFieldLabel',
  includeStyleReset: true,
  rootEl: 'label'
});

const LabelText = createStyledComponent('span', labelTextStyles, {
  displayName: 'LabelText'
});

/**
 * FormFieldLabel component
 */
export default function FormFieldLabel({
  children,
  isHidden,
  label,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };

  const labelTextProps = {
    isHidden
  };

  return (
    <Root {...rootProps}>
      <LabelText {...labelTextProps}>{label}</LabelText>
      {children}
    </Root>
  );
}
