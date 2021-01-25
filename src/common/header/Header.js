import React, { Component } from 'react';
import "./Header.css";
import Avatar from '@material-ui/core/Avatar';
import { fade, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link, Redirect } from 'react-router-dom';


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
            profilePicture:"https://lh3.googleusercontent.com/ogw/ADGmqu_wWKGRUtQcKDwFbPcc2Mvl8Nt_4JKx2laewiMM7w=s83-c-mo",
            ownerInfo: [],
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true
        }
        // this.baseUrl = "https://api.instagram.com/v1/users/self/?access_token=13521022383.d5e23ae.c9785a17269b494eb996c2cbc490a6f3";
    }

    profilePageLinkHandler = (event) => {
        this.setState({
            showMenu: !this.state.showMenu,
            anchorEl: this.state.anchorEl != null ? null : event.currentTarget
        });
    }
    myAccountClickHandler = () => {
        this.props.history.push("/profile");
    };

    logoutClickHandler = () => {
        sessionStorage.removeItem("access-token");
        sessionStorage.removeItem("loggedIn")
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
                {
                    this.state.loggedIn ? 
                    "": <Redirect to='/' />

                }
                 


                <AppBar position="static">
                    <Toolbar>
                   <div>
                        <Typography className={{ color: "app-logo" }} variant="h6" noWrap>Image Viewer</Typography>
                     </div>
                   

                       {   this.props.showSearchOption==="true" && this.state.loggedIn ? 
                          <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase onChange={this.searchBoxChangeHandler}
                                placeholder="        Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                            />
                        </div>:" "
                        }

                        {   this.props.showSearchOption==="true" && this.state.loggedIn ? 
                         <Avatar className="avatar">
                            <img aria-controls="simpleMenu" img={this.state.profilePicture} onClick={this.openMenuHandler} alt={"logo"} />
                        </Avatar>:" "
                        }
                        
                        {  this.props.showSearchOption==="true" && this.state.loggedIn ? 
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

                                <div> <MenuItem onClick={this.myAccountClickHandler}>
                                    <span className="menu-option">My Account</span>
                                </MenuItem>
                                    <hr />
                                </div>

                                <MenuItem onClick={this.logoutClickHandler}>
                                    <span className="menu-option">Logout</span>
                                </MenuItem>



                            </Menu>
                        </div>
                         :""
                          }




                    </Toolbar>
                </AppBar >
            </div >
        );
    }
}

export default withStyles(styles)(Header);