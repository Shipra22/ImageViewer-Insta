import React, { Component } from "react";
import "./Profile.css";
import Header from "../../common/header/Header";
import Avatar from "@material-ui/core/Avatar";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Create from "@material-ui/icons/Create";
import Favorite from "@material-ui/icons/Favorite";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 50,
    height: 50
  },
  paper_big: {
    position: "absolute",
    width: 600,
    backgroundColor: "white",
    padding: 16,
    outline: "none",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  },
  fab: {
    margin: 8
  },
  paper: {
    position: "absolute",
    width: 250,
    backgroundColor: "white",
    padding: 16,
    outline: "none",
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`
  }
});

class TestProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile_picture: "https://lh3.googleusercontent.com/ogw/ADGmqu_wWKGRUtQcKDwFbPcc2Mvl8Nt_4JKx2laewiMM7w=s83-c-mo",
      username: "shipra_akkhu",
      media: 0,
      follows: 0,
      followed_by: 0,
      full_name: "shipra rai",
      userPosts: [
        {
          "id": "17859373682390928",
          "caption": "First day of first job #adulting",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.29350-15/139955164_406064290617274_6930985371366308621_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=PWvIgjRzz3kAX9Om55H&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=b589edf94a337f5e14356aea71305cbb&oe=60328B6B",
          "username": "shipra_akkhu",
          "timestamp": "2021-01-19T12:05:19+0000"
        },
        {
          "id": "17847307099818407",
          "caption": "🎅 ho ho ho ho...",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/79195952_459495018273316_3739850523402748343_n.jpg?_nc_cat=108&ccb=2&_nc_sid=8ae9d6&_nc_ohc=ZF2PXVx8IYUAX9epzyH&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=396609aa748edf2821cf889d3ab711f7&oe=60318BE8",
          "username": "shipra_akkhu",
          "timestamp": "2019-12-25T15:01:34+0000"
        },
        {
          "id": "17896620730414827",
          "caption": "❤❤ #family #weddingvibes",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/71918679_717930452026271_1215320340523301888_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=aUxYNgOIvAUAX8aiyuz&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=132329d43d0305f5b911e09ad423f12e&oe=6032ABB4",
          "username": "shipra_akkhu",
          "timestamp": "2019-11-28T01:53:57+0000"
        },
        {
          "id": "17894437063328816",
          "caption": "Own who you are😉\n#farewell_2k19❤",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/62159363_398652510859226_6781601007653426293_n.jpg?_nc_cat=106&ccb=2&_nc_sid=8ae9d6&_nc_ohc=4nmjG-YKJugAX9rbUN2&_nc_oc=AQlZY5djADJWHPDVP7khEaE3XdacHn0eVaKPc3qSgGdA5yH7VumCL8QFPL1QjRx369s&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=e14c5472543396851c55d652a0be20c5&oe=6033BF21",
          "username": "shipra_akkhu",
          "timestamp": "2019-06-08T21:01:30+0000"
        },
        {
          "id": "17855633044382763",
          "caption": "You can't do epic shit with basic people😉 #technovation2k19# collegelife",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/56842908_131188531322894_2522349804321511910_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=7mbH3RaUCcEAX9F4fKy&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=ce04d729007d979998b222eb5b161ceb&oe=60336C2C",
          "username": "shipra_akkhu",
          "timestamp": "2019-04-19T17:04:13+0000"
        },
        {
          "id": "17863995175328683",
          "caption": "“Traveling – it leaves you speechless, then turns you into a storyteller.” #ponditrip#tbt❤️",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/51697143_218141159050061_7180145202122609315_n.jpg?_nc_cat=103&ccb=2&_nc_sid=8ae9d6&_nc_ohc=Uj_vi0425uUAX-SJvzl&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=913030c1f4c053dc3ea9734a4b8f5461&oe=60349D4E",
          "username": "shipra_akkhu",
          "timestamp": "2019-02-25T18:30:41+0000"
        },
        {
          "id": "18002948443017702",
          "caption": "Udbhav2k18😊#fashion_show#bikers",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/44788206_357441465021018_2126128669875556169_n.jpg?_nc_cat=100&ccb=2&_nc_sid=8ae9d6&_nc_ohc=Mhcsridpk78AX_PzKAI&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=061290b75fee276f70fd8cba8bc35a6d&oe=6032D6DE",
          "username": "shipra_akkhu",
          "timestamp": "2018-11-25T11:00:48+0000"
        },
        {
          "id": "17985131674056035",
          "caption": "💋💋",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/41798737_324038828357906_3156241123724403226_n.jpg?_nc_cat=105&ccb=2&_nc_sid=8ae9d6&_nc_ohc=0RyK1vdaExMAX968g3f&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=8b4342f97caa2e633620b07ba3dcb50f&oe=60312D35",
          "username": "shipra_akkhu",
          "timestamp": "2018-09-29T21:13:32+0000"
        },
        {
          "id": "17877101578279056",
          "caption": "💓💓",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/41731036_327546608012285_3650907480256476288_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=JI9DZkwjtz4AX-rulyS&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=64a57c3475bff0e7e28e2068ee2b8220&oe=6031E806",
          "username": "shipra_akkhu",
          "timestamp": "2018-09-29T20:49:11+0000"
        },
        {
          "id": "17924068543093775",
          "caption": "💓❤",
          "media_url": "https://scontent-lga3-2.cdninstagram.com/v/t51.2885-15/31496631_592659951103475_9030412212946075648_n.jpg?_nc_cat=110&ccb=2&_nc_sid=8ae9d6&_nc_ohc=h46A7T6d0TkAX9LWYES&_nc_ht=scontent-lga3-2.cdninstagram.com&oh=5a77b1fc8546b852e2ac26ca9b1cc4da&oe=603240B0",
          "username": "shipra_akkhu",
          "timestamp": "2018-05-05T20:47:35+0000"
        }
      ],
      access_token: sessionStorage.getItem("access-token"),
      editNameOpen: false,
      fullnameRequired: "dispNone",
      postSelected: null,
      selectedIndex: -1,
      newComment: "",
      updateFullName: "",
      postOpen: false
    };
  }

  //On component load - Get user profile data
  //   componentWillMount() {
  //     this.getProfileDetails();
  //   }

  //   getProfileDetails = () => {
  //     // Get user profile
  //     let dataUserProfile = null;
  //     let xhrUserProfile = new XMLHttpRequest();
  //     let that = this;
  //     xhrUserProfile.addEventListener("readystatechange", function() {
  //       if (this.readyState === 4) {
  //         const data = JSON.parse(this.responseText).data;
  //         that.setState({
  //           profile_picture: data.profile_picture,
  //           username: data.username,
  //           media: data.counts.media,
  //           follows: data.counts.follows,
  //           followed_by: data.counts.followed_by,
  //           full_name: data.full_name
  //         });
  //       }
  //     });
  //     xhrUserProfile.open(
  //       "GET",
  //       this.props.baseUrl + "users/self/?access_token=" + this.state.access_token
  //     );
  //     // xhrUserProfile.setRequestHeader("Cache-Control", "no-cache");
  //     xhrUserProfile.send(dataUserProfile);

  //     // Get user posts
  //     let dataUserPosts = null;
  //     let xhrUserPosts = new XMLHttpRequest();
  //     xhrUserPosts.addEventListener("readystatechange", function() {
  //       if (this.readyState === 4) {
  //         const data = JSON.parse(this.responseText).data;
  //         that.setState({ userPosts: [...data] });
  //       }
  //     });
  //     xhrUserPosts.open(
  //       "GET",
  //       this.props.baseUrl +
  //         "users/self/media/recent?access_token=" +
  //         this.state.access_token
  //     );
  //     //xhrUserPosts.setRequestHeader("Cache-Control", "no-cache");
  //     xhrUserPosts.send(dataUserPosts);
  //   };
  //To close edit modal
  onEditFullNameModalClose = () => {
    this.setState({
      editNameOpen: false,
      fullnameRequired: "dispNone"
    });
  };

  //To open edit modal
  onEditFullNameModalOpen = () => {
    this.setState({
      updateFullName: this.state.full_name,
      editNameOpen: true
    });
  };

  //update  full name in modal
  onUpdateNameClick = () => {
    this.state.updateFullName === ""
      ? this.setState({ fullnameRequired: "dispBlock" })
      : this.setState({ fullnameRequired: "dispNone" });
    if (this.state.updateFullName === "") {
      return;
    } else {
      this.setState({ full_name: this.state.updateFullName });
    }
    this.setState({
      editNameOpen: false
    });
  };

  //onChange() called for  full name
  onFullNameChange = e => {
    this.setState({ updateFullName: e.target.value });
  };

  //onClick() method each post image  open modal with details
  onhandlePostClick = (id, index) => {
    let userPostItems = this.state.userPosts;
    this.setState({
      postSelected: userPostItems[index],
      selectedIndex: index,
      postOpen: true,
      newComment: ""
    });
  };

  //Close  each post image Modal
  onPostItemModalClose = () => {
    this.setState({
      postSelected: null,
      postOpen: false,
      selectedIndex: -1
    });
  };

  // like functionality
  onLikesClick = () => {
    let _postSelectedItem = this.state.postSelected;
    let _userPosts = this.state.userPosts;
    const _selectedIndex = this.state.selectedIndex;
    if (_postSelectedItem.user_has_liked) {
      _postSelectedItem.user_has_liked = false;
      _postSelectedItem.likes.count = _postSelectedItem.likes.count + 1;
    } else {
      _postSelectedItem.user_has_liked = true;
      _postSelectedItem.likes.count = _postSelectedItem.likes.count - 1;
    }

    _userPosts[_selectedIndex] = _postSelectedItem;

    this.setState({
      postSelected: _postSelectedItem,
      userPosts: _userPosts
    });
  };

  //onChange() Method for comment input field
  onAddCommentChange = e => {
    this.setState({ newComment: e.target.value });
  };

  //onClick() add comments
  onAddCommentClick = () => {
    if (this.state.newComment === "") {
      return;
    } else {
      let _postSelectedItem = this.state.postSelected;
      _postSelectedItem.comments["data"] =
        _postSelectedItem.comments["data"] || [];
      _postSelectedItem.comments["data"].push({
        id: _postSelectedItem.comments["data"].length + 1,
        comment_by: this.state.username,
        comment_value: this.state.newComment
      });

      let _userPosts = this.state.userPosts;
      const _selectedIndex = this.state.selectedIndex;
      _userPosts[_selectedIndex] = _postSelectedItem;

      this.setState({
        postSelected: _postSelectedItem,
        userPosts: _userPosts,
        newComment: "",

      });
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header
          profileIcon={true}
          profilePicture={this.state.profile_picture}
          profileUserName={this.state.username}
        />
        <Container fixed>

          <Grid container spacing={3} style={{ justifyContent: "center" }} alignItems="center" >

            {/* dislaying profile pic */}
            <Grid item>
              <Avatar alt={this.state.username} src={this.state.profile_picture} className={classes.bigAvatar} />
            </Grid >


            {/* displaying username media follows and followers   */}
            <Grid item>
              <Typography variant="h6" component="h6"> {this.state.username}
              </Typography>
              <Grid container spacing={3} justify="space-between" alignItems="center">
                <Grid item>
                  <Typography variant="subtitle2">
                    Posts: {this.state.media}
                  </Typography>
                </Grid>
                <Grid item>

                  <Typography variant="subtitle2">
                    Follows: {this.state.follows}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle2">
                    Followed By: {this.state.followed_by}
                  </Typography>
                </Grid>
              </Grid>

              {/* displaying fullname and edit button */}
              <Grid container spacing={2} justify="flex-start" alignItems="center" >

                <Grid item>
                  <Typography variant="h6">{this.state.full_name}</Typography>
                </Grid>

                <Grid item>
                  <Fab color="secondary" aria-label="Edit" className={classes.fab} onClick={this.onEditFullNameModalOpen}>
                    <Create />
                  </Fab>

                  {/* modal for editing the fullname */}
                  <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.editNameOpen}
                    onClose={this.onEditFullNameModalClose}
                  >
                    <div className={classes.paper}>
                      <Typography variant="h6" id="modal-title" className="modal-heading">
                        Edit
                       </Typography>

                      <FormControl required className="formControl">
                        <InputLabel htmlFor="username">Full Name </InputLabel>
                        <Input id="userfullname" type="text"
                          onChange={this.onFullNameChange}
                          value={this.state.updateFullName}
                        />

                        <FormHelperText className={this.state.fullnameRequired}>
                          <span className="red">Required</span>
                        </FormHelperText>
                      </FormControl>
                      <br />
                      <br />
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ width: 10 }}
                        onClick={this.onUpdateNameClick}
                      >
                        UPDATE
                      </Button>
                    </div>
                  </Modal>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* displaying all the posts in 3 columns */}
          <GridList cellHeight={320} cols={3}>
            {(this.state.userPosts || []).map((post, index) => (
              <GridListTile
                key={post.id}
                className="grid-content"
                onClick={() => this.onhandlePostClick(post.id, index)}
              >
                <img
                  src={post.media_url}
                  alt={post.caption}
                />
              </GridListTile>
            ))}
          </GridList>
          {this.state.postSelected !== null ? (
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.postOpen}
              onClose={this.onPostItemModalClose}
            >
              <div className={classes.paper_big}>
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <img
                      src={
                        this.state.postSelected.media_url
                      }
                      width="100%"
                      alt={this.state.postSelected.caption.split("\n")[0]}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Grid
                      container
                      spacing={3}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <Avatar
                          src={this.state.profile_picture}
                          alt={this.state.username}
                        />
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2">
                          {this.state.username}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider light />
                    <Grid
                      container
                      spacing={3}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <Typography variant="caption">
                          {/* {this.state.postSelected.caption.text.split("\n")[0]} */}
                          {this.state.postSelected.caption}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid
                      container
                      spacing={3}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        {(this.state.postSelected.tags || []).map((tag, i) => {
                          return (
                            <Typography
                              key={tag}
                              variant="caption"
                              color="primary"
                            >
                              {" "}
                              #{tag}
                            </Typography>
                          );
                        })}
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      spacing={1}
                      justify="flex-start"
                      alignItems="center"
                    >
                      {/* <Grid item className="min-height-comments-box">
                        {(this.state.postSelected.comments.data || []).map(
                          (comment, i) => {
                            return (
                              <Typography
                                key={comment.id}
                                variant="caption"
                                display="block"
                              >
                                <strong>{comment.comment_by} :</strong>{" "}
                                {comment.comment_value}
                              </Typography>
                            );
                          }
                        )}
                      </Grid> */}
                    </Grid>

                    <Grid
                      container
                      spacing={1}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <Favorite
                          className={
                            this.state.postSelected.user_has_liked
                              ? "greyLike"
                              : "redLike"
                          }
                          onClick={this.onLikesClick}
                        />
                      </Grid>
                      <Grid item>
                        {/* <Typography variant="caption">
                          {this.state.postSelected.likes.count} likes
                        </Typography> */}
                      </Grid>
                    </Grid>

                    <Grid
                      container
                      spacing={2}
                      justify="flex-start"
                      alignItems="center"
                    >
                      <Grid item>
                        <FormControl className="formControl">
                          <InputLabel htmlFor="addcomment">
                            Add a comment{" "}
                          </InputLabel>
                          <Input
                            id="addcomment"
                            type="text"
                            onChange={this.onAddCommentChange}
                            value={this.state.newComment}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={this.onAddCommentClick}
                        >
                          ADD
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Modal>
          ) : (
              ""
            )}
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(TestProfile);
