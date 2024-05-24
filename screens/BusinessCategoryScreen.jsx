import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';
import api from '../utils/api';

export default function BusinessCategoryScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [business, setBusiness] = useState([]);

  useEffect(() => {
    param && getBusinessByCategory();
  }, [param]);

  const getBusinessByCategory = () => { 
    api.getBusinessListByCategory(param.category).then( res => {
        // setBusiness(res?.data?.businessLists)
        console.log(res?.data?.businessLists)
    });
}
  
  return (
    <View className="p-[20px] pt-[60px]">
      <TouchableOpacity className="flex-row gap-[10px] items-center" onPress={() => navigation.goBack()}> 
        <Ionicons name="arrow-back-outline" size={30} color="black" />
        <Text className="text-[25px] font-[outfit-medium]">{param?.category}</Text>
      </TouchableOpacity>
    </View>
  )
}