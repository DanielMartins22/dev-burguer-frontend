import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import { OffersCarousel } from '../../components/OffersCarousel';
import { HomeContainer, CarouselContainer, BannerHome } from './styles';

export function Home() {
    return (
        <HomeContainer>
            <section>
                <BannerHome>
                    <h1>Bem vindo(a)!</h1>
                </BannerHome>

                <CarouselContainer>
                    <div>
                        <CategoriesCarousel />
                        <OffersCarousel />
                    </div>
                </CarouselContainer>
            </section>
        </HomeContainer>
    );
}
