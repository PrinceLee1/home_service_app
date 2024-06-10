import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { AntDesign } from '@expo/vector-icons';
import colors from '../utils/colors';
export default function ProfileScreen() {
  const {user} = useUser();
  const profileMenu = [
    {
      id: 1,
      name: 'Home',
      icon: 'home'
    },
    {
      id: 2,
      name: 'My Booking',
      icon: 'calendar'
    },
    {
      id: 3,
      name: 'Logout',
      icon: 'logout'
    }
  ]
  return (
    <View>
      <View className="p-[20px] pt-[60px] bg-[#8E3FFF]">
      <Text className="text-[30px] font-[outfit-bold]">Profile</Text>
      <View className="flex justify-center items-center p-[20px] ">
        <Image 
          source={{uri: user.imageUrl}}
          className="w-[90px] h-[90px] rounded-full "
        />
        <Text className="text-[26px] font-[outfit-medium] text-white mt-4 ">{user?.fullName}</Text>
        <Text className="text-[18px] font-[outfit-medium] text-white">{user?.primaryEmailAddress?.emailAddress}</Text>
      </View>
    </View>
    <View className="pt-[60px]">
      <FlatList 
        data={profileMenu}
        renderItem={({item, index}) => (
          <TouchableOpacity className="flex-row items-center gap-[10px] mb-[40px] px-[80px]">
            <AntDesign name={item.icon} size={35} color={colors.PRIMARY } />
            <Text className="font-[outfit] text-[20px]">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </View>
    
  )
}