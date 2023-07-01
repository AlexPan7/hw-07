import {fetchProduct} from "../store/slices/productItemSlice"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../hooks';
import { addItemtoCart } from "../store/slices/cartSlice";
import { useEffect } from "react";

import { Typography, Image, Col, Row, Button, Space } from 'antd';

const { Title, Text } = Typography;

export const Product = () => {
  const { product, status } = useAppSelector((state) => state.productItem);
  const {id} = useParams();
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    id && dispatch(fetchProduct({id}));
  }, [id, dispatch]);

  const addToCart = () => {
    dispatch(
      addItemtoCart({
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        description: product.description,
        count: 1,
      })
    )
    navigate('/cart')
  }

  return <>
    <Row gutter={16} align={'middle'}>
      <Col span={8}>
        <Image src={product.image} />
      </Col>
      <Col span={12}>
        <Space direction='vertical' size='middle'>
          <Title>{product.title}</Title>
          <Text>{product.description}</Text>
          <Text strong>{product.price}</Text>
          <Button type="primary" onClick={addToCart}>Add to Cart</Button>
        </Space>
      </Col>
    </Row>
  </>
}
