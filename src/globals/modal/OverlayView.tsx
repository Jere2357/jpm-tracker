import React from 'react';
import { Overlay } from 'react-native-elements';

import styles from './styles/OverlayStyles';

const OverlayView = function ({ visible, toggle, children }: any) {
  return (
    <Overlay
      overlayStyle={styles.container}
      isVisible={visible}
      onBackdropPress={toggle}
    >
      {children}
    </Overlay>
  );
};

export default OverlayView;
