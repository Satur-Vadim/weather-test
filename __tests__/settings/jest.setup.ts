import '@testing-library/jest-dom/extend-expect';

jest.mock('react-i18next', () => ({
  withTranslation: () => (Component: {
    defaultProps: Record<string, unknown>
  }) => {
    const MockComponent = Component;
    MockComponent.defaultProps = { ...Component.defaultProps, t: () => '' };
    return MockComponent;
  },
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {
        // do nothing mock function
      }),
    },
  }),
}));

jest.mock('next/config', () => ({
  default: () => ({
    publicRuntimeConfig: {
      localeSubpaths: {},
    },
  }),
}));

jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/projects',
    query: '',
    asPath: '',
  }),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query: unknown) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
