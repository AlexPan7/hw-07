import { Layout, Typography } from 'antd';

const { Footer: LayoutFooter } = Layout;
const { Text } = Typography;

function PageFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <LayoutFooter style={{textAlign: "center", background: "#001529", color: "white"}}>
        <Text style={{color: "currentcolor"}}>&copy; {currentYear} by Shop App.</Text>
    </LayoutFooter>
  );
}

export default PageFooter;
