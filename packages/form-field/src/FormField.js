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
import React, { Children, cloneElement } from 'react';
import { createStyledComponent } from '@mineral-ui/component-utils';
import FormFieldMessage from './FormFieldMessage';
import FormFieldLabel from './FormFieldLabel';

type Props = {
  /** Child input element */
  children: MnrlReactNode,
  /** Visually hide label, though available for assistive technologies */
  hideLabel?: boolean,
  /** Label text */
  label: string,
  /** Message to appear underneath the input element */
  message?: string,
  /** TODO */
  required?: boolean,
  /** Variation */
  variant?: 'success' | 'warning' | 'error'
};

const formFieldTheme = (props, baseTheme) => ({
  FormField_margin: `${baseTheme.spacing_quarter}`
});

const formFieldStyles = (props, baseTheme) => {
  let theme = formFieldTheme(props, baseTheme);

  return {
    // FIXME: this is insufficient as it could contain anything
    '& input': {
      margin: theme.FormField_margin
    }
  };
};

const Root = createStyledComponent('div', formFieldStyles, {
  displayName: 'FormField',
  includeStyleReset: true
});

/**
 * FormField component
 */
export default function FormField({
  children,
  hideLabel,
  label,
  message,
  variant,
  ...restProps
}: Props) {
  const rootProps = {
    ...restProps
  };

  const formFieldLabelProps = {
    label,
    isHidden: hideLabel
  };

  const formFieldMessageProps = {
    message,
    variant
  };

  // Clone children in order to pass variant prop, so it does not need to be
  // manually specificed on the child input.
  const clonedChildren = Children.map(children, child =>
    cloneElement(child, { variant })
  );

  return (
    <Root {...rootProps}>
      <FormFieldLabel {...formFieldLabelProps}>
        {clonedChildren}
      </FormFieldLabel>
      <FormFieldMessage {...formFieldMessageProps} />
    </Root>
  );
}
