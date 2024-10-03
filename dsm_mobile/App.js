import { Component } from "react";
import {
  TextInput,
  Button,
  View,
  StyleSheet,
  Text,
  Switch,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "", //textinput
      valorLimite: 0, //slider
      sexoSelecionado: "Masculino",
      sexo: [
        //picker
        { key: 1, tipo: "Masculino" },
        { key: 2, tipo: "Feminino" },
      ],
      estadoCivil: false,
    };
    this.criarConta = this.criarConta.bind(this);
  }

  criarConta() {
    if (this.state.nome === "") {
      alert("Primeiro insira ao menos um nome!");
    } else {
      alert(`Conta criada com sucesso! \n 
        Nome: ${this.state.nome} \n
        Sexo: ${this.state.sexoSelecionado} \n
        Estado Civil: ${this.state.estadoCivil ? "Solteiro" : "Casado"} \n
        Limite da Conta: R$ ${this.state.valorLimite.toFixed(2)}
        `);
    }
  }

  render() {
    let sexoOpcao = this.state.sexo.map((v, k) => {
      return <Picker.Item key={k} label={v.tipo} />;
    });

    return (
      <View style={styles.container}>
        <TextInput // 1 - digitar nome
          style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ nome: texto })}
        />

        {/* 2 - escolher o sexo */}
        <Text style={styles.titulo}>Informe seu sexo:</Text>
        <Picker
          style={styles.input}
          selectedValue={this.state.sexoSelecionado}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ sexoSelecionado: itemValue })
          }
        >
          {sexoOpcao}
        </Picker>

        {/* 3 - Informar limite da conta */}
        <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={(valorSelecionado) =>
            this.setState({ valorLimite: valorSelecionado })
          }
          value={this.state.valorLimite}
          minimumTrackTintColor="#00ff00"
          maximumTrackTintColor="#ff0000"
        />
        <Text style={styles.titulo}>
          Limite da Conta: R$ {this.state.valorLimite.toFixed(2)}
        </Text>

        {/* 4 - Informar estado civil */}
        <Switch
          style={(textAlign = "Center")}
          value={this.state.estadoCivil}
          onValueChange={(valorSwitch) =>
            this.setState({ estadoCivil: valorSwitch })
          }
          thumbColor="#0000FF"
        />
        <Text style={styles.titulo}>
          Estado Civil: {this.state.estadoCivil ? "Solteiro" : "Casado"}
        </Text>
        <Button title="Criar Conta" onPress={this.criarConta}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#222",
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  titulo: {
    textAlign: "center",
    fontSize: 20,
  },
});

export default App;
