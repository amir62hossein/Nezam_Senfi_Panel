import React, { FC, useEffect, useState} from "react";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";
import { useGetOwnedUserCountyGuildRoomsForTreasurer } from "../../../../core/services/api/province.api";
import { ListTablePaginate } from "../../../common/ListTablePaginate/ListTablePaginate";
import { columns } from "./Column";



interface IPropTypes {
}

const ProvinceAdminContainer: FC<IPropTypes> = ({}) => {
  const [tableData, setTableData] = useState<any>([])
  const [pageCount, setPageCount] = useState(1);
  const [pageSize, setPageSize] = useState<any>(10);

  const { data, isSuccess, isLoading } =
    useGetOwnedUserCountyGuildRoomsForTreasurer();


  useEffect(() => {
    if(data && data.data) {
      let result = data.data.result

      setTableData(
        result.map((row: any) => {
          return { id: row.id, title: row.title };
        })
      );

    }
  }, [isSuccess]);

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>لیست استان ها</CardTitle>
        </CardHeader>
        <CardBody>
          <Row style={{ marginTop: "14px" }}>
            <Col>
              <ListTablePaginate
                columns={columns}
                setPageCountList={setPageCount}
                isLoading={isLoading}
                onPageChange={() => {}}
                pageCountList={pageCount}
                customPageSize={pageSize}
                getCustomProps={{}}
                tableData={tableData}
              >
                {{
                  headerTable: <></>,
                }}
              </ListTablePaginate>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export { ProvinceAdminContainer };
