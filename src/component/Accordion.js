import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import colors from "../constants";

export default function Accordion({
  title,
  onlyClick,
  onPress = () => {},
  children,
  containerStyle,
  headerStyle,
  show = false,
  labelStyle,
}) {
  const accordionRef = React.useRef(null);

  React.useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  const [expanded, setExpanded] = React.useState(show);

  const toggleExpand = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    changeExpanded();
  };

  const changeExpanded = React.useCallback(() => {
    setExpanded((prevState) => !prevState);
  }, [expanded]);

  return onlyClick ? (
    <View style={containerStyle}>
      <TouchableOpacity
        ref={accordionRef}
        style={styles.row}
        onPress={() => onPress()}
        activeOpacity={0.9}
      >
        <Text style={labelStyle ? labelStyle : styles.title}>{title}</Text>

        <Ionicons name=" chevron-up" size={32} color={colors.primary} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={containerStyle}>
      <TouchableOpacity
        ref={accordionRef}
        style={headerStyle ? headerStyle : styles.row}
        onPress={() => toggleExpand()}
        activeOpacity={0.9}
      >
        <Text style={labelStyle ? labelStyle : styles.title}>{title}</Text>

        {expanded ? (
          <Ionicons
            name="arrow-up-circle-sharp"
            size={32}
            color={colors.primary}
          />
        ) : (
          <Ionicons
            name="arrow-down-circle-sharp"
            size={32}
            color={colors.primary}
          />
        )}
      </TouchableOpacity>

      {expanded && <View style={styles.child}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 3,
    alignItems: "center",
    borderColor: "black",
    borderBottomWidth: 0.5,
  },
  child: {},
});
