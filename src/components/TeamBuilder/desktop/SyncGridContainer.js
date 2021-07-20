import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SyncGrid from '../common/SyncGrid';
import ResetIndividualGridButton from '../common/ResetIndividualGridButton';
import LoadIndividualBuildDropdown from '../common/LoadIndividualBuildDropdown';
import SyncLevelDropdown from '../common/SyncLevelDropdown';
import { MovesAndSkillsButtonMobile } from '../../MovesAndSkills';
import {
  setTeamSyncLevels,
  updateTeamUrl,
} from '../../../actions/actionCreators';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  box: {
    height: 800,
    width: 500,
  },
  smallBox: {
    height: 800,
    width: 215,
  },
}));

const SyncGridContainer = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { trainerId, slot, isEggmon } = props;
  const language = useSelector((state) => state.language.currentLanguage);
  const syncLevels = useSelector((state) => state.grid.teamSyncLevels);
  const remainingEnergy = useSelector(
    (state) => state.grid.teamRemainingEnergy
  );
  const orbSpent = useSelector((state) => state.grid.teamOrbSpent);
  const selectedCellsById = useSelector(
    (state) => state.grid.teamSelectedCellsById[slot]
  );

  const handleChangeSyncLevel = (syncLevel) => {
    dispatch(setTeamSyncLevels({ slot: slot, syncLevel: syncLevel }));
    dispatch(updateTeamUrl());
  };

  const [isMovesAndSkillsModalVisible, setIsMovesAndSkillsModalVisible] =
    useState(false);

  if (trainerId === '18000020076') {
    // Meowth
    return null;
  }

  return (
    <Box
      border={2}
      borderColor="text.primary"
      borderRadius={10}
      className={isEggmon ? classes.smallBox : classes.box}
    >
      <div style={{ position: 'relative', paddingTop: 5 }}>
        <SyncLevelDropdown
          syncLevel={syncLevels[slot]}
          handleChangeSyncLevel={handleChangeSyncLevel}
        />

        {isEggmon ? null : (
          <>
            <LoadIndividualBuildDropdown {...props} />
            <br />

            <Typography
              component="div"
              color="textPrimary"
              style={{ position: 'absolute', top: 0, right: 0, margin: 10 }}
            >
              E: {remainingEnergy[slot]}/60
              <br />
              O: {orbSpent[slot]}/750
            </Typography>
          </>
        )}

        <div style={{ marginLeft: 8, marginTop: -7 }}>
          <MovesAndSkillsButtonMobile
            trainerId={trainerId}
            selectedCellsById={selectedCellsById}
            syncLevel={syncLevels[slot]}
            language={language}
            isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
            setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
            size={'large'}
            isEgg={isEggmon}
          />
        </div>
        {isEggmon ? null : (
          <>
            <div style={{ marginLeft: 8, marginTop: 8 }}>
              <ResetIndividualGridButton slot={slot} />
            </div>

            <div style={{ marginTop: -70 }}>
              <SyncGrid
                trainerId={trainerId}
                slot={slot}
                syncLevel={syncLevels[slot]}
              />
            </div>
          </>
        )}
      </div>
    </Box>
  );
};

export default SyncGridContainer;
