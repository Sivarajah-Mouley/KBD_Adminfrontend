import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';
import InventoryIcon from '@mui/icons-material/Inventory';
const currentDate = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);

function preventDefault(event) {
  event.preventDefault();
}

export default function OutStock(props) {
  return (
    <React.Fragment>
      <Title>Out Stock</Title>
      <InventoryIcon sx={{ fontSize: 100 }}/>
      <Typography component="p" variant="h4">
        {props.out}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on {formattedDate}
      </Typography>
    </React.Fragment>
  );
}