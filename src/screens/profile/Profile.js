// import React, { Component } from 'react';
// import './Profile.css';
// import Button from '@material-ui/core/Button';
// import Modal from 'react-modal';
// import Tabs from '@material-ui/core/Tabs';
// import Tab from '@material-ui/core/Tab';
// import FormControl from '@material-ui/core/FormControl';
// import InputLabel from '@material-ui/core/InputLabel';
// import Input from '@material-ui/core/Input';
// import PropTypes from 'prop-types';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import Typography from '@material-ui/core/Typography';
// import Header from '../../common/header/Header';
// import { withStyles } from '@material-ui/core/styles'
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// // import testData from '../../common/Test';
// import Avatar from '@material-ui/core/Avatar';
// // import pencil from '../../assets/icon/pencil.png';
// // import hearticon from '../../assets/icon/hearticon.svg';

// /* Defined classes styles for all relevant imported components */

// const styles = theme => ({

//     root: {
//         flexGrow: 1,
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'space-around',
//         overflow: 'hidden',
//         backgroundColor: theme.palette.background.paper

//     },
//     bigAvatar: {
//         margin: '20px',
//         width: '60px',
//         height: '60px',
//         float: 'center',
//         display: 'flex'

//     },
//     gridList: {
//         width: 1100,
//         height: 800,
//     },

// });

// const customStylesImagePost = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',
//         height: '70%',
//         width: '60%',

//     }
// };

// const customStylesEditFullName = {
//     content: {
//         top: '50%',
//         left: '50%',
//         right: 'auto',
//         bottom: 'auto',
//         marginRight: '-50%',
//         transform: 'translate(-50%, -50%)',

//     }
// };

// const TabContainer = function (props) {
//     return (
//         <Typography component="div" style={{ padding: 0, textAlign: 'center' }}>
//             {props.children}
//         </Typography>
//     )
// }

// TabContainer.propTypes = {
//     children: PropTypes.node.isRequired
// }

// /*Class component Profile defined with constructor & it's states */

// class Profile extends Component {

//     constructor() {
//         super();
//         this.state = {
//             modalIsOpen: false,
//             fullnameRequired: "dispNone",
//             fullname: "",
//             testData: [20,40,80],
//             ownerInfo: [
//                 {
//                     profile_picture: "https://lh3.googleusercontent.com/ogw/ADGmqu_wWKGRUtQcKDwFbPcc2Mvl8Nt_4JKx2laewiMM7w=s83-c-mo",
//                     username: "shipra_akkhu",
//                     full_name: "Shipra Rai",
//                 }
//             ],
//             // mediaInfo: [],
//             mediaInfo: [
//                 {
//                     "id": "17859373682390928",
//                     "caption": "First day of first job #adulting",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/139955164_406064290617274_6930985371366308621_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=PWvIgjRzz3kAX9Om55H&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=b589edf94a337f5e14356aea71305cbb&oe=60328B6B",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2021-01-19T12:05:19+0000"
//                 },
//                 {
//                     "id": "17847307099818407",
//                     "caption": "🎅 ho ho ho ho...",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/79195952_459495018273316_3739850523402748343_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ZF2PXVx8IYUAX9epzyH&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=396609aa748edf2821cf889d3ab711f7&oe=60318BE8",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2019-12-25T15:01:34+0000"
//                 },
//                 {
//                     "id": "17896620730414827",
//                     "caption": "❤❤ #family #weddingvibes",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/71918679_717930452026271_1215320340523301888_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=aUxYNgOIvAUAX8aiyuz&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=132329d43d0305f5b911e09ad423f12e&oe=6032ABB4",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2019-11-28T01:53:57+0000"
//                 },
//                 {
//                     "id": "17894437063328816",
//                     "caption": "Own who you are😉\n#farewell_2k19❤",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/62159363_398652510859226_6781601007653426293_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8ae9d6&_nc_ohc=4nmjG-YKJugAX9rbUN2&_nc_oc=AQlZY5djADJWHPDVP7khEaE3XdacHn0eVaKPc3qSgGdA5yH7VumCL8QFPL1QjRx369s&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=e14c5472543396851c55d652a0be20c5&oe=6033BF21",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2019-06-08T21:01:30+0000"
//                 },
//                 {
//                     "id": "17855633044382763",
//                     "caption": "You can't do epic shit with basic people😉 #technovation2k19# collegelife",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/56842908_131188531322894_2522349804321511910_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=7mbH3RaUCcEAX9F4fKy&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=ce04d729007d979998b222eb5b161ceb&oe=60336C2C",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2019-04-19T17:04:13+0000"
//                 },
//                 {
//                     "id": "17863995175328683",
//                     "caption": "“Traveling – it leaves you speechless, then turns you into a storyteller.” #ponditrip#tbt❤️",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/51697143_218141159050061_7180145202122609315_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=Uj_vi0425uUAX-SJvzl&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=913030c1f4c053dc3ea9734a4b8f5461&oe=60349D4E",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2019-02-25T18:30:41+0000"
//                 },
//                 {
//                     "id": "18002948443017702",
//                     "caption": "Udbhav2k18😊#fashion_show#bikers",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/44788206_357441465021018_2126128669875556169_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8ae9d6&_nc_ohc=Mhcsridpk78AX_PzKAI&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=061290b75fee276f70fd8cba8bc35a6d&oe=6032D6DE",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2018-11-25T11:00:48+0000"
//                 },
//                 {
//                     "id": "17985131674056035",
//                     "caption": "💋💋",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/41798737_324038828357906_3156241123724403226_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=0RyK1vdaExMAX968g3f&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=8b4342f97caa2e633620b07ba3dcb50f&oe=60312D35",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2018-09-29T21:13:32+0000"
//                 },
//                 {
//                     "id": "17877101578279056",
//                     "caption": "💓💓",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/41731036_327546608012285_3650907480256476288_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=JI9DZkwjtz4AX-rulyS&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=64a57c3475bff0e7e28e2068ee2b8220&oe=6031E806",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2018-09-29T20:49:11+0000"
//                 },
//                 {
//                     "id": "17924068543093775",
//                     "caption": "💓❤",
//                     "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/31496631_592659951103475_9030412212946075648_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8ae9d6&_nc_ohc=h46A7T6d0TkAX9LWYES&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=5a77b1fc8546b852e2ac26ca9b1cc4da&oe=603240B0",
//                     "username": "shipra_akkhu",
//                     "timestamp": "2018-05-05T20:47:35+0000"
//                 }
//             ],
//             imageDetail: {},
//             UpdateFullname: "dispNone",
//             ApiFullName: "dispBlock",
//             full_name: ""
//         }
//     }

//     /* Event  Handler Functions Definitions  */

//     updateClickHandler = (e) => {

//         this.state.fullname === "" ? this.setState({ fullnameRequired: "dispBlock" }) : this.setState({ fullnameRequired: "dispNone" });

//         if (this.state.fullname !== "") {
//             this.setState({
//                 full_name: this.state.fullname,
//                 UpdateFullname: "dispBlock",
//                 ApiFullName: "dispNone",
//                 modalIsOpen: false
//             });
//         }
//     }

//     inputFullnameChangeHandler = (e) => {
//         this.setState({ fullname: e.target.value });

//     }

//     openEditModalHandler = () => {
//         this.setState({
//             modalIsOpen: true,
//             fullnameRequired: "dispNone",
//             fullname: "",

//         });
//     }

//     closeEditModalHandler = () => {
//         this.setState({ modalIsOpen: false });
//     }

//     openImageModalHandler = (imageId) => {
//         this.setState({
//             imagemodalIsOpen: true,
//         });
//     }

//     closeImageModalHandler = () => {
//         this.setState({
//             imagemodalIsOpen: false
//         });
//     }

//     /*Code written to make two API calls as per the definitions provided in problem statement */

//     // componentWillMount() {
//     //    let mockAccesstoken="IGQVJVa3VxR2stam9mZAm5rTjFrZATdhUlFnOW5qVHpvQkdvS1hpaF8tY1NyTXd2QU9tempDYTdWUkdpLXM4V1lHNG00eVJ6a1hDVG5aY3F4dDM4Q2Y1UFBtTVA3WmUteVVOSWtwVUVnT0ZAqMUV4YjBOQjZAGOVpibnFtOU0w";
//     //    let mockbaseUrl="https://graph.instagram.com/me/media?fields=id,caption";
//     //     // Get owner info after authenticating the  accessToken generated
//     //     let ownerData = null;
//     //     let xhr = new XMLHttpRequest();
//     //     let that = this;
//     //     xhr.addEventListener("readystatechange", function () {
//     //         if (this.readyState === 4) {
//     //             that.setState({
//     //                 ownerInfo: JSON.parse(this.responseText).data
//     //             });
//     //         }
//     //     })
//     //     // xhr.open("GET", this.props.baseUrl + mockAccesstoken);
//     //     xhr.open("GET", "https://graph.instagram.com/me/media?fields=id,caption&access_token=" + mockAccesstoken);
//     //     xhr.send(ownerData);

//     //     // Get media info of owner after authenticated by accessToken
//     //     let mediaData = null;
//     //     let xhrMediaData = new XMLHttpRequest();

//     //     xhrMediaData.addEventListener("readystatechange", function () {
//     //         if (this.readyState === 4) {
//     //             that.setState({
//     //                 mediaInfo: JSON.parse(this.responseText).data
//     //             });
//     //         }
//     //     })
//     //     // xhrMediaData.open("GET", this.props.baseUrl + "media/recent/?"+mockAccesstoken);
//     //     xhrMediaData.open("GET","https://graph.instagram.com/me?fields=id,media_type,media_url,username,timestamp&access_token="+mockAccesstoken);
//     //     xhrMediaData.send(mediaData);

//     //     let currentState = this.state;
//     //     currentState.imageDetail = this.state.mediaInfo.filter((img) => {
//     //         return img.id === this.props.imageId
//     //     });
//     //     this.setState({ currentState });
//     // }

//     render() {

//         const { classes } = this.props;

//         return (
//             <div>
//                 <div>
//                     <Header />
//                 </div>

//                 <div className="infoSection">
//                     <div className="row">
//                         <div className="column-left">
//                         </div>

//                         <div className="column-center">
//                             <div className="row1">
//                                 <div className="col-left">
//                                     {<Avatar className={classes.bigAvatar}>
//                                         <img src={this.state.ownerInfo.profile_picture} alt={"logo"} />
//                                     </Avatar>}
//                                 </div>

//                                 <div className="col-center">
//                                     <span><div className="row-one">{this.state.ownerInfo.username}</div></span>
//                                     <span><div className="row-two">
//                                         <div className="col-l">Posts : {this.state.testData[0].posts}</div>
//                                         <div className="col-c">Follows : {this.state.testData[1].follows}</div>
//                                         <div className="col-r">Followed By : {testData[2].followed_by}</div>
//                                     </div></span>
//                                     <div className="row-three">
//                                         <span><div className={this.state.ApiFullName}>{this.state.ownerInfo.full_name}</div><div className={this.state.UpdateFullname}>{this.state.full_name}</div></span>
//                                         {/* <Button variant="fab" color="secondary" className="edit-icon-button"><img src={pencil} alt={"pencil-logo"} onClick={this.openEditModalHandler} /></Button> */}
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <Modal
//                                         ariaHideApp={false}
//                                         isOpen={this.state.modalIsOpen}
//                                         onRequestClose={this.closeEditModalHandler}
//                                         style={customStylesEditFullName}
//                                     >
//                                         <Tabs className="tabs" value={this.state.value} >
//                                             <Tab label="Edit" />

//                                         </Tabs>
//                                         <TabContainer>
//                                             <FormControl required>
//                                                 <InputLabel htmlFor="fullname">Full Name</InputLabel>
//                                                 <Input id="fullname" type="text" fullname={this.state.fullname} onChange={this.inputFullnameChangeHandler} />
//                                                 <FormHelperText className={this.state.fullnameRequired}>
//                                                     <span className="red">required</span>
//                                                 </FormHelperText>
//                                             </FormControl>
//                                             <br /><br />

//                                             <Button variant="contained" color="primary" onClick={this.updateClickHandler}>UPDATE</Button>
//                                         </TabContainer>
//                                     </Modal>
//                                 </div>


//                             </div>
//                         </div>


//                     </div>

//                 </div>
//                 <br />
//                 <div className={classes.root}>
//                     <GridList cellHeight={300} className={classes.gridList} cols={3}>
//                         {this.state.mediaInfo.map(image => (
//                             <GridListTile key={image.id} cols={image.cols || 1}>
//                                 <img src={image.images.media_url} alt="photo" onClick={this.openImageModalHandler} />
//                             </GridListTile>
//                         ))}
//                     </GridList>
//                 </div>
//                 <div>
//                     <Modal
//                         ariaHideApp={false}
//                         isOpen={this.state.imagemodalIsOpen}
//                         onRequestClose={this.closeImageModalHandler}
//                         style={customStylesImagePost}
//                     >

//                         <div className="row-card">

//                             <div className="column-card-left" >
//                                 {/* <img src={testData[0].url} alt={"uploadedpic1"} /> */}
//                                 <img src="https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/139955164_406064290617274_6930985371366308621_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=PWvIgjRzz3kAX9Om55H&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=b589edf94a337f5e14356aea71305cbb&oe=60328B6B" alt={"uploadedpic1"} />

//                             </div>

//                             <div className="column-card-right" >
//                                 <div className="row-card-up">

//                                     {
//                                         <Avatar className={classes.bigAvatar}>
//                                             <img src={this.state.ownerInfo.profile_picture} alt={"logo"} /></Avatar>
//                                     }
//                                     {this.state.ownerInfo.username}

//                                     <hr />

//                                     <Typography variant="caption">{this.state.ownerInfo.full_name}</Typography>
//                                     <Typography>#images #description</Typography>
//                                 </div>

//                                 <br /><br />
//                                 <div className="row-card-down">
//                                     {/* <img src={hearticon} alt={"heartlogo"} onClick={() => this.iconClickHandler()} className="iconColor" /> */}

//                                     <FormControl >
//                                         <InputLabel htmlFor="imagecomment">Add a Comment</InputLabel>
//                                         <Input id="imagecomment" type="text" onChange={this.imageCommentChangeHandler} />
//                                     </FormControl>
//                                     <Button variant="contained" color="primary" onClick={this.addCommentOnClickHandler}>ADD</Button>
//                                 </div>
//                             </div>
//                         </div>
//                     </Modal>

//                 </div>


//             </div>

//         );
//     }
// }


// export default withStyles(styles)(Profile);