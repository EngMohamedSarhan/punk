import { StyleSheet } from 'react-native';
import { palette } from './palette';
import { sizes } from './sizes';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: palette.background,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: sizes.lg,
    backgroundColor: palette.white,
    paddingVertical: sizes['7xl'],
  },
  iconButton: {
    borderRadius: 500,
    padding: sizes.lg,
  },
  gradientIconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 500,
  },
});

export default styles;
