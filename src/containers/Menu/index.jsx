import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardProduct } from '../../components/CardProduct';
import { api } from '../../services/api';
import { formatPrice } from '../../utils/formatPrice';
import {
    BannerMenu,
    CategoryButton,
    CategoryMenu,
    Container,
    ProductsContainer,
} from './styles';

export function Menu() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    const [activeCategory, setActiveCategory] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            const newCategories = [{ id: 0, name: 'Todas' }, ...data];

            setCategories(newCategories);
        }

        async function loadProducts() {
            const { data } = await api.get('/products');

            const newProducts = data
                .filter((product) => product)
                .map((product) => ({
                    currencyValue: formatPrice(product.price),
                    ...product,
                }));

            setProducts(newProducts);
        }
        loadCategories();
        loadProducts();
    }, []);

    const filteredProducts =
        activeCategory === 0
            ? products
            : products.filter(
                  (product) => product.category_id === activeCategory,
              );

    return (
        <Container>
            <BannerMenu>
                <h1>
                    O MELHOR
                    <br />
                    HAMBÚRGUER
                    <br />
                    ESTÁ AQUI!
                    <span>Esse cardápio está irresistível!</span>
                </h1>
            </BannerMenu>

            <CategoryMenu>
                {categories.map((category) => (
                    <CategoryButton
                        key={category.id}
                        $isActiveCategory={category.id === activeCategory}
                        onClick={() => {
                            navigate(
                                {
                                    pathname: '/cardapio',
                                    search: `?categoria=${category.id}`,
                                },
                                {
                                    replace: true,
                                },
                            );
                            setActiveCategory(category.id);
                        }}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoryMenu>

            <ProductsContainer>
                {filteredProducts.map((product) => (
                    <CardProduct product={product} key={product.id} />
                ))}
            </ProductsContainer>
        </Container>
    );
}
