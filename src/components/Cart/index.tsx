
import { CartModal, CartHeader, CartList, CartTotalPrice, CartFinalityButton, CartCloseButton, CartContainer } from "./styles"
import { ICart } from "../../types";
import ItemCart from "../ItemCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";


interface CartModalProps {
    isOpen: boolean;
    onClose: () => void
}

export default function Cart({ isOpen, onClose }: CartModalProps) {


    const cart = useSelector((state: RootState) => state.cart);


    const getTotalPrice = () => {
        return cart.reduce(
            (acc: number, item: ICart) =>
                acc + item.quantity * item.product.price, 0
        )
    }
    const priceFormatterCart = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
    });



    return (
        <>
            {isOpen ? (
                <CartModal>
                <CartContainer>
                <CartHeader>
                        <h1>Carrinho de Compras</h1>
                    <CartCloseButton onClick={onClose}>X</CartCloseButton>
                </CartHeader>



                <CartList>
                    {cart.length == 0 ? null : (
                        <>
                            {cart.map((cart: ICart) => (

                                <ItemCart
                                    key={cart.product.id}
                                    product={cart.product}
                                    quantity={cart.quantity}
                                />


                            ))}
                        </>
                    )}

                </CartList>
                </CartContainer>

                <CartTotalPrice>
                    <h1>Total:</h1>
                    <h1>{priceFormatterCart.format(getTotalPrice())}</h1>
                </CartTotalPrice>

                <CartFinalityButton>
                    <h1>Finalizar Compra</h1>
                </CartFinalityButton>

            </CartModal>
            ): null}
            
        </>
    )
}