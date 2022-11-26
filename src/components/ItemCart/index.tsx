import { ItemCartStyle, ItemCartButton, ItemCartPrice, QuantityCart, ContainerQuantity } from './styles';
import { RootState } from "../../redux/store";
import { addItem, decrementItem, removeItem, incrementItem } from '../../redux/store/'
import { ICart, IProduct } from '../../types';
import Image from "next/image";
import { useDispatch, useSelector } from 'react-redux';



export default function ItemCart (cartItem :ICart) {
    const dispath = useDispatch()

    const priceFormatterCart = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0,
    });

    return (
        <>
            <ItemCartStyle key={cartItem.product.id}>
                <Image loader={() => cartItem.product.photo} src={cartItem.product.photo} alt="Logo Empresa MKS" width={46} height={57} priority />
                <h1>{cartItem.product.name}</h1>

                <ContainerQuantity>
                    <QuantityCart>
                        <span>Qtd:</span>
                        <div>
                            <button data-testid="decrement-button" onClick={() => dispath(decrementItem(cartItem.product.id))}>-</button>
                            <span>{cartItem.quantity}</span>
                            <button data-testid="increment-button"  onClick={() => dispath(incrementItem(cartItem.product.id))}>+</button>
                        </div>
                    </QuantityCart>

                    <ItemCartPrice>{priceFormatterCart.format(cartItem.quantity * cartItem.product.price)}</ItemCartPrice>
                </ContainerQuantity>

                <ItemCartButton data-testid="remove-button"  onClick={() => dispath(removeItem(cartItem.product.id))}>X</ItemCartButton>
            </ItemCartStyle>
        </>
    )
}

