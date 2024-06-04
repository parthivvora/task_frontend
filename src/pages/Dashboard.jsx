/* eslint-disable no-unused-vars */
import { Button, DatePicker } from 'antd';
import Sidebar from '../components/Sidebar'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Chart from "react-apexcharts";
import sliderImg1 from "../assets/image-1.jpg"
import sliderImg2 from "../assets/image-2.jpg"
import sliderImg3 from "../assets/image-3.jpg"
import sliderImg4 from "../assets/image-4.jpg"
import sliderImg5 from "../assets/image-5.jpg"
import sliderImg6 from "../assets/image-6.jpg"
import sliderImg7 from "../assets/image-7.jpg"
import Navbar from '../components/Navbar';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';

function Dashboard() {
    const [isShow, setIsShow] = useState(false)
    const [isShowSidebar, setIsShowSidebar] = useState(false)

    // Chart Data
    const [options, setOptions] = useState({
        chart: {
            id: "basic-bar"
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
    });
    const [series, setSeries] = useState([
        {
            name: "user data",
            data: [30, 40, 45, 50, 49, 60, 70, 91, 66]
        }
    ]);

    return (
        <>
            <Sidebar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />
            <Navbar isShowSidebar={isShowSidebar} setIsShowSidebar={setIsShowSidebar} />
            <div className="dashboard-section-part mt-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <Button type="primary" onClick={() => setIsShow(!isShow)} className='text-xl px-3 py-4'>Show Calender</Button>
                            <DatePicker className={`mt-4 w-fit ${isShow ? 'block' : 'hidden'}`} />
                        </div>
                        <div className="col-sm-12">
                            <h1 className='text-4xl font-semibold mt-[1.2rem] sm:mt-[2rem]'>Slider</h1>
                            <div className="slider-part mt-3">
                                <Swiper
                                    spaceBetween={30}
                                    slidesPerView={3}
                                    loop={true}
                                    navigation={true}
                                    modules={[Navigation, Autoplay]}
                                    autoplay={{
                                        delay: 1500,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                        },
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                    <SwiperSlide> <img src={sliderImg1} alt="slider-image" className='w-full h-[20rem]' /> </SwiperSlide>
                                    <SwiperSlide> <img src={sliderImg2} alt="slider-image" className='w-full h-[20rem]' /> </SwiperSlide>
                                    <SwiperSlide> <img src={sliderImg3} alt="slider-image" className='w-full h-[20rem]' /> </SwiperSlide>
                                    <SwiperSlide> <img src={sliderImg4} alt="slider-image" className='w-full h-[20rem]' /> </SwiperSlide>
                                    <SwiperSlide> <img src={sliderImg5} alt="slider-image" className='w-full h-[20rem]' /> </SwiperSlide>
                                    <SwiperSlide> <img src={sliderImg6} alt="slider-image" className='w-full h-[20rem]' /> </SwiperSlide>
                                    <SwiperSlide> <img src={sliderImg7} alt="slider-image" className='w-full h-[20rem]' /> </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h1 className='text-4xl font-semibold mt-5'>Chart</h1>
                            <div className="chart-part mt-2">
                                <Chart
                                    options={options}
                                    series={series}
                                    type="bar"
                                    width="500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
