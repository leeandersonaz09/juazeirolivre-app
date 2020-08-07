import * as React from 'react';
import { Switch } from 'react-native-paper';

interface SubslideProps {
    subtitle: string;
    description: string;
    last?: boolean;
    onValueChange: () => void;
}

const SwitchButton = () => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);

  };

  return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default SwitchButton;