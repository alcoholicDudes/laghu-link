// Grommet custom theme
const theme = {
  // Global theme configurations
  global: {
    elevation: {
      light: {
        small: '0px 0px 17px 0px rgba(0,0,0,0.13)',
      },
    },
    size: {
      hair: '1px',
      vsmall: '2px',
      xxsmall: '8px',
      xsmall: '14px',
      small: '24px',
      medium: '32px',
      large: '40px',
      xlarge: '48px',
      xxlarge: '56px',
      xxxlarge: '112px',
      largex3: '120px',
      largex6: '240px',
      largex7: '280px',
      full: '100%',
    },
    borderSize: {
      xsmall: '1px',
      small: '2px',
    },
    edgeSize: {
      none: '0px',
      hair: '1px',
      vsmall: '2px',
      xxsmall: '4px',
      xsmall: '8px',
      small: '12px',
      medium: '18px',
      large: '24px',
      xlarge: '36px',
      xxlarge: '60px',
    },
    letterSpacing: {
      none: '0px',
      xsmall: '0.41px',
      nxsmall: '-0.41px',
    },
    zIndex: {
      medium: '20',
    },
    colors: {
      brand: 'rgb(87, 17, 148)', // indigoBlue
      'brand-light1': 'rgb(184, 154, 209)', // palePurple
      'brand-light2': 'rgb(222, 185, 255)', // lilac
      'brand-light3': 'rgb(247, 237, 255)', // lilac
      'accent-1': 'rgb(7, 190, 141)', // green
      'accent-1-light1': 'rgb(0, 133, 135)', // green variant for linear gradient
      'accent-1-light2': 'rgb(19, 288, 141)', // green variant for linear gradient
      'accent-1-light5': 'rgb(239, 251, 248)', // variant of green
      'accent-2': 'rgb(18, 118, 194)', // niceblue
      'accent-3': 'rgb(252, 245,60)', // yellow
      'accent-3-dark2': 'rgb(248, 192,28)', // yellow variant
      'light-1': 'rgb(255, 255, 255)', // white - Highlight Text on dark background
      'light-2': 'rgba(255, 255, 255, 0.9)', // muted background color
      'light-3': 'rgba(255, 255, 255, 0.8)', // default Text on dark background
      'light-4': 'rgba(255, 255, 255, 0.6)', // placeholder/muted info Text on dark background
      'light-6': 'rgba(255, 255, 255, 0.27)', // placeholder/muted info Text on dark background
      placeholder: 'rgba(255, 255, 255, 0.6)', // input elements in grommet accepxs color from colors.placeholder
      'dark-1': 'rgb(0, 0, 0)', // black - Highlight Text on light background
      'dark-3': 'rgb(74, 74, 74)', // charcoal - default Text on light background
      'dark-4': 'rgb(142, 142, 142)', // grey - placeholder/muted info Text on light background
      'dark-5': 'rgb(192, 185, 197)', // lavender - descripxion text
      'dark-6': 'rgb(201, 201, 201)', // silver - input borders/dividers Text on light background
      'dark-7': 'rgb(243, 243, 243)', // muted backgrounds
      'dark-8': 'rgba(142,142,142, 0.05)', // grey - 0.05% opaque
      'dark-9': 'rgba(0,0,0, 0.3)', // black - 0.3% opaque
      'status-critical': 'rgb(255,93,93)',
      border: {
        light: 'light-1',
      },
    },
    control: {
      border: {
        radius: '4px',
        width: '1px',
      },
      disabled: {
        opacity: 1,
      },
    },
    focus: {
      border: {
        color: 'focusGreen',
        width: '1px',
      },
    },
    // default font
    font: {
      family: '-apple-system, BlinkMacSystemFont, sans-serif;',
    },
    input: {
      padding: '18px',
      weight: 400,
    },
  },
  box: {
    responsiveBreakpoint: 'none',
  },
  heading: {
    responsiveBreakpoint: 'xsmall',
    font: {
      weight: 600,
      family: "'Lato', sans-serif",
    },
    extend: {
      margin: '0px',
    },
    level: {
      // To be used as Page headings
      '1': {
        font: {
          weight: 900,
        },
        large: {
          height: '35.5px',
          size: '28px',
          maxWidth: 'none',
        },
        medium: {
          height: '32px',
          size: '26px',
          maxWidth: 'none',
        },
        small: {
          height: '24px',
          size: '20px',
          maxWidth: 'none',
        },
        xsmall: {
          height: '22px',
          size: '18px',
          maxWidth: 'none',
        },
      },
      '2': {
        font: {
          weight: 600,
        },
        small: {
          size: '16px',
          height: '19px',
        },
        medium: {
          height: '22px',
          size: '17px',
          maxWidth: 'none',
        },
        large: {
          height: '22px',
          size: '20px',
          maxWidth: 'none',
        },
      },
      '3': {
        font: {
          family: '-apple-system, BlinkMacSystemFont, sans-serif;',
        },
        medium: {
          height: '16px',
          size: '12px',
          maxWidth: 'none',
        },
      },
      // page subHeading
      '4': {
        small: {
          size: '11px',
          maxWidth: 'none',
        },
        medium: {
          size: '14px',
          maxWidth: 'none',
        },
        large: {
          size: '16px',
          maxWidth: 'none',
        },
        xlarge: {
          size: '18px',
          height: '22px',
          maxWidth: 'none',
        },
      },
      '5': {
        font: {
          family: '-apple-system, BlinkMacSystemFont, sans-serif;',
          weight: 400,
        },
        medium: {
          size: '11px',
          height: '13px',
          maxWidth: 'none',
        },
      },
    },
  },
  maskedInput: {
    extend: {
      color: 'white',
      padding: '11px 17px 11px 17px',
    },
  },
  paragraph: {
    small: {
      size: '12px',
      height: '14px',
      maxWidth: 'none',
    },
    medium: {
      size: '14px',
      maxWidth: 'none',
    },
    large: {
      size: '18px',
      height: '24px',
    },
    extend: {
      margin: '0px',
    },
  },
  text: {
    feature: {
      size: '10px',
      height: '12px',
    },
    label: {
      size: '12px',
      height: '22px',
    },
    medium: {
      size: '14px',
      height: '18px',
    },
    large: {
      size: '16px',
      height: '20px',
    },
    xlarge: {
      size: '18px',
      height: '22px',
    },
  },
  button: {
    border: {width: '0px'},
    extend: {
      fontSize: '16px',
      fontWeight: 900,
      borderRadius: '7px',
      textAlign: 'center',
    },
    padding: {
      horizontal: '21px',
      vertical: '12px',
    },
  },
  checkBox: {
    border: {
      color: {dark: 'light-1', light: 'dark-4'},
    },
    hover: {
      border: {
        color: 'brand',
      },
    },
  },
  formField: {
    error: {
      color: {
        dark: 'status-critical',
        light: 'status-critical',
      },
    },
    label: {
      family: '-apple-system, BlinkMacSystemFont, sans-serif;',
      letterSpacing: 0,
      lineHeight: '22px',
      size: '12px',
      weight: 600,
    },
    margin: {bottom: 'medium'},
  },
  textInput: {
    extend: {
      color: 'white',
      letterSpacing: 0,
      padding: '11px 17px 11px 17px',
    },
  },
}

export default theme
