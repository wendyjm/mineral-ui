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
import { componentTheme as menuDividerComponentTheme } from '../../../../Menu/MenuDivider';
import { componentTheme as menuGroupComponentTheme } from '../../../../Menu/MenuGroupTitle';
import { componentTheme as menuItemComponentTheme } from '../../../../Menu/MenuItem';
import menuExamples from './examples/menu';
import menuDividerExamples from './examples/menu-divider';
import menuGroupExamples from './examples/menu-group';
import menuItemExamples from './examples/menu-item';

const menuDoc = require('!!react-docgen-loader!../../../../Menu/Menu');
const menuDividerDoc = require('!!react-docgen-loader!../../../../Menu/MenuDivider');
const menuGroupDoc = require('!!react-docgen-loader!../../../../Menu/MenuGroup');
const menuItemDoc = require('!!react-docgen-loader!../../../../Menu/MenuItem');

import bestPractices from './bestPractices';

export default [
  {
    bestPractices: bestPractices.menu,
    doc: menuDoc,
    examples: menuExamples,
    slug: 'menu',
    title: 'Menu',
    whenHowToUse: `A Menu should be used whenever you need to display a concise list of options to your user.
Think through the consequenses of the actions in your Menu.
If there are potentially destructive actions exposed, be sure to use the correct [variants](/color#color-variants) to provide a hint to the user about what will happen after picking an option.

Labels should have clear messaging in the form of \`<verb> <noun>\`, if possible.`
  },
  {
    bestPractices: bestPractices.menuDivider,
    componentTheme: menuDividerComponentTheme,
    doc: menuDividerDoc,
    examples: menuDividerExamples,
    slug: 'menu-divider',
    subcomponent: true,
    title: 'MenuDivider',
    whenHowToUse: `MenuDividers are used to visually separate [MenuGroups](../menu-group) or individual [MenuItems](../menu-item) to establish hierarchy in your Menu.
They could be used to separate items in a long list if all elements exist on the same conceptual level.
For example, if your Menu is composed of a long list of songs, a MenuDivider could be placed between songs that start with A, B, C, etc.

Do not use MenuDividers to simply separate options as a decoration, or to provide "underlines" to the MenuItem.`
  },
  {
    bestPractices: bestPractices.menuGroup,
    componentTheme: menuGroupComponentTheme,
    doc: menuGroupDoc,
    examples: menuGroupExamples,
    slug: 'menu-group',
    subcomponent: true,
    title: 'MenuGroup',
    whenHowToUse: `MenuGroups are used to group conceptually related elements, and to hint at other available, related options.
If the intention of the grouping is not immediately obvious, add a section title via the \`title\` prop to aid in your users' decision-making process.

If there are only a few elements in a couple of groups, and the grouping logic is obvious, consider using a [MenuDivder](../menu-divider) instead.`
  },
  {
    bestPractices: bestPractices.menuItem,
    componentTheme: menuItemComponentTheme,
    doc: menuItemDoc,
    examples: menuItemExamples,
    slug: 'menu-item',
    subcomponent: true,
    title: 'MenuItem',
    whenHowToUse: `Use MenuItems to present the user with a choice of actions, and don't use MenuItems to display content that is not actionable.
For example, don't create a [Menu](../menu) with several options where the last item is an un-clickable status message showing the number of available servers.
This information is not _actionable_ and perhaps belongs somewhere else in your interface.

Use the secondary text to give hints about extra functionality or provide status.`
  }
];
