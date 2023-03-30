import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Autoplay } from "swiper";
import { Container } from "@mui/system";
import "swiper/css";
import "swiper/css/pagination";
import icons from '../../data/Tech.json';
import Icons from "./Icons";
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <Container sx={{ mb: 5, position: 'relative' }}>
            <Swiper
                observer={true}
                observeParents={true}
                modules={[FreeMode, Navigation, Pagination, Autoplay]}
                grabCursor={true}
                loop={true}
                parallax={true}
                className="mySwiper"
                breakpoints={{
                    0: {
                        slidesPerView: 3,
                        spaceBetween: 3,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 5,
                    },
                    1024: {
                        slidesPerView: 8,
                        spaceBetween: 5,
                    },
                    1280: {
                        slidesPerView: 8,
                        spaceBetween: 5,
                    },
                }}
            >
                {
                    icons.map((item, i) => <SwiperSlide><Icons key={item.id} item={item} /></SwiperSlide>)
                }
            </Swiper>
        </Container>
    );
};

export default Slider;