import React from "react";
import { Card, CardHeader, CardTitle } from "reactstrap";

type Props = {};

export default function FactoryListContainer({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>لیست کارخانه ها</CardTitle>
      </CardHeader>
    </Card>
  );
}
