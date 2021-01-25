import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Home.css';
import Header from "../../common/header/Header";

import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
            // loggedIn: sessionStorage.getItem("access-token") == null ? false : true,
            loggedIn: true,
            accessToken: sessionStorage.getItem('access-token'),
            profilePicture: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F47%2F0a%2F19%2F470a19a36904fe200610cc1f41eb00d9.jpg&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F458663543303636653%2F&tbnid=jKI3BL6cCF4MZM&vet=12ahUKEwj70dSBorbuAhXOdH0KHca9DQoQMygAegUIARDTAQ..i&docid=oJcgxCsc_idUaM&w=3840&h=2160&q=wallpaper&ved=2ahUKEwj70dSBorbuAhXOdH0KHca9DQoQMygAegUIARDTAQ",
            likes: 7,
            heart: "unliked",
            comment: "",
            commentSection: [],
            profilePicture: '',
            username: 'shipra',
            postedImages: [],
            displayImages: [],
            hashTags: [],

            commentedImageId: '',
            // data:[],
            data: [
                {
                    "id": "17859373682390928",
                    "caption": "First day of first job #adulting",
                    "media_type": "CAROUSEL_ALBUM",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/139955164_406064290617274_6930985371366308621_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=PWvIgjRzz3kAX9Om55H&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=b589edf94a337f5e14356aea71305cbb&oe=60328B6B",
                    "username": "shipra_akkhu",
                    "timestamp": "2021-01-19T12:05:19+0000"
                },
                {
                    "id": "17847307099818407",
                    "caption": "🎅 ho ho ho ho...",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/79195952_459495018273316_3739850523402748343_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ZF2PXVx8IYUAX9epzyH&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=396609aa748edf2821cf889d3ab711f7&oe=60318BE8",
                    "username": "shipra_akkhu",
                    "timestamp": "2019-12-25T15:01:34+0000"
                },
                {
                    "id": "17896620730414827",
                    "caption": "❤❤ #family #weddingvibes",
                    "media_type": "CAROUSEL_ALBUM",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/71918679_717930452026271_1215320340523301888_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=aUxYNgOIvAUAX8aiyuz&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=132329d43d0305f5b911e09ad423f12e&oe=6032ABB4",
                    "username": "shipra_akkhu",
                    "timestamp": "2019-11-28T01:53:57+0000"
                },
                {
                    "id": "17894437063328816",
                    "caption": "Own who you are😉\n#farewell_2k19❤",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/62159363_398652510859226_6781601007653426293_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8ae9d6&_nc_ohc=4nmjG-YKJugAX9rbUN2&_nc_oc=AQlZY5djADJWHPDVP7khEaE3XdacHn0eVaKPc3qSgGdA5yH7VumCL8QFPL1QjRx369s&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=e14c5472543396851c55d652a0be20c5&oe=6033BF21",
                    "username": "shipra_akkhu",
                    "timestamp": "2019-06-08T21:01:30+0000"
                },
                {
                    "id": "17855633044382763",
                    "caption": "You can't do epic shit with basic people😉 #technovation2k19# collegelife",
                    "media_type": "CAROUSEL_ALBUM",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/56842908_131188531322894_2522349804321511910_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=7mbH3RaUCcEAX9F4fKy&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=ce04d729007d979998b222eb5b161ceb&oe=60336C2C",
                    "username": "shipra_akkhu",
                    "timestamp": "2019-04-19T17:04:13+0000"
                },
                {
                    "id": "17863995175328683",
                    "caption": "“Traveling – it leaves you speechless, then turns you into a storyteller.” #ponditrip#tbt❤️",
                    "media_type": "CAROUSEL_ALBUM",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/51697143_218141159050061_7180145202122609315_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=Uj_vi0425uUAX-SJvzl&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=4fe80f1daa5e67f165799d5c8d6bccbc&oe=6030A8CE",
                    "username": "shipra_akkhu",
                    "timestamp": "2019-02-25T18:30:41+0000"
                },
                {
                    "id": "18002948443017702",
                    "caption": "Udbhav2k18😊#fashion_show#bikers",
                    "media_type": "CAROUSEL_ALBUM",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/44788206_357441465021018_2126128669875556169_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8ae9d6&_nc_ohc=whFMkYtk4IEAX83bwpo&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=1371c539bc393563712f03f1998f6a76&oe=6032D6DE",
                    "username": "shipra_akkhu",
                    "timestamp": "2018-11-25T11:00:48+0000"
                },
                {
                    "id": "17985131674056035",
                    "caption": "💋💋",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/41798737_324038828357906_3156241123724403226_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=0RyK1vdaExMAX968g3f&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=8b4342f97caa2e633620b07ba3dcb50f&oe=60312D35",
                    "username": "shipra_akkhu",
                    "timestamp": "2018-09-29T21:13:32+0000"
                },
                {
                    "id": "17877101578279056",
                    "caption": "💓💓",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/41731036_327546608012285_3650907480256476288_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=JI9DZkwjtz4AX-rulyS&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=64a57c3475bff0e7e28e2068ee2b8220&oe=6031E806",
                    "username": "shipra_akkhu",
                    "timestamp": "2018-09-29T20:49:11+0000"
                },
                {
                    "id": "17924068543093775",
                    "caption": "💓❤",
                    "media_type": "CAROUSEL_ALBUM",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/31496631_592659951103475_9030412212946075648_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8ae9d6&_nc_ohc=h46A7T6d0TkAX9LWYES&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=5a77b1fc8546b852e2ac26ca9b1cc4da&oe=603240B0",
                    "username": "shipra_akkhu",
                    "timestamp": "2018-05-05T20:47:35+0000"
                },
                {
                    "id": "17938792522058492",
                    "caption": "#b'daytreat😘",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/29736985_442082186243527_7726758916985454592_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=KKyNOkuA8Y8AX_7o0iA&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=04aadff21ed375dea159e4b8200d017b&oe=60313E83",
                    "username": "shipra_akkhu",
                    "timestamp": "2018-04-11T11:34:42+0000"
                },
                {
                    "id": "17887167571129510",
                    "media_type": "IMAGE",
                    "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/21820104_117374012272075_8424617920637698048_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=czMzJN1GSKUAX9qlMU5&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=9d2c6831eb5129a4f5553d17459b45f5&oe=60311C67",
                    "username": "shipra_akkhu",
                    "timestamp": "2017-09-17T21:30:21+0000"
                }
            ]


        }
    }

    // componentDidMount() {
    //     if (this.state.loggedIn === true) {

    //         let that = this;
    //         let xhrMedia = new XMLHttpRequest();
    //         xhrMedia.addEventListener('readystatechange', function () {
    //             if (this.readyState === 4) {
    //                 let responseData = JSON.parse(this.response).data;
    //                 that.setState({username:responseData[0].username});


    //                 responseData.forEach(post => {
    //                     post.timestamp = that.parseTimestamp(post.timestamp);
    //                 });
    //                 that.setState({data:responseData});
    //                 that.setState({
    //                     postedImages: responseData,
    //                     displayImages: responseData,
    //                     commentText: ''
    //                   });
    //             }
    //         });
    //         xhrMedia.open('GET', this.props.baseUrl + 'me/media?fields=id,media_type,media_url,username,timestamp&access_token='
    //             + this.state.accessToken);
    //         xhrMedia.send();
    //     }
    //     else {
    //         console.log(
    //             'user is not logged in, taken care by isUserLoggedin State change in header');
    //     }
    // };
    parseTimestamp = (time) => {
        let dateTime = new Date(time * 1000);
        return this.formatNums(dateTime.getDate()) + '/' +
            this.formatNums(dateTime.getMonth() + 1) + '/' +
            dateTime.getFullYear() + ' ' + dateTime.getHours() + ':'
            + dateTime.getMinutes() + ':' +
            dateTime.getSeconds();
    };

    formatNums = (num) => {
        if (num <= 9) {
            return '0' + num;
        }
        return num;
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
    iconClickHandler = (e) => {
        if (this.state.heart === "unliked") {
            console.log("liked it");
            this.setState({ heart: "liked", likes: this.state.likes + 1 })
            this.forceUpdate();

        }
        else {
            console.log("unliked it");
            this.setState({ heart: "unliked", likes: this.state.likes - 1 })
        }

    }
    commentChangeHandler = (e) => {
        this.setState({ comment: e.target.value });
    }
    addCommentHandler = () => {

        if (!this.state.comment === "") {
            let newComment = this.state.comment;
            let oldCommentSection = this.state.commentSection;
            console.log(newComment);
            this.setState({ commentSection: [oldCommentSection, newComment] });

        }
    }

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
                // mediaFiles={this.state.data}

                />

                <div className="parent-card">
                    {this.state.data.map(data => (
                        <Card
                            // className={classes.root}
                            className="cards"
                            key={"post" + data.id}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        {this.state.profilePicture}</Avatar>
                                }

                                title={this.state.username}
                                subheader={new Date(data.timestamp).toDateString()}
                            />
                            <CardMedia
                                className={classes.media}
                                image={data.media_url}

                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="span">
                                    {data.caption}
                                </Typography>
                                <div className="likes" >
                                    {/* <IconButton aria-label="add to favorites" className={this.state.heart} onClick={() => this.iconClickHandler}> */}
                                    <IconButton className={this.state.heart} onClick={() => this.iconClickHandler}>
                                    {this.state.heart === "unliked" ?
                                           <div>  <FavoriteBorderIcon /> 
                                      
                                           <FavoriteIcon/> </div>:""
                                          
                                       }
                                       </IconButton>
                                    <Typography variant="body2" color="textSecondary" component="span">
                                        {this.state.likes} Likes!
                                </Typography>
                                </div>
                                <div className="comment-section">
                                    {this.state.commentSection.map((c, index) => (
                                        <div key={c + index}>
                                            <Typography>
                                                <span
                                                    className="comment-username">{this.state.username}:&nbsp;</span>
                                                <span
                                                    className="comment-text">{this.state.comment}</span>
                                            </Typography>
                                        </div>
                                    ))}
                                </div>
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
