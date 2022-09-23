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

import axios from 'axios';
import { useState, useEffect } from 'react';

export default function FullFeaturedCrudGrid() {
   const [rows, setRows] = useState([]);
   const [rowModesModel, setRowModesModel] = useState({});
   const initialValues = { id: "", username: "", email: "", password: "" }
   const [action, setAction] = useState('');


   useEffect(() => {
      axios.get('https://630ed147379256341881df89.mockapi.io/users')
         .then(res => {
            const data = res.data.map((user) => {
               return {
                  "id": user.id,
                  "username": user.username,
                  "email": user.email, 
                  "password": user.password, 
               }
            })
            setRows(data)
         })
         .catch(err => { console.log('Error:', err) })
   }, [])

   const EditToolbar = () => {
      const handleAddProduct = () => {
         setAction('add')
         let id = randomId();
         setRows((oldRows) => [...oldRows, {
            ...initialValues, id
         }]);
         setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'username' },
         }));
      };

      return (
         <GridToolbarContainer>
            <Button sx={{ color: '#000', }} startIcon={<AddIcon />} onClick={handleAddProduct}>
               Add Product
            </Button>
         </GridToolbarContainer>
      );
   }

   const handleEditClick = (id) => () => {
      setAction('edit')
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
   };

   const handleDeleteClick = (id) => () => {
      axios
         .delete(`https://630ed147379256341881df89.mockapi.io/users/${id}`)
         .then(res => {
            console.log(res)
            setRows(rows.filter((row) => row.id !== id))
         })
         .catch((err) => {
            console.log('Error =', err);
            return
         });
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

   const handleSaveClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
   };

   
   const handleRowEditStart = (params, event) => {
      event.defaultMuiPrevented = true;
   };

   const handleRowEditStop = (params, event) => {
      event.defaultMuiPrevented = true;
   };

   const processRowUpdate = (newRow) => {
      if (action === 'add') {
         axios
            .post('https://630ed147379256341881df89.mockapi.io/users', { ...newRow })
            .then(res => {
               console.log(res)
               setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
               setAction('')
            })
            .catch((err) => {
               console.log('Err', err)
            })
         return newRow;
      }
      if (action === 'edit') {
         let id = newRow.id
         axios
            .put(`https://630ed147379256341881df89.mockapi.io/users/${id}`, { ...newRow })
            .then(res => {
               console.log(res)
               setRows(rows.map((row) => (row.id === newRow.id ? newRow : row)));
               setAction('')
            })
            .catch((err) => {
               console.log('Err', err)
            })

         return newRow;
      }
   };
   const columns = [
      {
         field: 'id',
         headerName: 'Id',
         type: 'number',
         width: 80,
         editable: true,
      },
      { field: 'username', headerName: 'Username', width: 180, editable: true },
      { field: 'email', headerName: 'Email', width: 200, editable: true },
      {
         field: 'password',
         headerName: 'Password',
         type: 'text',
         width: 180,
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
            onProcessRowUpdateError={(err) => {
               console.log(err)
            }}
            rows={rows}
            columns={columns}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowEditStart={handleRowEditStart}
            processRowUpdate={processRowUpdate}
            onRowEditStop={handleRowEditStop}
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
