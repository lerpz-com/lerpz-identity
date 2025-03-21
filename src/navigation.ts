import { Navigation } from '@toolpad/core';

const NAVIGATION: Navigation = [
    {
        segment: 'dashboard',
        title: 'Dashboard',
        children: [
            {
                segment: 'overview',
                title: 'Overview',
            },
            {
                segment: 'performance',
                title: 'Performance',
            },
            {
                segment: 'settings',
                title: 'Settings',
            }
        ]
    },
]

export default NAVIGATION;
