// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { albumImgs } from '../../../../assets/carouselImg';
import { Text, Button } from '../../atoms';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './carousel.scss';

// import required modules
import { Pagination, Navigation } from 'swiper';

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="carousel-wrapper first">
            <div className="carousel-detail-wrapper">
              <Text size="lg" weight="medium" color="white">
                뉴진스(NewJeans)
              </Text>
              <Text size="txlg" weight="bold" color="white">
                Ditto
              </Text>
              <Button theme="tertiary" size="auto">
                <Text color="white">{'악보보기>>'}</Text>
              </Button>
            </div>
            <img src={albumImgs[0]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-wrapper second">
            <div className="carousel-detail-wrapper">
              <Text size="lg" weight="medium" color="white">
                윤하(YOUNHA)
              </Text>
              <Text size="txlg" weight="bold" color="white">
                사건의 지평선
              </Text>
              <Button theme="tertiary" size="auto">
                <Text color="white">{'악보보기>>'}</Text>
              </Button>
            </div>
            <img src={albumImgs[1]} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="carousel-wrapper third">
            <div className="carousel-detail-wrapper">
              <Text size="lg" weight="medium" color="white">
                요네즈 켄시(Yonezu Kenshi)
              </Text>
              <Text size="txlg" weight="bold" color="white">
                Kick Back
              </Text>
              <Button theme="tertiary" size="auto">
                <Text color="white">{'악보보기>>'}</Text>
              </Button>
            </div>
            <img src={albumImgs[2]} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
