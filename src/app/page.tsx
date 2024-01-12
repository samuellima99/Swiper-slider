'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Card } from '@/components/Card';

import 'swiper/css';
import 'swiper/css/pagination';
import './app.css';

export default function Home() {
  return (
    <main className="w-full h-screen flex items-center">
      <div className="w-full overflow-hidden swiper-cards ml-0">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
            el: '.swiper-cards .swiper-pagination',
          }}
          modules={[Pagination]}
          className="swiper-cards"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <Card url="https://t.ctcdn.com.br/Am4XV4bX2zFtaX605ZJbT-yfC4E=/1200x675/smart/i396480.jpeg" />
          </SwiperSlide>
          <SwiperSlide>
            <Card url="https://gaming-cdn.com/images/news/articles/3231/cover/1000x563/marvel-s-spider-man-2-un-video-confronto-tra-le-modalita-performance-e-quality-cover652fad7d00340.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Card url="https://assetsio.reedpopcdn.com/spider_mDMN5bt.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp" />
          </SwiperSlide>
          <SwiperSlide>
            <Card url="https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=.jpg&quality=91&imagick=/wp-content/uploads/2023/01/spider-man-21.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Card url="https://www.adrenaline.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=.jpg&quality=91&imagick=uploads.adrenaline.com.br/2023/05/Marvels-Spider-Man-2-nao-vai-ter-elementos-cooperativos-912x569.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <Card url="https://www.campustech.fr/wp-content/uploads/2023/10/spiderman-2-ps5.jpg" />
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination" />
      </div>
    </main>
  );
}
