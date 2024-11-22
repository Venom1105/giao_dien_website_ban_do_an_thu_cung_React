import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [isName, setIsName] = useState('');
    const [isShowPass, setIsShowPass] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handName = (e)=>{
        setIsName(e.target.value);
        if (!e.target.value) {
            setUserNameError(true);
        } else {
            setUserNameError(false);
        }
    }
    const handPass = (e)=>{
        setIsShowPass(e.target.value);
        if (!e.target.value) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }
    
    const submit = (e)=>{
        e.preventDefault();
        if (!isName) {
            setUserNameError(true);
        }
        if (!isShowPass) {
            setPasswordError(true);
        }
        if (isName && isShowPass) {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user && user.isName === isName && user.isShowPass === isShowPass) {
                console.log('Logged in user: ', {isName, isShowPass});
                navigate('/');
            } else {
                console.log('Invalid username or password');
                setLoginError(true);
            }
        }
    }

    return (
        <div className="backgr  ">
            <div className="login">
                <img src="./img/logo3.gif" alt="" />
                <div className="form">
                    <form onSubmit={submit}>
                        <h5>login</h5>
                        <input className="txt" type="text" name placeholder="tên đăng nhập" onChange={handName} />
                        {userNameError && <div id="userNameError" style={{marginTop:'-20px', color:'red'}}>Tên đăng nhập là bắt buộc</div>}
                        <input className="txt" type="password" name placeholder="mật khẩu" onChange={handPass} />
                        {passwordError && <div id="passwordError" style={{marginTop:'-20px', color:'red'}}>Mật khẩu là bắt buộc</div>}
                        {loginError && <div id="loginError" style={{marginTop:'-20px', color:'red'}}>Tên đăng nhập hoặc mật khẩu không đúng</div>}
                        <p>
                            Bạn chưa có tài khoản ? <Link to="/register">Đăng Ký</Link>
                        </p>
                        <div className="nut">
                            <button className="btn btn-warning">Đăng Nhập</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
}
