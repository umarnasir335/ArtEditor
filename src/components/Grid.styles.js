import { createUseStyles } from 'react-jss';

export default createUseStyles({
  grid: {
    display: 'grid',
    gridTemplateRows: 'repeat(5, 1fr)',
    gridTemplateColumns: 'repeat(8, 1fr)',
    width: '80vmin',
    height: '50vmin',
    border: '2px solid black',
  },
  cell: {
    cursor: 'pointer',
    border: '2px solid black',
    background: 'white',
    transition: 'all 200ms linear',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  //test with first two
  row: {
    display: 'grid',
    border: '2 px solid black',
    height: '15vmin',
    width: '80vmin'
  },

  flexrow:{
    display: 'flex',
    border: '2 px solid dashed',
    height: '12vmin',
    width: '75vmin',
    transform: 'scale(1.1)',
  }
});