import { memo } from 'react';
import { TableView } from '~components/global/View/Table';

import { AppRootComponent } from './AppRoot.type';

export const AppRoot: AppRootComponent = function () {
  return (
    <TableView
      fields={[
        {
          name: 'id',
          label: 'ID',
        },
        {
          name: 'name',
          label: 'Name',
        },
        {
          name: 'value',
          label: 'Value',
        },
      ]}
      items={[
        {
          id: 0,
          name: 'Nguyen Van An aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          value: 2,
        },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
        { id: 1, name: 'Man Nghi', value: 0 },
        { id: 2, name: 'Luu Bich', value: 5 },
        { id: 3, name: 'Nang Bi Chi', value: 6 },
      ]}
      space={2}
    />
  );
};

export const MemoAppRoot = memo(AppRoot);
