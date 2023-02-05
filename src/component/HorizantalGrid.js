import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Colors from "../constants";
const { width, height } = Dimensions.get("screen");
export default function HorizontalGrid({ rows }) {

  
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          bounces
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width,
                  height:height*0.70,
                  ...(!item.type && {
                    justifyContent: "center",
                    alignItems: "center",
                    width,
                    height: height * 0.8,
                  }),
                }}
              >
                {item.type ? (
                  <Image
                    resizeMode="stretch"
                    style={{
                      flex: 1,
                    }}
                    source={{ uri: item?.imageURL }}
                  />
                ) : (
                  <View
                    style={{
                      width: width * 0.7,
                      height: height * 0.5,
                      alignItems: "center",
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: Colors.primary,
                    }}
                  >
                    <View style={styles.keywordContainer}>
                      <View style={styles.titleContainer}>
                        <Text style={styles.title}>{item.title}</Text>
                      </View>

                      <View style={styles.innerKeywordContainer}>
                        <View style={styles.keywordBody}>
                          <Text style={styles.keyword}>{item.textOne}</Text>
                        </View>
                        <View style={styles.keywordBody}>
                          <Text style={styles.keyword}>{item.textTwo}</Text>
                        </View>
                        <View style={styles.keywordBody}>
                          <Text style={styles.keyword}>{item.textThree}</Text>
                        </View>
                        <View style={styles.keywordBody}>
                          <Text style={styles.keyword}>{item.textFour}</Text>
                        </View>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            );
          }}
          data={rows}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  keywordContainer: {},

  titleContainer: {
    backgroundColor: Colors.primary,
    width: width * 0.7,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  innerKeywordContainer: {
    paddingTop: 40,
    alignItems: "center",
  },
  keywordBody: {
    paddingVertical: 25,
  },
  keyword: {
    color: Colors.primary,
    fontWeight: "bold",
    fontSize: 17,
    textTransform: "uppercase",
  },

  containerButton: {
    display: "flex",
    flexDirection: "row",
    width: 100,
    paddingLeft: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
