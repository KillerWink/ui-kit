import { ThemeProvider } from 'emotion-theming';
import theme from '@killerwink/ui-kit/packages/Theme';

const killerWink = (children) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
};

export default killerWink;
