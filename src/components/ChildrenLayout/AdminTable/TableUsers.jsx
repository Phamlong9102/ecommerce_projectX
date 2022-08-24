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
      name: 'Chí Anh Tran',
      age: 47,
      address: 'Cầu Giấy, Hà Nội',
      phone_number: '0123453219',
   },
   {
      id: 2,
      name: 'Diệp Lan Trần',
      age: 22,
      address: 'Nam Từ Liêm, Hà Nội',
      phone_number: '0123489389',
   },
   {
      id: 3,
      name: 'Tuân Bích Phạm',
      age: 39,
      address: 'Ba Đình, Hà Nội',
      phone_number: '0123490289',
   },
   {
      id: 4,
      name: 'Trí Tú Ngô',
      age: 13,
      address: 'Quận 1, Hồ Chí Minh',
      phone_number: '0123493089',
   },
   {
      id: 5,
      name: 'Ngọc Minh Phạm',
      age: 62,
      address: 'Quận 2, Hồ Chí Minh',
      phone_number: '01234523589',
   },
   {
      id: 6,
      name: 'Bích Yên Nguyen',
      age: 54,
      address: 'Quảng Ninh',
      phone_number: '0123478389',
   },
   {
      id: 7,
      name: 'Hữu Huy Bùi',
      age: 12,
      address: 'Thái Nguyên',
      phone_number: '0123459049',
   },
   {
      id: 8,
      name: 'Tuyến Quỳnh Ngo',
      age: 53,
      address: 'Hà Giang',
      phone_number: '01238346789',
   },
   {
      id: 9,
      name: 'Hương Công Hoàng',
      age: 46,
      address: 'Cao Bằng',
      phone_number: '0136456789',
   },
   {
      id: 10,
      name: 'Nguyễn Văn Hiệp',
      age: 22,
      address: 'Lạng Sơn',
      phone_number: '0123432789',
   },
   {
      id: 11,
      name: 'Bích Yên Nguyen',
      age: 22,
      address: 'Bắc Ninh',
      phone_number: '0129376789',
   },
   {
      id: 12,
      name: 'Nam Lành Văn',
      age: 37,
      address: 'Ninh Bình',
      phone_number: '0749456789',
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
            Add User
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
      { field: 'age', headerName: 'Age', type: 'number', editable: true },
      {
         field: 'address',
         headerName: 'Address',
         type: 'text',
         width: 180,
         editable: true,
      },
      {
         field: 'phone_number',
         headerName: 'Phone Number',
         type: 'number',
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
