import PropTypes from "prop-types";
import React from "react";

// props의 타입을 설정함
interface IProps {
  isLoggedIn: boolean;
}
const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) =>
isLoggedIn ? <span>you are in</span> : <span>your are out</span>;


AppPresenter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

 export default AppPresenter;