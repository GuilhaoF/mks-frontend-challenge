import Image from "next/image";
import { Card, CardImage, CardContent, CardTitle, CardPrice, CardDescription, CardFooter, CardButton, CardMain } from "./styles";
import { IProduct } from "../../types";
import { useDispatch } from "react-redux";
import { addItem, AppDispatch } from "../../redux/store";



interface CardProps {
    product: IProduct
}

export default function Cards(props: CardProps) {
    const dispatch: AppDispatch = useDispatch();
    const { id, name, description, brand, photo, price } = props.product;



    const priceFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        maximumFractionDigits: 0, 
      });
      
    return (
        <Card key={id}>
            <CardMain>
            <CardImage>
                <Image loader={() => photo} src={photo} alt="" width={100} height={100} />
            </CardImage>
            <CardContent>
                <CardTitle>
                    {name}
                </CardTitle>
                <CardPrice>
                    <span>{priceFormatter.format(price)}</span>
                </CardPrice>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardContent>
            <CardFooter>
                <CardButton data-testid="add-cart" onClick={() => dispatch(addItem({ product: props.product, quantity: 0 } ))}  >
                    <Image src="/Bag.svg" alt="icone sacola" width={12} height={13.5} />
                    Comprar
                </CardButton>
            </CardFooter>
            </CardMain>
            
        </Card>
    )
}


