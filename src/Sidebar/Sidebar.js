import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

export default function Sideebar() {
  return (
    <div>
        <Sidebar>
            <Menu>
                <SubMenu label="Menu">
                    <MenuItem> Orders </MenuItem>
                    <MenuItem>Wished Orders </MenuItem>
                    <MenuItem> SignOut </MenuItem>
                    <MenuItem> Offers </MenuItem>
                    <MenuItem> Setting </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    </div>
  )
}
