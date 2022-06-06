
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../../features/auth/authSlice'
import {
  Button
} from "reactstrap";
const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <>

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
      <div className="text-center text-muted mx-4">  
        <div className="button">
      </div>
        <Button  onClick={onLogout}>
        Logout
        </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
