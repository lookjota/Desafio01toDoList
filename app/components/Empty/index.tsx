import { Image, Text, View } from "react-native";
import { styles } from "./styles";

import clipboard from '@/assets/Clipboard.png'

export function Empty() {
  return (
    <View style={styles.emptyContainer}>
      <Image source={clipboard} style={styles.image}/>
      <Text style={styles.textBold}>
        Voce ainda nao tem tarefas cadastradas
      </Text>
      <Text style={styles.textRegular}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}