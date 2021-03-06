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
import React, { cloneElement, Component } from 'react';
import { findDOMNode } from 'react-dom';
import { canUseDOM } from 'exenv';
import { Manager } from 'react-popper';
import { createStyledComponent } from '../utils';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';

type Props = {
  /** Focuses the Popover content when opened */
  autoFocus?: boolean,
  /** Trigger for the Popover */
  children: React$Node,
  /** Content of the Popover */
  content: $FlowFixMe,
  /** Disables the Popover */
  disabled?: boolean,
  /** Include an arrow on the Popover content pointing to the trigger */
  hasArrow?: boolean,
  /** For use with controlled components, in which the app manages Popover state */
  isOpen?: boolean,
  /** Plugins that are used to alter behavior. See [PopperJS docs](https://popper.js.org/popper-documentation.html#modifiers) for options.*/
  modifiers?: Object,
  /** Called when Popover is closed */
  onClose?: (event: SyntheticEvent<>) => void,
  /** Called when Popover is opened */
  onOpen?: (event: SyntheticEvent<>) => void,
  /** Open the Popover immediately upon initialization */
  defaultIsOpen?: boolean,
  /** Placement of the Popover */
  placement?:
    | 'auto'
    | 'auto-end'
    | 'auto-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start',
  /** Focuses trigger when Popover is closed */
  restoreFocus?: boolean,
  /** Subtitle displayed under the title */
  subtitle?: React$Node,
  /** Title of the Popover */
  title?: React$Node,
  /** @Private Custom trigger component */
  trigger?: React$Element<*>,
  /** @Private Ref for the Popover trigger */
  triggerRef?: Function,
  /** Display the content with default styles */
  wrapContent?: boolean
};

type State = {
  isOpen?: boolean
};

const Root = createStyledComponent(
  Manager,
  {
    display: 'inline-block'
  },
  {
    displayName: 'Popover',
    rootEl: 'div'
  }
);

/**
 * Popovers hold supporting information or user controls.
 * Popovers will float over page content.
 * Placement, scroll behavior and focus management can all be controlled to customize your implementation.
 * Popovers can be toggled on a user action or a state change.
 */
export default class Popover extends Component<Props, State> {
  static defaultProps = {
    autoFocus: true,
    hasArrow: true,
    placement: 'bottom',
    restoreFocus: true,
    wrapContent: true
  };

  props: Props;

  state: State = {
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  popoverContent: ?React$Component<*, *>;

  popoverTrigger: ?React$Component<*, *>;

  componentWillUnmount() {
    this.removeDocumentEventListeners();
  }

  render() {
    const {
      children,
      content,
      disabled,
      hasArrow,
      modifiers,
      placement,
      subtitle,
      title,
      trigger,
      triggerRef,
      wrapContent,
      ...restProps
    } = this.props;

    const { isOpen } = this.isControlled() ? this.props : this.state;
    if (isOpen) {
      this.addDocumentEventListeners();
    } else {
      this.removeDocumentEventListeners();
    }

    const rootProps = {
      ...restProps
    };
    const popoverTriggerProps = {
      children,
      disabled,
      isOpen,
      onClick: !disabled ? this.toggleOpenState : undefined,
      ref: node => {
        this.popoverTrigger = node;
        triggerRef && triggerRef(node);
      }
    };

    const popoverTrigger = trigger ? (
      cloneElement(trigger, popoverTriggerProps)
    ) : (
      <PopoverTrigger {...popoverTriggerProps} />
    );

    let popoverContent;
    if (wrapContent) {
      const popoverContentProps = {
        hasArrow,
        modifiers,
        placement,
        ref: node => {
          this.popoverContent = node;
        },
        subtitle,
        title
      };

      popoverContent = (
        <PopoverContent {...popoverContentProps}>{content}</PopoverContent>
      );
    } else {
      popoverContent = cloneElement(content, {
        ref: node => {
          this.popoverContent = node;
        }
      });
    }

    return (
      <Root {...rootProps}>
        {popoverTrigger}
        {isOpen && popoverContent}
      </Root>
    );
  }

  addDocumentEventListeners = () => {
    if (canUseDOM) {
      global.document.addEventListener('click', this.handleDocumentClick, true);
      global.document.addEventListener(
        'keydown',
        this.handleDocumentKeydown,
        true
      );
    }
  };

  close = (event: SyntheticEvent<>) => {
    if (this.isControlled()) {
      this.closeActions(event);
    } else {
      this.setState(
        () => ({ isOpen: false }),
        () => {
          this.closeActions(event);
        }
      );
    }
  };

  closeActions = (event: SyntheticEvent<>) => {
    this.props.onClose && this.props.onClose(event);
    this.props.restoreFocus && this.focusTrigger();
  };

  focusContent = () => {
    const el = findDOMNode(this.popoverContent); // eslint-disable-line react/no-find-dom-node
    if (el && el instanceof HTMLElement) {
      el.focus();
    }
  };

  focusTrigger = () => {
    const el = findDOMNode(this.popoverTrigger); // eslint-disable-line react/no-find-dom-node
    if (el && el.firstChild && el.firstChild instanceof HTMLElement) {
      el.firstChild.focus();
    }
  };

  handleDocumentClick = (event: SyntheticEvent<>) => {
    if (this.isClickOutsideComponent(event)) {
      this.close(event);
    }
  };

  handleDocumentKeydown = (event: SyntheticEvent<>) => {
    if (event.key === 'Escape') {
      this.close(event);
    }
  };

  isClickOutsideComponent = (event: SyntheticEvent<>) => {
    const node = findDOMNode(this); // eslint-disable-line react/no-find-dom-node
    return (
      node &&
      node instanceof HTMLElement &&
      event.target &&
      event.target instanceof HTMLElement &&
      !node.contains(event.target)
    );
  };

  isControlled = () => {
    return this.props.isOpen !== undefined;
  };

  open = (event: SyntheticEvent<>) => {
    if (this.isControlled()) {
      this.openActions(event);
    } else {
      this.setState(
        () => ({ isOpen: true }),
        () => {
          this.openActions(event);
        }
      );
    }
  };

  openActions = (event: SyntheticEvent<>) => {
    this.props.onOpen && this.props.onOpen(event);
    this.props.autoFocus && this.focusContent();
  };

  removeDocumentEventListeners = () => {
    if (canUseDOM) {
      global.document.removeEventListener(
        'click',
        this.handleDocumentClick,
        true
      );
      global.document.removeEventListener(
        'keydown',
        this.handleDocumentKeydown,
        true
      );
    }
  };

  toggleOpenState = (event: SyntheticEvent<>) => {
    const { isOpen } = this.isControlled() ? this.props : this.state;
    if (isOpen) {
      this.close(event);
    } else {
      this.open(event);
    }
  };
}
