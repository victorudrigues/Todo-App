import { View, Text} from "react-native";
import { styles } from "./styles";
import Search from "@components/Search";

export default function MainTeste(){
    return (
        <View style={styles.container}>
            <Search/>
        </View>
    );
}
