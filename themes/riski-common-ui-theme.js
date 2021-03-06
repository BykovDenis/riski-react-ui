import { getLuminance } from '@material-ui/core/styles/colorManipulator';

const whiteColor = '#ffffff';
const blackColor = '#333333';
const lightGrayColor = '#eeeeee';

function getContrastText(color, dark, light) {
    return getLuminance(color) <= 0.5 ? dark : light;
}

function hexToRGB(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
    } else {
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    }
}

function riskiCommonUITheme(
    primaryColor,
    lightPrimaryColor,
    lighterPrimaryColor,
    mostLighterPrimaryColor,
    darkPrimaryColor,
    secondaryColor,
    lightSecondaryColor,
    darkSecondaryColor,
    primaryFontColor,
    disabledBackgroundColor
) {
    return {
        spacing: 1,
        blockTitle: {
            marginTop: '20px',
            marginBottom: '20px',
            marginRight: '20px',
        },
        button: {
            cursor: 'pointer',
            color: primaryFontColor,
            backgroundColor: primaryColor,
            '&:hover': {
                backgroundColor: lightPrimaryColor,
            },
            '&:active': {
                backgroundColor: darkPrimaryColor,
            },
            '&:disabled': {
                color: primaryFontColor,
                backgroundColor: disabledBackgroundColor,
            },
        },
        containerCenter: {
            display: 'flex',
            width: '100%',
            height: '50vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        },
        checkboxGroup: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
        },
        inputCheckbox: {
            color: primaryColor,
            borderColor: primaryColor,
        },
        /* directories */
        directoryFormBody: {
            marginBottom: '20px',
        },
        directoryFormLabel: {
            marginRight: '20px',
            minWidth: '150px',
        },
        directoryFormFooter: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
        },
        directoryFormInput: {
            textAlign: 'right',
            '& input': {
                textAlign: 'right',
            },
        },
        directoryFormItem: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            justifyContent: 'space-between',
        },
        directoryFormSelect: {
            textAlign: 'right',
            marginTop: '20px',
        },
        directoryContainer: {
            marginLeft: '24px',
            marginRight: '24px',
        },
        directoryFormDate: {
            textAlign: 'right',
            marginTop: '20px',
        },
        directoryFormTitle: {
            '& h1': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
            },
            '& h2': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
            },
            '& h3': {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'baseline',
            },
        },
        directoryPageTitle: {
            fontSize: '24px',
            padding: 0,
            marginBottom: '20px',
            marginTop: '20px',
            marginRight: '20px',
        },
        directorySearchContainer: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            flexGrow: 1,
            marginLeft: '40px',
        },
        directorySearchInput: {
            width: '70%',
            marginLeft: '20px',
            marginTop: '0 !important',
        },
        errorMessage: {
            color: secondaryColor,
            fontWeight: '900',
            fontSize: '12px',
        },
        inputItem: {
            marginBottom: 0,
            paddingTop: '5px',
            paddingBottom: '5px',
            '& label': {
                fontWeight: 900,
            },
            '&:focus label': {
                color: primaryColor,
            },
            '&:active label': {
                color: primaryColor,
            },
            '&:hover label': {
                color: primaryColor,
            },
            '& div:after': {
                backgroundColor: primaryColor,
                borderColor: primaryColor,
            },
            '& div:hover:after': {
                backgroundColor: primaryColor,
                borderColor: primaryColor,
            },
            '& div:active:after': {
                backgroundColor: primaryColor,
                borderColor: primaryColor,
            },
            '&:hover div::before': {
                borderColor: primaryColor,
            },
            '& div:hover:before': {
                borderColor: `${primaryColor} !important`,
            },
            '& p': {
                position: 'absolute',
                top: '50px',
            },
            '& input:hover': {
                borderBottom: primaryColor,
            },
        },
        formContainer: {
            margin: '0 auto',
            position: 'relative',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            padding: '15px 30px',
            '@media (max-width: 768px)': {
                flexDirection: 'column',
                justifyContent: 'flex-start',
            },
        },
        formControl: {
            paddingRight: '15px',
            width: '100%',
            '@media (min-width: 768px) and (max-width: 992px)': {
                width: '50%',
            },
            '@media (min-width: 992px)': {
                width: '30%',
            },
        },
        formLabel: {
            color: darkPrimaryColor,
            fontWeight: 900,
            lineHeight: 1.33,
        },
        formSelect: {
            '& input': {
                textAlign: 'right',
            },
            '& div': {
                textAlign: 'right',
            },
        },
        headerButton: {
            color: whiteColor,
        },
        headerRowContainer: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '20px',
            minHeight: '56px',
        },
        link: {
            color: primaryColor,
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
            },
        },
        list: {
            fontSize: '12px',
        },
        noDataContainer: {
            display: 'block',
            textAlign: 'center',
            fontWeight: 900,
        },
        palette: {
            link: {
                display: 'block',
                color: 'rgba(0, 0, 0, 0.87)',
                lineHeight: '1.4em',
                fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                fontWeight: 500,
                borderRadius: '4px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                '&:hover': {
                    textDecoration: 'underline',
                },
            },
            toolTip: {
                fontSize: '12px',
            },
            primary: {
                light: lightPrimaryColor,
                lighter: lighterPrimaryColor,
                main: primaryColor,
                mostLighter: mostLighterPrimaryColor,
                dark: darkPrimaryColor,
                contrastText: 'rgba(0, 0, 0, .87)',
                blackColor,
                lightGrayColor,
                whiteColor,
            },
            secondary: {
                light: lightSecondaryColor,
                main: secondaryColor,
                dark: darkSecondaryColor,
                contrastText: getContrastText(secondaryColor, lightSecondaryColor, darkSecondaryColor),
            },
        },
        pageTitle: {
            fontSize: '24px',
            margin: '20px 20px 0',
        },
        pagePartTitleH1: {
            margin: '20px',
            marginTop: '10px',
            fontSize: '32px',
            fontWeight: 700,
        },
        pagePartTitleH2: {
            margin: '20px 20px 0',
            fontSize: '24px',
            fontWeight: 700,
        },
        pagePartTitleH3: {
            margin: '0',
            fontSize: '20px',
            fontWeight: 700,
        },
        paper: {
            borderRadius: 0,
            minHeight: '85vh',
            padding: '5px 0 5px',
            overflowX: 'auto',
        },
        tableContainer: {
            overflow: 'auto',
            position: 'absolute',
            top: '145px',
            bottom: '20px',
        },
        table: {
            position: 'relative',
            backgroundColor: whiteColor,
            borderCollapse: 'collapse',
        },
        tableHead: {
            height: 'auto',
        },
        tableBody: {
            overflow: 'auto',
            fontSize: 'inherit',
        },
        tableRow: {
            cursor: 'pointer',
            fontSize: 'inherit',
            '&:hover > td': {
                transition: 'background-color 0.2s ease-in-out',
                backgroundColor: hexToRGB(mostLighterPrimaryColor, 0.3),
            },
            '&:nth-of-type(even)': {
                backgroundColor: hexToRGB(lighterPrimaryColor, 0.5),
            },
        },
        tableRowHeader: {
            backgroundColor: lightPrimaryColor,
            height: '56px',
        },
        tableRowFooter: {
            backgroundColor: lightPrimaryColor,
            height: '56px',
        },
        tableCell: {
            textAlign: 'center',
            whiteSpace: 'nowrap',
            fontSize: 'inherit',
            paddingTop: '4px',
            paddingBottom: '4px',
            wordBreak: 'normal',
        },
        tableCellHeader: {
            '& span': {
                color: whiteColor,
            },
            position: 'sticky',
            top: 0,
            backgroundColor: lightPrimaryColor,
            textAlign: 'center',
            paddingTop: '2px',
            paddingBottom: '2px',
            fontWeight: '900',
            color: whiteColor,
            wordBreak: 'initial',
            wordWrap: 'break-word',
        },
        tableCellFooter: {
            position: 'sticky',
            bottom: 0,
            backgroundColor: whiteColor,
            color: whiteColor,
            textAlign: 'left',
            paddingTop: '2px',
            paddingBottom: '2px',
            paddingLeft: '24px',
            paddingRight: '24px',
            fontWeight: '900',
            whiteSpace: 'nowrap',
            zIndex: 1000,
        },
        tableCellNoStyled: {
            border: 'none',
            padding: 0,
            margin: 0,
            '&:last-child': {
                padding: 0,
                margin: 0,
            },
        },
        tabsContainer: {},
        title: {
            flex: 1,
            textAlign: 'center',
            fontSize: '1.3125rem',
            fontWeight: '500',
            lineHeight: '1.16667em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            marginTop: 0,
            marginBottom: 0,
        },
        tabContainer: {
            padding: 0,
        },
        typography: {
            useNextVariants: true,
        },
    };
}

export default riskiCommonUITheme;
