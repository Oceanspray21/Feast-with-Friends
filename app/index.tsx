import DiningHallCard from "@/components/mainPageComp";

import React from 'react';
import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Pressable
} from 'react-native';

const Index = () => {
  const [currentDiningHall, setCurrentDiningHall] = useState<string | null>(null);
  const [defaultTimeSpending, setDefaultTimeSpending] = useState(45);
  const [timeSpending, setTimeSpending] = useState(defaultTimeSpending);
  const [enterTime, setEnterTime] = useState(new Date());

  const [swipesLeft, setSwipesLeft] = useState(0);

  const timeSpent = () => {
    const now = new Date().getTime();
    const elapsedMinutes = Math.floor((now - enterTime.getTime()) / 60000);
    return Math.max(0, elapsedMinutes);
  };

  const timeLeft = () => {
    const spent = timeSpent();
    return Math.max(0, timeSpending - spent);
  };

  const handleTimeChange = (mins: number) => {
    setTimeSpending(timeSpending + mins);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setEnterTime(prev => new Date(prev.getTime()));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSwipesChange = (swipes: number) => {
    setSwipesLeft(swipesLeft + swipes);
  }

  const handleCancel = () => {
    setCurrentDiningHall(null);
  }

  const handleCheckSwipes = () => {
      
  }

  const handleFeast = (diningHall: string) => {
    setSwipesLeft(swipesLeft - 1);
    setEnterTime(new Date());
    setCurrentDiningHall(diningHall);
    setTimeSpending(defaultTimeSpending);
  }

  const exampleFriendsPresent = [
    'https://picsum.photos/200/300',
    'https://static.vecteezy.com/system/resources/previews/025/220/125/non_2x/picture-a-captivating-scene-of-a-tranquil-lake-at-sunset-ai-generative-photo.jpg',
    'https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
  ]

  return (
    // <SafeAreaView style={styles.container}>
    <ScrollView>

      {currentDiningHall ? (
        <View style={{
          backgroundColor: 'white',
          padding: 10,
          marginBottom: 10,
        }}>
          <Text style={{ textAlign: 'center', fontSize: 17 }}>
            Eating at <Text style={{ fontWeight: 'bold' }}>{currentDiningHall}</Text> for
          </Text>
          <Text style={{ textAlign: 'center', fontSize: 20 }}>
            {timeSpent()} min <Text style={{ fontSize: 15 }}>({timeLeft()} min left)</Text> 
          </Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
            <TouchableOpacity style={styles.minusButton} onPress={() => handleTimeChange(-10)}>
              <Text>-10 min</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: '#d1d1d1', paddingHorizontal: 10, borderRadius: 5 }} onPress={() => handleCancel()}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusButton} onPress={() => handleTimeChange(10)}>
              <Text>+10 min</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (null)}

      <View style={{
        backgroundColor: 'white',
        padding: 10,
        marginBottom: 10,
      }}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          {swipesLeft} swipes left
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 15 }}>(Should have 5)</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
          <TouchableOpacity style={styles.minusButton} onPress={() => handleSwipesChange(-1)}>
            <Text allowFontScaling={false}>-1 swipe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#d1d1d1', paddingHorizontal: 10, borderRadius: 5 }} onPress={() => handleCheckSwipes()}>
            <Text>Check swipes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plusButton} onPress={() => handleSwipesChange(1)}>
            <Text>+1 swipe</Text>
          </TouchableOpacity>
        </View>
      </View>

      <DiningHallCard
        name="Bruin Plate"
        friendsPresent={exampleFriendsPresent}
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {handleFeast("Bruin Plate")}}
      />

      <DiningHallCard
        name="De Neve"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {handleFeast("De Neve")}}
        friendsPresent={[]}
      />

      <DiningHallCard
        name="Epicuria at Covel"
        onFriendInfoPress={() => {}}
        onMenuInfoPress={() => {}}
        onFeastPress={() => {handleFeast("Epicuria at Covel")}}
        friendsPresent={[]}
      />
    </ScrollView>
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
  minusButton: {
    backgroundColor: '#ff9999',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  plusButton: {
    backgroundColor: '#99cc99',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default Index;