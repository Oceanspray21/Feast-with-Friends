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
      <Text style={styles.title}>{name}</Text>
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
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={onFriendInfoPress} style={styles.button}>
          <Text>Friends</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onFeastPress} style={styles.feastButton}>
          <Text style={styles.feastButtonText}>Feast</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onMenuInfoPress} style={styles.button}>
          <Text>Menu</Text>
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
    // These properties add a shadow effect to the card
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // This is for Android shadow
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  friendsContainer: {
    flexDirection: "row", // This makes the images align horizontally
    marginBottom: 10,
  },
  friendPic: {
    width: 40,
    height: 40,
    borderRadius: 20, // This makes the image circular
    marginRight: 5,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between", // This spreads out the buttons evenly
    alignItems: "center",
  },
  button: {
    padding: 5,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  feastButton: {
    backgroundColor: "#4CAF50",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  feastButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DiningHallCard;
