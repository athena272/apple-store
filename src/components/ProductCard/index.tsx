import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { Button, Card, CardBody, CardSubtitle } from "reactstrap"
import { ProductType } from "../../services/products"
import SuccessToast from "../SuccessToast"
import { useCart } from "@/hooks/useCart"

interface ProductCardProps {
    product: ProductType
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const { id, name, imageUrl, price } = product
    const { addProduct } = useCart()

    return (
        <>
            <Card>
                <Link href={`/products/${id}`}>
                    <Image
                        className="card-img-top"
                        src={imageUrl}
                        alt="Product"
                        height={201}
                        width={201}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                </Link>

                <CardBody>
                    <Link href={`/products/${id}`} style={{ textDecoration: 'none' }}>
                        <h2 className="card-title fs-5" style={{ cursor: 'pointer', color: '#212529' }}>
                            {name}
                        </h2>
                    </Link>

                    <CardSubtitle className="mb-3 text-muted fs-6" tag="h3">
                        R$ {price}
                    </CardSubtitle>

                    <Button
                        color="dark"
                        className="pb-2"
                        block
                        onClick={() => {
                            addProduct(product)
                            setToastIsOpen(true)
                            setTimeout(() => setToastIsOpen(false), 1000 * 3)
                        }}
                    >
                        Adicionar ao Carrinho
                    </Button>

                </CardBody>
            </Card>

            <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
        </>
    )
}

export default ProductCard