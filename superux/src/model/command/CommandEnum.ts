enum CommandEnum {
    INVALID,

    UNDO,
    REDO,
    CHANGE_APP_MODE,
    ZOOM_IN,
    ZOOM_OUT,
    ZOOM_RATIO,

    // widget
    INSERT_WIDGET,
    INSERT_WIDGET_AT,
    INSERT_WIDGET_CLONE,
    DELETE_WIDGET,
    SELECT_WIDGET,
    DRAG_SELECT_WIDGET,
    SELECT_PAGE_THUMBNAIL,
    WIDGET_MOVE_START,
    WIDGET_MOVE_END,
    WIDGET_UPDATE_PROPERTIES,
    WIDGET_RESIZE_START,
    WIDGET_RESIZE_END,
    LOCK_WIDGET,

    // composite widget
    REGISTER_COMPOSITE_WIDGET,
    UNREGISTER_COMPOSITE_WIDGET,

    // page
    ADD_PAGE,
    DELETE_PAGE,
    UPDATE_PAGE_PROPERTIES,
    SELECT_PREV_PAGE,
    SELECT_NEXT_PAGE,
    SELECT_PAGE_BY_ID,
    LOCK_PAGE,
    HIDE_PAGE,

    // style
    CHANGE_BACKGROUND_COLOR,
    CHANGE_THEME,

    // clipboard
    CLIPBOARD_COPY_PROCESS,
    CLIPBOARD_CUT_PROCESS,
    CLIPBOARD_PASTE_PROCESS,

    // export
    EXPORT,

    // save
    OPEN,
    OPEN_NEW_PROJECT,
    SAVE,
    SAVE_AS,

    // file
    INSERT_PICTURE,
    INSERT_VIDEO,

    // paragraph
    UPDATE_TEXT,

    // section
    ADD_SECTION,
    DELETE_SECTION,
    DELETE_ALL_SECTION,
    EXPAND_ALL_SECTION,
    COLLAPSE_ALL_SECTION,
    RENAME_SECTION,
    SELECT_SECTION,

    // business
    EXECUTE_BUSINESS_LOGIC,
    ADD_BUSINESS_LOGIC,
    DELETE_BUSINESS_LOGIC,

    // data
    UPDATE_WIDGET_DATA,
    UPDATE_COMPOSITE_WIDGET_PROPERTIES,
    UPDATE_COMPOSITE_WIDGET_STATE,
    UPDATE_BUSINESS_ARGUTMENT,
    UPDATE_BUSINESS_DTO,

    // page list sort
    MOVE_PAGE_THUMBNAIL,
    MOVE_MULTI_PAGE_THUMBNAIL,
    MOVE_PAGE_THUMBNAIL_IN_SECTION,
    MOVE_MULTI_PAGE_THUMBNAIL_IN_SECTION,

    // register Business Dialog Widget
    REGISTER_BUSINESS_DIALOG_WIDGET,
    UNREGISTER_BUSINESS_DIALOG_WIDGET,
}

export default CommandEnum;
