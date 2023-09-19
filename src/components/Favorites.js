import React, { useState } from 'react'
import MenuItem from './MenuItem';
import { Menu, Button, Drawer } from 'antd';
import { EyeOutlined, YoutubeOutlined, VideoCameraOutlined, StarFilled } from '@ant-design/icons';

const { SubMenu } = Menu

function Favorites({ favoriteItems }) {
  const [displayDrawer, setDisplayDrawer] = useState(false)
  const { VIDEO, STREAM, CLIP } = favoriteItems;

  const onDrawerClose = () => {
    setDisplayDrawer(false)
  }

  const onFavoriteClick = () => {
    setDisplayDrawer(true)
  }

  return (
    <>
      <Button type="primary" shape="round" onClick={onFavoriteClick} icon={<StarFilled />}>
        My Favorites
      </Button>
      <Drawer
        title="My Favorites"
        placement="right"
        width={720}
        visible={displayDrawer}
        onClose={onDrawerClose}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={['streams']}
          style={{ height: '100%', borderRight: 0 }}
          selectable={false}
        >
          <SubMenu key={'streams'} icon={<EyeOutlined />} title="Streams">
            <MenuItem items={STREAM} />
          </SubMenu>
          <SubMenu key={'videos'} icon={<YoutubeOutlined />} title="Videos">
            <MenuItem items={VIDEO} />
          </SubMenu>
          <SubMenu key={'clips'} icon={<VideoCameraOutlined />} title="Clips">
            <MenuItem items={CLIP} />
          </SubMenu>
        </Menu>
      </Drawer>
    </>
  )
}

export default Favorites