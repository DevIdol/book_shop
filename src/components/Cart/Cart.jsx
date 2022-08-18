import { Container } from 'react-bootstrap'
import styles from './Cart.module.css'
import CartItem from './CartItem'

const Cart = () => {
  return (
    <Container className={styles.cartContainer}>
      <CartItem />
      <div>
        <h3>Summary</h3>
        <p>Total Product</p>
        <p>Total Price</p>
        <button>Check Out</button>
      </div>
    </Container>
  )
}

export default Cart
