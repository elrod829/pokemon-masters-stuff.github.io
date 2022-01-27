const fs = require('fs');

const monsterDB = require('../rawdata/protodump/Monster.json');
const monsterBaseDB = require('../rawdata/protodump/MonsterBase.json');
const monsterVariationDB = require('../rawdata/protodump/MonsterVariation.json');
const monsterEvolutionDB = require('../rawdata/protodump/MonsterEvolution.json');
const trainerDB = require('../rawdata/protodump/Trainer.json');
const trainerBaseDB = require('../rawdata/protodump/TrainerBase.json');
const moveDB = require('../rawdata/protodump/ModifiedMove.json');

const monsterFormDBde = require('../rawdata/lsddump/monster_form_de.json');
const monsterFormDBen = require('../rawdata/lsddump/monster_form_en.json');
const monsterFormDBes = require('../rawdata/lsddump/monster_form_es.json');
const monsterFormDBfr = require('../rawdata/lsddump/monster_form_fr.json');
const monsterFormDBit = require('../rawdata/lsddump/monster_form_it.json');
const monsterFormDBja = require('../rawdata/lsddump/monster_form_ja.json');
const monsterFormDBko = require('../rawdata/lsddump/monster_form_ko.json');
const monsterFormDBzh = require('../rawdata/lsddump/monster_form_zh-TW.json');

const motifTypeNameDBde = require('../rawdata/lsddump/motif_type_name_de.json');
const motifTypeNameDBen = require('../rawdata/lsddump/motif_type_name_en.json');
const motifTypeNameDBes = require('../rawdata/lsddump/motif_type_name_es.json');
const motifTypeNameDBfr = require('../rawdata/lsddump/motif_type_name_fr.json');
const motifTypeNameDBit = require('../rawdata/lsddump/motif_type_name_it.json');
const motifTypeNameDBja = require('../rawdata/lsddump/motif_type_name_ja.json');
const motifTypeNameDBko = require('../rawdata/lsddump/motif_type_name_ko.json');
const motifTypeNameDBzh = require('../rawdata/lsddump/motif_type_name_zh-TW.json');

const pokemonNameDBde = require('../rawdata/lsddump/monster_name_de.json');
const pokemonNameDBen = require('../rawdata/lsddump/monster_name_en.json');
const pokemonNameDBes = require('../rawdata/lsddump/monster_name_es.json');
const pokemonNameDBfr = require('../rawdata/lsddump/monster_name_fr.json');
const pokemonNameDBit = require('../rawdata/lsddump/monster_name_it.json');
const pokemonNameDBja = require('../rawdata/lsddump/monster_name_ja.json');
const pokemonNameDBko = require('../rawdata/lsddump/monster_name_ko.json');
const pokemonNameDBzh = require('../rawdata/lsddump/monster_name_zh-TW.json');

const trainerNameDBde = require('../rawdata/lsddump/trainer_name_de.json');
const trainerNameDBen = require('../rawdata/lsddump/trainer_name_en.json');
const trainerNameDBes = require('../rawdata/lsddump/trainer_name_es.json');
const trainerNameDBfr = require('../rawdata/lsddump/trainer_name_fr.json');
const trainerNameDBit = require('../rawdata/lsddump/trainer_name_it.json');
const trainerNameDBja = require('../rawdata/lsddump/trainer_name_ja.json');
const trainerNameDBko = require('../rawdata/lsddump/trainer_name_ko.json');
const trainerNameDBzh = require('../rawdata/lsddump/trainer_name_zh-TW.json');

const roleTypeNameDBde = require('../rawdata/lsddump/role_type_name_de.json');
const roleTypeNameDBen = require('../rawdata/lsddump/role_type_name_en.json');
const roleTypeNameDBes = require('../rawdata/lsddump/role_type_name_es.json');
const roleTypeNameDBfr = require('../rawdata/lsddump/role_type_name_fr.json');
const roleTypeNameDBit = require('../rawdata/lsddump/role_type_name_it.json');
const roleTypeNameDBja = require('../rawdata/lsddump/role_type_name_ja.json');
const roleTypeNameDBko = require('../rawdata/lsddump/role_type_name_ko.json');
const roleTypeNameDBzh = require('../rawdata/lsddump/role_type_name_zh-TW.json');

const moveNameDBde = require('../rawdata/lsddump/move_name_de.json');
const moveNameDBen = require('../rawdata/lsddump/move_name_en.json');
const moveNameDBes = require('../rawdata/lsddump/move_name_es.json');
const moveNameDBfr = require('../rawdata/lsddump/move_name_fr.json');
const moveNameDBit = require('../rawdata/lsddump/move_name_it.json');
const moveNameDBja = require('../rawdata/lsddump/move_name_ja.json');
const moveNameDBko = require('../rawdata/lsddump/move_name_ko.json');
const moveNameDBzh = require('../rawdata/lsddump/move_name_zh-TW.json');

const moveTargetTypeDBde = require('../rawdata/lsddump/move_target_type_de.json');
const moveTargetTypeDBen = require('../rawdata/lsddump/move_target_type_en.json');
const moveTargetTypeDBes = require('../rawdata/lsddump/move_target_type_es.json');
const moveTargetTypeDBfr = require('../rawdata/lsddump/move_target_type_fr.json');
const moveTargetTypeDBit = require('../rawdata/lsddump/move_target_type_it.json');
const moveTargetTypeDBja = require('../rawdata/lsddump/move_target_type_ja.json');
const moveTargetTypeDBko = require('../rawdata/lsddump/move_target_type_ko.json');
const moveTargetTypeDBzh = require('../rawdata/lsddump/move_target_type_zh-TW.json');

const motifTypeNameDB = {
  de: motifTypeNameDBde,
  en: motifTypeNameDBen,
  es: motifTypeNameDBes,
  fr: motifTypeNameDBfr,
  it: motifTypeNameDBit,
  ja: motifTypeNameDBja,
  ko: motifTypeNameDBko,
  zh: motifTypeNameDBzh,
};

const monsterFormDB = {
  de: monsterFormDBde,
  en: monsterFormDBen,
  es: monsterFormDBes,
  fr: monsterFormDBfr,
  it: monsterFormDBit,
  ja: monsterFormDBja,
  ko: monsterFormDBko,
  zh: monsterFormDBzh,
};

const pokemonNameDB = {
  de: pokemonNameDBde,
  en: pokemonNameDBen,
  es: pokemonNameDBes,
  fr: pokemonNameDBfr,
  it: pokemonNameDBit,
  ja: pokemonNameDBja,
  ko: pokemonNameDBko,
  zh: pokemonNameDBzh,
};

const trainerNameDB = {
  de: trainerNameDBde,
  en: trainerNameDBen,
  es: trainerNameDBes,
  fr: trainerNameDBfr,
  it: trainerNameDBit,
  ja: trainerNameDBja,
  ko: trainerNameDBko,
  zh: trainerNameDBzh,
};

const roleTypeNameDB = {
  de: roleTypeNameDBde,
  en: roleTypeNameDBen,
  es: roleTypeNameDBes,
  fr: roleTypeNameDBfr,
  it: roleTypeNameDBit,
  ja: roleTypeNameDBja,
  ko: roleTypeNameDBko,
  zh: roleTypeNameDBzh,
};

const moveNameDB = {
  de: moveNameDBde,
  en: moveNameDBen,
  es: moveNameDBes,
  fr: moveNameDBfr,
  it: moveNameDBit,
  ja: moveNameDBja,
  ko: moveNameDBko,
  zh: moveNameDBzh,
};

const moveTargetTypeDB = {
  de: moveTargetTypeDBde,
  en: moveTargetTypeDBen,
  es: moveTargetTypeDBes,
  fr: moveTargetTypeDBfr,
  it: moveTargetTypeDBit,
  ja: moveTargetTypeDBja,
  ko: moveTargetTypeDBko,
  zh: moveTargetTypeDBzh,
};

const { languages } = require('../utils/constants');

const {
  getUpdatedMoveDescription,
  getUpdatedPassiveSkillName,
  getUpdatedPassiveSkillDescription,
} = require('../utils/functions');

const playerPokemonList = [
  // Eggmons trainerId from Trainer.json
  '18000000000',
  '18000020000',
  '18000020011',
  '18000020016',
  '18000020021',
  '18000020026',
  '18000020031',
  '18000020036',
  '18000020051',
  '18000020056',
  '18000020061',
  '18000020071',
  '18000020076',
  '18000020081',
  '18000020086',
  '18000020101',
  '18000020106',
  '18000020111',
  '18000020116',
  '18000020121',
  '18000020131',
  '18000020136',
  '18000020141',
  '18000020146',
  '18000020151',
  '18000020156',
  '18000020161',
  '18000020166',
  '18000020171',
  '18000020176',
  '18000020181',
  '18000020186',
  '18000020191',
  '18000020196',
  '18000020201',
  '18000020206',
  '18000020211',
  '18000020216',
  '18000020221',
  '18000020226',
  '18000020231',
  '18000020236',
  '18000020241',
  '18000020246',
  '18000020251',
  '18000020261',
  '18000020266',
  '18000020271',
  '18000020276',
  '18000020281',
  '18000020286',
  '18000020291',
  '18000020296',
  '18000020301',
  '18000020306',
  '18000020331',
  '18000020336',
  '18000020341',
  '18000020346',
  '18000020351',
  '18000020356',
  '18000020361',
  '18000020366',
  '18000020371',
  '18000020376',
  '18000020381',
  '18000020386',
  '18000020391',
  '18000020401',
  '18000020411',
  '18000020416',
  '18000020421',
  '18000020426',
  '18000020431',
  '18000020441',
  '18000020446',
  '18000020451',
  '18000020456',
  '18000020461',
  '18000020476',
  '18000020481',
  '18000020486',
  '18000020491',
  '18000020496',
  '18000020501',
  '18000020506',
  '18000020511',
  '18000020516',
  '18000020521',
  '18000020531',
  '18000020541',
  '18000020546',
  '18000020551',
  '18000020556',
  '18000020561',
  '18000020566',
  '18000020571',
  '18000020581',
  '18000020586',
  '18000020591',
  '18000020596',
  '18000030011',
  '18000030016',
  '18000030021',
  '18000030026',
  '18000030031',
  '18000030036',
  '18000030051',
  '18000030056',
  '18000030061',
  '18000030071',
  '18000030076',
  '18000030081',
  '18000030086',
  '18000030101',
  '18000030106',
  '18000030111',
  '18000030116',
  '18000030121',
  '18000030131',
  '18000030136',
  '18000030141',
  '18000030146',
  '18000030151',
  '18000030156',
  '18000030161',
  '18000030166',
  '18000030171',
  '18000030176',
  '18000030181',
  '18000030186',
  '18000030191',
  '18000030196',
  '18000030201',
  '18000030206',
  '18000030211',
  '18000030216',
  '18000030221',
  '18000030226',
  '18000030231',
  '18000030236',
  '18000030241',
  '18000030246',
  '18000030251',
  '18000030261',
  '18000030266',
  '18000030271',
  '18000030276',
  '18000030281',
  '18000030286',
  '18000030291',
  '18000030296',
  '18000030301',
  '18000030306',
  '18000030331',
  '18000030336',
  '18000030341',
  '18000030346',
  '18000030351',
  '18000030356',
  '18000030361',
  '18000030366',
  '18000030371',
  '18000030376',
  '18000030381',
  '18000030386',
  '18000030391',
  '18000030401',
  '18000030411',
  '18000030416',
  '18000030421',
  '18000030426',
  '18000030431',
  '18000030441',
  '18000030446',
  '18000030451',
  '18000030456',
  '18000030461',
  '18000030476',
  '18000030481',
  '18000030486',
  '18000030491',
  '18000030496',
  '18000030501',
  '18000030506',
  '18000030511',
  '18000030516',
  '18000030541',
  '18000030546',
  '18000030551',
  '18000030556',
  '18000030561',
  '18000030566',
  '18000030571',
  '18000030581',
  '18000030586',
  '18000030591',
  '18000030596',
  '18000040001',
  '18000040004',
  '18000040007',
  '18000040011',
  '18000040016',
  '18000040021',
  '18000040026',
  '18000040031',
  '18000040036',
  '18000040051',
  '18000040056',
  '18000040061',
  '18000040071',
  '18000040076',
  '18000040081',
  '18000040086',
  '18000040101',
  '18000040106',
  '18000040111',
  '18000040116',
  '18000040121',
  '18000040131',
  '18000040136',
  '18000040141',
  '18000040146',
  '18000040151',
  '18000040156',
  '18000040161',
  '18000040166',
  '18000040171',
  '18000040176',
  '18000040181',
  '18000040186',
  '18000040191',
  '18000040196',
  '18000040201',
  '18000040206',
  '18000040211',
  '18000040216',
  '18000040221',
  '18000040226',
  '18000040231',
  '18000040236',
  '18000040241',
  '18000040246',
  '18000040251',
  '18000040261',
  '18000040266',
  '18000040271',
  '18000040276',
  '18000040281',
  '18000040286',
  '18000040291',
  '18000040296',
  '18000040301',
  '18000040306',
  '18000040331',
  '18000040336',
  '18000040341',
  '18000040346',
  '18000040351',
  '18000040356',
  '18000040361',
  '18000040366',
  '18000040371',
  '18000040376',
  '18000040381',
  '18000040386',
  '18000040391',
  '18000040401',
  '18000040411',
  '18000040416',
  '18000040421',
  '18000040426',
  '18000040431',
  '18000040441',
  '18000040446',
  '18000040451',
  '18000040456',
  '18000040461',
  '18000040476',
  '18000040481',
  '18000040486',
  '18000040491',
  '18000040496',
  '18000040501',
  '18000040506',
  '18000040511',
  '18000040516',
  '18000040541',
  '18000040546',
  '18000040551',
  '18000040556',
  '18000040561',
  '18000040566',
  '18000040571',
  '18000040581',
  '18000040586',
  '18000040591',
  '18000040596',
  '18000120000',
];

// On 5/25/2020 the following changes have been made to the .proto files:
// monsterId->monsterBaseId
// trainerId->monsterId
// characterId->trainerId

/*
 * Usage i.e: node extractEggPokemonData.js
 * */

const extractEggPokemonData = () => {
  const eggPokemonData = {};
  let monsterAndTrainerData = {};
  let monsterId = '';
  // let monsterBaseId = '';
  // let syncMoveId = '';
  let stats = {};
  let moves = {};
  let passives = {};
  // let syncPairNames = {};

  let trainerNameId = '';

  playerPokemonList.forEach((trainerIdFromList) => {
    if (
      // "18000000000", Pikachu
      // "18000020000", Torchic
      // "18000120000", Solgaleo
      trainerIdFromList !== '18000000000' &&
      trainerIdFromList !== '18000020000' &&
      trainerIdFromList !== '18000120000' &&
      trainerIdFromList !== '18000020521' && // Hero & Regirock
      trainerIdFromList !== '18000020531' && // Hero & Cobalion
      trainerIdFromList.slice(-1) !== '6' // Ids that end in '6' seem to be duplicates
    ) {
      let hasVariationForm = false;
      let isMega = false;
      let monsterVariationFormBaseId;
      let monsterVariationFormEntry;
      let variationMoves;
      let variationPassives;
      let variationSyncMove;
      let variationFormPassiveId;
      let variationFormId;

      let pokemonNameByLanguage = {
        de: '',
        en: '',
        es: '',
        fr: '',
        it: '',
        ja: '',
        ko: '',
        zh: '',
      };
      let trainerNameByLanguage = {
        de: '',
        en: '',
        es: '',
        fr: '',
        it: '',
        ja: '',
        ko: '',
        zh: '',
      };
      let syncPairNameByLanguage = {
        de: '',
        en: '',
        es: '',
        fr: '',
        it: '',
        ja: '',
        ko: '',
        zh: '',
      };
      // Find entry in Trainer.json
      let trainer = trainerDB.entries.find(
        (trainer) =>
          trainer.trainerId.toString() === trainerIdFromList.toString()
      );

      if (trainer) {
        console.log('Trainer exists');

        let trainerBaseId = trainer.trainerBaseId;

        // Use trainerId to find monsterId in Trainer.json
        monsterId = trainer.monsterId;

        // Find last evolution form
        let arrayOfEvoluations = monsterEvolutionDB.entries.filter((entry) => {
          return entry.trainerId.toString() === trainerIdFromList.toString();
        });
        if (arrayOfEvoluations.length !== 0) {
          let sortedArrayOfEvoluations = arrayOfEvoluations.sort((a, b) => {
            let x = a.monsterIdNext;
            let y = b.monsterIdNext;
            return x < y ? -1 : x > y ? 1 : 0;
          });

          monsterId = sortedArrayOfEvoluations.pop().monsterIdNext;
        }

        // Use monsterId to find type, weakType, moveId and passiveId in Trainer.json
        let {
          move1Id,
          move2Id,
          move3Id,
          move4Id,
          passive1Id,
          passive2Id,
          passive3Id,
          passive4Id,
          type,
          weakType,
          rarity,
          role,
        } = trainer;

        // if (trainerIdFromList.toString() === '10126000000') {
        //   // Swampert's first move is Muddy Water not Water Gun
        //   move1Id = 330;
        // }
        // if (trainerIdFromList.toString() === '10123000000') {
        //   // Decidueye first move is Spirit Shackle
        //   move1Id = 624;
        // }
        // if (trainerIdFromList.toString() === '10122000000') {
        //   // Primarina first move is Sparkling Aria
        //   move1Id = 626;
        // }
        // if (trainerIdFromList.toString() === '10245000000') {
        //   // Morpeko has Hunger Switch as a "form passive"
        //   passive3Id = 99010601;
        // }
        // Use monsterId to find stats, syncMoveId and monsterBaseId in Monster.json
        let monster = monsterDB.entries.find(
          (monster) => monster.monsterId.toString() === monsterId.toString()
        );

        const {
          hpValues,
          atkValues,
          defValues,
          spaValues,
          spdValues,
          speValues,
          syncMoveId,
          monsterBaseId,
        } = monster;

        move1Id =
          monster.move1ChangeId !== -1 ? monster.move1ChangeId : move1Id;
        move2Id =
          monster.move2ChangeId !== -1 ? monster.move2ChangeId : move2Id;
        move3Id =
          monster.move3ChangeId !== -1 ? monster.move3ChangeId : move3Id;
        move4Id =
          monster.move4ChangeId !== -1 ? monster.move4ChangeId : move4Id;

        // Use monsterBaseId to find actorId in MonsterBase.json
        let monsterBase = monsterBaseDB.entries.find(
          (monsterBase) =>
            monsterBase.monsterBaseId.toString() === monsterBaseId.toString()
        );

        const { actorId, formPassiveId, formId } = monsterBase;

        let monsterActorId = actorId;
        let monsterVariationFormByLanguage;
        let monsterFormByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };
        languages.forEach((language) => {
          monsterFormByLanguage[language] = monsterFormDB[language][formId];
        });

        stats = {
          hpValues,
          atkValues,
          defValues,
          spaValues,
          spdValues,
          speValues,
        };
        // find role type
        let roleTypeNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };

        const updateRoleTable = {
          0: '100',
          1: '101',
          2: '103',
          3: '102',
        };

        languages.forEach((language) => {
          roleTypeNameByLanguage[language] =
            roleTypeNameDB[language][updateRoleTable[role]];
        });

        // Use moveId to find move name in move_name_xx.json
        // Use moveId to find move description in move_description_xx.json
        let move1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move4NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let move1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move4DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let move1TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move2TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move3TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move4TargetTypeByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };
        let move1TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move2TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move3TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          move4TypeNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };
        syncMoveTypeNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };
        // Use moveId to find move data, eg. power, accuracy, etc. from Move.json
        let move1 = moveDB.entries.find(
          (move) => move.moveId.toString() === move1Id.toString()
        );
        let move2 = moveDB.entries.find(
          (move) => move.moveId.toString() === move2Id.toString()
        );
        let move3 = moveDB.entries.find(
          (move) => move.moveId.toString() === move3Id.toString()
        );
        let move4 = moveDB.entries.find(
          (move) => move.moveId.toString() === move4Id.toString()
        );

        languages.forEach((language) => {
          move1NameByLanguage[language] = moveNameDB[language][move1Id];
          move2NameByLanguage[language] = moveNameDB[language][move2Id];
          move3NameByLanguage[language] = moveNameDB[language][move3Id];
          move4NameByLanguage[language] = moveNameDB[language][move4Id];
          move1DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move1Id
          );
          move2DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move2Id
          );
          move3DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move3Id
          );
          move4DescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            move4Id
          );
          move1TargetTypeByLanguage[language] =
            moveTargetTypeDB[language][move1.target];
          move2TargetTypeByLanguage[language] =
            moveTargetTypeDB[language][move2.target];
          move3TargetTypeByLanguage[language] =
            moveTargetTypeDB[language][move3.target];
          move4TargetTypeByLanguage[language] =
            moveTargetTypeDB[language][move4.target];
          move1TypeNameByLanguage[language] =
            motifTypeNameDB[language][move1.type];
          move2TypeNameByLanguage[language] =
            motifTypeNameDB[language][move2.type];
          move3TypeNameByLanguage[language] =
            motifTypeNameDB[language][move3.type];
          move4TypeNameByLanguage[language] =
            motifTypeNameDB[language][move4.type];
        });
        moves = {
          move1: {
            id: move1Id,
            name: move1NameByLanguage,
            description: move1DescriptionByLanguage,
            category: move1.category,
            group: move1.group,
            type: move1.type,
            typeName: move1TypeNameByLanguage,
            target: move1.target,
            targetType: move1TargetTypeByLanguage,
            gaugeDrain: move1.gaugeDrain,
            power: move1.power,
            accuracy: move1.accuracy,
            maxUses: move1.maxUses,
          },
          move2: {
            id: move2Id,
            name: move2NameByLanguage,
            description: move2DescriptionByLanguage,
            category: move2.category,
            group: move2.group,
            type: move2.type,
            typeName: move2TypeNameByLanguage,
            target: move2.target,
            targetType: move2TargetTypeByLanguage,
            gaugeDrain: move2.gaugeDrain,
            power: move2.power,
            accuracy: move2.accuracy,
            maxUses: move2.maxUses,
          },
          move3: {
            id: move3Id,
            name: move3NameByLanguage,
            description: move3DescriptionByLanguage,
            category: move3.category,
            group: move3.group,
            type: move3.type,
            typeName: move3TypeNameByLanguage,
            target: move3.target,
            targetType: move3TargetTypeByLanguage,
            gaugeDrain: move3.gaugeDrain,
            power: move3.power,
            accuracy: move3.accuracy,
            maxUses: move3.maxUses,
          },
          move4: {
            id: move4Id,
            name: move4NameByLanguage,
            description: move4DescriptionByLanguage,
            category: move4.category,
            group: move4.group,
            type: move4.type,
            typeName: move4TypeNameByLanguage,
            target: move4.target,
            targetType: move4TargetTypeByLanguage,
            gaugeDrain: move4.gaugeDrain,
            power: move4.power,
            accuracy: move4.accuracy,
            maxUses: move4.maxUses,
          },
        };

        // Use passiveId to find passive skill name and description in passive_skill_name_xx.json and passive_skill_description_xx.json
        let passive1NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive2NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive3NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive4NameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          formPassiveNameByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        let passive1DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive2DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive3DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          passive4DescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          },
          formPassiveDescriptionByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };

        languages.forEach((language) => {
          formPassiveNameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            formPassiveId
          );
          passive1NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive1Id
          );
          passive2NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive2Id
          );
          passive3NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive3Id
          );
          passive4NameByLanguage[language] = getUpdatedPassiveSkillName(
            language,
            0, // moveId
            passive4Id
          );
          formPassiveDescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, formPassiveId);
          passive1DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive1Id);
          passive2DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive2Id);
          passive3DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive3Id);
          passive4DescriptionByLanguage[language] =
            getUpdatedPassiveSkillDescription(language, passive4Id);
        });

        passive1Id !== 0 &&
          (passives = {
            passive1: {
              id: passive1Id,
              name: passive1NameByLanguage,
              description: passive1DescriptionByLanguage,
            },
          });
        passive2Id !== 0 &&
          (passives = {
            ...passives,
            passive2: {
              id: passive2Id,
              name: passive2NameByLanguage,
              description: passive2DescriptionByLanguage,
            },
          });
        passive3Id !== 0 &&
          (passives = {
            ...passives,
            passive3: {
              id: passive3Id,
              name: passive3NameByLanguage,
              description: passive3DescriptionByLanguage,
            },
          });
        passive4Id !== 0 &&
          (passives = {
            ...passives,
            passive4: {
              id: passive4Id,
              name: passive4NameByLanguage,
              description: passive4DescriptionByLanguage,
            },
          });
        formPassiveId !== 0 &&
          formPassiveId !== 99010401 && // 99010401 is Silvally's form passive
          (passives = {
            ...passives,
            formPassive: {
              id: formPassiveId,
              name: formPassiveNameByLanguage,
              description: formPassiveDescriptionByLanguage,
            },
          });
        let hasHitTheGas5InBaseForm = false;
        Object.values(passives).forEach((passive) => {
          if (passive.id.toString() === '13014505') {
            // Hit the Gas 5
            console.log('Hit the Gas 5');

            hasHitTheGas5InBaseForm = true;

            Object.values(moves).forEach((move) => {
              move.gaugeDrain =
                move.gaugeDrain !== 0 ? move.gaugeDrain + 1 : move.gaugeDrain;
              move.power =
                move.power !== 0 ? Math.floor(move.power * 1.5) : move.power;
            });
          } else if (passive.id.toString().substring(0, 4) === '1305') {
            // Type Shift
            console.log('Type Shift');
            let convertTypeShiftToType = {
              0: 0,
              1: 1,
              2: 10, // flying
              3: 3,
              4: 4,
              5: 5,
              6: 6,
              7: 7,
              8: 8,
              9: 9,
              10: 12, // bug
              11: 11,
              12: 16, // dark
              13: 13,
              14: 14,
              15: 15,
              16: 16,
              17: 15, // dragon
              18: 18,
            };
            // "id": 13051001,
            // "name": {
            //   "de": "Käfer-Wechsel",
            //   "en": "Bug Shift",
            //   "es": "Cambio Bicho",
            //   "fr": "Conversion Insecte",
            //   "it": "Mutainsetto",
            //   "ja": "むしチェンジ",
            //   "ko": "벌레체인지",
            //   "zh": "蟲屬性替換"
            // },
            // "id": 13050201,
            // "name": {
            //   "de": "Flug-Wechsel",
            //   "en": "Flying Shift",
            //   "es": "Cambio Volador",
            //   "fr": "Conversion Vol",
            //   "it": "Mutavolante",
            //   "ja": "ひこうチェンジ",
            //   "ko": "비행체인지",
            //   "zh": "飛行屬性替換"
            // },
            // "id": 13050301,
            // "name": {
            //   "de": "Wasser-Wechsel",
            //   "en": "Water Shift",
            //   "es": "Cambio Agua",
            //   "fr": "Conversion Eau",
            //   "it": "Mutacqua",
            //   "ja": "みずチェンジ",
            //   "ko": "물체인지",
            //   "zh": "水屬性替換"
            // },
            // "id": 13051201,
            // "name": {
            //   "de": "Unlicht-Wechsel",
            //   "en": "Dark Shift",
            //   "es": "Cambio Siniestro",
            //   "fr": "Conversion Ténèbres",
            //   "it": "Mutabuio",
            //   "ja": "あくチェンジ",
            //   "ko": "악체인지",
            //   "zh": "惡屬性替換"
            // },
            // "id": 13051701,
            // "name": {
            //   "de": "Drachen-Wechsel",
            //   "en": "Dragon Shift",
            //   "es": "Cambio Dragón",
            //   "fr": "Conversion Dragon",
            //   "it": "Mutadrago",
            //   "ja": "ドラゴンチェンジ",
            //   "ko": "드래곤체인지",
            //   "zh": "龍屬性替換"
            // },
            Object.values(moves).forEach((move) => {
              move.type =
                move.power !== 0 && move.type === 1
                  ? convertTypeShiftToType[
                      Number(passive.id.toString().substring(4, 6))
                    ]
                  : move.type;
            });
          }
        });
        // syncMoveId = monster.syncMoveId;

        // monsterBaseId = monster.monsterBaseId;

        // Use syncMoveId to find sync move data in Move.json
        let syncMoveNameByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };

        let syncMoveDescriptionByLanguage = {
          de: '',
          en: '',
          es: '',
          fr: '',
          it: '',
          ja: '',
          ko: '',
          zh: '',
        };

        // Use moveId to find move data, eg. power, accuracy, etc. from Move.json
        let syncMoveEntry = moveDB.entries.find(
          (move) => move.moveId.toString() === syncMoveId.toString()
        );

        languages.forEach((language) => {
          syncMoveNameByLanguage[language] = moveNameDB[language][syncMoveId];
          syncMoveDescriptionByLanguage[language] = getUpdatedMoveDescription(
            language,
            syncMoveId
          );
          syncMoveTypeNameByLanguage[language] =
            motifTypeNameDB[language][syncMoveEntry.type];
        });

        moves = {
          ...moves,
          syncMove: {
            id: syncMoveEntry.moveId,
            name: syncMoveNameByLanguage,
            description: syncMoveDescriptionByLanguage,
            category: syncMoveEntry.category,
            group: syncMoveEntry.group,
            type: syncMoveEntry.type,
            typeName: syncMoveTypeNameByLanguage,
            target: syncMoveEntry.target,
            gaugeDrain: syncMoveEntry.gaugeDrain,
            power: syncMoveEntry.power,
            accuracy: syncMoveEntry.accuracy,
            maxUses: syncMoveEntry.maxUses,
          },
        };

        console.log('hasVariationForm', hasVariationForm);
        if (
          monsterVariationDB.entries.find(
            (monster) => monster.monsterId.toString() === monsterId.toString()
          ) &&
          trainerIdFromList.toString() !== '10247000000' // Leon's Charizard doesn't mega evolve
        ) {
          console.log(
            `trainerId ${trainerIdFromList} & monsterId ${monsterId} has variation`
          );
          hasVariationForm = true;

          // Use monsterBaseId to see if there is a variation form, i.e. monsterBaseId ends in '51'

          let potentialMegaBaseId =
            monsterBaseId
              .toString()
              .substring(0, monsterBaseId.toString().length - 2) + '51';

          // do the same if pokemon is Mew
          // if (monsterBaseId.toString() === '20015111') {
          //   potentialMegaBaseId = monsterBaseId.toString();
          // }

          if (
            pokemonNameDBen[potentialMegaBaseId] &&
            trainerIdFromList.toString() !== '10247000000' // Leon's Charizard doesn't mega evolve
          ) {
            console.log('variation is mega');
            isMega = true;
          } else {
            console.log('variation is not mega');
            isMega = false;
          }

          console.log('monsterBaseId', monsterBaseId);
          if (
            monsterBaseDB.entries.find(
              (monsterBase) =>
                monsterBase.monsterBaseId.toString() ===
                potentialMegaBaseId.toString()
            )
          ) {
            monsterVariationFormBaseId = potentialMegaBaseId;
          } else {
            if (monsterBaseId === 2008771101) {
              // Morpeko
              monsterVariationFormBaseId = '2008771201';
            } else {
              monsterVariationFormBaseId = (
                Number(monsterBaseId) + 1
              ).toString(); // either ends in 51 or original number +1, even for Silvali and Mew
            }
          }
          // monsterVariationFormBaseId = potentialMegaBaseId
          //   ? potentialMegaBaseId
          //   : (Number(monsterBaseId) + 1).toString(); // either ends in 51 or original number +1, even for Silvali and Mew

          monsterVariationFormEntry = monsterVariationDB.entries.find(
            (monster) => monster.monsterId.toString() === monsterId.toString()
          );

          const { atkScale, defScale, spaScale, spdScale, speScale } =
            monsterVariationFormEntry;

          stats = {
            ...stats,
            atkScale,
            defScale,
            spaScale,
            spdScale,
            speScale,
          };

          // Use monsterBaseId to find actorId in MonsterBase.json
          let variationMonsterBase = monsterBaseDB.entries.find(
            (monsterBase) =>
              monsterBase.monsterBaseId.toString() ===
              monsterVariationFormBaseId.toString()
          );
          // console.log('monsterVariationFormBaseId', monsterVariationFormBaseId);
          variationFormPassiveId = variationMonsterBase.formPassiveId;
          variationFormId = variationMonsterBase.formId;

          monsterVariationFormByLanguage = {
            de: '',
            en: '',
            es: '',
            fr: '',
            it: '',
            ja: '',
            ko: '',
            zh: '',
          };
          languages.forEach((language) => {
            monsterVariationFormByLanguage[language] =
              monsterFormDB[language][variationFormId];
          });

          // Use variationMoveId to find variationMove name in move_name_xx.json
          // Use variationMoveId to find variationMove description in move_description_xx.json
          let variationMove1NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove2NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove3NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove4NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };

          let variationMove1DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove2DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove3DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove4DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };

          let variationMove1TargetTypeByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove2TargetTypeByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove3TargetTypeByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove4TargetTypeByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };
          let variationMove1TypeNameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove2TypeNameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove3TypeNameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationMove4TypeNameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };
          // Use variationMoveId to find variationMove data, eg. power, accuracy, etc. from Move.json
          let variationMove1, variationMove2, variationMove3, variationMove4;
          monsterVariationFormEntry.move1Id !== -1
            ? (variationMove1 = moveDB.entries.find(
                (move) =>
                  move.moveId.toString() ===
                  monsterVariationFormEntry.move1Id.toString()
              ))
            : null;
          monsterVariationFormEntry.move2Id !== -1
            ? (variationMove2 = moveDB.entries.find(
                (move) =>
                  move.moveId.toString() ===
                  monsterVariationFormEntry.move2Id.toString()
              ))
            : null;
          monsterVariationFormEntry.move3Id !== -1
            ? (variationMove3 = moveDB.entries.find(
                (move) =>
                  move.moveId.toString() ===
                  monsterVariationFormEntry.move3Id.toString()
              ))
            : null;
          monsterVariationFormEntry.move4Id !== -1
            ? (variationMove4 = moveDB.entries.find(
                (move) =>
                  move.moveId.toString() ===
                  monsterVariationFormEntry.move4Id.toString()
              ))
            : null;

          languages.forEach((language) => {
            variationMove1NameByLanguage[language] =
              moveNameDB[language][monsterVariationFormEntry.move1Id];
            variationMove2NameByLanguage[language] =
              moveNameDB[language][monsterVariationFormEntry.move2Id];
            variationMove3NameByLanguage[language] =
              moveNameDB[language][monsterVariationFormEntry.move3Id];
            variationMove4NameByLanguage[language] =
              moveNameDB[language][monsterVariationFormEntry.move4Id];
            variationMove1DescriptionByLanguage[language] =
              getUpdatedMoveDescription(
                language,
                monsterVariationFormEntry.move1Id
              );
            variationMove2DescriptionByLanguage[language] =
              getUpdatedMoveDescription(
                language,
                monsterVariationFormEntry.move2Id
              );
            variationMove3DescriptionByLanguage[language] =
              getUpdatedMoveDescription(
                language,
                monsterVariationFormEntry.move3Id
              );
            variationMove4DescriptionByLanguage[language] =
              getUpdatedMoveDescription(
                language,
                monsterVariationFormEntry.move4Id
              );
            variationMove1 &&
              (variationMove1TargetTypeByLanguage[language] =
                moveTargetTypeDB[language][variationMove1.target]);
            variationMove2 &&
              (variationMove2TargetTypeByLanguage[language] =
                moveTargetTypeDB[language][variationMove2.target]);
            variationMove3 &&
              (variationMove3TargetTypeByLanguage[language] =
                moveTargetTypeDB[language][variationMove3.target]);
            variationMove4 &&
              (variationMove4TargetTypeByLanguage[language] =
                moveTargetTypeDB[language][variationMove4.target]);

            variationMove1 &&
              (variationMove1TypeNameByLanguage[language] =
                motifTypeNameDB[language][variationMove1.type]);
            variationMove2 &&
              (variationMove2TypeNameByLanguage[language] =
                motifTypeNameDB[language][variationMove2.type]);
            variationMove3 &&
              (variationMove3TypeNameByLanguage[language] =
                motifTypeNameDB[language][variationMove3.type]);
            variationMove4 &&
              (variationMove4TypeNameByLanguage[language] =
                motifTypeNameDB[language][variationMove4.type]);
          });

          variationMove1 &&
            (variationMoves = {
              ...variationMoves,
              move1: {
                id: variationMove1.moveId,
                name: variationMove1NameByLanguage,
                description: variationMove1DescriptionByLanguage,
                category: variationMove1.category,
                group: variationMove1.group,
                type: variationMove1.type,
                typeName: variationMove1TypeNameByLanguage,
                target: variationMove1.target,
                targetType: variationMove1TargetTypeByLanguage,
                gaugeDrain: variationMove1.gaugeDrain,
                power: variationMove1.power,
                accuracy: variationMove1.accuracy,
                maxUses: variationMove1.maxUses,
              },
            });
          variationMove2 &&
            (variationMoves = {
              ...variationMoves,
              move2: {
                id: variationMove2.moveId,
                name: variationMove2NameByLanguage,
                description: variationMove2DescriptionByLanguage,
                category: variationMove2.category,
                group: variationMove2.group,
                type: variationMove2.type,
                typeName: variationMove2TypeNameByLanguage,
                target: variationMove2.target,
                targetType: variationMove2TargetTypeByLanguage,
                gaugeDrain: variationMove2.gaugeDrain,
                power: variationMove2.power,
                accuracy: variationMove2.accuracy,
                maxUses: variationMove2.maxUses,
              },
            });
          variationMove3 &&
            (variationMoves = {
              ...variationMoves,
              move3: {
                id: variationMove3.moveId,
                name: variationMove3NameByLanguage,
                description: variationMove3DescriptionByLanguage,
                category: variationMove3.category,
                group: variationMove3.group,
                type: variationMove3.type,
                typeName: variationMove3TypeNameByLanguage,
                target: variationMove3.target,
                targetType: variationMove3TargetTypeByLanguage,
                gaugeDrain: variationMove3.gaugeDrain,
                power: variationMove3.power,
                accuracy: variationMove3.accuracy,
                maxUses: variationMove3.maxUses,
              },
            });
          variationMove4 &&
            (variationMoves = {
              ...variationMoves,
              move4: {
                id: variationMove4.moveId,
                name: variationMove4NameByLanguage,
                description: variationMove4DescriptionByLanguage,
                category: variationMove4.category,
                group: variationMove4.group,
                type: variationMove4.type,
                typeName: variationMove4TypeNameByLanguage,
                target: variationMove4.target,
                targetType: variationMove4TargetTypeByLanguage,
                gaugeDrain: variationMove4.gaugeDrain,
                power: variationMove4.power,
                accuracy: variationMove4.accuracy,
                maxUses: variationMove4.maxUses,
              },
            });

          if (trainerIdFromList.toString() === '10126400000') {
            // May & Lopunny changes sync move after evolving
            let variationSyncMoveId = 84200;
            // Use syncMoveId to find sync move data in Move.json
            let variationSyncMoveNameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };

            let variationSyncMoveDescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };
            let variationSyncMoveTypeNameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };

            // Use moveId to find move data, eg. power, accuracy, etc. from Move.json
            let syncMoveEntry = moveDB.entries.find(
              (move) =>
                move.moveId.toString() === variationSyncMoveId.toString()
            );

            languages.forEach((language) => {
              variationSyncMoveNameByLanguage[language] =
                moveNameDB[language][variationSyncMoveId];
              variationSyncMoveDescriptionByLanguage[language] =
                getUpdatedMoveDescription(language, variationSyncMoveId);
              variationSyncMoveTypeNameByLanguage[language] =
                motifTypeNameDB[language][syncMoveEntry.type];
            });

            variationSyncMove = {
              id: syncMoveEntry.moveId,
              name: variationSyncMoveNameByLanguage,
              description: variationSyncMoveDescriptionByLanguage,
              category: syncMoveEntry.category,
              group: syncMoveEntry.group,
              type: syncMoveEntry.type,
              typeName: variationSyncMoveTypeNameByLanguage,
              target: syncMoveEntry.target,
              gaugeDrain: syncMoveEntry.gaugeDrain,
              power: syncMoveEntry.power,
              accuracy: syncMoveEntry.accuracy,
              maxUses: syncMoveEntry.maxUses,
            };
          } else {
            variationSyncMove = null;
          }

          variationSyncMove &&
            (variationMoves = {
              ...variationMoves,
              syncMove: variationSyncMove,
            });

          // Use passiveId to find passive skill name and description in passive_skill_name_xx.json and passive_skill_description_xx.json
          let variationPassive1NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationPassive2NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationPassive3NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationPassive4NameByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };

          let variationPassive1DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationPassive2DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationPassive3DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            },
            variationPassive4DescriptionByLanguage = {
              de: '',
              en: '',
              es: '',
              fr: '',
              it: '',
              ja: '',
              ko: '',
              zh: '',
            };

          languages.forEach((language) => {
            variationPassive1NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive1Id
              );

            variationPassive2NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive2Id
              );

            variationPassive3NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive3Id
              );

            variationPassive4NameByLanguage[language] =
              getUpdatedPassiveSkillName(
                language,
                0, // moveId
                monsterVariationFormEntry.passive4Id
              );

            variationPassive1DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive1Id
              );
            variationPassive2DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive2Id
              );
            variationPassive3DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive3Id
              );
            variationPassive4DescriptionByLanguage[language] =
              getUpdatedPassiveSkillDescription(
                language,
                monsterVariationFormEntry.passive4Id
              );
          });

          monsterVariationFormEntry.passive1Id !== 0 &&
            (variationPassives = {
              ...variationPassives,
              passive1: {
                id: passive1Id,
                name: variationPassive1NameByLanguage,
                description: variationPassive1DescriptionByLanguage,
              },
            });
          monsterVariationFormEntry.passive2Id !== 0 &&
            (variationPassives = {
              ...variationPassives,
              passive2: {
                id: passive2Id,
                name: variationPassive2NameByLanguage,
                description: variationPassive2DescriptionByLanguage,
              },
            });
          monsterVariationFormEntry.passive3Id !== 0 &&
            (variationPassives = {
              ...variationPassives,
              passive3: {
                id: passive3Id,
                name: variationPassive3NameByLanguage,
                description: variationPassive3DescriptionByLanguage,
              },
            });
          monsterVariationFormEntry.passive4Id &&
            monsterVariationFormEntry.passive4Id !== 0 &&
            (variationPassives = {
              ...variationPassives,
              passive4: {
                id: passive4Id,
                name: variationPassive4NameByLanguage,
                description: variationPassive4DescriptionByLanguage,
              },
            });

          if (variationPassives) {
            Object.values(variationPassives).forEach((passive) => {
              if (passive.id.toString() === '13014505') {
                // Hit the Gas 5
                console.log('Hit the Gas 5 in variation form');

                if (hasHitTheGas5InBaseForm === false) {
                  Object.values(variationMoves).forEach((move) => {
                    move.gaugeDrain =
                      move.gaugeDrain !== 0
                        ? move.gaugeDrain + 1
                        : move.gaugeDrain;
                    move.power =
                      move.power !== 0
                        ? Math.floor(move.power * 1.5)
                        : move.power;
                  });
                }
                let convertTypeShiftToType = {
                  0: 0,
                  1: 1,
                  2: 10, // flying
                  3: 3,
                  4: 4,
                  5: 5,
                  6: 6,
                  7: 7,
                  8: 8,
                  9: 9,
                  10: 12, // bug
                  11: 11,
                  12: 16, // dark
                  13: 13,
                  14: 14,
                  15: 15,
                  16: 16,
                  17: 15, // dragon
                  18: 18,
                };
                Object.values(variationPassives).forEach((passive) => {
                  if (passive.id.toString().substring(0, 4) === '1305') {
                    // Type Shift
                    console.log('Type Shift');
                    Object.values(variationMoves).forEach((move) => {
                      move.type =
                        move.power !== 0 && move.type === 1
                          ? convertTypeShiftToType[
                              Number(passive.id.toString().substring(4, 6))
                            ]
                          : move.type;
                    });
                  }
                });
              }
            });
          }
        } else {
          hasVariationForm = false;
        }

        // Use trainerId to find trainerBaseId in Trainer.json

        // Use trainerBaseId to find trainerNameId in TrainerBase.json
        // 6/28 update - trainerBase.trainerBaseId => trainerBase.id
        trainerBase = trainerBaseDB.entries.find(
          (trainerBase) =>
            trainerBase.id.toString() === trainer.trainerBaseId.toString()
        );

        // trainerNameId = trainerBase.trainerNameId;
        // 6/28 update - trainerBase.trainerNameIdShort => trainerBase.trainerNameId
        trainerNameId = trainerBase.trainerNameId;

        // let trainerActorId = trainerBase.actorId; // name changed on 9/28/2020
        // 6/28 update - trainerBase.trainerNameId => trainerBase.actorId
        let trainerActorId = trainerBase.trainerNameId;

        languages.forEach((language) => {
          if (monsterBaseId) {
            pokemonNameByLanguage[language] = pokemonNameDB[language][
              monsterBaseId
            ]
              ? pokemonNameDB[language][monsterBaseId]
              : pokemonNameDB[language][
                  monsterBaseId
                    .toString()
                    .substring(0, monsterBaseId.toString().length - 1) + '0'
                ];
          } else {
            console.log(
              `trainerId ${trainerIdFromList} has no matching monsterBaseId`
            );
          }

          if (trainerNameId) {
            trainerNameByLanguage[language] =
              trainerNameDB[language][trainerNameId];
          }
          if (trainerNameId === 'ch8000') {
            trainerNameByLanguage[language] = 'Hero';
          }
          if (monsterBaseId && trainerNameId) {
            syncPairNameByLanguage[
              language
            ] = `${trainerNameByLanguage[language]}_${pokemonNameByLanguage[language]}`;
          }

          if (trainerNameId.toString() === '10021010000') {
            // New Blastoise Grid
            pokemonNameByLanguage[language] =
              pokemonNameByLanguage[language] + '_new';
          }
        });

        // Push to eggPokemonData
        hasVariationForm
          ? (monsterAndTrainerData = {
              pokemonNameByLanguage: pokemonNameByLanguage,
              trainerNameByLanguage: trainerNameByLanguage,
              syncPairNameByLanguage: syncPairNameByLanguage,
              monsterBaseId: monsterBaseId.toString(),
              monsterId: monsterId.toString(),
              monsterActorId: monsterActorId,
              trainerId: trainerIdFromList,
              trainerBaseId: trainerBaseId.toString(),
              trainerNameId,
              trainerActorId: trainerActorId,
              stats,
              moves,
              passives,
              type,
              weakType,
              rarity,
              role,
              roleTypeNameByLanguage,
              formPassiveId,
              formId,
              monsterFormByLanguage,
              variationForm: variationSyncMove
                ? {
                    monsterVariationFormBaseId,
                    isMega,
                    moves: variationMoves,
                    passives: variationPassives,
                    syncMove: variationSyncMove,
                    formPassiveId: variationFormPassiveId,
                    formId: variationFormId,
                    monsterFormByLanguage: monsterVariationFormByLanguage,
                  }
                : {
                    monsterVariationFormBaseId,
                    isMega,
                    moves: variationMoves,
                    passives: variationPassives,
                    formPassiveId: variationFormPassiveId,
                    formId: variationFormId,
                    monsterFormByLanguage: monsterVariationFormByLanguage,
                  },
            })
          : (monsterAndTrainerData = {
              pokemonNameByLanguage: pokemonNameByLanguage,
              trainerNameByLanguage: trainerNameByLanguage,
              syncPairNameByLanguage: syncPairNameByLanguage,
              monsterBaseId: monsterBaseId.toString(),
              monsterId: monsterId.toString(),
              monsterActorId: monsterActorId,
              trainerId: trainerIdFromList,
              trainerBaseId: trainerBaseId.toString(),
              trainerNameId,
              trainerActorId: trainerActorId,
              stats,
              moves,
              passives,
              type,
              weakType,
              rarity,
              role,
              roleTypeNameByLanguage,
              formPassiveId,
              formId,
              monsterFormByLanguage,
            });

        eggPokemonData[trainerIdFromList] = monsterAndTrainerData;
      } else {
        console.log('Trainer does not exists.', trainerIdFromList);
      }
    }
  });

  fs.writeFile(
    `${__dirname}/../../src/data/eggPokemonData.json`,
    JSON.stringify(eggPokemonData),
    (err) => {
      if (err) throw err;
      console.log('Successfully written to file');
    }
  );

  return eggPokemonData;
};

extractEggPokemonData();
