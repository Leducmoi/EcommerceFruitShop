import { memo } from "react";
import './style.scss';
const header = () => {
  return (
    <div className="header__top">
      <div className="container">Header</div>
    </div>
  );
}

export default memo(header);