import React from 'react';
import { SafeAreaView as MyView } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function View(props) {
  const { colors } = useTheme();
  const theme = useTheme();
  const color = theme ? "#444" : colors.background;

  return (
    <>
      <MyView style={[{ backgroundColor: color , ...props.style }]}>
        {props.children}
      </MyView>
    </>

  )
}
