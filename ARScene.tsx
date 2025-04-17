import {
  ViroQuad,
  ViroARScene,
  ViroARSceneNavigator,
} from '@reactvision/react-viro';
import React from 'react';

const SceneAR = () => {
  return (
    <ViroARScene>
      <ViroQuad
        rotation={[-90, 0, 0]}
        position={[0, -0.001, 0]}
        width={8}
        height={8}
        arShadowReceiver
        ignoreEventHandling
      />
    </ViroARScene>
  );
};

export const SimpleARScreen = () => {
  return (
    <ViroARSceneNavigator
      autofocus
      initialScene={{
        scene: SceneAR,
      }}
      style={{flex: 1}}
    />
  );
};
