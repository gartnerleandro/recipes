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
  list: {
    marginTop: 20,
  },
  label: {
    marginHorizontal: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  ingredient: {
    marginHorizontal: 10,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  description: {
    marginHorizontal: 10,
    fontSize: 20,
  },
});

export default styles;
