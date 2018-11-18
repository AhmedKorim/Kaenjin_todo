import {createSelector} from 'reselect';

export const sideBarSelector = state => state.layout.sidebarVisible
export const miniSideBarSelector = state => state.layout.sideBarSize
export const headerHeightSelector = state => state.layout.headerHeight

