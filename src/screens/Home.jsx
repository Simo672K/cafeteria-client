import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, Text, ScrollView } from "react-native";
import Container from "../components/Container";
import { Ionicons } from '@expo/vector-icons';
import Title from "../components/Title";
import RoundBtn from "../components/RoundBtn";
import Colors from "../constants/colors";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";

export default function Home() {
  let dummyText= "Lorem ipsum dolor sit amet, debitis obcaecati asperiores at."
  return (
    <View style={styles.home}>
      {/* Home Screen Header */}
      <ImageBackground
        style={styles.header}
        resizeMode="stretch"
        imageStyle={{ height: "100%", opacity: 0.7 }}
        source={require("../assets/images/home.png")}
      >
        <Container>
          <View>
            <RoundBtn>
              <Ionicons name="menu-outline" size={32} color="white" />
            </RoundBtn>
          </View>
          <View style={styles.hero}>
            <Title style={{color: 'white'}}>BIENVENUE!</Title>
          </View>
          <View style= {styles.cardContainer}>
            <View style={styles.card}>
              <Title style={{fontSize: 30, color: Colors.primary, textAlign: 'center'}}>Notre Menu</Title>
            </View>
          </View>
        </Container> 
      </ImageBackground>

      {/* Home Screen Body */}
      {/* filters */}
      <View style={styles.main}>
        <View style={{marginTop: 10,}}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
            <Filter name='Boissan'/>
          </ScrollView>
        </View>
        {/* Sections */}
        <ScrollView>
          <View style={{flex: 1, marginTop: 30}}>
            <View style={{marginHorizontal: 24}}>
              <Title style={{color: Colors.primary}}>Caffe..</Title>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
              </ScrollView>
            </View>
          </View>
          
          <View style={{flex: 1, marginTop: 30}}>
            <View style={{marginHorizontal: 24}}>
              <Title style={{color: Colors.primary}}>Boissan..</Title>
            </View>
            <View>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
                <ProductCard price='15.00' img={'../assets/images/card-placeholder.png'} title='Cappucino' description={dummyText}/>
              </ScrollView>
            </View>
          </View>
          <View style={{height: 30}}></View>
        </ScrollView>
      </View>
      <StatusBar style="light"/>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  header: {
    height: "30%",
    backgroundColor: "#333",
  },
  hero:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  },
  cardContainer:{
    position: 'relative'
  },
  card:{
    backgroundColor: Colors.background,
    width: "60%",
    padding: 12,
    borderRadius: 12,
    elevation: 5,
    position: 'absolute',
    top: -30
  },
  main:{
    flex: 1,
    marginTop: 50,
  }
});
