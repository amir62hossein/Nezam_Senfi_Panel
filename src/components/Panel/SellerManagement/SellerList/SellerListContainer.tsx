import React from "react";
import { Card, CardHeader, CardTitle } from "reactstrap";

type Props = {};

export default function SellerListContainer({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>لیست عامل های فروش</CardTitle>
      </CardHeader>
    </Card>
  );
}
