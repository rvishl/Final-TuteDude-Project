import { AccountCircleRounded, ExpandMoreRounded } from '@mui/icons-material';
import  Logo from '../assets/logo.png';
const Nav = _ => {
    return (
        <>
            <nav className="nav_container">
                <div className="nav_wrapper">
                    <div className="nav_left_section">
                        <div>
                            <img src={ Logo } alt="no-img" />
                        </div>
                    </div>
                    <div className="nav_right_section">
                        <div className="nav_button btn1">My Assignment</div>
                        <div className="nav_button btn2">Chat with Mentor</div>
                        <div className="nav_button btn3 nav_profile_button">
                            <span className="nav_icon user_icon">
                                <AccountCircleRounded />                                
                            </span>
                            <span>ProfileName</span>
                            <span className="nav_icon">
                                <ExpandMoreRounded />
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;