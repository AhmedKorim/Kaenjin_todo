import PropTypes from 'prop-types'
import BottomNavigation from "@material-ui/core/BottomNavigation/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";
import Icon from "@material-ui/core/Icon/Icon";
import React from 'react'
import './BottomNavigation.scss'
import {StopPropagation} from "../utilites";
const ButtonNavigationWrapper = ({navItems,value,handleChange,...other}) => {

    console.log(value);
    return (
        <BottomNavigation
        value={value}
        {...other}
        onChange={handleChange}
        >
            {
                navItems.map(({label,icon}) => <BottomNavigationAction
                    label={label}
                    value={label}
                    icon={<Icon fontSize="small">{icon}</Icon>}
                    key={label}
                    component={StopPropagation}
                    classes={{
                        root:'BottomNavigation'
                    }}
                />)
            }
        </BottomNavigation>
    )
}
export default ButtonNavigationWrapper

ButtonNavigationWrapper.propTypes = {
  handleChange: PropTypes.func.isRequired,
  navItems: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired
}
