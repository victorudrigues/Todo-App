import { TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import themes from "@themes/index";
import { useState } from "react";
import {Plus} from 'phosphor-react-native';



export default function Search() {
    const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.container}>
       <TextInput
        style={[styles.input, isFocused && styles.inputFocused]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={themes.base.gray300}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

        <TouchableOpacity style={styles.button}>
          <Plus size={24}/>
        </TouchableOpacity>

    </View>
      
  );
}
