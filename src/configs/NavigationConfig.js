import {
  DashboardOutlined,
  UserOutlined,
  PictureOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  SettingOutlined,
  MobileOutlined,
  ShoppingOutlined,
  FileTextOutlined,
  MailOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH} from 'configs/AppConfig'

const mainNavTree = [{
  key: 'main',
  path: `${APP_PREFIX_PATH}/main`,
  title: 'sidenav.main',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'main-dashboard',
      path: `${APP_PREFIX_PATH}/main/dashboard`,
      title: 'sidenav.main.dashboard',
      icon: DashboardOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-catalog',
      path: `${APP_PREFIX_PATH}/main/catalog`,
      title: 'sidenav.main.catalog',
      icon: ShoppingCartOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-catalog-products',
          path: `${APP_PREFIX_PATH}/main/catalog/products`,
          title: 'sidenav.main.catalog.products',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-сategories',
          path: `${APP_PREFIX_PATH}/main/catalog/сategories`,
          title: 'sidenav.main.catalog.сategories',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-сollections',
          path: `${APP_PREFIX_PATH}/main/catalog/сollections`,
          title: 'sidenav.main.catalog.сollections',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-catalog-combo',
          path: `${APP_PREFIX_PATH}/main/catalog/combo`,
          title: 'sidenav.main.catalog.combo',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-orders',
      path: `${APP_PREFIX_PATH}/main/orders`,
      title: 'sidenav.main.orders',
      icon: ShoppingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-clients',
      path: `${APP_PREFIX_PATH}/main/clients`,
      title: 'sidenav.main.сlients',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: [
        {
          key: 'main-сlients-user-list',
          path: `${APP_PREFIX_PATH}/main/clients/user-list`,
          title: 'sidenav.main.сlients.user-list',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
        {
          key: 'main-сlients-groups',
          path: `${APP_PREFIX_PATH}/main/clients/groups`,
          title: 'sidenav.main.сlients.groups',
          icon: '',
          breadcrumb: true,
          submenu: []
        },
      ]
    },
    {
      key: 'main-banners',
      path: `${APP_PREFIX_PATH}/main/banners`,
      title: 'sidenav.main.banners',
      icon: PictureOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-promo',
      path: `${APP_PREFIX_PATH}/main/promo`,
      title: 'sidenav.main.promo',
      icon: GiftOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-offlinePoint',
      path: `${APP_PREFIX_PATH}/main/offline-points`,
      title: 'sidenav.main.offlinePoints',
      icon: ShopOutlined,
      breadcrumb: false,
      submenu: [
        {
          key: 'main-offlinePoint-addresses',
          path: `${APP_PREFIX_PATH}/main/offline-points/addresses`,
          title: 'sidenav.main.offlinePoints.addresses',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
        {
          key: 'main-offlinePoint-geofences',
          path: `${APP_PREFIX_PATH}/main/offline-points/geofences`,
          title: 'sidenav.main.offlinePoints.geofences',
          icon: '',
          breadcrumb: false,
          submenu: []
        },
      ]
    },
    {
      key: 'main-employees',
      path: `${APP_PREFIX_PATH}/main/employees`,
      title: 'sidenav.main.employees',
      icon: UsergroupAddOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'main-newsletters',
      path: `${APP_PREFIX_PATH}/main/newsletters`,
      title: 'sidenav.main.newsletters',
      icon: MailOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const systemNavTree = [{
  key: 'system',
  path: `${APP_PREFIX_PATH}/system`,
  title: 'sidenav.system',
  icon: '',
  breadcrumb: false,
  submenu: [
    {
      key: 'system-settings',
      path: `${APP_PREFIX_PATH}/system/settings`,
      title: 'sidenav.system.settings',
      icon: SettingOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-mobileApp',
      path: `${APP_PREFIX_PATH}/system/mobile-app`,
      title: 'sidenav.system.mobileApp',
      icon: MobileOutlined,
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'system-pageLogs',
      path: `${APP_PREFIX_PATH}/system/page-logs`,
      title: 'sidenav.system.pageLogs',
      icon: FileTextOutlined,
      breadcrumb: false,
      submenu: []
    }
  ]
}]

const navigationConfig = [
  ...mainNavTree,
  ...systemNavTree,
]

export default navigationConfig;
