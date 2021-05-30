import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 155,
    },
  },
}));

function binomial(n, k, p) {
  if (isNaN(n)) {
    n = 0;
  }
  if (isNaN(p)) {
    p = 0;
  }

  let coeff = 1;
  let x = n - k + 1;
  for (x; x <= n; x++) coeff *= x;
  for (x = 1; x <= k; x++) coeff /= x;

  return coeff * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

const GachaOddsCalculator = () => {
  const classes = useStyles();
  const [paidScouts, setPaidScouts] = useState(0);
  const [nonPaidScouts, setNonPaidScouts] = useState(0);
  const [nonPaidScoutsx11, setNonPaidScoutsx11] = useState(0);
  const [targetRate, setTargetRate] = useState(2);
  const [fiveStarRate, setFiveStarRate] = useState(7);

  const handleChangeFocusRate = (event) => {
    setTargetRate(parseFloat(event.target.value));
  };
  const handleChangeFiveStarRate = (event) => {
    setFiveStarRate(parseFloat(event.target.value));
  };
  const handleChangePaidScouts = (event) => {
    setPaidScouts(parseFloat(event.target.value));
  };
  const handleChangeNonPaidScouts = (event) => {
    setNonPaidScouts(parseFloat(event.target.value));
  };
  const handleChangeNonPaidScoutsx11 = (event) => {
    setNonPaidScoutsx11(parseFloat(event.target.value));
  };

  let totalScouts = parseFloat(
    (!isNaN(paidScouts) ? paidScouts : 0) +
      (!isNaN(nonPaidScouts) ? nonPaidScouts : 0) +
      (!isNaN(nonPaidScoutsx11) ? nonPaidScoutsx11 * 11 : 0)
  );

  let paidGems = !isNaN(paidScouts) ? paidScouts * 100 : 0;
  let nonPaidGems =
    (!isNaN(nonPaidScouts) ? nonPaidScouts * 300 : 0) +
    (!isNaN(nonPaidScoutsx11) ? nonPaidScoutsx11 * 3000 : 0);

  return (
    <Container maxWidth="sm" style={{ paddingTop: 5, marginBottom: 30 }}>
      <Paper width={1} style={{ padding: 50, marginTop: 20 }}>
        <form className={classes.root}>
          <h3>Gacha Odds Calculator</h3>
          <Divider />
          <br />
          <h4>Inputs: </h4>
          <div
            className="row"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <TextField
              id="target-unit-rate"
              label="Rate of Target Unit"
              type="number"
              value={targetRate}
              onChange={handleChangeFocusRate}
              inputProps={{ min: 0 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />{' '}
            <Tooltip
              enterTouchDelay={10}
              title="2% for focus unit in Spotlight Scout and Poke Fair Scout. 1% in Master Fair Scout. Check in-game offering rate for non-focus
                units"
              placement="top"
            >
              <HelpOutlineIcon />
            </Tooltip>
          </div>
          <div
            className="row"
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <TextField
              id="five-star-unit-rate"
              label="Rate of 5-Star Unit"
              type="number"
              value={fiveStarRate}
              onChange={handleChangeFiveStarRate}
              inputProps={{ min: 0 }}
              InputProps={{
                endAdornment: <InputAdornment position="end">%</InputAdornment>,
              }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />{' '}
            <Tooltip
              enterTouchDelay={10}
              title="7% for Spotlight Scout. 10% for Poke Fair Scout. 12% for Master Fair Scout"
              placement="top"
            >
              <HelpOutlineIcon />
            </Tooltip>
          </div>
          <div className="row">
            <TextField
              id="paid-scouts"
              label="Paid Scouts"
              type="number"
              value={paidScouts}
              onChange={handleChangePaidScouts}
              inputProps={{ min: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className="row">
            <TextField
              id="non-paid-scouts"
              label="Non-Paid Scouts"
              type="number"
              value={nonPaidScouts}
              onChange={handleChangeNonPaidScouts}
              inputProps={{ min: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </div>
          <div className="row">
            <TextField
              id="non-paid-scouts-11"
              label="Non-Paid Scouts x11"
              type="number"
              value={nonPaidScoutsx11}
              onChange={handleChangeNonPaidScoutsx11}
              inputProps={{ min: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              margin="dense"
            />
          </div>
          <br />
          <Divider />
          <br />
          <h4>Results: </h4>
          Total number of scouts:{' '}
          <span style={{ color: 'red' }}>{totalScouts}</span>
          <br />
          Total gems spent:{' '}
          <span style={{ color: 'red' }}>
            {paidGems + nonPaidGems}{' '}
          </span> (Paid: <span style={{ color: 'red' }}> {paidGems}</span>;
          Non-Paid: <span style={{ color: 'red' }}>{nonPaidGems}</span> )
          <br />
          <br />
          Probability of summoning at least 1 target unit:&nbsp; &nbsp;
          <span style={{ color: 'red' }}>
            {totalScouts === 0
              ? 0
              : (
                  (1 - binomial(totalScouts, 0, targetRate / 100)) *
                  100
                ).toFixed(4)}
            %
          </span>
          <br />
          Probability of summoning at least 2 target units:{' '}
          <span style={{ color: 'red' }}>
            {totalScouts === 0
              ? 0
              : (
                  (1 -
                    binomial(totalScouts, 0, targetRate / 100) -
                    binomial(totalScouts, 1, targetRate / 100)) *
                  100
                ).toFixed(4)}
            %
          </span>
          <br />
          Probability of summoning at least 3 target units:{' '}
          <span style={{ color: 'red' }}>
            {totalScouts === 0
              ? 0
              : (
                  (1 -
                    binomial(totalScouts, 0, targetRate / 100) -
                    binomial(totalScouts, 1, targetRate / 100) -
                    binomial(totalScouts, 2, targetRate / 100)) *
                  100
                ).toFixed(4)}
            %
          </span>
          <br />
          Probability of summoning at least 4 target units:{' '}
          <span style={{ color: 'red' }}>
            {totalScouts === 0
              ? 0
              : (
                  (1 -
                    binomial(totalScouts, 0, targetRate / 100) -
                    binomial(totalScouts, 1, targetRate / 100) -
                    binomial(totalScouts, 2, targetRate / 100) -
                    binomial(totalScouts, 3, targetRate / 100)) *
                  100
                ).toFixed(4)}
            %
          </span>
          <br />
          Probability of summoning at least 5 target units:{' '}
          <span style={{ color: 'red' }}>
            {totalScouts === 0
              ? 0
              : (
                  (1 -
                    binomial(totalScouts, 0, targetRate / 100) -
                    binomial(totalScouts, 1, targetRate / 100) -
                    binomial(totalScouts, 2, targetRate / 100) -
                    binomial(totalScouts, 3, targetRate / 100) -
                    binomial(totalScouts, 4, targetRate / 100)) *
                  100
                ).toFixed(4)}
            %
          </span>
          <br />
          <br />
          You can expect a total of{' '}
          <span style={{ color: 'red' }}>
            {Math.floor(
              (totalScouts * (!isNaN(fiveStarRate) ? fiveStarRate : 0)) / 100
            )}{' '}
          </span>{' '}
          5-Star units (focus and non-focus).
          <br />
        </form>
      </Paper>
    </Container>
  );
};

export default GachaOddsCalculator;
