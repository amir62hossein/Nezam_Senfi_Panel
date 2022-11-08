import { Container, Row, Col } from "reactstrap";
import Style from './Description.module.scss';


const Description = () => {
  return (
    <div className={Style.footerDescription}>
      <h2 className={Style.descriptionTitle}> </h2>
      <p className={Style.description}>
        {" "}
        متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن
        متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن
        متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن
        متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن متن
        متن متن متن متن متن{" "}
      </p>
    </div>
  );
};

export { Description };
