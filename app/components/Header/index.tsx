import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import logoImage from '@/assets/Logo.png'
import { theme } from "@/app/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export function Header() {
  return (
    <View style={styles.headerConteiner}>
      <Image source={logoImage} />
      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder="Adicione uma nova Tarefa"
          placeholderTextColor={theme.colors.base.gray300}
        />
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="plus-circle-outline"
            size={22}
            color={theme.colors.base.gray100}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}