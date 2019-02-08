import React from 'react';
import { storiesOf } from '@storybook/react';
import { VsAlert } from './vsAlert';

storiesOf('VsAlert')
  .add('Primary', () => (
    <div className={'container'}>
      <br/>
      <VsAlert color={'primary'} message={'testing'}/>
      <VsAlert color={'primary'} message={'testing'} toggle={true}/>
    </div>
))
.add('info', () => (
    <div className={'container'}>
      <br/>
      <VsAlert color={'info'} message={'info'}/>
      <VsAlert color={'info'} message={'info'} toggle={true}/>
    </div>
))
.add('warning', () => (
    <div className={'container'}>
      <br/>
      <VsAlert color={'warning'} message={'warning'}/>
      <VsAlert color={'warning'} message={'warning'} toggle={true}/>
    </div>
)).add('danger', () => (
    <div className={'container'}>
      <br/>
      <VsAlert color={'danger'} message={'danger'}/>
      <VsAlert color={'danger'} message={'danger'} toggle={true}/>
    </div>
));
