import * as React from 'react';
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

import { useState, useEffect } from 'react';
import axios from 'axios';


export default function FullFeaturedCrudGrid() {
   const [rows, setRows] = useState([]);
   const [rowModesModel, setRowModesModel] = useState({});
   const initialValues = { id: "", name: "", price: "", imageURL: "", classify: "", category: "" }
   const [editField, setEditField] = useState(initialValues)

   useEffect(() => {
      axios.get('https://630ed147379256341881df89.mockapi.io/products')
         .then(res => {
            const data = res.data.map((product) => {
               return {
                  "id": product.id,
                  "name": product.name,
                  "price": product.price,
                  "imageURL": product.imageURL,
                  "classify": product.classify,
                  "category": product.category
               }
            })
            setRows(data)
         })
         .catch(err => { console.log('Error:', err) })
   }, [])

   const handleRowEditStart = (params, event) => {
      event.defaultMuiPrevented = true;
   };

   const handleRowEditStop = (params, event) => {
      event.defaultMuiPrevented = true;
   };

   const handleEditClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
   };

   const handleDeleteClick = (id) => () => {
      axios
         .delete(`https://630ed147379256341881df89.mockapi.io/products/${id}`)
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

   const processRowUpdate = (newRow) => {
      const updatedRow = { ...newRow, isNew: false };
      console.log(newRow)
      setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
      setEditField({...newRow})
      console.log(editField)
      return updatedRow;
   };

   const handleSaveClick = (id) => () => {
      setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
      // axios
      //    .post('https://630ed147379256341881df89.mockapi.io/products', { ... })
      //    .then(res => {
      //       console.log(res)
      //    })
      //    .catch((err) => {
      //       console.log('Err', err)
      //    })
   };

   const EditToolbar = () => {
      const handleAddProduct = () => {
         let id = randomId();
         setEditField(oldValue => {
            return {
               ...initialValues, id: id
            }
         })
         setRows((oldRows) => [...oldRows, {
            ...initialValues, id: id
         }]);
         setRowModesModel((oldModel) => ({
            ...oldModel,
            [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' },
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

   const columns = [
      {
         field: 'id',
         headerName: 'Id',
         type: 'string',
         width: 80,
         editable: true,
      },
      { field: 'name', headerName: 'Name', type: 'string', width: 180, editable: true },
      { field: 'price', headerName: 'Price', type: 'number', editable: true },
      { field: 'imageURL', headerName: 'ImageURL', type: 'string', width: 300, editable: true },
      {
         field: 'classify',
         headerName: 'Classify',
         type: 'string',
         width: 180,
         editable: true,
         onChange: true
      },
      {
         field: 'category',
         headerName: 'Category',
         type: 'string',
         width: 120,
         editable: true,
         onChange: true
      },
      {
         onChange: true,
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
                     onChange={() => {
                        console.log('kjashd')
                     }}
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