import {createSelector} from 'reselect';

export const sideBarSelector = state => state.layout.sidebarVisible
export const headerHeightSelector = state => state.layout.headerHeight

