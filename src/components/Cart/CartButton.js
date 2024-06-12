import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { toggleCart } from "../../slice/uiSlice";
const CartButton = (props) => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleCart());
  };

  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
