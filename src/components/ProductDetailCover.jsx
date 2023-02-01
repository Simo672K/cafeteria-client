import { View, ImageBackground, StyleSheet } from 'react-native'
import Container from './Container'
import RoundBtn from './RoundBtn'
import { AntDesign } from '@expo/vector-icons';
import LikeBtn from './LikeBtn';
import Colors from '../constants/colors';
import Title from './Title';

export default function ProductDetailCover({img, liked}) {
  
  return (
    <View style={styles.coverImageContainer}>
      <ImageBackground style={styles.coverImage} source={img} resizeMode="cover" imageStyle={styles.overlay}>
        <Container>
          <View style={styles.header}>
            <RoundBtn>
              <AntDesign name="arrowleft" size={30} color="white" />
            </RoundBtn>
            <LikeBtn liked={true} size={30} color="white" />
          </View>
        </Container>
        <View style={styles.cardHead}>
          <Title style={{color: Colors.primary}}>Cappucino</Title>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  coverImageContainer:{
    height: "50%"
  },
  coverImage:{
    flex: 1,
    backgroundColor: '#333',
    paddingTop: 10
  },
  overlay:{
    opacity: 0.6,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cardHead:{
    backgroundColor: Colors.background,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  }
})