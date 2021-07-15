import React from 'react';

import ReactFC from 'react-fusioncharts';

import FusionCharts from 'fusioncharts';

import Column2D from 'fusioncharts/fusioncharts.charts';

import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import styles from './Chart.module.css';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartStyle = {
  caption: '1.000.000 RSD into EUR & USD',
  subCaption: '',
  xAxisName: 'Date',
  yAxisName: 'EUR & USD',
  numberSuffix: '',
  theme: 'fusion',

  palettecolors: '0066ff,003080',
  baseFont: 'Roboto',

  showBorder: '1',
  borderColor: '#777',
  borderThickness: '3',
  borderAlpha: '100',

  captionFontSize: '24',
  captionFontColor: '#777',
  captionFontBold: '0',
  alignCaptionWithCanvas: '0',
  captionAlignment: 'center',

  xAxisNameFontSize: '24',
  xAxisNameFontColor: '#0066ff',
  yAxisNameFontSize: '24',
  yAxisNameFontColor: '#0066ff',

  yAxisValueFontSize: '16px',
  yAxisValueFontColor: '#777',
  yAxisValueFontBold: '1',
  yAxisValueFontItalic: '1',

  yAxisMaxValue: '20000',
  yAxisMinValue: '7000',

  labelPadding: '15',
  labelDisplay: 'rotate',
  slantLabel: '1',

  //showValues: '1',
  //valueFontSize: '8',

  divLineColor: '#777',

  drawCrossLine: '1',
  crosslinecolor: '#0066ff',

  toolTipBorderColor: '#777',
  toolTipBgColor: '#efefef',
  toolTipBgAlpha: '90',
  showToolTipShadow: '1',

  plotHighlightEffect: 'fadeout',

  showLegend: '1',
  interactiveLegend: '1',
  legendPosition: 'top-right',
  drawCustomLegend: '1',
  legendBgColor: '#777',
  legendBgAlpha: '20',
  legendBorderColor: '#999',
  legendBorderThickness: '1',
  legendBorderAlpha: '40',

  legendIconSides: '4',
  legendIconBorderThickness: '2',

  anchorBorderThickness: '2',
};

const chartCategories = [
  {
    category: [
      {
        label: '01.01.2007.',
      },
      {
        label: '01.01.2008.',
      },
      {
        label: '01.01.2009.',
      },
      {
        label: '01.01.2010.',
      },
      {
        label: '01.01.2011.',
      },
      {
        label: '01.01.2012.',
      },
      {
        label: '01.01.2013.',
      },
      {
        label: '01.01.2014.',
      },
      {
        label: '01.01.2015.',
      },
      {
        label: '01.01.2016.',
      },
      {
        label: '01.01.2017.',
      },
      {
        label: '01.01.2018.',
      },
      {
        label: '01.01.2019.',
      },
      {
        label: '01.01.2020.',
      },
      {
        label: '01.01.2021.',
      },
    ],
  },
];
const chartData = [
  {
    seriesname: 'EUR',
    data: [
      {
        value: '12687',
      },
      {
        value: '12675',
      },
      {
        value: '11234',
      },
      {
        value: '10424',
      },
      {
        value: '9448',
      },
      {
        value: '9571',
      },
      {
        value: '8911',
      },
      {
        value: '8735',
      },
      {
        value: '8239',
      },
      {
        value: '8236',
      },
      {
        value: '8127',
      },
      {
        value: '8452',
      },
      {
        value: '8387',
      },
      {
        value: '8519',
      },
      {
        value: '8540',
      },
    ],
  },
  {
    seriesname: 'USD',
    data: [
      {
        value: '16743',
      },
      {
        value: '18494',
      },
      {
        value: '15697',
      },
      {
        value: '14941',
      },
      {
        value: '12651',
      },
      {
        value: '12403',
      },
      {
        value: '11766',
      },
      {
        value: '12005',
      },
      {
        value: '9967',
      },
      {
        value: '8943',
      },
      {
        value: '8550',
      },
      {
        value: '10143',
      },
      {
        value: '9691',
      },
      {
        value: '9537',
      },
      {
        value: '10408',
      },
    ],
  },
];

const chartConfigs = {
  type: 'msline',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: {
    chart: chartStyle,

    categories: chartCategories,
    dataset: chartData,
  },
};

function Chart() {
  return (
    <div className={styles.chart}>
      <ReactFC {...chartConfigs} />
    </div>
  );
}

export default Chart;
