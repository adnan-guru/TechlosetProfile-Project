
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container'
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      
    },

  }),
);

export default function Document() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3} className={classes.main}>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper className={classes.paper}>
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          A flex container is the box generated by an element with a computed display of flex or inline-flex. In-flow children of a flex container are called flex items and are laid out using the flex layout model.
          </Paper>
        </Grid>
    </Grid>
     
     
    </Container>
  );
}