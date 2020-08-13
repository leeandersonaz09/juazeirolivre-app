import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { useTheme } from '@react-navigation/native';
import { colors } from '../../styles';
 
interface SwitchButtonProps {
  onPress: () => void;
}

const SwitchButton = ({ onPress }: SwitchButtonProps ) => {
  const theme = useTheme();
  
  return (
    <TouchableOpacity  {...{onPress}}>
      <Icon style={{ fontSize: 25, color: !theme.dark ? colors.white : colors.yellow}} name="moon" />
    </TouchableOpacity>
  );
};

export default SwitchButton;