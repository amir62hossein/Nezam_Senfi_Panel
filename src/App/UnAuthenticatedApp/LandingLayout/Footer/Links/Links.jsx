
import { Link } from 'react-router-dom';
import Style from './Links.module.scss';



const Links = () => {
  return (
    <div className={Style.linksContainer}>
      <div>
        <Link to={"/"}>نمونه</Link>
      </div>
      <div>
        <Link to={"/"}>نمونه</Link>
      </div>
      <div>
        <Link to={"/"}>نمونه</Link>
      </div>
      <div>
        <Link to={"/"}>نمونه</Link>
      </div>
      <div>
        <Link to={"/"}>نمونه</Link>
      </div>
      <div>
        <Link to={"/"}>نمونه</Link>
      </div>
    </div>
  );
};

export { Links };
