import { ReactComponent as LogoSvg } from '../../assets/images/logo.svg';
import * as classes from './logos.models.scss';
import PatchStyles from 'patch-styles';

export const Logo = () => {
  return (
    <PatchStyles classNames={classes}>
      <div className="logoContainer">
        <LogoSvg />
        <h1 className="siteName">Figures</h1>
      </div>
    </PatchStyles>
  );
};
