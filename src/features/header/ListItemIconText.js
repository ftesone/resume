import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const Content = props =>
    <ListItem>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.text} style={{ textWrap: 'nowrap' }} />
    </ListItem>

export default props => props.href ? (
    <a href={props.href} target="_blank" style={{color: 'black'}}>
        <Content {...props} />
    </a>
) : (
    <Content {...props} />
)
