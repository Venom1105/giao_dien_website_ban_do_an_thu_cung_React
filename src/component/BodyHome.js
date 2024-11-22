import React from 'react'

export default function BodyHome() {
    return (
        <div className="product">
            <div className="back  ">
                <img src="./img/h2.webp " alt="" />
                <div className="cv">
                    <h1> Những bữa ăn cân bằng dinh dường <br /> cho những năm đầu của boss</h1>
                    <a className="btn btn-outline-success  col-md-5  " href="#" type="submit" style={{ color: 'white' }}>Tìm Hiểu Thêm</a>
                </div>
            </div>
            <div className="back2">
                <h2>Thức ăn lành mạnh và bổ sung cho Boss</h2>
                <img src="./img/h4.jpeg" alt="" />
                <div className="food">
                </div>
            </div>
            <div className="back3">
                <a className="btn btn btn-light col-md-2  " href="#" type="submit">THỨC ĂN KHÔ</a>
                <a className="btn btn btn-light  col-md-2  " href="#" type="submit">THỨC ĂN TASTY MIX</a>
                <a className="btn btn btn-light   col-md-2  " href="#" type="submit">THỨC ĂN ƯỚT</a>
            </div>
            <div className="back4">
                <h3 className="text-white"> <i className="bx bxs-circle" /> những sản phẩm nổi bật</h3>
                <div className="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="./img/h5.webp" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">GÓI THỨC ĂN VỊ CÁ THU DÀNH CHO MÈO CON TỪ 2-12 THÁNG TUỔI</h4>
                            <a className="btn btn btn-light col-md-11 bg-warning   " href="#" type="submit">  MUA NGAY</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="./img/h6.webp" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">THỨC ĂN KHÔ VỊ CÁ NGỪ CHO MÈO TRƯỞNG THÀNH TỪ 1 TUỔI</h4>
                            <a className="btn btn btn-light col-md-11 bg-warning   " href="#" type="submit"> MUA NGAY</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="./img/h7.webp" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">THỨC ĂN KHÔ  ADULT 1+ VỊ CÁ BIỂN CHO MÈO TRƯỞNG THÀNH</h4>
                            <a className="btn btn btn-light col-md-11 bg-warning   " href="#" type="submit">MUA NGAY</a>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="./img/h8.webp" alt="" />
                        <div className="card-body">
                            <h4 className="card-title">THỨC ĂN KHÔ  JUNIOR VỊ CÁ BIỂN VÀ SỮA DÀNH CHO MÈO CON</h4>
                            <a className="btn btn btn-light col-md-11  bg-warning  " href="#" type="submit">MUA NGAY</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
