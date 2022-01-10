import { ReactNode } from 'react';

export type RequiredChildrenProps<Children = ReactNode> = {
  children: Children;
};
