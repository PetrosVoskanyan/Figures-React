import { ReactComponent as LogoSvg } from '../assets/images/logo.svg'

export const Logo = () => {
  return (
    <div className="logoContainer">
        <LogoSvg />
        <h1 className="siteName">Figures</h1>
    </div>
  );
};
