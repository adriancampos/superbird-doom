import getElementById from '../getElementById';
import initWeapons from './initWeapons';

export default (state) => {
    const {
        constants: {
            IMG_EXT,
            STATUS_BAR_PATH,
            STATUS_BAR_FILENAME,
        },
    } = state;

    const statusBar = getElementById('statusbar');
    const statusBarBackground = new Image();
    statusBarBackground.id = 'stbar';
    statusBarBackground.src = `${STATUS_BAR_PATH}/${STATUS_BAR_FILENAME}${IMG_EXT}`;
    statusBarBackground.style.width = '100%';
    statusBar.appendChild(statusBarBackground);

    setTimeout(() => {
        const statusBarGrid = getElementById('statusbargrid');
        statusBarGrid.height = statusBarBackground.height;
    }, 50);

    initWeapons(state);
};
