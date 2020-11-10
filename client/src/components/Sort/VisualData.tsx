import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { sliderValState, targetArrState } from '../store';

interface StyleProps {
  sliderVal: number;
}

const VisualData = () => {
  const sliderVal = useRecoilValue(sliderValState);
  const [targetArr, setTargetArr] = useRecoilState(targetArrState);

  useEffect(() => {
    const arr: number[] = [];
    for (let i = 0; i < sliderVal; i++) {
      const rand = ~~(Math.random() * 200 + 1);
      arr.push(rand);
    }
    setTargetArr(arr);
  }, [sliderVal]);

  return (
    <div style={{ display: 'inline-flex', alignItems: 'flex-end', height: '400px', marginTop: '30px' }}>
      {targetArr.map((v, i) => (
        <Column sliderVal={sliderVal} key={i} style={{ height: v * 2, backgroundColor: 'lightgreen' }}>
          {sliderVal < 40 ? v : ''}
        </Column>
      ))}
    </div>
  );
};

const Column = styled.div<StyleProps>`
  font-size: 11px;
  width: ${(p) => {
    if (p.sliderVal < 20) {
      return '30px';
    } else if (p.sliderVal < 40) {
      return '17px';
    } else if (p.sliderVal < 60) {
      return '10px';
    } else if (p.sliderVal < 80) {
      return '7px';
    } else {
      return '5px';
    }
  }};
  margin-left: ${(p) => {
    if (p.sliderVal < 20) {
      return '10px';
    } else if (p.sliderVal < 40) {
      return '5px';
    } else if (p.sliderVal < 60) {
      return '4px';
    } else if (p.sliderVal < 80) {
      return '3px';
    } else {
      return '2px';
    }
  }};
`;

export default VisualData;
