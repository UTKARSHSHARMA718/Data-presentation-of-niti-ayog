import React from "react";

import { Table } from "@mantine/core";
import { TableProps } from "./CustomTable.types";
import { classes } from "./CustomTable.styles";

const CustomTable: React.FC<TableProps> = ({
  data,
  tableHeaders,
  tableDataKeys,
}) => {
  const rows = data.map((item) => (
    <Table.Tr key={item.key}>
      {tableDataKeys?.map((key, index) => {
        return (
          // @ts-ignore
          <Table.Td key={index} style={classes?.tableData}>
            {item[key]}
          </Table.Td>
        );
      })}
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table borderColor="red" border={1}>
        <Table.Thead>
          <Table.Tr>
            {tableHeaders?.map((header, index) => {
              return (
                <Table.Th key={index} style={classes?.tableHeading}>
                  {header}
                </Table.Th>
              );
            })}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
};

export default CustomTable;
