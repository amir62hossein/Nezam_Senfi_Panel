import React, { useContext, useState } from "react";
import { Edit, FileMinus, User } from "react-feather";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import Swal from "sweetalert2";
import { ToastTypes } from "../../../../../core/enums";
import { useDeleteEvent } from "../../../../../core/services/api/Event.api";
import { showToast } from "../../../../../core/utils";
import { refetchContext } from "../../../../../core/utils/context/EventContext";
import { EditModal } from "./EditModal/EditModal";


interface IPropTypes {
  cell: {
    row: {
      values: any
      original: any
    };
  };
}

const Actions: React.FC<IPropTypes> = ({
  cell: {
    row: {
      values: {id,  title,startDate,endDate },
      original
    },
  },
}) => {
  const history = useHistory();

  const [openModal , setOpenModal ] = useState<boolean>(false)

  const { refetchEvent, setRefetchEvent } = useContext(refetchContext);

  const removeMutation = useDeleteEvent()
  const deleteClickHandler = (id : any) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success mr-1",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "ایا مایل به حذف هستید؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "حذف",
        cancelButtonText: "انصراف",
        showLoaderOnConfirm: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          removeMutation.mutate(id, {
            onSuccess: (val: any) => {
              showToast(["با موفقیت انجام شد."], ToastTypes.success);
              const newEvent = { ...refetchEvent };
              newEvent.eventList = !newEvent.eventList;
              setRefetchEvent(newEvent);
            },
          });
        }
      });
  }


  
  return (
    <div
      className="d-flex justify-content-center align-content-center"
      style={{ flexWrap: "wrap" }}
    >
      {openModal && (
        <EditModal
          backdrop
          isOpen={openModal}
          currentId={original.id}
          toggleModal={() => setOpenModal(false)}
          data={original}
        />
      )}
      <Button
        style={{ margin: "3px" }}
        size="sm"
        color="warning"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        ویرایش &nbsp;
        <Edit
          style={{ position: "relative", top: "-2px" }}
          size={12}
          color="white"
        />
      </Button>
      <Button
        style={{ margin: "3px" }}
        size="sm"
        color="danger"
        onClick={() => {
          deleteClickHandler(original.id);
        }}
      >
        {removeMutation.isLoading && <Spinner color="white" size="sm" />}
        حذف &nbsp;
        <FileMinus
          style={{ position: "relative", top: "-2px" }}
          size={12}
          color="white"
        />
      </Button>
    </div>
  );
};

export { Actions };
