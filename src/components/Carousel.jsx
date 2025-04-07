import React from 'react'


const carousel = () => {
  return (
    <section className="row">
        <div className="col-md-12">
           
            <div className="carousel slide" data-bs-ride="carousel" id="mycarousel">
                
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="images/car1.jpg" alt="" height={'350px'} className="w-100 d-block"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/car2.jpg" alt="" height={'350px'} className="w-100 d-block"/>
                    </div>
                    <div className="carousel-item">
                        <img src="images/bike1.jpg" alt="" height={'350px'} className="w-100 d-block"/>
                    </div>
                </div>
               

              
                <a href="#mycarousel" data-bs-slide="prev" className="carousel-control-prev">
                    <span className="carousel-control-prev-icon bg-danger"></span>
                </a>
                <a href="#mycarousel" data-bs-slide="next" className="carousel-control-next">
                    <span className="carousel-control-next-icon bg-danger"></span>
                </a>
            </div>
        </div>
    </section>
  )
}

export default carousel