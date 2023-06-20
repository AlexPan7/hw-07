import { Layout, Typography , Menu } from 'antd';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const { Header: LayoutHeader } = Layout;
const { Text } = Typography;

function PageHeader() {
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    {
      key: '/',
      label: 'Home'
    },
    {
      key: '/products',
      label: 'Products'
    },
    {
      key: '/cart',
      label: 'Cart'
    },
  ]

  const handleMenuClick = ({key}: any) => {
    if(key) {
      navigate(key)
    }
  }

  return (
    <LayoutHeader style={{display: "flex", justifyContent: 'space-between'}}>
      <Link to="/"><Text style={{color: '#ffffff'}} strong>Shop Logo</Text></Link>
      <Menu 
        theme='dark' 
        mode='horizontal' 
        selectedKeys={[location.pathname]} 
        items={navigation}
        onClick={handleMenuClick}
        disabledOverflow
      >
      </Menu>
    </LayoutHeader>
  );
}

export default PageHeader;
