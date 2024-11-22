import React from 'react'

export default function FooterHome() {
    return (
        <section className="footer">
            <div className="box-container">
                <div className="box col-md-4">
                    <h3>about us</h3>
                    <p style={{ color: 'white' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, maxime!</p>
                </div>
                <div className="box col-md-4">
                    <h3>follow us</h3>
                    <a style={{ color: 'white' }} href="#">facebook</a>
                    <a style={{ color: 'white' }} href="#">twitter</a>
                    <a style={{ color: 'white' }} href="#">instagram</a>
                </div>
                <div className="box col-md-4">
                    <h3>contact us</h3>
                    <p style={{ color: 'white' }}> <i className="bx bx-phone" /> 0528920998 </p>
                    <p style={{ color: 'white' }}> <i className="bx bx-envelope" /> nhom8@gmail.com </p>
                    <p style={{ color: 'white' }}> <i className="bx bx-map" /> Đại Học Duy Tân </p>
                </div>
            </div>
            <div className="credit"> created by <span></span> | all rights reserved </div>
        </section>

    )
}
