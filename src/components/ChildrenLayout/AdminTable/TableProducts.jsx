import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { GridRowModes, GridToolbarContainer, GridActionsCellItem } from '@mui/x-data-grid-pro';
import { DataGrid } from '@mui/x-data-grid';
import { randomId } from '@mui/x-data-grid-generator';

const initialRows = [
   {
      id: 1,
      name: 'Clutch Bag',
      price: 175,
      classify: 'Bag and Backpack',
      category: 'clothes',
   },
   {
      id: 2,
      name: 'Orange Sandals',
      price: 225,
      classify: 'skirt',
      category: 'clothes',
   },
   {
      id: 3,
      name: 'Orange Sandals',
      price: 125,
      sale_price: 75,
      classify: 'skirt',
      category: 'clothes',
   },
   {
      id: 4,
      name: 'Blue Suit',
      price: 360,
      classify: 'clothes',
      category: 'clothes',
   },
   {
      id: 5,
      name: 'Orange Weil',
      price: 60,
      classify: 'clothes',
      category: 'clothes',
   },
   {
      id: 6,
      name: 'White Purse',
      price: 75,
      classify: 'Bag and Backpack',
      category: 'clothes',
   },
   {
      id: 7,
      name: 'Red Suit',
      price: 456,
      classify: 'clothes',
      category: 'clothes',
   },
   {
      id: 8,
      name: 'Golden Sandals',
      price: 115,
      classify: 'high heels',
      category: 'clothes',
   },
   {
      id: 9,
      name: 'Mission Bag',
      price: 110,
      classify: 'Bag and Backpack',
      category: 'clothes',
   },
   {
      id: 10,
      name: 'City Mini Bag',
      price: 85,
      classify: 'Bag and Backpack',
      category: 'bags',
   },
   {
      id: 11,
      name: 'Shoulder Bag',
      price: 90,
      classify: 'Bag and Backpack',
      category: 'bags',
   },
   {
      id: 12,
      name: 'Drawstring Bag',
      price: 45,
      classify: 'Bag and Backpack',
      category: 'bags',
   },
];

function EditToolbar(props) {
   const { setRows, setRowModesModel } = props;

   const handleClick = () => {
      const id = randomId();
      setRows((oldRows) => [...oldRows, { id, name: '', age: '', isNew: true }]);
      setRowModesModel((oldModel) => ({
         ...oldModel,
         [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
      }));
   };

   return (
      <GridToolbarContainer>
         <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
            Add Product
         </Button>
      </GridToolbarContainer>
   );
}

EditToolbar.propTypes = {
   setRowModesModel: PropTypes.func.isRequired,
   setRows: PropTypes.func.isRequired,
};

export default function FullFeaturedCrudGrid() {
   const [rows, setRows] = React.useState(initialRows);
   const [rowModesModel, setRowModesModel] = React.useState({});

   const handleRowEditStart = (params, event) => {
      event.defaultMuiPrevented = true;
   };

   const handleRowEditStop = (params, event) => {
      event.defaultMuiPrevented = true;
   };

   const handleEditClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
   };

   const handleSaveClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
   };

   const handleDeleteClick = (id) => () => {
      setRows(rows.filter((row) => row.id !== id));
   };

   const handleCancelClick = (id) => () => {
      setRowModesModel({
         ...rowModesModel,
         [id]: { mode: GridRowModes.View, ignoreModifications: true },
      });

      const editedRow = rows.find((row) => row.id === id);
      if (editedRow.isNew) {
         setRows(rows.filter((row) => row.id !== id));
      }
   };

   const processRowUpdate = (newRow) => {
      const updatedRow = { ...newRow, isNew: false };
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
      return updatedRow;
   };

   const columns = [
      {
         field: 'id',
         headerName: 'Id',
         type: 'number',
         width: 80,
         editable: true,
      },
      { field: 'name', headerName: 'Name', width: 180, editable: true },
      { field: 'price', headerName: 'Price', type: 'number', editable: true },
      {
         field: 'classify',
         headerName: 'Classify',
         type: 'text',
         width: 180,
         editable: true,
      },
      {
         field: 'category',
         headerName: 'Category',
         type: 'text',
         width: 220,
         editable: true,
      },
      {
         field: 'actions',
         type: 'actions',
         headerName: 'Actions',
         width: 100,
         cellClassName: 'actions',
         getActions: ({ id }) => {
            const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

            if (isInEditMode) {
               return [
                  <GridActionsCellItem icon={<SaveIcon />} label="Save" onClick={handleSaveClick(id)} />,
                  <GridActionsCellItem
                     icon={<CancelIcon />}
                     label="Cancel"
                     className="textPrimary"
                     onClick={handleCancelClick(id)}
                     color="inherit"
                  />,
               ];
            }

            return [
               <GridActionsCellItem
                  icon={<EditIcon />}
                  label="Edit"
                  className="textPrimary"
                  onClick={handleEditClick(id)}
                  color="inherit"
               />,
               <GridActionsCellItem
                  icon={<DeleteIcon />}
                  label="Delete"
                  onClick={handleDeleteClick(id)}
                  color="inherit"
               />,
            ];
         },
      },
   ];

   return (
      <Box
         sx={{
            height: 500,
            width: '100%',
            '& .actions': {
               color: 'text.secondary',
            },
            '& .textPrimary': {
               color: 'text.primary',
            },
         }}
      >
         <DataGrid
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowEditStart={handleRowEditStart}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            components={{
               Toolbar: EditToolbar,
            }}
            componentsProps={{
               toolbar: { setRows, setRowModesModel },
            }}
            experimentalFeatures={{ newEditingApi: true }}
         />
      </Box>
   );
}
