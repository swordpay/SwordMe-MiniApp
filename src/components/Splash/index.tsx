import './splash.css';
import logo from '../../assets/splash.png';

const SplashScreen = () => {
    return (
        <div className="splash-container">
            <img src={logo} />
            <h1>SWORD</h1>
        </div>
    )
}

export default SplashScreen;