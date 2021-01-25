import React, { Component } from 'react';
import Moment from 'moment';

import './Home.css';
import Header from "../../common/header/Header";
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { blue, red } from '@material-ui/core/colors';
import FavoriteIconBorder from '@material-ui/icons/FavoriteBorder';
import FavoriteIconFill from '@material-ui/icons/Favorite';

debugger;

const styles = theme => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        margin: 20,
        paddingTop: '56.25%', // 16:9
    },


    avatar: {
        backgroundColor: red[500],
    },
    cardPost: {

    },
});


class Home extends Component {
    constructor() {
        super();
        console.log("home constructor enter");
        this.state = {
            loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
            accessToken: sessionStorage.getItem('access-token'),
            profilePicture: "https://lh3.googleusercontent.com/ogw/ADGmqu_wWKGRUtQcKDwFbPcc2Mvl8Nt_4JKx2laewiMM7w=s83-c-mo",
            likes: 7,
            heart: "unliked",
            isLiked: false,
            comment: "",
            commentSection: [],
            profilePicture: "https://lh3.googleusercontent.com/ogw/ADGmqu_wWKGRUtQcKDwFbPcc2Mvl8Nt_4JKx2laewiMM7w=s83-c-mo",
            username: '',
            postedImages: [],
            displayImages: [],
            hashTags: [],
            datecorrectFormat: [],

            commentedImageId: '',
            data: [],

        }
    }

    componentDidMount() {
        if (this.state.loggedIn === true) {

            let that = this;
            let xhrMedia = new XMLHttpRequest();
            xhrMedia.addEventListener('readystatechange', function () {
                if (this.readyState === 4) {
                    let responseData = JSON.parse(this.response).data;
                    console.log(responseData);
                    that.setState({ username: responseData[0].username })
                    that.setState({ data: responseData });
                }
            });


            xhrMedia.open('GET', 'https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,username,timestamp&access_token='
                + this.state.accessToken);
            xhrMedia.send();
        }
        else {
            console.log(
                'user is not logged in, taken care by isUserLoggedin State change in header');
        }
    };
    
    searchBoxChangeHandler = (searchText) => {
        let displayImages = (searchText === "")
            ? this.state.postedImages
            : this.state.postedImages.filter(
                image => image.caption.toLowerCase().includes(
                    searchText.toLowerCase())
                    || image.caption.toLowerCase().includes(
                        searchText.toLowerCase()));
        // Set the state to update the content on page
        this.setState({ displayImages: displayImages });
    };

    onLikeClicked = (id) => {
        // Here, we are converting the likes symbol from white to pink and also incrementing/decrementing the number of likes

        if (!this.state.isLiked) {
            this.setState({
                likes: this.state.likes + 1
            })
        } else {
            this.setState({
                likes: this.state.likes - 1
            })
        }
        if (this.state.isLiked) {
            this.setState({
                isLiked: false
            });
        } else {
            this.setState({
                isLiked: true
            });
        }
    }
    commentChangeHandler = (e) => {
        this.setState({ comment: e.target.value });
    }
    addCommentHandler = (id) => {

        if (!this.state.comment === "") {
            let newComment = this.state.comment;
            let oldCommentSection = this.state.commentSection;
            console.log(newComment);
            this.setState({ commentSection: [oldCommentSection, newComment] });

        }
    }
    getCaptionText = (caption) => {
       
    //    let captionText = (!caption.text) ? "" : caption.text.split(' ').filter(str => !str.startsWith('#')).join(' ');
       let captionText = (!caption) ? "" : caption.split(' ').filter(str => !str.startsWith('#')).join(' ');
       return captionText
         return captionText
    }
    getCaptionHashTags=(caption) => {
        // let hashtags = (!caption.text) ? "" : caption.text.split(' ').filter(str => str.startsWith('#')).join(' ');
        let hashtags = (!caption) ? "" : caption.split(' ').filter(str => str.startsWith('#')).join(' ');
        return hashtags
    }


    // addCommentHandler = (id)=>{
    //     if (this.state.comment === "" || typeof this.state.comment === undefined) {
    //       return;
    //     }

    //     let commentList = this.state.comment.hasOwnProperty(id)?
    //       this.state.commentSection[id].concat(this.state.comment): [].concat(this.state.comment);

    //     this.setState({
    //         commentSection:{
    //         ...this.state.comment,
    //         [id]:commentList
    //       },
    //       comment:''
    //     })
    //   }

    render() {
        const { classes } = this.props;
        console.log("entered home");
        return (
            <div>

                <Header
                    pageId="home"
                    showSearchOption="true"
                    showProfileAvatar="true"
                    baseUrl={this.props.baseUrl}
                    profilePicture={this.state.profilePicture}
                    {...this.props}
                    searchBoxChangeHandler={this.searchBoxChangeHandler}


                />

                <div className="parent-card">
                    {this.state.data.map(data => (
                        <Card
                            // className={classes.root}
                            className="cards"
                            key={"post" + data.id}>
                            <CardHeader
                                avatar={
                                    <Avatar className={classes.avatar}>
                                        {this.state.profilePicture}</Avatar>
                                }

                                title={this.state.username}

                                subheader={Moment(data.timestamp).format('DD/MM/yyyy HH:mm:ss')}
                            />
                            <CardMedia
                                className={classes.media}
                                image={data.media_url}

                            />
                            <CardContent>
                                <Typography variant="subtitle2" color="textSecondary" component="span">
                                    {this.getCaptionText( data.caption)
                                    }
                                </Typography>
                                <br/>
                                <Typography variant="subtitle2" color="primary" component="span" style={{color:blue}}>
                                    {this.getCaptionHashTags( data.caption)}
                                </Typography>

                                <CardActions>
                                    <IconButton aria-label="Add to favorites" onClick={this.onLikeClicked.bind(this, data.id)}>
                                        {this.state.isLiked && <FavoriteIconFill style={{ color: '#F44336' }} />}
                                        {!this.state.isLiked && <FavoriteIconBorder />}
                                    </IconButton>
                                    <Typography component="p">
                                        {this.state.likes} likes

                                     </Typography>
                                </CardActions>
                                <div className="comment-section">
                                    {this.state.commentSection.map((c, index) => (
                                        <div key={c + index}>
                                            <Typography>
                                                <span
                                                    className="comment-username">{this.state.username}:&nbsp;</span>
                                                <span
                                                    className="comment-text">{c}</span>
                                            </Typography>
                                        </div>
                                    ))}
                                </div>

                                {/* {commentSection.hasOwnProperty(data.id) && commentSection[data.id].map((comment, index) => {
                                    return (
                                        <div key={index} className="row">
                                            <Typography component="p" style={{ fontWeight: 'bold' }}>
                                               {this.state.username}
                                           </Typography>
                                            <Typography component="p" >
                                                {comment}
                                            </Typography>
                                        </div>
                                    )
                                })} */}


                                <div >
                                    <FormControl className="add-comment">
                                        <InputLabel htmlFor="comment">Add a comment</InputLabel>
                                        <Input id="comment" type="text" comment={this.state.comment} onChange={this.commentChangeHandler} />
                                    </FormControl>
                                    <div className="add-btn">
                                        <Button variant="contained" color="primary" onClick={this.addCommentHandler}>ADD</Button>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    ))
                    }
                </div>
            </div>
        )
    }


}
export default withStyles(styles)(Home);
