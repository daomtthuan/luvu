import { FunctionComponent, PropsWithoutRef } from 'react';

export type TableViewField = {
  name: string;
  label?: string;
};

export type TableViewProps = PropsWithoutRef<{
  fields: TableViewField[];
  items: {
    [name: string]: any;
  }[];
  space?: number;
}>;

export type TableViewComponent = FunctionComponent<TableViewProps>;
