import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 80,
      width: 100,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.secondary
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);

export default function StatBox(props: any) {
  // const [spacing, setSpacing] = React.useState<GridSpacing>(2);
  const classes = useStyles();

  console.log('props',props);

  const {
    overallRating, 
    wouldRentAgainLevel, 
    tags, 
    friendlinessRating, 
    communicationRating, 
    maintenanceRating,
    transactionsIssues,
  } = props;

  const ratingsObj : {[key: string]:any} = {
    Overall: overallRating,
    RentAgain: wouldRentAgainLevel,
    Friendliness: friendlinessRating,
    Maintenance: maintenanceRating,
  }

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="flex-start" spacing={2}>
          {Object.keys(ratingsObj).map((value:string) => (
            <Grid key={value} item>
              {/* <Paper className={classes.paper}>{ratingsObj[value]}</Paper> */}
              <Paper className={classes.paper}>
                {`${value}`}
                <br></br>
                {(Math.round(ratingsObj[value] * 100) / 100).toFixed(1)}
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
      {/* <Grid item xs={12}>
        <Paper className={classes.control}>
          <Grid container>
            <Grid item>
              <FormLabel>spacing</FormLabel>
              <RadioGroup
                name="spacing"
                aria-label="spacing"
                value={spacing.toString()}
                onChange={handleChange}
                row
              >
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                  <FormControlLabel
                    key={value}
                    value={value.toString()}
                    control={<Radio />}
                    label={value.toString()}
                  />
                ))}
              </RadioGroup>
            </Grid>
          </Grid>
        </Paper>
      </Grid> */}
    </Grid>
  );
}