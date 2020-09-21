import { colors, WIDTHS } from 'app/constants'
import hexToRgba from 'hex-to-rgba'

export const DateSelectorTheme = {
  breakpoints: [WIDTHS.TABLET, WIDTHS.DESKTOP],
  reactDatepicker: {
    daySize: 40,
    inputFontWeight: 'normal',
    inputFontSize: '16px',
    inputColor: `${colors.white}`,
    inputPlaceholderFontWeight: '16px',
    inputBackground: 'none',
    inputLabelBackground: 'none',
    inputLabelBorder: `solid 1px ${colors.osloGray}`,
    inputLabelBorderRadius: '6px',
    inputMinHeight: '54px',
    inputActiveBoxShadow: `0px 0px 5px 2px ${colors.white}`,
    inputWidth: '100%',

    datepickerWidth: '1000px',
    dateRangeStartDateInputPadding: '0 16px',
    dateRangeEndDateInputPadding: '0 16px',
    dateRangeGridTemplateColumns: ['100%', '117px 30px 117px'],
    dateRangeGridTemplateRows: ['56px 30px 56px', '56px'],
    dateRangeZIndex: 1,

    datepickerPadding: '20px 16px 8px',
    datepickerBackground: `${colors.woodsmoke}`,
    datepickerBorderRadius: '6px',
    datepickerBoxShadow: `0px 0px 5px 2px ${colors.white}`,

    dayColor: `${colors.osloGray}`,
    dayBackground: `${colors.woodsmoke}`,
    dayBorderColor: 'none',
    dayHoverBackground: `${hexToRgba(colors.white, 0.04)}`,
    dayHoverColor: `${colors.white}`,
    dayHoverRangeBackground: `${hexToRgba(colors.white, 0.04)}`,
    dayHoverRangeBorderColor: 'green',
    daySelectedBackground: `${colors.clementine}`,
    daySelectedBorderColor: 'none',
    daySelectedFirstOrLastBackground: `${colors.grenadier}`,
    daySelectedFirstOrLastBorderColor: 'none',
    daySelectedHoverBackground: `${colors.grenadier}`,
    dayAccessibilityBorderColor: 'none',

    monthLabelFontWeight: 'normal',
    monthLabelColor: `${colors.osloGray}`,

    navButtonBackground: 'none',
    navButtonBorder: 'none',
  },
}
