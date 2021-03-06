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
import Button from '../../../../../Button';
import DemoContent from '../components/DemoContent';
import Popover from '../../../../../Popover';

export default {
  id: 'disabled',
  title: 'Disabled',
  description: `In addition to disabling the Popover, you should also disable the trigger component.
Popovers will open and close regardless of the properties set on the trigger.`,
  scope: { Button, DemoContent, Popover },
  source: `
    <Popover disabled content={<DemoContent />}>
      <Button disabled>Open Popover</Button>
    </Popover>`
};
