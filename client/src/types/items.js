import {
    CHAINSAW,
    SHOTGUN,
    SUPER_SHOTGUN,
    CHAINGUN,
    ROCKET_LAUNCHER,
    BULLETS,
    SHELLS,
    ROCKETS,
    CELLS,
    GREEN_ARMOR,
    BLUE_ARMOR,
    PLASMA_GUN,
    BFG9000,
} from '../engine/constants';

export default {
    // weapons
    chainsaw: {
        prefix: 'CSAW',
        pickup: {
            weapon: CHAINSAW,
        },

    },
    shotgun: {
        prefix: 'SHOT',
        pickup: {
            weapon: SHOTGUN,
            [SHELLS]: 8,
        },

    },
    superShotgun: {
        prefix: 'SGN2',
        pickup: {
            weapon: SUPER_SHOTGUN,
            [SHELLS]: 8,
        },
    },
    chaingun: {
        prefix: 'MGUN',
        pickup: {
            weapon: CHAINGUN,
            [BULLETS]: 20,
        },
    },
    rocketLauncher: {
        prefix: 'LAUN',
        pickup: {
            weapon: ROCKET_LAUNCHER,
            [ROCKETS]: 2,
        },
    },
    plasmaGun: {
        prefix: 'PLAS',
        pickup: {
            weapon: PLASMA_GUN,
            [CELLS]: 40,
        },
    },
    bfg9000: {
        prefix: 'BFUG',
        pickup: {
            weapon: BFG9000,
            [CELLS]: 40,
        },
    },
    // ammo
    clip: {
        prefix: 'CLIP',
        pickup: {
            [BULLETS]: 5,
        },
    },
    boxOfBullets: {
        prefix: 'AMMO',
        pickup: {
            [BULLETS]: 50,
        }
    },
    shells: {
        prefix: 'SHEL',
        pickup: {
            [SHELLS]: 4,
        },
    },
    boxOfShells: {
        prefix: 'SBOX',
        pickup: {
            [SHELLS]: 20,
        },
    },
    rocket: {
        prefix: 'ROCK',
        pickup: {
            [ROCKETS]: 1,
        },
    },
    boxOfRockets: {
        prefix: 'BROK',
        pickup: {
            [ROCKETS]: 5,
        },
    },
    cell: {
        prefix: 'CELL',
        pickup: {
            [CELLS]: 20,
        },
    },
    cellPack: {
        prefix: 'CELP',
        pickup: {
            [CELLS]: 100,
        },
    },
    backpack: {
        prefix: 'BPAK',
        pickup: {
            doubleMaxAmmo: true,
            [BULLETS]: 10,
            [SHELLS]: 4,
            [ROCKETS]: 1,
            [CELLS]: 20,
        },
    },
    // health
    vial: {
        prefix: 'BON1',
        endFrame: 'D',
        pickup: {
            extraHealth: 1,
        }
    },
    stimpack: {
        prefix: 'STIM',
        pickup: {
            addHealth: 10,
        },
    },
    medikit: {
        prefix: 'MEDI',
        pickup: {
            addHealth: 25,
        },
    },
    // armor
    helmet: {
        prefix: 'BON2',
        endFrame: 'D',
        pickup: {
            extraArmor: 1,
            doNotOverrideArmorType: true,
        }
    },
    greenArmor: {
        prefix: 'ARM1',
        endFrame: 'B',
        pickup: {
            setArmor: 100,
            armorType: GREEN_ARMOR,
        }
    },
    blueArmor: {
        prefix: 'ARM2',
        endFrame: 'B',
        pickup: {
            setArmor: 200,
            armorType: BLUE_ARMOR,
        }
    },
    // power-ups
    berserk: {
        prefix: 'PSTR',
        pickup: {
            setHealth: 100,
            berserk: true,
        },
    },
    soulSphere: {
        prefix: 'SOUL',
        endFrame: 'D',
        pickup: {
            extraHealth: 100,
        },
    },
    megasphere: {
        prefix: 'MEGA',
        endFrame: 'D',
        pickup: {
            setHealth: 200,
            setArmor: 200,
            armorType: BLUE_ARMOR,
        },
    },
    invulnerability: {
        prefix: 'PINV',
        endFrame: 'D',
        pickup: {
            invulnerable: 30,
        },
    },
    invisibility: {
        prefix: 'PINS',
        endFrame: 'D',
        pickup: {
            invisible: 60,
        }
    },
    computerMap: {
        prefix: 'PMAP',
        endFrame: 'D',
        pickup: {
            revealMapUnexplored: true,
        },
    },
    visor: {
        prefix: 'PVIS',
        endFrame: 'B',
        pickup: {
            lightAmplification: 120,
        },
    },
    radSuit: {
        prefix: 'SUIT',
        pickup: {
            radiationShield: 120,
        },
    },
};
