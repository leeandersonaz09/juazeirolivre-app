import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

interface SwitchButtonProps {
  onPress: () => void;
}

const SwitchButton = ({ onPress }: SwitchButtonProps ) => {

  return (
    <TouchableOpacity  {...{onPress}}>
      <Icon style={{ fontSize: 25, color:'#fff' }} name="contrast" />
    </TouchableOpacity>
  );
};

export default SwitchButton;