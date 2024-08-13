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
      <TouchableOpacity onPress={onFeastPress} style={styles.feastButton}>
          <Text style={styles.feastButtonText}>Feast</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onMenuInfoPress} style={styles.arrowButton}>
          <Text sytle={styles.feastButtonText}>Menu</Text>
          <Text sytle={styles.arrow}> ▶ </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onFriendInfoPress} style={styles.arrowButton} >
          <Text style={styles.arrowButtonText}> Friends</Text>
          <Text style={styles.arrow}> ▶ </Text>
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
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 5,
  },
  actionContainer: {
    alignItems: "flex-end",
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
  },
  feastButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default DiningHallCard;
