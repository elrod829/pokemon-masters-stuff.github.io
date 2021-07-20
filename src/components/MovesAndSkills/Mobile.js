import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import MovesAndSkillsModal from './Modal';
import UI from '../../utils/translations';

const MovesAndSkillsButton = (props) => {
  const language = useSelector((state) => state.language.currentLanguage);
  const { trainerId, selectedCellsById, syncLevel, page, size, isEX, isEgg } =
    props;

  const [isMovesAndSkillsModalVisible, setIsMovesAndSkillsModalVisible] =
    useState(false);

  const handleOnOpenMovesAndSkillsModal = () => {
    setIsMovesAndSkillsModalVisible(true);
  };
  return (
    <Fragment>
      <Button
        variant="outlined"
        style={page === 'builds' ? { marginRight: 10 } : { marginTop: 10 }}
        onClick={handleOnOpenMovesAndSkillsModal}
      >
        {UI['Moves & Skills'][language]}
      </Button>

      <MovesAndSkillsModal
        trainerId={trainerId}
        selectedCellsById={selectedCellsById}
        syncLevel={syncLevel}
        language={language}
        isMovesAndSkillsModalVisible={isMovesAndSkillsModalVisible}
        setIsMovesAndSkillsModalVisible={setIsMovesAndSkillsModalVisible}
        size={size || 'small'}
        isEX={isEX}
        isEgg={isEgg || false}
      />
    </Fragment>
  );
};

export default MovesAndSkillsButton;
