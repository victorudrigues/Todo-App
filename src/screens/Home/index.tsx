import { View, Text, StatusBar} from "react-native";
import Header from "../../components/Header";
import themes from "@themes/index";
import MainTeste from "@components/MainTeste";

export default function Home(){
    return (
        <View>
            <StatusBar backgroundColor={themes.base.gray700}/>
            <Header/>
            <MainTeste/>
        </View>
    );
}

  