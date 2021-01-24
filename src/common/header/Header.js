import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Header.css"
import Avatar from '@material-ui/core/Avatar';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
// import { withStyles } from '@material-ui/core/styles';
import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import { Link } from 'react-router-dom';


const styles = theme => ({
   
   
    grow: {
        flexGrow: 1,
        backgroundColor: 'black',
    },
    title: {
        color: 'initial',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.40),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },

        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(110),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    inputRoot: {
        color: 'inherit',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },

});

class Header extends Component {

    constructor() {
        super();
        this.state = {
            menuIsOpen: false,
            ownerInfo: [],
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
        this.baseUrl = "https://api.instagram.com/v1/users/self/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
    }

    profilePageLinkHandler = () => {
        // ReactDOM.render(<Profile />, document.getElementById('root'));
    }

    logoutHandler = () => {
        sessionStorage.removeItem("access-token");
        this.setState({
            loggedIn: false
        });
    }

    openMenuHandler = () => {
        this.setState({
            menuIsOpen: true,
        });

    }

    closeMenuHandler = () => {
        this.setState({
            menuIsOpen: false
        });
    }
    render() {

        const { classes } = this.props;

        return (
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar>

                        <div>
                            <Typography className={{ color: "app-logo" }} variant="h6" noWrap>Image Viewer</Typography>
                        </div>


                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="        Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>
                        {<Avatar className="avatar">
                            <img aria-controls="simpleMenu" onClick={this.openMenuHandler}  alt={"logo"} />SR</Avatar>}
                        <div>
                            <Menu
                                id="menu-appbar"
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={this.state.menuIsOpen}
                                onClose={this.closeMenuHandler}

                            >
                             
                            </Menu>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(Header);