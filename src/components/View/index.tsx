import React from 'react';
import { SafeAreaView as MyView } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function View(props) {
  const { colors } = useTheme();
  return (
    <>
      <MyView style={{ backgroundColor: colors.background, ...props.style }}>
        {props.children}
      </MyView>
    </>

  )
}
