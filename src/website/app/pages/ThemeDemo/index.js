import React from 'react';
import Button from '../../../../Button';
import Card, { CardImage, CardBlock, CardTitle } from '../../../../Card';
import Dropdown from '../../../../Dropdown';
import IconBattery50 from '../../../../Icon/IconBattery50';
import IconShoppingCart from '../../../../Icon/IconShoppingCart';
import Link from '../../../../Link';
import Menu, { MenuItem, MenuDivider, MenuGroup } from '../../../../Menu';
import Popover from '../../../../Popover';

const popoverContent = <p>Foo</p>;

const dropdownData = [
  {
    title: 'Children of Húrin',
    items: [
      { text: 'Theodred' },
      { text: 'Beren' },
      { text: 'Lúthien', iconStart: <IconShoppingCart /> },
      { text: 'Aragorn' }
    ]
  },
  {
    title: 'Fair Folk',
    items: [
      {
        text: 'Galadriel'
      },
      { text: 'Fëanor' },
      { text: 'Fingolfin' }
    ]
  },
  {
    title: `Durin's Folk`,
    items: [
      { text: 'Ori' },
      { text: 'Balin' },
      { text: 'Fundin' },
      { text: 'Nori' }
    ]
  }
];

export default function ThemeDemo() {
  return (
    <div>
      <Button primary>Let’s</Button>
      <Button>Go</Button>
      <Button variant="success">To</Button>
      <Button variant="warning">The</Button>
      <Button variant="danger">Mall</Button>
      <Card>
        <CardTitle subtitle="to where you once belonged">Get Back</CardTitle>
        <CardBlock>
          Jojo was a man who thought he was a loner<br />
          But he knew it wouldn’t last<br />
          Jojo left his home in Tucson, Arizona<br />
          For some California grass
        </CardBlock>
      </Card>
      <p>
        A link to <Link href="example.com">example.com</Link>.
      </p>
      <IconBattery50 size="5em" />
      <Menu>
        <MenuItem>First</MenuItem>
        <MenuItem variant="success">Second</MenuItem>
        <MenuItem variant="warning">Third</MenuItem>
        <MenuDivider />
        <MenuItem variant="danger">Fourth</MenuItem>
      </Menu>
      <Popover content={popoverContent}>
        <Button>🤔</Button>
      </Popover>
      <Dropdown data={dropdownData}>
        <Button>Drop it like it’s 🔥</Button>
      </Dropdown>
    </div>
  );
}
