module.exports = {
  mode: 'jit',
  purge: {
    content: [],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        card: '28rem',
        sidebar: '17rem',
        signup: '22rem',
        icon: '18px',
      },
      lineHeight: {
        12: '3rem',
      },
      colors: {
        textColor: {
          skin: {
            primary: 'var(--text-primary)',
            secondary: 'var(--text-secondary )',
            light: 'var(--text-light )',
          },
        },
        backgroundColor: {
          skin: {
            primary: 'var(--background-primary )',
            secondary: 'var(--background-secondary )',
            card: 'var(--background-card )',
          },
        },
        brandColor: {
          skin: {
            teal: 'var(--brandColor )',
          },
        },
        borderColor: {
          skin: {
            primary: 'var(--border-primary )',
            secondary: 'var(--border-secondary )',
            error: 'var(--text-error)',
          },
        },
        textMessageColor: {
          skin: {
            error: 'var(--text-error )',
            warning: 'var(--text-warning )',
            success: 'var(--text-success )',
          },
        },
        buttonBackground: {
          skin: {
            primary: 'var(--button-primary-fill )',
            secondary: 'var(--button-secondary-fill )',
          },
        },
        buttonGhostBorder: {
          skin: {
            primary: 'var(--button-primary-ghost-border )',
            secondary: 'var(--button-secondary-ghost-border )',
          },
        },
        hoverBackground: {
          skin: {
            primary: 'var(--hover-background )',
          },
        },
        focusBackground: {
          skin: {
            primary: 'var(--focused-background )',
          },
        },
        notification: {
          skin: {
            primary: 'var(--notification-active)',
          },
        },
        gray: {
          light: '#E5E5E5',
          medium1: '#BFBFBF',
          medium2: '#9F9F9F',
          medium3: '#9A9A9A',
          dark: '#686868',
          dark2: '#3A3A3A',
          background: '#FAFAFA',
          border: '#707070',
          summary: '#757575',
          backgroundDark: '#F7F7F7',
        },
        blue: {
          link: '#008080',
          facebook: '#1877f2',
          linkedin: '#0077B5',
        },
        black: {
          text: '#3A3A3A',
          card: '#292929',
        },
        green: {
          teal: '#008080',
          tealBackground: '#f0f8f8',
        },
      },
      flex: {
        6: '0.6 1 0',
        7: '0.7 1 0',
        4: '0.4 1 0',
      },
      fontSize: {
        xxxs: '0.5rem',
        xxs: '0.6875rem',
        28: '1.75rem',
      },
    },
    fontFamily: {
      sans: ['"roboto"'],
      roboto: ['roboto'],
      display: ['roboto'],
      merriweather: ['merriweather'],
      amiri: ['amiri'],
      SourceSerif: ['Source+Serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
