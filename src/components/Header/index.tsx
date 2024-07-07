import { View} from "react-native";
import Logo from '@assets/Logo.svg';
import { styles } from "./styles";

export default function Header(){
    return (
        <View style={styles.container}>
            <Logo width={110.34} height={32}/>
        </View>
    );
}
