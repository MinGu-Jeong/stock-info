import * as S from "./MainIndex.style";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../../styles/swiper.style.css";

export default function MainIndex() {
  return (
    <div>
      <S.IndexContainer>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>코스피</S.IndexItemTitle>
          <S.IndexItemPointRise>2600</S.IndexItemPointRise>
          <S.IndexItemPercentRise>+0.12%</S.IndexItemPercentRise>
        </S.IndexItemWrapper>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>코스닥</S.IndexItemTitle>
          <S.IndexItemPointFall>920</S.IndexItemPointFall>
          <S.IndexItemPercentFall>-0.52%</S.IndexItemPercentFall>
        </S.IndexItemWrapper>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>미국 USD</S.IndexItemTitle>
          <S.IndexItemPointFall>1260</S.IndexItemPointFall>
          <S.IndexItemPercentFall>-0.32%</S.IndexItemPercentFall>
        </S.IndexItemWrapper>
        <S.IndexItemWrapper>
          <S.IndexItemTitle>일본 JPY</S.IndexItemTitle>
          <S.IndexItemPointFall>908</S.IndexItemPointFall>
          <S.IndexItemPercentFall>-0.17%</S.IndexItemPercentFall>
        </S.IndexItemWrapper>
      </S.IndexContainer>
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </div>
  );
}
