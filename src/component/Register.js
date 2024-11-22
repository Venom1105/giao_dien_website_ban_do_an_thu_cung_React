import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate();
    const [isName, setIsName] = useState('');
    const [isShowPass, setIsShowPass] = useState('');
    const [isShowConfirmPass, setIsShowConfirmPass] = useState('');
    const [isPhone, setIsPhone] = useState('');
    const [isMail, setIsMail] = useState('');
    const [userNameError, setUserNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [rePasswordError, setRePasswordError] = useState(false);
    const [phonenumberError, setPhonenumberError] = useState(false);

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
    const handConPass = (e)=>{
        setIsShowConfirmPass(e.target.value);
        if (e.target.value !== isShowPass) {
            setRePasswordError(true);
        } else {
            setRePasswordError(false);
        }
    }
    const handPhone = (e)=>{
        setIsPhone(e.target.value);
        if (!e.target.value) {
            setPhonenumberError(true);
        } else {
            setPhonenumberError(false);
        }
    }
    const handMail = (e)=>{
        setIsMail(e.target.value);
    }

    const submit = (e)=>{
        e.preventDefault();
        if (!isName) {
            setUserNameError(true);
        }
        if (!isShowPass) {
            setPasswordError(true);
        }
        if (isShowConfirmPass !== isShowPass) {
            setRePasswordError(true);
        }
        if (!isPhone) {
            setPhonenumberError(true);
        }
        if (isName && isShowPass && isShowConfirmPass === isShowPass && isPhone) {
            const user = {isName, isShowPass, isShowConfirmPass, isPhone, isMail};
            localStorage.setItem('user', JSON.stringify(user));
            console.log('Registered user: ', user);
            alert('Đăng ký thành công!');
            navigate('/login');
        }
    }
    return (
        <div className="backgr">
            <div className="Register">
                <img src="./img/logo3.gif" alt="" />
                <div className="form2">
                    <form id="formRegister" onClick={submit}>
                        <h5>register</h5>
                        <input id="userName" className="txt" type="text" name placeholder="tên đăng nhập" onChange={handName} />
                        {userNameError && <div id="userNameError" style={{marginTop:'-20px', color:'red'}} >Tên đăng nhập là bắt buộc</div>}
                        <input id="password" className="txt" type="password" name placeholder="mật khẩu" onChange={handPass} />
                        {passwordError && <div id="passwordError" style={{marginTop:'-20px', color:'red'}}>Mật khẩu là bắt buộc</div>}
                        <input id="rePassword" className="txt" type="password" name placeholder="nhập lại mật khẩu" onChange={handConPass} />
                        {rePasswordError && <div id="rePasswordError" style={{marginTop:'-20px', color:'red'}}>Mật khẩu nhập lại không khớp</div>}
                        <input id="phonenumber" className="txt" type="text" name placeholder="Số điện thoại" onChange={handPhone} />
                        {phonenumberError && <div id="phonenumberError" style={{marginTop:'-20px', color:'red'}}>Số điện thoại là bắt buộc</div>}
                        <input id="mail" className="txt" type="text" name placeholder="gmail" onChange={handMail} />
                        <div className="nut">
                        <p>
                            Bạn đã có tài khoản ? <Link to="/Login">Đăng Nhập</Link>
                        </p>
                            <button type="submit" className="btn btn-warning">Đăng Kí</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
