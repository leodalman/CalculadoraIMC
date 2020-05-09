import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
import { TextInput,Button } from 'react-native-paper';

export default class App extends React.Component {
  state = {
    peso: 0,
    altura: 0,
    imc: 0,
    legenda: 'Indeterminado',
    cor: '#bdc3c7'
  };

  calcularIMC = () => {
    const pesoinf = this.state.peso;
    const altinf = this.state.altura;

    if(pesoinf == ''){
        alert('O Peso não foi informado!!');
    }else if(altinf == ''){
        alert('A Altura não foi informada!!');
    }else{
        const resultado = this.state.peso / (this.state.altura *    this.state.altura);

    this.setState({
      imc: Math.ceil(resultado),
    });

    if (resultado < 18.5) {
      this.setState({
        legenda: 'Magreza',
        cor:'#e74c3c'
      });
    } else if (resultado >= 18.5 && resultado < 25) {
      this.setState({
        legenda: 'Normal',
        cor:'#27ae60'
      });
    } else if (resultado >= 25 && resultado < 30) {
      this.setState({
        legenda: 'Sobrepeso',
        cor:'#f1c40f'
      });
    } else if (resultado >= 30 && resultado < 40) {
      this.setState({
        legenda: 'Obesidade',
        cor:'#e67e22'
      });
    } else if (resultado > 40) {
      this.setState({
        legenda: 'Obesidade Grave',
        cor:'#c0392b'
      });
    }
    }
    
  };

  render() {
    return (
      <View style={styles.app}>
        <Text style={styles.titulo}>Seu IMC</Text>
        <View style={[styles.painel, {backgroundColor: this.state.cor}]}>
          <Text style={styles.resNumero}>{this.state.imc}</Text>
          <Text style={styles.resTexto}>{this.state.legenda}</Text>
        </View>
        <View>
          <TextInput
            label='Peso'
            style={styles.inpPeso}
            onChangeText={valor => {
              this.setState({ peso: valor.replace(',', '.') });
            }}
          />
          <TextInput
            label='Altura'
            style={styles.inpAlt}
            onChangeText={valor => {
              this.setState({ altura: valor.replace(',', '.') });
            }}
          />
          <Button mode="contained" onPress={this.calcularIMC}>
            Calcular
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  app: {
    padding: 50,
  },
  titulo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  painel: {
    borderRadius: 10,
    width: 150,
    alignSelf:'center',
    marginVertical: 10,
    padding: 8

  },
  resNumero: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  resTexto: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inpPeso: {
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
    fontSize:20,
    fontWeight: 'bold',
  },
  inpAlt: {
    borderColor: '#000',
    borderWidth: 1,
    marginVertical: 10,
    fontSize:20,
    fontWeight: 'bold',
  },
});
