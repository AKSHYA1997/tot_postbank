import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
   const [slider, setSlider] = useState([]);

    useEffect(() => {
        getSliders();
    }, [])

    const getSliders=()=> {
        GlobalApi.getSlider().then(resp => {
            console.log("resp", resp.sliders)
            setSlider(resp?.sliders)
        })
    }


  return (
    <View>
      <Text style={styles.heading}>Offers For You</Text>
      <FlatList 
      data={slider}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index})=> (
        <View style={{marginRight:20}}>
         <Image style={styles.sliderImage} source={{uri:item.image?.url}} />
        </View>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontFamily: 'outfit-medium',
    marginBottom: 10
  },
  sliderImage: {
    width: 260,
    height: 120,
    borderRadius: 20,
    objectFit: 'contain'
  }
})