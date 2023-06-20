import { Breadcrumb } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const paths = pathname.split('/').filter(x => x);

  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...paths.map((path, i) => ({
      title: path,
    })),
  ];


  return (
    <Breadcrumb style={{
      textTransform: 'capitalize',
      padding: '0 0 10px'
    }}
    items={breadcrumbItems}
    />
  );
};

export default Breadcrumbs;
