import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import Accordion from "./Accordion";
import GridActionButton from "../component/GridActionButton";

export default function Grid({ columns, rows, actions, titleKey }) {
  const fieldTypeControl = (item) => {
    const type = typeof item;
    switch (type) {
      case "boolean":
        return item ? "Evet" : "Hayır";
      case "null":
        return "";
      case "undefined":
        return "";
      case "string":
        return item;
    }
  };
  const actionsArea = (action, key, item) => {
    switch (action.type) {
      case "button":
        return (
          <View key={key} style={styles.columns}>
            <Text style={styles.title}>{action?.title}:</Text>
            <View style={styles.containerButton}>
              {item?.isActive ? (
                <GridActionButton
                  key={key}
                  onPress={() => action?.onPress()}
                  text={action?.text}
                />
              ) : (
                <Text>{action?.other}</Text>
              )}
            </View>
          </View>
        );
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          estimatedItemSize={200}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <Accordion
                title={item[titleKey] || "Görsel"}
                key={item.id}
                show={false}
              >
                {item?.imageURL
                  ? columns.map((column, key) => {
                      return (
                        item[column.field] !== "" && (
                          <View key={key} style={styles.columns}>
                            <Text style={styles.title}>{column?.header}:</Text>
                            <Text style={styles.description}>
                              {item[column.field] === item.imageURL ? (
                                <Image
                                  style={styles.image}
                                  source={{ uri: item.imageURL }}
                                />
                              ) : (
                                fieldTypeControl(item[column.field])
                              )}
                            </Text>
                          </View>
                        )
                      );
                    })
                  : columns.map((column, key) => {
                      return (
                        <View key={key} style={styles.columns}>
                          <Text style={styles.title}>{column?.header}:</Text>
                          <Text style={styles.description}>
                            {fieldTypeControl(item[column.field])}
                          </Text>
                        </View>
                      );
                    })}
                {actions?.map((action, key) => {
                  return actionsArea(action, key, item);
                })}
              </Accordion>
            );
          }}
          data={rows}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  accordion: {
    backgroundColor: "white",
    paddingStart: 5,
  },
  titleRow: {
    borderBottomWidth: "1px",
    borderColor: "#B2BEB5",
    paddingBottom: 10,
  },
  columns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 7,
    paddingLeft: 20,
  },
  title: {
    fontWeight: "bold",
  },
  description: {
    marginLeft: 10,
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
