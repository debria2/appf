import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default function App() {
  return (

    <View style={styles.container}>
      <Text style={styles.titulo} >Melhores Fundos Imobiliários </Text>
      <ScrollView>
        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/KNIP11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 93,70</Text>
        <Text style={styles.info} >P/VP: 0,98</Text>
        <Separator />

        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/KNCR11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 106,51</Text>
        <Text style={styles.info} >P/VP: 1,05</Text>
        <Separator />

        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/XPML11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 107,83</Text>
        <Text style={styles.info} >P/VP: 0,90</Text>
        <Separator />

        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/HGLG11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 158,55</Text>
        <Text style={styles.info} >P/VP: 1,00</Text>
        <Separator />

        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/KNRI11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 140,00</Text>
        <Text style={styles.info} >P/VP: 0,87</Text>

        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/BTLG11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 99,15</Text>
        <Text style={styles.info} >P/VP: 0,95</Text>
        <Separator />
        
        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/MXRF11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 9,99</Text>
        <Text style={styles.info} >P/VP: 1,03</Text>
        <Separator />

        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/VISC11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 109,00</Text>
        <Text style={styles.info} >P/VP: 0,86</Text>
        <Separator />
        
        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/XPLG11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 100,50</Text>
        <Text style={styles.info} >P/VP: 0,89</Text>
        <Separator />
        
        <View style={styles.img1}>
          <Image style={styles.img} source={require('./assets/images/IRDM11.jpg')} />
        </View>
        <Text style={styles.info} >Cotação: 67,70</Text>
        <Text style={styles.info} >P/VP: 0,80</Text>
        <Separator />

      </ScrollView>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaeaea',
    padding: 10,
  },
  titulo: {
    marginTop: 60,
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#26eaed',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },  
  img: {
    width: '100%',
    height: 220,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#bdc3c7',
  },
  img1: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  info: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    color: '#34495e',
    marginVertical: 5,
  },
  separator: {
    height: 1,
    backgroundColor: '#dcdcdc',
    marginVertical: 10,
  },
});
