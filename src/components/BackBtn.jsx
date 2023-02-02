import { AntDesign } from '@expo/vector-icons';
import RoundBtn from './RoundBtn';
import Colors from '../constants/colors';

export default function BackBtn({onPress, mode}) {
  return (
    <RoundBtn onPress={onPress}>
      <AntDesign name="arrowleft" size={24} color={(mode&&mode==='light')? Colors.primary: 'white'} />
    </RoundBtn>
  )
}