import {createSelector} from 'reselect';

export const sideBarSelector = state => state.layout.sidebarVisible
export const miniSideBarSelector = state => state.layout.sideBarSize
export const headerHeightSelector = state => state.layout.headerHeight
export const sectionSizeSelector = state => state.layout.sectionSize
export const mainScrollSelector = state => state.layout.scroll

