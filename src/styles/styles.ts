import { StyleSheet } from 'react-native';
import { palette } from './palette';
import { sizes } from './sizes';

const styles = StyleSheet.create({
  screen: {
    paddingVertical: sizes['7xl'],
    paddingHorizontal: sizes['5xl'],
    height: '100%',
    backgroundColor: palette.background,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  separator: {
    marginVertical: sizes['7xl'],
  },
  miniseparator: {
    marginVertical: sizes.lg,
  },
  divider: {
    width: sizes['5xl'],
    height: sizes['5xl'],
  },
  flex: {
    flex: 1,
  },
  categoryTypography: {
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: palette.white,
    paddingVertical: sizes['5xl'],
  },
  iconButton: {
    justifyContent: 'center',
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
  beerImage: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  beerCard: {
    padding: sizes.xxl,
    width: 200,
    borderRadius: sizes['7xl'],
    alignSelf: 'flex-start',
    backgroundColor: palette.white,
  },
  beerButton: {
    position: 'absolute',
    marginRight: -sizes.xxl,
    right: 0,
    bottom: 7,
    borderRadius: 0,
    backgroundColor: palette.primary,
    borderTopLeftRadius: sizes['3xl'],
    borderBottomLeftRadius: sizes['3xl'],
  },
});

export default styles;
