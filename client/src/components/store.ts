import { atom } from 'recoil';

// Sort
export const sliderValState = atom({
  key: 'sliderValState',
  default: 30
});

export const targetArrState = atom({
  key: 'targetArrState',
  default: [] as number[]
});
