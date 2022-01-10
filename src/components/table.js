import * as React from 'react';
import { DataGrid,  GridToolbarFilterButton } from '@mui/x-data-grid';
import { Switch, TextField } from '@mui/material';

const columns = [

  {
    field: 'CampaignName',
    headerName: 'Campaign Name',
    width: 300
  },
  {
    field: 'state',
    headerName: 'State',
    width: 80,
    renderCell: (params) => {

      return <Switch defaultChecked={params.value} />
    }
  },
  {
    field: 'users',
    headerName: 'Users',
    width: 100
  },
  {
    field: 'spend',
    headerName: 'Spend',
  },
  {
    field: 'rev',
    headerName: 'Revenue',
  },
  {
    field: 'cpc',
    headerName: 'CPC',
    width:80
  },
  {
    field: 'rpc',
    headerName: 'RPC',
    width:80
  },
  {
    field: 'clicks',
    headerName: 'Clicks',
  },
  {
    field: 'roi',
    headerName: 'ROI $',
    width:80
  },
  {
    field: 'dspend',
    headerName: 'D-Spend',
  },
  {// {
  //   field: 'drev',
  //   headerName: 'D-Rev',
  // },
  // {
  //   field: 'dcpc',
  //   headerName: 'D-RPC',
  // },
  // {
  //   field: 'drpc',
  //   headerName: 'D-RPC',
  // },
  // {
  //   field: 'dclicks',
  //   headerName: 'D-Clicks',
  // },
  // {
  //   field: 'droi',
  //   headerName: 'D-ROI',
  // },
  },{
    field: 'dproi',
    headerName: 'D-ROI%',
  },
  {
    field: 'bid',
    headerName: 'Bid',
    width: 150,
    renderCell: (params) => {

      return <TextField type="number" placeholder="Bid.." fullWidth margin="normal" name="Bid" value={params.value} />
    }
  },
  {
    field: 'budget',
    headerName: 'Budget',
    width: 400,
    renderCell: (params) => {

      return <TextField type="number" placeholder="Budget.." fullWidth margin="normal" name="Budget" value={params.value} />
    }
  },

];

const rows = [
  { id: 1, CampaignName: 'Snow', users: 143, state: true, rev: 370.5, budget:3, spend: 284, cpc: 0.025, rpc:0.032, clicks: 11360,},

];

export default function Table() {
  return (
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick
        components={{
          Toolbar: GridToolbarFilterButton,
        }}
        initialState={{
          filter: {
            filterModel: {
              items: [
                {
                  columnField: 'commodity',
                  operatorValue: 'contains',
                  value: 'rice',
                },
              ],
            },
          },
        }}
      />
    </div>
  );
}
