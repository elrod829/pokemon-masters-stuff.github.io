import React, { Fragment, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import SyncGridContainer from '../common/SyncGridContainer';
import syncPairNamesAndIds from '../../../data/syncPairNamesAndIds.json';
import {
  removeLikeFromTeam,
  addLikeToTeam,
  deleteTeam,
} from '../../../actions/actionCreators';
import SyncPairCard from '../common/SyncPairCard';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ShareTeamModal from '../common/ShareTeamModal';
import EditTeamModal from '../common/EditTeamModal';
import UI from '../../../utils/translations';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Comments from '../common/Comments';
import TeamDescription from './TeamDescription';
import Demo from '../common/Demo';
import FlagIcon from '@material-ui/icons/Flag';
import FeedbackForm from '../../FeedbackForm';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     marginTop: 70,
//   },
//   textField: {
//     marginTop: 5,
//   },
//   control: {
//     padding: theme.spacing(3),
//   },
// }));

function TeamItem(props) {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.currentLanguage);
  const darkMode = useSelector((state) => state.darkMode.mode);
  const currentUser = useSelector((state) => state.auth.user);
  const { team, classes } = props;
  const [isReportFormOpen, setIsReportFormOpen] = useState(false);

  const handleClickLike = (team, teamLiked, e) => {
    teamLiked
      ? dispatch(removeLikeFromTeam(team._id))
      : dispatch(addLikeToTeam(team._id));
  };

  const handleClickDelete = (team) => {
    window.confirm('Are you sure you wish to delete this team?') &&
      dispatch(deleteTeam(team._id));
  };

  const handleClickReportButton = (e) => {
    setIsReportFormOpen(true);
  };

  const handleCloseReportModal = (e) => {
    setIsReportFormOpen(false);
  };

  const renderIcons = (team, currentUser) => {
    const arrayOfUsersLikedThisTeam = team.likes.map((like) => {
      return like.user;
    });
    const teamLiked = arrayOfUsersLikedThisTeam.includes(currentUser._id);

    return (
      <Fragment>
        {currentUser._id === team.user ? (
          <Fragment>
            <IconButton
              value={team}
              data-toggle="modal"
              data-target={`#editTeamModal${team._id}`}
            >
              <EditIcon />
            </IconButton>
            <EditTeamModal team={team} />
            <IconButton
              value={team}
              onClick={(event) => handleClickDelete(team)}
            >
              <DeleteIcon />
            </IconButton>

            <Button
              variant="outlined"
              data-toggle="modal"
              data-target={`#shareLinkModal${team._id}`}
            >
              Share
            </Button>
            <ShareTeamModal index={team._id} url={team.teamUrl} />

            <IconButton
              value={team}
              onClick={(event) => handleClickLike(team, teamLiked)}
            >
              {teamLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            {team.likes.length}
          </Fragment>
        ) : (
          <Fragment>
            <IconButton onClick={handleClickReportButton}>
              <FlagIcon />
            </IconButton>
            <FeedbackForm
              open={isReportFormOpen}
              onCloseModalHandler={handleCloseReportModal}
              postType={'team'}
              post={team}
            />
            <Button
              variant="outlined"
              data-toggle="modal"
              data-target={`#shareLinkModal${team._id}`}
            >
              Share
            </Button>
            <ShareTeamModal index={team._id} url={team.url} />

            <IconButton
              value={team}
              onClick={(event) => handleClickLike(team, teamLiked)}
            >
              {teamLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
            {team.likes.length}
          </Fragment>
        )}
      </Fragment>
    );
  };

  return (
    <div
      className={darkMode ? classes.teamContainerDark : classes.teamContainer}
    >
      <Paper className={darkMode ? classes.teamNameDark : classes.teamName}>
        <div className="pl-1 pr-1">
          <span
            style={{
              fontWeight: 'bold',
              color: '#bdbdbd',
            }}
          >
            Name:{' '}
          </span>
          <span style={{ color: 'white' }}>{team.teamName}</span>
          <span style={{ fontWeight: 'bold', color: '#bdbdbd' }}> by </span>
          <span style={{ color: 'white' }}>{team.username}</span>
        </div>
      </Paper>
      <Divider light />

      <Paper>
        <div className="pl-3 pr-1">{renderIcons(team, currentUser)}</div>
      </Paper>
      <Divider light />

      <Paper>
        <div className="pl-1 pr-1 pt-2 pb-2" style={{ marginLeft: 20 }}>
          {UI['Tags'][language]}:{' '}
          {team.tags.length !== 0
            ? team.tags.map((tag, index) => (
                <Chip
                  key={`tag-${index}`}
                  label={UI[tag] ? UI[tag][language] : tag}
                  size="small"
                  style={{ marginRight: 5 }}
                />
              ))
            : 'None'}
        </div>
      </Paper>
      <Divider light />

      <Paper
        style={
          !darkMode
            ? { backgroundColor: fade('#fafafa', 0.6) }
            : { backgroundColor: 'black' }
        }
      >
        <TeamDescription team={team} classes={classes} />

        {team.demoUrl ? (
          <Demo url={team.demoUrl} classes={classes} size={'small'} />
        ) : null}

        <Comments team={team} classes={classes} />

        <Grid
          container
          align="center"
          alignItems="center"
          justify="center"
          spacing={0}
          style={{ marginBottom: 10 }}
        >
          {[
            team.syncPairs.slot1,
            team.syncPairs.slot2,
            team.syncPairs.slot3,
          ].map((teamMemberData, index) => (
            <SyncPairCard
              key={index}
              index={index}
              teamMemberData={teamMemberData}
            />
          ))}
        </Grid>

        {[team.syncPairs.slot1, team.syncPairs.slot2, team.syncPairs.slot3].map(
          (teamMemberData, index) =>
            teamMemberData.trainerId ? (
              syncPairNamesAndIds[teamMemberData.trainerId].isGrided &&
              teamMemberData.selectedCellsById ? (
                <SyncGridContainer
                  key={`sync-grid-${index + 1}-${team._id}`}
                  teamMemberData={teamMemberData}
                  slot={`slot${index + 1}`}
                />
              ) : null
            ) : null
        )}
      </Paper>
    </div>
  );
}

export default withStyles(styles)(TeamItem);
