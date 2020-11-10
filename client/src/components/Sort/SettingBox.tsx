import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import Slider from '@material-ui/core/Slider';

import { useRecoilState } from 'recoil';
import { sliderValState } from '../store';

const SettingBox = () => {
  const [sliderVal, setSliderVal] = useRecoilState<number>(sliderValState);
  const [algorithmType, setAlgorithmType] = useState<string>('');

  const sliderChange = (event: any, value: number | number[]) => {
    setSliderVal(value as number);
  };

  const AlgorithmChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const val = event.target.value as string;
    setAlgorithmType(val);
  };
  return (
    <Paper style={{ width: '100%', backgroundColor: 'skyblue', marginTop: '0px' }}>
      <div style={{ margin: '10px', marginBottom: '20px' }}>
        <div style={{ width: '60%', display: 'inline', verticalAlign: 'bottom' }}>
          <Button variant="outlined" style={{ marginRight: '10px' }}>
            New Array
          </Button>
          <span style={{ marginRight: '10px' }}>Change Array Size</span>
          <Slider min={4} value={sliderVal} onChange={sliderChange} aria-labelledby="continuous-slider" style={{ width: '100px', verticalAlign: 'middle', marginRight: '10px' }} />
        </div>
        <FormControl style={{ width: '150px' }}>
          <InputLabel htmlFor="sort-algorithm">Sort Algorithm</InputLabel>
          <Select
            native
            value={algorithmType}
            onChange={AlgorithmChange}
            inputProps={{
              name: 'sort',
              id: 'sort-algorithm'
            }}
          >
            <option aria-label="None" value="" />
            <option value={'Merge'}>Merge Sort</option>
            <option value={'Quick'}>Quick Sort</option>
            <option value={'Heap'}>Heap Sort</option>
            <option value={'Bubble'}>Bubble Sort</option>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" style={{ marginTop: '10px', float: 'right' }}>
          Sort!!!
        </Button>
      </div>
    </Paper>
  );
};

export default SettingBox;
