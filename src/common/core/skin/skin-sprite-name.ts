export const SkinSpriteName = {
    NoteHeadNeutral: '#NOTE_HEAD_NEUTRAL',
    NoteHeadRed: '#NOTE_HEAD_RED',
    NoteHeadGreen: '#NOTE_HEAD_GREEN',
    NoteHeadBlue: '#NOTE_HEAD_BLUE',
    NoteHeadYellow: '#NOTE_HEAD_YELLOW',
    NoteHeadPurple: '#NOTE_HEAD_PURPLE',
    NoteHeadCyan: '#NOTE_HEAD_CYAN',

    NoteTickNeutral: '#NOTE_TICK_NEUTRAL',
    NoteTickRed: '#NOTE_TICK_RED',
    NoteTickGreen: '#NOTE_TICK_GREEN',
    NoteTickBlue: '#NOTE_TICK_BLUE',
    NoteTickYellow: '#NOTE_TICK_YELLOW',
    NoteTickPurple: '#NOTE_TICK_PURPLE',
    NoteTickCyan: '#NOTE_TICK_CYAN',

    NoteTailNeutral: '#NOTE_TAIL_NEUTRAL',
    NoteTailRed: '#NOTE_TAIL_RED',
    NoteTailGreen: '#NOTE_TAIL_GREEN',
    NoteTailBlue: '#NOTE_TAIL_BLUE',
    NoteTailYellow: '#NOTE_TAIL_YELLOW',
    NoteTailPurple: '#NOTE_TAIL_PURPLE',
    NoteTailCyan: '#NOTE_TAIL_CYAN',

    NoteConnectionNeutral: '#NOTE_CONNECTION_NEUTRAL',
    NoteConnectionRed: '#NOTE_CONNECTION_RED',
    NoteConnectionGreen: '#NOTE_CONNECTION_GREEN',
    NoteConnectionBlue: '#NOTE_CONNECTION_BLUE',
    NoteConnectionYellow: '#NOTE_CONNECTION_YELLOW',
    NoteConnectionPurple: '#NOTE_CONNECTION_PURPLE',
    NoteConnectionCyan: '#NOTE_CONNECTION_CYAN',

    NoteConnectionNeutralSeamless: '#NOTE_CONNECTION_NEUTRAL_SEAMLESS',
    NoteConnectionRedSeamless: '#NOTE_CONNECTION_RED_SEAMLESS',
    NoteConnectionGreenSeamless: '#NOTE_CONNECTION_GREEN_SEAMLESS',
    NoteConnectionBlueSeamless: '#NOTE_CONNECTION_BLUE_SEAMLESS',
    NoteConnectionYellowSeamless: '#NOTE_CONNECTION_YELLOW_SEAMLESS',
    NoteConnectionPurpleSeamless: '#NOTE_CONNECTION_PURPLE_SEAMLESS',
    NoteConnectionCyanSeamless: '#NOTE_CONNECTION_CYAN_SEAMLESS',

    SimultaneousConnectionNeutral: '#SIMULTANEOUS_CONNECTION_NEUTRAL',
    SimultaneousConnectionRed: '#SIMULTANEOUS_CONNECTION_RED',
    SimultaneousConnectionGreen: '#SIMULTANEOUS_CONNECTION_GREEN',
    SimultaneousConnectionBlue: '#SIMULTANEOUS_CONNECTION_BLUE',
    SimultaneousConnectionYellow: '#SIMULTANEOUS_CONNECTION_YELLOW',
    SimultaneousConnectionPurple: '#SIMULTANEOUS_CONNECTION_PURPLE',
    SimultaneousConnectionCyan: '#SIMULTANEOUS_CONNECTION_CYAN',

    SimultaneousConnectionNeutralSeamless:
        '#SIMULTANEOUS_CONNECTION_NEUTRAL_SEAMLESS',
    SimultaneousConnectionRedSeamless: '#SIMULTANEOUS_CONNECTION_RED_SEAMLESS',
    SimultaneousConnectionGreenSeamless:
        '#SIMULTANEOUS_CONNECTION_GREEN_SEAMLESS',
    SimultaneousConnectionBlueSeamless:
        '#SIMULTANEOUS_CONNECTION_BLUE_SEAMLESS',
    SimultaneousConnectionYellowSeamless:
        '#SIMULTANEOUS_CONNECTION_YELLOW_SEAMLESS',
    SimultaneousConnectionPurpleSeamless:
        '#SIMULTANEOUS_CONNECTION_PURPLE_SEAMLESS',
    SimultaneousConnectionCyanSeamless:
        '#SIMULTANEOUS_CONNECTION_CYAN_SEAMLESS',

    DirectionalMarkerNeutral: '#DIRECTIONAL_MARKER_NEUTRAL',
    DirectionalMarkerRed: '#DIRECTIONAL_MARKER_RED',
    DirectionalMarkerGreen: '#DIRECTIONAL_MARKER_GREEN',
    DirectionalMarkerBlue: '#DIRECTIONAL_MARKER_BLUE',
    DirectionalMarkerYellow: '#DIRECTIONAL_MARKER_YELLOW',
    DirectionalMarkerPurple: '#DIRECTIONAL_MARKER_PURPLE',
    DirectionalMarkerCyan: '#DIRECTIONAL_MARKER_CYAN',

    SimultaneousMarkerNeutral: '#SIMULTANEOUS_MARKER_NEUTRAL',
    SimultaneousMarkerRed: '#SIMULTANEOUS_MARKER_RED',
    SimultaneousMarkerGreen: '#SIMULTANEOUS_MARKER_GREEN',
    SimultaneousMarkerBlue: '#SIMULTANEOUS_MARKER_BLUE',
    SimultaneousMarkerYellow: '#SIMULTANEOUS_MARKER_YELLOW',
    SimultaneousMarkerPurple: '#SIMULTANEOUS_MARKER_PURPLE',
    SimultaneousMarkerCyan: '#SIMULTANEOUS_MARKER_CYAN',

    StageMiddle: '#STAGE_MIDDLE',

    StageLeftBorder: '#STAGE_LEFT_BORDER',
    StageRightBorder: '#STAGE_RIGHT_BORDER',
    StageTopBorder: '#STAGE_TOP_BORDER',
    StageBottomBorder: '#STAGE_BOTTOM_BORDER',
    StageLeftBorderSeamless: '#STAGE_LEFT_BORDER_SEAMLESS',
    StageRightBorderSeamless: '#STAGE_RIGHT_BORDER_SEAMLESS',
    StageTopBorderSeamless: '#STAGE_TOP_BORDER_SEAMLESS',
    StageBottomBorderSeamless: '#STAGE_BOTTOM_BORDER_SEAMLESS',

    StageTopLeftCorner: '#STAGE_TOP_LEFT_CORNER',
    StageTopRightCorner: '#STAGE_TOP_RIGHT_CORNER',
    StageBottomLeftCorner: '#STAGE_BOTTOM_LEFT_CORNER',
    StageBottomRightCorner: '#STAGE_BOTTOM_RIGHT_CORNER',

    Lane: '#LANE',
    LaneSeamless: '#LANE_SEAMLESS',

    LaneAlternative: '#LANE_ALTERNATIVE',
    LaneAlternativeSeamless: '#LANE_ALTERNATIVE_SEAMLESS',

    JudgmentLine: '#JUDGMENT_LINE',
    NoteSlot: '#NOTE_SLOT',

    StageCover: '#STAGE_COVER',
} as const

export type SkinSpriteName =
    (typeof SkinSpriteName)[keyof typeof SkinSpriteName]
