// import { Text, View } from "react-native";
import DiningHallCard from "@/components/mainPageComp";

import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <DiningHallCard
        name="Bruin Plate"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {}}
        friendsPresent={[]}
      />
            <DiningHallCard
        name="Bruin Plate"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {}}
        friendsPresent={[]}
      />
            <DiningHallCard
        name="Bruin Plate"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {}}
        friendsPresent={[]}
      />
            <DiningHallCard
        name="Bruin Plate"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {}}
        friendsPresent={[]}
      />
            <DiningHallCard
        name="Bruin Plate"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {}}
        friendsPresent={[]}
      />
            <DiningHallCard
        name="Bruin Plate"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {}}
        friendsPresent={[]}
      />
            <DiningHallCard
        name="Bruin Plate"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {}}
        friendsPresent={[]}
      />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: 0,
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 42,
  },
});

export default Index;