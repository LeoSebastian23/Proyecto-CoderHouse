import { StyleSheet, View } from 'react-native'
import Home from './src/Screens/Home'
import ListCategories from './src/Screens/ListCategories'
import { useState } from 'react'
// import { useFonts } from "expo-font"

const  App = () => {
  const [categorySelected,setCategorySelected] = useState("")
  
  // const [fontLoaded] = useFonts({
  //   Inter:require("./assets/Fonts/Inter-VariableFont_slnt,wght.ttf")
  // })

  // if(!fontLoaded) return null

  
  return (
    <View style={styles.container}>
      {categorySelected ?
        <ListCategories category = {categorySelected}/>
        :
        <Home setCategorySelected={setCategorySelected}/>
      }
     
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
})