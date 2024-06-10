import { View, Text, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from './heading'; 
import api from '../utils/api';
import BusinessListItemSmall from './businessListItemSmall'; 


export default function businessList() {
    const [business, setBusiness] = useState([]);
    const [listAll, setListAll] = useState(false);

    useEffect(() => {
        getBusiness();
    }, [])
    
    const getBusiness = () => { 
        api.getBusinessList().then( res => {
            setBusiness(res?.data?.businessLists)
        });
    }
    const displayedBusiness = listAll ? business : business?.slice(0, 3);
    // console.log(displayedBusiness)

  return (
    <View className="mt-4 mb-6">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{marginTop: 10, paddingBottom: 600}}>
        <Heading text={'Latest Business'} isViewAll={true} listAll={listAll} setListAll={setListAll}/>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            displayedBusiness.map((item, index) => index.toString() &&
              <View className="mr-[10px] mt-2" key={index}>
                <BusinessListItemSmall business={item}/>
              </View>
            )
          }
        </ScrollView>
      
      </ScrollView>

    </View>
  )
}