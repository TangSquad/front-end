import { Image, TouchableOpacity } from 'react-native';
import { icons } from '../../constants';

interface PswdToggleBtnProps {
  showPswd: boolean;
  setShowPswd: (showPswd: boolean) => void;
}

function PswdToggleBtn({ showPswd, setShowPswd }: PswdToggleBtnProps) {
  const togglePswd = () => {
    setShowPswd(!showPswd);
  };

  return (
    <TouchableOpacity activeOpacity={1} onPress={togglePswd} className='h-full px-10'>
      <Image className='flex-1 w-24 h-24' resizeMode='contain' source={ showPswd ? icons.openedEyes : icons.closedEyes} />
    </TouchableOpacity>
  );
}

export default PswdToggleBtn;