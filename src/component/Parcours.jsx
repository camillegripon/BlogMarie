import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import '../style/parcours.css';

function Parcours() {
    return (
        <div className="swiper-container">
            <Swiper
                modules={[Parallax, Pagination, Navigation]}
                parallax={true}
                pagination={{ clickable: true }}
                navigation={true}
                spaceBetween={30}
                slidesPerView={1}
                speed={600}
                direction="vertical"
            >
                {/* Arrière-plan */}
                <div
                    slot="container-start"
                    className="parallax-bg"
                    data-swiper-parallax-scale="1.05"
                    data-swiper-parallax-y="-10%"
                ></div>

                {/* Montagne */}
                <div
                    className="parallax-mount"
                    data-swiper-parallax-y="-100"
                    data-swiper-parallax-scale="1.1"
                ></div>

                {/* Arbre */}
                <div
                    className="parallax-tree"
                    data-swiper-parallax-y="-150"
                    data-swiper-parallax-scale="1.15"
                ></div>

                {/* Diapositives */}

                    <SwiperSlide className="swiperSlide">
                <div className="text-container">
                        <h2 data-swiper-parallax-y="-200%">Un chemin artistique et éducatif</h2>
                        <p data-swiper-parallax-y="-300%">J&apos;ai exploré l&apos;art sous toutes ses formes, en commençant par l&apos;ENNAI à Chambéry, avant de perfectionner mes compétences à l&apos;école LTAM au Luxembourg, où j&apos;ai obtenu un BTS. Aujourd&apos;hui, future professeure des écoles, je conserve une passion intacte pour le dessin, notamment l&apos;illustration jeunesse.</p>
                </div>                    
</SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                <div className="text-container">
                        <h2 data-swiper-parallax-y="-50%">Un avenir où art et péagogie se rencontrent</h2>
                        <p data-swiper-parallax-y="-150%">
                            À travers mes créations, je m&apos;inspire de mon parcours éducatif et artistique pour raconter des histoires uniques. Ma passion pour l&apos;illustration jeunesse et les dinosaures nourrit mon rêve de créer des œuvres qui émerveillent les petits comme les grands.
                        </p>
</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                    <div className="text-container">
                        <h2 data-swiper-parallax-y="-50%">Quand le dessin donne vie aux rêves</h2>
                        <p data-swiper-parallax-y="-150%">
                            J&apos;imagine des univers colorés et poétiques où l&apos;imaginaire prend vie. Mon ambition : transmettre ma créativité et ma sensibilité artistique, tout en éveillant les esprits à la beauté des histoires visuelles.
                        </p>
    </div>
                    </SwiperSlide>
            </Swiper>
        </div>

    );
}

export default Parcours;