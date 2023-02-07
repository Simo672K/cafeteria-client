import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Container from "../components/Container";
import Title from "../components/Title";
import RoundBtn from "../components/RoundBtn";
import Colors from "../constants/colors";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  const productsList = useSelector((state) => state.products.productsList);
  const data = productsList[0].products;

  console.log(data)

  let dummyText =
    "Lorem ipsum dolor sit amet, debitis obcaecati asperiores at.";
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <RoundBtn>
              <Ionicons name="menu-outline" size={32} color="white" />
            </RoundBtn>
            <RoundBtn onPress={() => navigation.navigate("CheckoutScreen")}>
              <Ionicons name="cart" size={32} color="white" />
            </RoundBtn>
          </View>
          <View style={styles.hero}>
            <Title style={{ color: "white" }}>BIENVENUE</Title>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <Title
                style={{
                  fontSize: 30,
                  color: Colors.primary,
                  textAlign: "center",
                }}
              >
                Notre Menu
              </Title>
            </View>
          </View>
        </Container>
      </ImageBackground>

      {/* Home Screen Body */}
      {/* filters */}
      <View style={styles.main}>
        <View style={{ marginTop: 10 }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
            <Filter name="Boissan" />
          </ScrollView>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={(itemData) => (
              <ProductCard
                item={itemData.item}
                linkTo={navigation}
                price={itemData.item.price}
                title={itemData.item.title}
                description={itemData.item.description}
                img={"../assets/images/card-placeholder.png"}
              />
            )}
            keyExtractor={item=> item.id}
          />
        </View>
        {/* Sections */}
        <ScrollView>
          <View style={{ flex: 1, marginTop: 30 }}>
            <View style={{ marginHorizontal: 24 }}>
              <Title style={{ color: Colors.primary }}>Cafe..</Title>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Cappucino"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Cafe Noire"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Cafe Cream"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Cafe Espro"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Cafe Noir Double"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Cafe American"
                  description={dummyText}
                />
              </ScrollView>
            </View>
          </View>

          <View style={{ flex: 1, marginTop: 30 }}>
            <View style={{ marginHorizontal: 24 }}>
              <Title style={{ color: Colors.primary }}>Boissan..</Title>
            </View>
            <View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Pepsi"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Jus Orange"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Cokacola"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Huwai"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Pomese"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Jus Avocad"
                  description={dummyText}
                />
                <ProductCard
                  linkTo={navigation}
                  price="15.00"
                  img={"../assets/images/card-placeholder.png"}
                  title="Sprite"
                  description={dummyText}
                />
              </ScrollView>
            </View>
          </View>
          <View style={{ height: 30 }}></View>
        </ScrollView>
      </View>
      <StatusBar style="light" />
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
  hero: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    position: "relative",
  },
  card: {
    backgroundColor: Colors.background,
    width: "60%",
    padding: 12,
    borderRadius: 12,
    elevation: 5,
    position: "absolute",
    top: -30,
  },
  main: {
    flex: 1,
    marginTop: 50,
  },
});
