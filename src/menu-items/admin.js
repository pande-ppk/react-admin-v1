// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const admin = {
  id: 'admin',
  title: 'Admin',
  type: 'group',
  children: [

    {
      id: 'employee-page',
      title: 'Employee Page',
      type: 'item',
      url: '/employee-page',
      icon: icons.QuestionOutlined
    }
  ]
};

export default admin;
