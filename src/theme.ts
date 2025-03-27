'use client';

import { createTheme } from '@mantine/core';
import { firaMono, poppins } from '@lerpz/app/layout';

const theme = createTheme({
    fontFamily: poppins.style.fontFamily,
    fontFamilyMonospace: firaMono.style.fontFamily,
});

export default theme
