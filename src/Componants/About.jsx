export default function About()
{
    return <>
   
     <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" style={{minHeight:"400px"}}>
                    <div className="position-relative h-100">
                        <img className="img-fluid position-absolute w-100 h-100" src="img/about.jpg" alt="" style={{ objectFit: 'cover' }}/>
                    </div>
                </div>

                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                    <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6>
                    <h1 className="mb-4">Welcome to Pulse Donor</h1>
                    <p className="mb-4">Welcome to Pulse Donor, a beacon of hope and life for those in need.
                         We are dedicated to connecting compassionate donors with recipients, saving lives one drop at a time.
                       At Pulse Donor , we believe that every individual has the power to make a difference.
                        By donating blood, you are not just giving; you are gifting life, hope, and a brighter tomorrow.</p>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online classNamees</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Skilled Instructors</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>Online classNamees</p>
                        </div>
                        <div className="col-sm-6">
                            <p className="mb-0"><i className="fa fa-arrow-right text-primary me-2"></i>International Certificate</p>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Read More</a>
                </div>

               



            </div>
        </div>
    </div>



    {/* <Service/> */}

    <div className="container-xxl py-5" >
        <div className="container" >
            <div className="row g-4" >

            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4" style={{height:"250px"}}>
                            <i className="fa fa-3x fa-book-open text-primary mb-4"></i>
                            <h5 className="mb-3">"In moments of need, we stand by you with strength, care, and hope."</h5>
                            {/* <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p> */}
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4" style={{height:"250px"}}>
                            <i className="fa fa-3x fa-graduation-cap text-primary mb-4"></i>
                            <h5 className="mb-3"> Quick Access </h5>
                            <p>Find blood donors near you in just a few clicks.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4" style={{height:"250px"}} >
                            <i className="fa fa-3x fa-globe text-primary mb-4"></i>
                            <h5 className="mb-3">Safe and Reliable</h5>
                            <p>Every unit of blood is rigorously tested to ensure quality.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item text-center pt-3">
                        <div className="p-4"  style={{height:"250px"}}>
                            <i className="fa fa-3x fa-home text-primary mb-4"></i>
                            <h5 className="mb-3">Support Team</h5>
                            <p>Our compassionate team is here to guide you through every step.</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>


                 <div className="col-lg-10 wow fadeInUp" data-wow-delay="0.3s" style={{marginLeft:"25px"}}>
                    {/* <h6 className="section-title bg-white text-start text-primary pe-3">About Us</h6> */}
                    <h1 className="mb-4"> Our Mission </h1>
                    <h5 className="mb-4" >To ensure safe, sufficient, and timely blood supply for all in need, fostering a community of life-savers.</h5>
                    <hr/>
                    <h1 className="mb-4"> Our Vision </h1>
                    <h5 className="mb-4" >A world where no one suffers due to a lack of blood.</h5>
                    <hr/>
                    <div className="row gy-2 gx-4 mb-4">
                        <div className="col-sm-10">
                            <b><li> Advance Safety Measures  :  We prioritize health and safety with rigorous screening and testing protocols.</li> </b>
                        </div>
                        <div className="col-sm-10">
                            <b><li> 24/7 Availability  :  Your support helps us ensure blood is always available when needed. </li> </b>
                        </div>
                        <div className="col-sm-10">
                        <b><li>  Community Impact  :  Be a part of a network that saves lives every day.
                        </li> </b>
                        </div>
                    </div>
                    <a className="btn btn-primary py-3 px-5 mt-2" href="">Join Now</a><br/>
                </div><br/>

     <h2 style={{marginLeft:"20px", marginRight:"20px"}}> "Donate blood, save lives. Be the reason someone gets to see another tomorrow."

</h2>

    </>
}