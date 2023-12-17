import { Layout, Menu, Popconfirm } from 'antd'
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from '@ant-design/icons'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { cleanUserInfo, fetchUserInfo } from '../../store/modules/user'
import { useSelector } from 'react-redux'

const { Header, Sider } = Layout

const items = [
  {
    label: '首页',
    key: '/',
    icon: <HomeOutlined />,
  },
  {
    label: '文章管理',
    key: '/article',
    icon: <DiffOutlined />,
  },
  {
    label: '创建文章',
    key: '/publish',
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  const navigate = useNavigate()
  const onMenuClick =(route) => {
    const path = route.key
    navigate(path)
  }

  const location = useLocation()
  const selectedKeys = [location.pathname]

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserInfo())
  },[dispatch])

  const { userInfo } = useSelector((state) => state.user)

  const onLogout = () => {
    dispatch(cleanUserInfo())
    navigate('/login')
  }
  
  return (
    <Layout className='w-screen h-screen'>
      <Header className="header p-0 flex items-center justify-between">
        <div className="logo w-[200px] h-[60px] bg-cover bg-[url('./assets/logo.png')] " />
        <div className="user-info pr-5 space-x-2">
          <span className="user-name text-white">{userInfo.name}</span>
          <span className="user-logout text-white cursor-pointer">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消" onConfirm={onLogout}>
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            onClick={onMenuClick}
            mode="inline"
            theme="dark"
            selectedKeys={selectedKeys}
            defaultSelectedKeys={['1']}
            items={items}
            style={{ height: '100%', borderRight: 0 }}></Menu>
        </Sider>
        <Layout className="layout-content overflow-y-auto" style={{ padding: 20 }}>
          <Outlet />
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout