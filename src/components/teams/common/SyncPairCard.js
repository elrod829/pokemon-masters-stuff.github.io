import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Fab from '@material-ui/core/Fab';
import syncPairNamesAndIds from '../../../data/syncPairNamesAndIds.json';
import { changeGender } from '../../../actions/actionCreators';
import RefreshIcon from '@material-ui/icons/Refresh';
import { getPokemonDataByTrainerId } from '../../../utils/functions';
import { pokemonPictures } from '../../../images/Pokemon/exportImagesAsObject';
import { trainerPictures } from '../../../images/Trainers/exportImagesAsObject';
import { icons } from '../../../images/Icons/exportImagesAsObject';
import { rolesByLanguage } from '../../../utils/constants';
import { getSyncPairNameAndIdByTrainerId } from '../../../utils/functions';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: 2,
    marginTop: 15,
    height: 300,
    width: 102,
    position: 'relative',
    display: 'inline-block',
  },
  fab: {
    color: 'primary',
    position: 'absolute',
    top: 2,
    right: 2,
    label: 'Gender',
  },
}));

function SyncPairCard(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { index, teamMemberData } = props;
  const gender = useSelector((state) => state.gender.selectedGender);
  const darkMode = useSelector((state) => state.darkMode.mode);

  let trainerActorId = teamMemberData.trainerId
    ? syncPairNamesAndIds[teamMemberData.trainerId].trainerActorId
    : '';

  let monsterActorId = teamMemberData.trainerId
    ? syncPairNamesAndIds[teamMemberData.trainerId].monsterActorId
    : '';

  if (gender === 'Female' && trainerActorId === 'hero') {
    trainerActorId = 'heroine';
  }

  const onChangeGender = () => {
    dispatch(changeGender());
  };

  return (
    <Fragment>
      <Card className={classes.card} position="relative" variant="outlined">
        {trainerActorId === 'hero' || trainerActorId === 'heroine' ? (
          <Fab
            aria-label={'Gender'}
            className={classes.fab}
            variant="round"
            size="small"
            onClick={onChangeGender}
            style={{ zIndex: 100 }}
          >
            <RefreshIcon />
          </Fab>
        ) : null}

        {teamMemberData.trainerId ? (
          <div>
            <CardMedia
              component="img"
              alt="Trainer Image"
              height="250"
              image={
                trainerActorId === 'hero' || trainerActorId === 'heroine'
                  ? trainerPictures[`${trainerActorId}_256`]
                  : `https://pokemonmasters.s3.us-east-2.amazonaws.com/Trainer/256px/${trainerActorId}_256.ktx.png`
              }
              title="Trainer Image"
              position="absolute"
            />
            <div
              style={{
                bottom: 0,
                right: 5,
                position: 'absolute',
                zIndex: 30,
                color: 'white',
                // fontWeight: 'bold',
              }}
            >
              {teamMemberData.syncLevel}/5
            </div>

            {teamMemberData.isEX ? (
              <div
                className={`${darkMode ? 'text-white' : 'text-black'}`}
                style={{
                  top: 0,
                  left: 5,
                  position: 'absolute',
                  zIndex: 30,
                  // color: 'white',
                  fontWeight: 'bold',
                }}
              >
                EX
              </div>
            ) : null}

            <div
              style={{
                bottom: 3,
                left: 5,
                position: 'absolute',
                zIndex: 30,
                color: 'white',
                fontSize: 12,
              }}
            >
              <img
                // width="20"
                height="18"
                src={
                  icons[
                    rolesByLanguage[
                      getSyncPairNameAndIdByTrainerId(teamMemberData.trainerId)
                        .role
                    ]['en']
                      .split(' ')
                      .join('')
                  ]
                }
              />
            </div>

            <div
              style={{
                top: 0,
                left: 0,
                position: 'absolute',
                zIndex: 30,
              }}
            >
              <svg style={{ height: 300 }}>
                <circle
                  cx="60"
                  cy="235"
                  r="40"
                  stroke="white"
                  strokeWidth="10"
                  fillOpacity="0"
                />
              </svg>
            </div>
            <div
              style={{
                top: 0,
                left: 0,
                position: 'absolute',
                zIndex: 10,
              }}
            >
              <svg style={{ height: 300 }}>
                <polygon
                  points="-10 260 130 220 130 310 -10 310"
                  stroke="white"
                  strokeWidth="10"
                  fill="grey"
                />
                <circle
                  cx="60"
                  cy="235"
                  r="40"
                  stroke="white"
                  strokeWidth="0"
                  fill="grey"
                />
              </svg>
            </div>
            <div
              style={{
                top: 209,
                left: 30,
                position: 'absolute',
                zIndex: 20,
              }}
            >
              <img
                src={
                  getPokemonDataByTrainerId(teamMemberData.trainerId)
                    ? getPokemonDataByTrainerId(teamMemberData.trainerId)
                        .isGrided
                      ? pokemonPictures[
                          getPokemonDataByTrainerId(teamMemberData.trainerId)
                            .monsterActorId + '_128'
                        ]
                      : `https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/128px/${monsterActorId}_128.ktx.png`
                    : `https://pokemonmasters.s3.us-east-2.amazonaws.com/Monster/128px/${monsterActorId}_128.ktx.png`
                }
                style={{ height: 60 }}
              />
            </div>
          </div>
        ) : (
          <div>
            <CardMedia
              component="img"
              alt="Trainer Image"
              height="250"
              image={require('../../../images/empty_256.png')}
              title="Trainer Image"
              position="absolute"
            />
            <div
              style={{
                top: 0,
                left: 0,
                position: 'absolute',
                zIndex: 30,
              }}
            >
              <svg style={{ height: 300 }}>
                <circle
                  cx="60"
                  cy="235"
                  r="39"
                  stroke="white"
                  strokeWidth="10"
                  fillOpacity="0"
                />
              </svg>
            </div>
            <div
              style={{
                top: 0,
                left: 0,
                position: 'absolute',
                zIndex: 10,
              }}
            >
              <svg style={{ height: 300 }}>
                <polygon
                  points="-10 260 130 220 130 310 -10 310"
                  stroke="white"
                  strokeWidth="10"
                  fill="grey"
                />
                <circle
                  cx="60"
                  cy="235"
                  r="39"
                  stroke="white"
                  strokeWidth="0"
                  fill="grey"
                />
              </svg>
            </div>
          </div>
        )}
      </Card>
    </Fragment>
  );
}

export default SyncPairCard;
