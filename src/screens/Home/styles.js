import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderLeftWidth: 8,
    borderColor: '#4f4f4f',
    margin: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#888888',
    marginLeft: 8,
  },
  button: {
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4f4f4f',
    alignSelf: 'center',
    margin: 10,
    maxWidth: 300,
    width: '100%',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
});

export default styles;
