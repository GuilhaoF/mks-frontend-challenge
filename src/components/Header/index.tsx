import { Container, ButtonCart } from "./styles"
import CartIcon from './Cart.svg';
import Image from "next/image";
import { useSelector } from "react-redux";
import { ICart } from "../../types";
import { RootState } from "../../redux/store";


interface HeaderProps {
    onOpenCartModal: () => void
}

export default function Header({onOpenCartModal}:HeaderProps) {
    const cart = useSelector((state: RootState) => state.cart);

    const getTotalItems = () => {
        return cart.reduce(
            (acc: number, item: ICart) =>
                acc + item.quantity , 0
        )
    }
    return (
        <Container>
            <span>
                <strong>MKS</strong>
                Sistemas
            </span>
            <ButtonCart onClick={onOpenCartModal} data-testid="cart-button">
                <Image src='/Cart.svg' alt='carrinho de produtos' width='16' height='16' />
                <span>{getTotalItems()}</span>
            </ButtonCart>
        </Container>
    )
}