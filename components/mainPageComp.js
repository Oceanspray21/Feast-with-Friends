import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const DiningHallCard = (props) => {
  const {
    name,
    friendsPresent,
    onFriendInfoPress,
    onMenuInfoPress,
    onFeastPress,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
      <Text style={styles.title}>{name}</Text>
      <TouchableOpacity onPress={onFeastPress} style={styles.feastButton}>
          <Text style={styles.feastButtonText}>Feast</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <View style={styles.friendsContainer}>
          {friendsPresent.slice(0, 3).map((friend, index) => (
            <Image
              key={index}
              source={{ uri: friend }}
              style={styles.friendPic}
            />
          ))}
          {/* <Image source={{ uri: "https://picsum.photos/200/300" }} style={styles.friendPic} />
          <Image source={{ uri: "https://picsum.photos/200/300" }} style={styles.friendPic} />
          <Image source={{ uri: "https://picsum.photos/200/300" }} style={styles.friendPic} /> */}
        </View>
          <TouchableOpacity onPress={onMenuInfoPress} style={styles.arrowButton}>
            <Text sytle={styles.feastButtonText}>Menu / Friends</Text>
            <Text sytle={styles.arrow}> ▶ </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    // borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  friendsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  friendPic: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 2,
  },

  arrowButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
    marginLeft: 10,
  },
  buttonText: {
    marginRight: 5,
  },
  arrow: {
    fontSize: 16,
  },
  feastButton: {
    backgroundColor: "#1E90FF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: "flex-end"
  },
  feastButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DiningHallCard;
