import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import api from '../utils/api';
import { useUser } from '@clerk/clerk-expo';
import BusinessListItem from '../components/businessListItem';
export default function BookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const {user} = useUser();
  useEffect(() => {
    user && getBookings();
  }, [user])
  
  const getBookings = () => { 
      setLoading(true);
      api.getUserBookings(user.primaryEmailAddress.emailAddress).then( res => {
          setBookings(res?.data?.bookings)
          setLoading(false)
      });
  }
  return (
    <View className="p-[20px] mt-10">
        <Text className="text-[25px] font-[outfit-medium] ml-2">My Bookings</Text>

        <View>
          <FlatList 
            data={bookings}
            onRefresh={() => getBookings()}
            refreshing={loading}
            renderItem={({item, index}) => (
              <BusinessListItem business={item?.businessList} booking={item} />
            )}
          />
        </View>
    </View>
  )
}