import { memo } from "react";
import './style.scss';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { formatCurrency } from "Utils/formater";

const header = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">


          <div className="col-6 header-top__left">
            <ul>
              <li><AiOutlineMail /><p>Hello@gmail.com</p></li>

              <li>
                Miễn phí vận chuyển cho đơn hàng từ&nbsp;
                <span className="price">{formatCurrency(500000)}</span>
              </li>
            </ul>
          </div>




          <div className="col-6 header-top__right">
            <ul>
              <li>
                <Link to={""}>
                  <AiOutlineFacebook />
                </Link>

              </li>
              <li>
                <Link to={""}>
                  <AiOutlineTwitter />
                </Link>

              </li>
              <li>
                <Link to={""}>
                  <AiOutlineInstagram />
                </Link>

              </li>
              <li>
                <Link to={""}>
                  <AiOutlineLinkedin />
                </Link>

              </li>

              <li>
                <Link to={""}>
                  <AiOutlineUser />
                </Link>
                <span>Đăng nhập</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(header);