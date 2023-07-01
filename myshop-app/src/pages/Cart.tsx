import { useNavigate, Link } from 'react-router-dom';
import { clearCartItems, addItemtoCart, removeCartItem, minusCartItem } from "../store/slices/cartSlice";
import { ICartItem } from '../types/cartSliceTypes';
import { useAppSelector, useAppDispatch } from '../hooks';

import { Col, Row, Button, Typography, List, Space, Divider, Empty } from 'antd';

const { Title, Paragraph, Text } = Typography;

export const Cart = () => {
  const { items, totalCount, totalPrice } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(clearCartItems());
  };
  const handleMinus = (id: number) => {
    dispatch(minusCartItem(id));
  };
  const handleRemove = (id: number) => {
    dispatch(removeCartItem(id));
  };
  const handlePlus = (item: ICartItem) => {
    dispatch(addItemtoCart(item));
  };

  return (
    <>
      {items.length > 0 ? (
        <>
          <List style={{ background: '#fff' }}>
            {items.map((product) => (
              <List.Item gutter={24} key={product.id} style={{ padding: 24 }}>
                <Row gutter={30}>
                  <Col span={4}>
                    <img
                      style={{
                        aspectRatio: 1,
                        background: '#fff',
                        objectFit: 'contain',
                        width: '100%'
                      }}
                      alt="example"
                      src={product.image}
                    />
                  </Col>
                  <Col span={20}>
                    <Title level={2}>{product.title}</Title>
                    <Paragraph>{product.description}</Paragraph>
                    <Row align="middle" justify="start" style={{ marginBottom: 24 }}>
                      <Text strong>{product.price}</Text>
                      <Text style={{ margin: '0 0.5rem' }}>*</Text>
                      <Button
                        style={{ margin: '0 0.5rem' }}
                        type="default"
                        onClick={() => handleMinus(product.id)}
                      >
                        -
                      </Button>
                      <Text>{product.count}</Text>
                      <Button
                        style={{ margin: '0 0.5rem' }}
                        type="default"
                        onClick={() => handlePlus(product)}
                      >
                        +
                      </Button>
                      <Text style={{ margin: '0 0.5rem' }}>=</Text>
                      <Text style={{ margin: '0 0.5rem' }}>
                        ${product.count * product.price}
                      </Text>
                    </Row>
                    <Button
                      type="primary"
                      onClick={() => handleRemove(product.id)}
                    >
                      Remove from Cart
                    </Button>
                  </Col>
                </Row>
              </List.Item>
            ))}
          </List>
          <Divider />
          <Row gutter={24}>
            <Col flex="auto">
              <Text style={{marginRight: 24}}>Total in cart: {totalCount}</Text>
              <Text strong>Total Price:{totalPrice}</Text>
            </Col>
            <Col flex="none">
              <Button type="primary" onClick={handleClear}>
                Clear Cart
              </Button>
            </Col>
          </Row>
        </>
      ) : (
        <Empty
          description = {
            <>
              <Title level={1}>Cart is Empty</Title>
              <Link to="/">Back to Home</Link>
            </>
          }
         />
      )}
    </>
  );
};
