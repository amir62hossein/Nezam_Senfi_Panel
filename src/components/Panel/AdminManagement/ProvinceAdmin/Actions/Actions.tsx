import React, { useState } from "react";
import { DownloadCloud} from "react-feather";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";

interface IPropTypes {
  cell: {
    row: {
      values: { id: number };
      original: any;
    };
  };
  refetch: any;
}

const Actions: React.FC<IPropTypes> = ({
  cell: {
    row: {
      values: { id },
      original,
    },
  },
  refetch,
}) => {
  const [modal, setModal] = useState(false);
  const [currentDataId, setCurrentDataId] = useState<any>(null);

  const history = useHistory();

  return (
    <div className="d-flex justify-content-center align-content-center">
      <Button
        style={{ margin: "3px" }}
        size="sm"
        color="success"
        onClick={() => {
          history.push(`/AdminManagement/ProvinceAdmin/${id}`);
        }}
      >
        مدیریت ادمین ها
        {/* <DownloadCloud
          style={{ position: "relative", top: "-2px" }}
          size={12}
          color="white"
        /> */}
      </Button>
    </div>
  );
};

export { Actions };
