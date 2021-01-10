import React from 'react';
import InputRange, { Range } from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './Slider.css';

interface IValue {
  min: number;
  max: number;
}

interface IData {
  min: number;
  max: number;
  step: number;
  value: IValue;
  label: string;
}

interface IProps {
  data: IData;
  onChange: (value: Range | number) => void;
}

const Slider = (props: IProps) => {
  const { data } = props;
  const { min, max, step, value, label } = data;
  const onChange = (value: Range | number) => {
    props.onChange(value);
  };

  return (
    <div className="slider">
      <span>{label}</span>
      <InputRange minValue={min} maxValue={max} step={step} onChange={onChange} value={value} />
    </div>
  );
};

export default Slider;
