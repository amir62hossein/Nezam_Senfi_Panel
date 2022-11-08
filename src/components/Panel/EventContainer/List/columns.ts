import { Actions } from "./Actions/Actions";

export const columns = [
  {
    Header: "عنوان دسته",
    accessor: "title",
    disableFilters: true,
  },
  {
    Header: "تاریخ شروع",
    accessor: "startDate",
    disableFilters: true,
  },
  {
    Header: "تاریخ پایان",
    accessor: "endDate",
    disableFilters: true,
  },
  {
    Header: "عملیات",
    accessor: "actions",
    Cell: Actions,
    disableFilters: true,
    width: 320,
  },
];
