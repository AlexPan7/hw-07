import { Layout, Space } from 'antd';
import PageHeader from '../components/Header/Header';
import PageFooter from '../components/Footer/Footer';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
import {Outlet} from 'react-router-dom';

const {Content} = Layout

const PublicLayout = () => (
  <Space direction='vertical' style={{overflow: "hidden", width: "100vw"}}>
    <Layout style={{ minHeight: "100vh"}}>
      <PageHeader />
      <Content style={{flex: '1', padding: '1rem'}}>
        <Breadcrumbs />
        <Outlet />
      </Content>
      <PageFooter />
    </Layout>
  </Space>
);

export default PublicLayout;