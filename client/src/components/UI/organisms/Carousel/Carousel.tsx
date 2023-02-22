// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { albumImgs } from '../../../../assets/carouselImg';
import { Text, Button, Icon } from '../../atoms';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import './carousel.scss';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { useNavigate } from 'react-router-dom';

export default function Carousel() {
  const navigate = useNavigate();

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
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
              <Button
                theme="tertiary"
                size="auto"
                onClick={() => navigate('/music/Ditto-NewJeans')}
              >
                <>
                  <Text color="white">악보 보기</Text>
                  <Icon icon="HiChevronDoubleRight" size="xs" color="white" />
                </>
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
              <Button
                theme="tertiary"
                size="auto"
                onClick={() => navigate('/music/사건의 지평선-윤하')}
              >
                <>
                  <Text color="white">악보 보기</Text>
                  <Icon icon="HiChevronDoubleRight" size="xs" color="white" />
                </>
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
              <Button
                theme="tertiary"
                size="auto"
                onClick={() => navigate('/music/Kick Back-Yonezu Kenshi')}
              >
                <>
                  <Text color="white">악보 보기</Text>
                  <Icon icon="HiChevronDoubleRight" size="xs" color="white" />
                </>
              </Button>
            </div>
            <img src={albumImgs[2]} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
