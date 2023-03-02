import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const HomeScreen = ({route}) => {
  const data = route.params?.data;
  console.log('data==================>', data);
  return (
    <View>
      <Text>HomeScreen</Text>
      <View>
        {data?.user?.name && (
          <View>
            <Text>Google Login Name: {data.user?.name}</Text>
            <Text>
              Google Login Emailid:{data?.email} {data.user?.email}
            </Text>
          </View>
        )}
      </View>
      <View>
        {data?.name && (
          <View>
            <Text>Facebook Login Name:{data?.name}</Text>
            <Text>Facebook Login Emailid:{data?.email} </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
