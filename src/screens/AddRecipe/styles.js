import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  scrollContainer: {
    marginHorizontal: 12,
  },
  title: {
    height: 40,
    marginVertical: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  label: {
    fontWeight: '600',
  },
  description: {
    minHeight: 100,
    marginVertical: 12,
    borderBottomWidth: 1,
    padding: 10,
  },
  ingredientElement: {
    flexDirection: 'row',
    justifyContent: 'center',
    alingItems: 'center',
  },
  ingredientInput: {
    height: 40,
    marginVertical: 12,
    borderBottomWidth: 1,
    padding: 10,
    flex: 1,
  },
  close: {
    justifyContent: 'center',
    alingItems: 'center',
    paddingLeft: 10,
  },
});

export default styles;
