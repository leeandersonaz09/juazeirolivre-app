import React from 'react';
import { Text as MyText } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function Text(props) {
  const { colors } = useTheme();
    return (
        <>
            <MyText style={{color:colors.text,  ...props.style}}>
                {props.children}
            </MyText>
        </>
    )
}


