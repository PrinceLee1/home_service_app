import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import colors from '../utils/colors';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
export default function BusinessListItem({business, booking}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity className="p-[10px] bg-white rounded-2xl mb-[15px] flex-row gap-[10px] mt-1" onPress={() =>  {
      navigation.push('business-detail',{business: business})
    }}>
      <Image 
        source={{uri: business?.images[0]?.url}}
        className="w-[100px] h-[100px] rounded-xl"
      />
      <View className="flex gap-[8px]">
        <Text className="font-[outfit] text-neutral-500 text-[15px]">{business?.contactPerson}</Text>
        <Text className="font-[outfit-bold] text-[19px]">{business?.name}</Text>
        {!booking?.id &&  <Text className="font-[outfit] text-neutral-500 text-[16px]">
            <Ionicons name="location" size={20} color={colors.PRIMARY} />
                {business?.address}
        </Text>}
       
        {booking?.id && booking?.bookingStatus === 'Booked' &&
          <View className="bg-[#f1deff] p-[5px] rounded-md w-[60px]">
            <Text className="text-[#8E3FFF] text-[14px] font-[outfit-medium]">
              {booking?.bookingStatus}
            </Text>
          </View>
        }
         {booking?.id && booking?.bookingStatus === 'Completed' &&
          <View className="bg-[#d8f5eb] p-[5px] rounded-md w-[85px]">
            <Text className="text-[#04543f] text-[14px] font-[outfit-medium]">
              {booking?.bookingStatus}
            </Text>
          </View>
        }
        {booking?.id && booking?.bookingStatus === 'InProgress' &&
          <View className="bg-[#fae851ab] p-[5px] rounded-md w-[80px]">
            <Text className="text-[#8d7e00ab] text-[14px] font-[outfit-medium]">
              {booking?.bookingStatus}
            </Text>
          </View>
        }
        {booking?.id && booking?.bookingStatus === 'Cancelled' &&
          <View className="bg-[#f3a9a9] p-[5px] rounded-md w-[80px]">
            <Text className="text-[#f30c0c] text-[14px] font-[outfit-medium]">
              {booking?.bookingStatus}
            </Text>
          </View>
        }
        {booking?.id &&

            <Text className="text-neutral-400 text-[16px] font-[outfit-medium]">
              <AntDesign name="calendar" size={24} color={colors.PRIMARY} /> {" "}
              {booking?.date} at {booking.time}
            </Text>
        }
      </View>
    </TouchableOpacity>
  )
}