import React from 'react';
import Link from 'next/link';

import { urlFor } from '../LIB/client';

const Product = ({ product: { image, name, slug, price } }) => {
    return (
        <div className='productParent'>
            <Link href={`/product/${slug.current}`}>
                <div className="product-card">
                    <img
                        src={urlFor(image && image[0])}
                        width={250}
                        height={250}
                        className="product-image"
                    />
                    <h2 className="product-name">{name}</h2>
                    <br />
                    <h3 className="product-price">${price}</h3> 
                </div>
            </Link>

        </div>
    )
}


export default Product