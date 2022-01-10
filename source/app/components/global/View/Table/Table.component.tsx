import React, { memo } from 'react';
import { ScrollView, Text, View } from 'react-native';

import { HStackView } from '../HStack';
import { VStackView } from '../VStack';
import { TableViewStyles as styles } from './Table.style';
import { TableViewComponent } from './Table.type';

export const TableView: TableViewComponent = function (props) {
  return (
    <ScrollView>
      <ScrollView horizontal>
        <HStackView contentContainerStyle={styles.contentColumnContainer} space={props.space}>
          {props.fields.map((field, index) => (
            <VStackView contentContainerStyle={styles.contentRowContainer} space={props.space} key={index}>
              <View style={[styles.fieldContainer]}>
                <Text>{field.label ?? field.name}</Text>
              </View>

              {props.items.map((item, index) => (
                <View key={index}>
                  <Text>{item[field.name]}</Text>
                </View>
              ))}
            </VStackView>
          ))}
        </HStackView>
      </ScrollView>
    </ScrollView>
  );
};

export const MemoTableView = memo(TableView);
