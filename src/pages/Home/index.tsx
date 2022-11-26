import Cards from '../../components/Cards'
import Header from '../../components/Header'
import { Container, ContainerCards } from '../../styles/home.styles'
import { useGetProductsQuery } from "../../services/products"
import { IParamProductRequest, IProduct, orderBy, sortBy } from '../../types'
import { useState } from 'react'
import Cart from '../../components/Cart'
import Footer from '../../components/Footer'


export default function Home() {

    const [isOpenCart, setIsOpenCart] = useState(false)

    function handleOpenCartModal() {
        setIsOpenCart(true)
    }
    function handleCloseCartModal() {
        setIsOpenCart(false)
    }

    const productQuery: IParamProductRequest = {
        page: 1,
        rows: 8,
        sortBy: sortBy.id,
        orderBy: orderBy.DESC,
    }
    const { data, isLoading } = useGetProductsQuery(productQuery);

    return (
        <div>
            <Header onOpenCartModal={handleOpenCartModal} />
            <Container>
                <ContainerCards>
                    {isLoading ? "Loading.." : (
                        data?.products.map((product: IProduct) => (
                            <Cards
                                key={product.id}
                                product={product}
                            />
                        ))
                    )}
                </ContainerCards>
             
            </Container>
            <Cart isOpen={isOpenCart} onClose={handleCloseCartModal} />
            <Footer/>
        </div>
    )
}