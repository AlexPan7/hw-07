import { useEffect } from 'react';
import { fetchProducts } from '../store/slices/productSlice';
import { EproductSliseStatus } from '../types/productSliceTypes';
import { useAppDispatch, useAppSelector } from '../hooks';

import { Col, Row, Space, Card } from 'antd';
const { Meta } = Card;
import { To, useNavigate } from 'react-router-dom';

interface NavigateFunction {
  (
    to: To,
    options?: {
      replace?: boolean;
      state?: any;
    }
  ): void;
  (delta: number): void;
}

export const Home = () => {
  const { productList, status } = useAppSelector((state) => state.products);
  const { categoryId, searchValue } = useAppSelector((state) => state.filter);
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ categoryId, searchValue }));
  }, []);
  
  return (
    <Space direction='vertical' size='middle'>
      {status === EproductSliseStatus.Success ? (
        <Row gutter={24}  align='stretch'>
          {productList.map((product) => (
            <Col key={product.id} span={6} style={{marginBottom: 24}}>
              <Card
                onClick={()=>{navigate(`/product/${product.id}`)}}
                hoverable
                cover={<img style={{ aspectRatio: 1, objectFit: 'contain' }} alt="example" src={product.image} />}
                style={{height: '100%'}}
              >
                <Meta title={product.title} description={product.description} />
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </Space>
  );
};
