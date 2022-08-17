import { Container } from 'react-bootstrap'
import styles from './Cart.module.css'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <Container className={styles.cartContainer}>
      <CartItem />
    </Container>
  )
}

export default Cart
