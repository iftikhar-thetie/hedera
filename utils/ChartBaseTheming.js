import colors from 'tailwindcss/colors';
import { formatNumber, formatPrice } from './helpers';
import Highcharts from 'highcharts';

export const baseColors = (i = null) => {
  const color_series = [colors.blue[500], colors.neutral[500]];
  if (i == null) return color_series;
  return color_series[i % (color_series.length - 1)];
};

export const baseColorPos = (i = null) => {
  const color_series = colors.blue[500];
  if (i == null) return color_series;
  return color_series[i % (color_series.length - 1)];
};

export const baseColorNeg = (i = null) => {
  const color_series = colors.blue[500];
  if (i == null) return color_series;
  return color_series[i % (color_series.length - 1)];
};

export const baseColorMuted = (i = null) => {
  return colors.neutral[700];
};

export const multiColorSeries = (i = null) => {
  const color_series = [
    colors.blue[600],
    colors.red[600],
    '#C026D3', // Extended Fuschia 600
    colors.yellow[600],
    colors.sky[300],
    colors.emerald[600],
    colors.pink[600],
    colors.orange[600],
    colors.emerald[800]
  ];
  if (i == null) return color_series;
  return color_series[i % (color_series.length - 1)];
};

export const multiColorSeriesMuted = (i = null) => {
  const color_series = [
    colors.blue[400],
    colors.emerald[300],
    colors.pink[400],
    '#E879F9', // Extended Fuschia 400
    colors.orange[300],
    colors.yellow[200],
    '#F87171' // Extended Red 400
  ];
  if (i == null) return color_series;
  return color_series[i % (color_series.length - 1)];
};

export const monoChromeSeries = (color = 'blue', i = null) => {
  const color_series = [
    colors[color][500],
    colors[color][700],
    colors[color][300],
    colors[color][200],
    colors[color][900],
    colors[color][100]
  ];
  if (i == null) return color_series;
  return color_series[i % (color_series.length - 1)];
};

export const baseHighchartsTheme = () => {
  return {
    colors: multiColorSeries(),
    chart: {
      animation: false,
      backgroundColor: 'transparent',
      spacingTop: 20,
      zoomType: '',
      style: {
        fontFamily: 'Source Sans 3'
      }
    },
    title: {
      text: undefined,
      style: {
        color: colors.neutral[400]
      }
    },
    credits: { enabled: false },
    exporting: {
      enabled: false,
      fallbackToExportServer: false,
      chartOptions: {
        chart: {
          backgroundColor: colors.neutral[900]
        },
        title: {
          style: {
            color: colors.neutral[300],
            fontWeight: 'bold',
            fontSize: '14px'
          }
        }
      }
    },
    xAxis: {
      lineColor: colors.neutral[800],
      tickLength: 6,
      tickWidth: 1,
      tickColor: colors.neutral[700],
      title: {
        style: {
          color: colors.neutral[400],
          fontSize: '10px'
        }
      },
      labels: {
        enabled: true,
        style: {
          color: colors.neutral[400],
          fontSize: '10px'
        }
      },
      crosshair: {
        color: colors.neutral[600],
        // dashStyle: 'Dash',
        width: 1
      }
    },
    time: {
      useUTC: false
    },
    yAxis: {
      gridLineDashStyle: 'dash',
      gridLineColor: colors.neutral[800],
      lineColor: colors.neutral[600],
      scaleShowLabels: true,
      maxPadding: 0,
      title: {
        text: '',
        style: {
          color: colors.neutral[400],
          fontSize: '10px'
        }
      },
      labels: {
        enabled: true,
        style: {
          color: colors.neutral[400],
          fontSize: '10px'
        }
      }
    },
    legend: {
      enabled: false,
      margin: 0,
      symbolWidth: 6,
      symbolHeight: 6,
      symbolRadius: 3,
      itemStyle: {
        fontSize: '10px',
        fontWeight: 'light',
        color: colors.neutral[100]
      },
      itemHiddenStyle: {
        fontSize: '10px',
        color: colors.neutral[500]
      },
      itemHoverStyle: {
        fontSize: '10px',
        color: colors.neutral[300]
      }
    },
    plotOptions: {
      area: {
        // stacking: 'normal',
        marker: false
        // turboThreshold: 100000
      },
      column: {
        borderWidth: 0
      },
      heatmap: {
        dataLabels: {
          enabled: true,
          backgroundColor: 'transparent',
          borderWidth: 0,
          style: {
            color: colors.neutral[300],
            fontSize: '10px',
            textOutline: 'transparent'
          },
          formatter: function () {
            return Highcharts.numberFormat(this.point.value, 0, null, ',');
          }
        }
      },
      histogram: {
        pointPadding: 0.1,
        borderWidth: 0
        // binWidth: 0.2
      },
      line: {
        lineWidth: 2,
        marker: {
          enabled: false
        }
      },
      pie: {
        // opacity: 0.9,
        size: '100%',
        allowPointSelect: true,
        cursor: 'pointer',
        animation: false,
        startAngle: 120,
        dataLabels: {
          enabled: true,
          distance: -30,
          color: colors.neutral[300],
          style: {
            textOutline: false
          },
          formatter: function () {
            return '<b>' + this.point.name + '</b>: <br/>' + this.point.y;
          }
        },
        showInLegend: true,
        borderWidth: 0,
        shadow: false
      },
      series: {
        crisp: true,
        marker: {
          radius: 1
        },
        connectNulls: true,
        animation: false,
        bar: {
          borderWidth: 0
        },
        states: {
          hover: {
            lineWidth: 2
          }
        }
      }
    },
    turboThreshold: 10000000000000,
    tooltip: {
      shared: true,
      followPointer: true,
      useHTML: true,
      borderWidth: 0,
      backgroundColor: 'transparent',
      shadow: false,
      style: {
        zIndex: 100,
        color: colors.neutral[200],
        pointerEvents: 'auto'
      },
      headerFormat: `<div class="rounded-md border-none backdrop-blur-md text-xs">
          <div class="flex flex-col backdrop-blur-md space-y-1 p-2 rounded bg-neutral-800/50">`,
      xDateFormat: '%b %d, %Y',
      pointFormatter: function () {
        const formatType = this.series.userOptions?.formatType;
        let pointVal =
          (formatType?.includes('price') || this.series.name.toLowerCase().includes('price')) &&
          (this.y < 1 || this.y.toString().includes('e'))
            ? formatPrice(this.y)
            : formatNumber(this.y);
        let prefix = formatType?.includes('price') || formatType?.includes('dollar') ? '$' : null;
        let suffix = formatType?.includes('percent') ? '%' : null;

        return `<div class="">
                  <div class="flex items-center w-full space-x-1">
                  <span style="color:${this.series.color}">●</span>
                  <span class="text-xxs text-gray-400">${this.series.name}</span><br />
                </div>
                <div>
                  <span class=" text-gray-200">${prefix ? prefix : ''}</span>
                  <span class=" text-gray-200">${pointVal}</span>
                  <span class=" text-gray-200">${suffix ? suffix : ''}</span>
                </div>
                </div>`;
      },
      footerFormat: `<div class="text-gray-400 py-1 text-xxs uppercase">{point.key}</div></div>`
    }
  };
};
