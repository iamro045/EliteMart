import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
    // Commented-out Route (if it's unnecessary, consider removing it)
    // <Route path="/products/:productId"> 

    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    console.log(productId); // ✅ Removed unnecessary curly braces

    const product = all_product.find((e) => e.id === Number(productId));

    return (
        <div className='product'>
            <BreadCrums product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    );
}

export default Product;
