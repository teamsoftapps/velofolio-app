import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Design base dimensions (iPhone X/11 Pro)
const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

const widthScale = SCREEN_WIDTH / BASE_WIDTH;
const heightScale = SCREEN_HEIGHT / BASE_HEIGHT;

/**
 * Scales a value based on the screen width.
 * Best for: Fonts, Padding, Margins, Widths.
 */
export const rs = size => {
  const newSize = size * widthScale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};

/**
 * Scales a value based on the screen height.
 * Best for: Component heights.
 */
export const rh = size => {
  const newSize = size * heightScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const SCREEN_DIMENSIONS = {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
};
