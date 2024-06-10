import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import styles from '../utils/styles';
import { FontAwesome } from '@expo/vector-icons';
import colors from '../utils/colors';
import { currentTime } from '../utils/helper';
export default function header() {
  const {user, isLoading} = useUser();
  const greeting = currentTime();
  return (
    <View className="p-[20px] pt-[40px]" style={styles.container}>
      <View className="flex-row justify-between">
      <View className="flex-row items-center gap-[10px]">
        <Image  source={{uri: user?.imageUrl}} style={styles.userImage}/>
        <View>
          <Text className="text-white mt-4 font-[outfit-medium] text-[15px]">{greeting} 👋,</Text>
          <Text className="text-white text-[20px] font-[outfit-bold]">{user?.fullName}</Text>
        </View>
      </View>
      <FontAwesome name="bookmark-o" size={27} color="white" style={styles.headerIcon}/>
      </View>
      <View className="mt-[18px] flex-row">
        <TextInput 
          placeholder='Search . . .'
          className="p-[10px] px-[16px] bg-white rounded-xl w-[85%] font-[outfit]"
        />
        <TouchableOpacity  style={styles.headerSearchBtn} className="rounded-xl">
          <FontAwesome name="search" size={24} color={colors.PRIMARY} />
        </TouchableOpacity>
        
      </View>
    </View>
  )
}