import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Web Development',
  },
  {
    component: CNavGroup,
    name: 'PHP Framework',
    to: '/php',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Laravel',
        to: '/php/laravel',
      },
      {
        component: CNavItem,
        name: 'Codelgniter',
        to: '/php/codelgniter',
      },
      {
        component: CNavItem,
        name: 'Cake PHP',
        to: '/php/cakephp',
      },
      {
        component: CNavItem,
        name: 'Yii 2',
        to: '/php/yii2',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'PHP CMS',
    to: '/php',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Wordpress',
        to: '/php/wordpress',
      },
      {
        component: CNavItem,
        name: 'Shopify',
        to: '/php/shopify',
      },
      {
        component: CNavItem,
        name: 'Grav',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Frontend Development',
  },
  {
    component: CNavGroup,
    name: 'JS Framework',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Reactjs',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Anguler Js',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Vue Js',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Web Designes',
  },
  {
    component: CNavGroup,
    name: 'Web Designer',
    to: '/design',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'UI Design',
        to: '/design/ui',
      },
      {
        component: CNavItem,
        name: 'UX Design',
        to: '/design/ux',
      },
      {
        component: CNavItem,
        name: 'Website Design',
        to: '/design/webdesign',
      },
      {
        component: CNavItem,
        name: 'Branding/Logo Design',
        to: '/design/brandlogo',
      },
      {
        component: CNavItem,
        name: 'Brochure Design',
        to: '/design/brochure',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Search Engine Optimize',
  },
  {
    component: CNavGroup,
    name: 'SEO',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'On-page SEO',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Off-page SEO',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Technical SEO',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Local SEO',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'App store optimization',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: ' YouTube SEO',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Content Writer',
  },
  {
    component: CNavGroup,
    name: 'Content Writer',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Blog Writer',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Social Media',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Email Writer',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Script Writer',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Long-Form Writer',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Ad and Promo Writer',
        to: '/base/breadcrumbs',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      // {
      //   component: CNavItem,
      //   name: 'Accordion',
      //   to: '/base/accordion',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Breadcrumb',
      //   to: '/base/breadcrumbs',
      // },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
