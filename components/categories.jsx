import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../utils/api';
import Heading from './heading'; 
import { useNavigation } from '@react-navigation/native';

export default function categories() {
    const [categories, setCategories] = useState(null);
    const [listAll, setListAll] = useState(false);
    const navigation = useNavigation()
    useEffect(() => {
        getCategories();
    }, [])
    
    const getCategories = () => { 
        api.getCategories().then( res => {
            setCategories(res?.data?.categories)
        });
    }
    const displayedCategories = listAll ? categories : categories?.slice(0, 3);

  return (
    <View className="mt-4">
        <Heading text={'Categories'} isViewAll={true} listAll={listAll} setListAll={setListAll}/>
        <FlatList
            data={displayedCategories}
            numColumns={4}
            // horizontal={true}
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
                <TouchableOpacity className="flex-1 items-center justify-between m-2" onPress={() => navigation.push('business-list', {category: item?.name})}>
                    <View className="bg-[#ededed] p-[10px] rounded-full" key={index}>
                        <Image 
                            source={{uri: item?.icon?.url}}
                            className="w-[30px] h-[30px]"
                        />
                    </View>
                    <Text className="font-[outfit-medium] mt-1">{item?.name}</Text>
                </TouchableOpacity>
            )}
        />
    </View>
  )
}