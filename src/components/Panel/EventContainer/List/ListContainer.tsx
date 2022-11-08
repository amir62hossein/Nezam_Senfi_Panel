
import { Form, Formik } from "formik";
import React, { FC, useContext, useEffect, useState} from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import { ToastTypes } from "../../../../core/enums";
import { useCreateCategory } from "../../../../core/services/api/category.api";
import { useGetAllEvent } from "../../../../core/services/api/Event.api";
import { showToast } from "../../../../core/utils";
import { refetchContext } from "../../../../core/utils/context/EventContext";
import { ListTable } from "../../../common/ListTable/ListTable";
import { columns } from "./columns";


interface IPropTypes {
}


const ListContainer: FC<IPropTypes> = ({}) => {
  const [tableData, setTableData] = useState([]);
  const [pageCountList, setPageCount] = useState<any>(0);
  const [pageSize, setPageSize] = useState<any>(10);
  const [filterState, setFilterState] = useState<any>({
    page: 1,
    pageSize: pageSize,
  });

  const getMutation = useGetAllEvent();

  const { refetchEvent, setRefetchEvent } = useContext(refetchContext);

  useEffect(() => {
    getMutation.mutate(
      { PageSize: pageSize, PageNumber: 1 },
      {
        onSuccess: (val: any) => {
          fillForm(val);
        },
      }
    );
  }, [ refetchEvent.eventList ]);

  const fillForm = (val: any) => {
    try {
      setTableData(val.data.result.items);
    } catch (error) {}
    
    setPageCount(Math.ceil(val.data.result.totalCount / pageSize));
  };

  return (
    <>
      <Formik
        initialValues={filterState}
        onSubmit={(value) => {
          const obj: any = {
            page: 1,
            pageSize: pageSize,
          };
          getMutation.mutate(obj, {
            onSuccess: (val: any) => {
              fillForm(val);
            },
          });
        }}
        enableReinitialize={true}
      >
        {({ values, errors, handleChange, resetForm, setFieldValue }) => (
          <>
            <Form>
              <Card>
                <CardHeader>
                  <CardTitle> لیست رویدادها </CardTitle>
                </CardHeader>
                <CardBody>
                  <ListTable
                    columns={columns}
                    isLoading={getMutation.isLoading}
                    onPageChange={({ page, pageSize }) => {
                      getMutation.mutate({
                        page: page,
                        pageSize: pageSize,
                      });
                    }}
                    tableData={tableData}
                    pageCountList={pageCountList}
                    customPageSize={pageSize}
                    setPageSize={(val: any) => setPageSize(val)}
                    getCustomProps={{}}
                  >
                    {{
                      headerTable: (
                        <div
                          className="d-flex flex-wrap justify-content-left"
                          style={{ width: "100%" }}
                        ></div>
                      ),
                    }}
                  </ListTable>
                </CardBody>
              </Card>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export { ListContainer };
