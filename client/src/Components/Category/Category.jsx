import React from 'react'
import './Category.css'
const Category = () => {
    return (
        <div>
            <div className="text-container heading-container  relative ">
                <span className="sub-title">WHAT WE PROVIDE</span>
                <h1 className="text-5xl text-white font-bold mt-2">Our Services</h1>
            </div>
            <div className='category-container'>
                <div className='category-inner-container'>
                    <div className='category-inner-left-container'>
                    <h1>Photography</h1>
                        <p>Our photography services are designed to capture the essence of every moment, from the smallest details to the grandest scenes. We specialize in a variety of photography styles, including portraits, events, weddings, and lifestyle shoots, tailoring each session to your unique needs and vision. Using professional-grade equipment and a creative eye, we ensure every shot is perfectly framed and full of emotion. Whether you're celebrating a milestone or simply want to preserve cherished memories, our team is committed to providing you with stunning, high-quality images that you&apos;ll treasure for years to come.</p>
                    </div>
                    <div className='category-inner-right-container'>
                        <img src="/assets/services/photo.jpg" alt="" />
                    </div>
                </div>

                <div className='category-inner-container'>
                    
                    <div className='category-inner-right-container'>
                        <img src="/assets/services/video.jpg" alt="" />
                    </div>
                    <div className='category-inner-left-container'>
                    <h1>Videography</h1>
                        <p>Our videography services are all about telling your story through the power of video. Whether it's a wedding, corporate event, or personal project, we capture every moment with cinematic quality and attention to detail. Our team uses state-of-the-art equipment and creative techniques to produce visually stunning videos that evoke emotion and leave a lasting impact. From dynamic event coverage to intimate documentaries, we work closely with you to ensure your vision comes to life on screen. Let us help you preserve your most important moments in a way that words alone cannot express.</p>
                    </div>
                </div>

                <div className='category-inner-container'>
                <div className='category-inner-left-container'>
                    <h1>Event Management</h1>
                        <p>At Mighty Plethora, we specialize in creating seamless and unforgettable events that exceed your expectations. From intimate gatherings to grand celebrations, our expert event planners handle every detail with precision and care. We work closely with you to understand your vision and bring it to life, ensuring every aspect — from venue selection and décor to logistics and coordination — is flawless. With a focus on creativity, organization, and excellence, we ensure your event is memorable, stress-free, and perfectly executed. Let us take care of the planning so you can focus on enjoying the moment.</p>
                    </div>
                    <div className='category-inner-right-container'>
                        <img src="/assets/services/event.jpg" alt="" />
                    </div>
                    
                </div>

                <div className='category-inner-container'>
                
                    <div className='category-inner-right-container'>
                        <img src="/assets/services/catering.jpg" alt="" />
                    </div>
                    <div className='category-inner-left-container'>
                    <h1>Catering</h1>
                        <p>At Mighty Plethora, we bring a unique blend of flavors and creativity to every event with our exceptional catering services. Whether it's an intimate dinner, a wedding reception, or a corporate gathering, we offer a wide range of delicious menu options tailored to your tastes and preferences. Our team of skilled chefs uses the finest ingredients to craft mouthwatering dishes that not only satisfy but also delight. With impeccable service and attention to detail, we ensure that your guests enjoy a memorable dining experience that complements the overall atmosphere of your event. Let us handle the food, so you can focus on making lasting memories.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category