import { useEffect } from "react"

export default function Front()
{
    useEffect (()=>window.frontCarousel(),[])
    return <>
         <div className="container-fluid p-0 mb-5">
        <div className="owl-carousel header-carousel position-relative">
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/Blood-2.webp" alt="" />
                {/* <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, 0.7)' }}> */}
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >
                    <div className="container" >
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown" >Pulse Donor...</h5>
                                <h1 className="display-3 text-black animated slideInDown">The Best Online blood Donor Platform</h1>
                                <p className="fs-5 text-black mb-4 pb-2">Once a blood donor, always a lifesaver.
                                <br/> Saving a life won’t cost you anything. Go ahead and donate blood.
                                </p>
                                {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="owl-carousel-item position-relative">
                <img className="img-fluid" src="img/Blood-2.webp" alt=""/>
                <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" >
                    <div className="container">
                        <div className="row justify-content-start">
                            <div className="col-sm-10 col-lg-8">
                                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Pulse Donor</h5>
                                <h1 className="display-3 text-black animated slideInDown">Get Educated Online From Your Home</h1>
                                <p className="fs-5 text-black mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                {/* <a href="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                <a href="" className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}