import React, { memo } from 'react';
import { FlatButton, GradientButton, VStackView } from '~components/global';

import { AppRootComponent } from './AppRoot.type';

export const AppRoot: AppRootComponent = function () {
  return (
    <VStackView space={2}>
      <GradientButton
        text="Hello"
        onPress={() => {
          console.log('hello');
        }}
      />
      <GradientButton text="Hello" onPress={() => {}} />
      <GradientButton text="Hello" onPress={() => {}} />
      <GradientButton text="Hello" onPress={() => {}} />
      <GradientButton text="Hello" onPress={() => {}} />
      <FlatButton text="Hello" onPress={() => {}} />
    </VStackView>
  );
};

export const MemoAppRoot = memo(AppRoot);
