import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import moment from 'moment';

moment.locale('en');
const mountNode = document.getElementById('app');

ReactDOM.render(
  <div>
    <DatePicker defaultValue={moment()} />
  </div>
  , mountNode);
