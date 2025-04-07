import React from 'react'

const Footer = () => {
    return (
        <div>
             <section class="row text-white bg-secondary">
        <div class="col-md-4">
            <h4 class="text-center">About Us</h4>
            <p></p>
            <p></p>
                </div>

            <div className="col-md-4">
                <h4 className="text-center">Contact</h4>
                <form action="">
                    <input type="email" className="form-control" placeholder="Enter your Email" /><br />
                    <textarea name="" id="" className="form-control" placeholder="Leave a comment" rows="7"></textarea><br />
                    <input type="button" value="Send Message" className="btn btn-outline-danger" />
                </form>

            </div>
            <div className="col-md-4">
                <h4 className="text-center">Stay connected</h4>
                <br/>
                    <a href="https://www.facebook.com">
                        <img src="images/download (1).png" alt="" height={'50px'} width={'50px'}/>
                    </a>
                    <a href="https://www.instagram.com">
                        <img src="images/download.jpeg" alt="" height={'50px'} width={'50px'} />
                    </a>
                    <a href="https://www.x.com">
                        <img src="images/download.png" height={'50px'} width={'50px'} alt="" />
                    </a><br/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem architecto quaerat est, officia
                            ratione animi aperiam quod harum ad sit! Harum voluptatibus minima, dolor in neque rerum sequi fuga a?
                        </p>

            </div>
            </section>
            <footer className="text-white bg-dark text-center p-2">
                <h5>Developed by Victor. &copy; 2025 All rights reserved
                </h5>
            </footer>
        </div>
  )
}

 export default Footer