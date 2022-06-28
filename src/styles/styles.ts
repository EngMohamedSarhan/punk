import { StyleSheet } from 'react-native';
import { palette } from './palette';
import { sizes } from './sizes';

const styles = StyleSheet.create({
  screen: {
    paddingVertical: sizes['6xl'],
    paddingHorizontal: sizes['3xl'],
    height: '100%',
    backgroundColor: palette.background,
  },

  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
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
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: sizes.lg,
  },
});

export default styles;
