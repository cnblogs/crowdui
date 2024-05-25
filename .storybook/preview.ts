/** @type { import('@storybook/web-components').Preview } */
import { Preview } from '@storybook/web-components';
const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
