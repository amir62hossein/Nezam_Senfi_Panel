
import Style from './IconsContainer.module.scss';
import InstagramIcon from '../../../../../assets/img/landing/backgrounds/Layer-2-insta.svg'


const IconsContainer = () => {
  return (
    <div className={Style.iconsContainer}>
      <img src={InstagramIcon} alt="icon" />
      <img src={InstagramIcon} alt="icon" />
      <img src={InstagramIcon} alt="icon" />
      <img src={InstagramIcon} alt="icon" />
    </div>
  );
};

export { IconsContainer };
