import React, { useEffect, useState } from 'react';
import './InfiniteScroll.css';

export interface ProductList {
    products: Product[];
    total: number | any;
    skip: number;
    limit: number | any;
}

export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand?: string;
    sku: string;
    weight: number;
    dimensions: Dimensions;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Review[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: Meta;
    images: string[];
    thumbnail: string;
}

export interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

export interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

export interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

const InfiniteScroll: React.FC = () => {
    const [products, setProducts] = useState<ProductList | null>(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`);
            const data = await res.json();
            setProducts((prevProducts) => ({
                ...data,
                products: [...(prevProducts?.products || []), ...data.products],
            }));
            setPage(page + 1);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const myThrottle = (cb: any, delay: number) => {
        let last = 0;
        return (...args: any) => {
            let now = Date.now();
            if (now - last < delay) return;
            last = now;
            return cb(...args);
        };
    };

    const handleScroll = myThrottle(() => {
        if (
            window.innerHeight + document.documentElement.scrollTop + 500 >
            document.documentElement.offsetHeight &&
            !loading && products && (products.products.length < products.total)
        ) {
            fetchProducts();
        }
    }, 500);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll, loading, products?.total]);

    return (
        <>
            <h1>Infinite Scrolling</h1>
            {products?.products?.length && (
                <div className='products'>
                    {products?.products.map((prod) => (
                        <div className='products__single' key={prod.id}>
                            <img src={prod.thumbnail} alt={prod.title} />
                            <span>{prod.title}</span>
                        </div>
                    ))}
                </div>
            )}
            {loading && <p>Loading...</p>}
        </>
    );
};

export default InfiniteScroll;
