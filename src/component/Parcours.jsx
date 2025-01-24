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
                        <h2 data-swiper-parallax-y="-200%">De la peinture</h2>
                        <p data-swiper-parallax-y="-300%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis minima fuga ipsum odio nesciunt voluptates, voluptatibus cum iste saepe veniam dignissimos corporis quaerat sit. Nemo facere ullam tempore inventore dicta.</p>
                </div>                    
</SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                <div className="text-container">
                        <h2 data-swiper-parallax-y="-50%">Des dessins</h2>
                        <p data-swiper-parallax-y="-150%">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rerum eius in quod eveniet nobis hic unde dolorum. Accusamus dolorem quas iure officia molestias. Eius autem odit non beatae nulla.
                        </p>
</div>
                    </SwiperSlide>
                    <SwiperSlide className="swiperSlide">
                    <div className="text-container">
                        <h2 data-swiper-parallax-y="-50%">Et des dinos</h2>
                        <p data-swiper-parallax-y="-150%">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quia perferendis perspiciatis at pariatur magni officia ipsa, ab sint, illum tenetur vel explicabo accusamus voluptatum doloribus deserunt sunt minima? Qui.
                        </p>
    </div>
                    </SwiperSlide>
            </Swiper>
        </div>

    );
}

export default Parcours;