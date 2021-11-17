import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 200,
    position: 'relative',
  },
  title: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overlay: {
    backgroundColor: '#4f4f4f',
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  description: {
    marginTop: 20,
    marginHorizontal: 10,
    fontSize: 20,
  },
});

export default styles;
