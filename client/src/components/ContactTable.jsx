import React, {useState, useEffect} from 'react';
import { Box, Table, TableHead, TableRow, TableCell, TableBody, TableSortLabel, TablePagination, TableContainer, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ContactTable = ({ contacts, onEdit, onDelete }) => {
    const [sortedContacts, setSortedContacts]=useState([]);
    const [sortDirection, setSortDirection] = useState('asc');
    const [orderBy, setOrderBy]=useState('firstName');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(4);
    
    useEffect(()=>{
        const sortedData=[...contacts].sort((a,b)=>{
            const aValue=a[orderBy].toLowerCase();
            const bValue=b[orderBy].toLowerCase();
            if (aValue < bValue) {
                return sortDirection === 'asc' ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
        setSortedContacts(sortedData);
    }, [contacts, orderBy, sortDirection]);

    const handleRequestSort=(property)=>{
        const isAsc = orderBy===property && sortDirection==='asc';
        setSortDirection(isAsc? 'desc':'asc');
        setOrderBy(property)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); 
    };

    return (
        <Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {['firstName', 'lastName', 'email', 'phoneNumber', 'company', 'jobTitle'].map((column) => (
                    <TableCell key={column}>
                      <TableSortLabel
                        active={orderBy === column}
                        direction={orderBy === column ? sortDirection : 'asc'}
                        onClick={() => handleRequestSort(column)}
                      >
                        {column.charAt(0).toUpperCase() + column.slice(1)}
                      </TableSortLabel>
                    </TableCell>
                  ))}
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedContacts
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((contact) => (
                    <TableRow key={contact.id}>
                      <TableCell>{contact.firstName}</TableCell>
                      <TableCell>{contact.lastName}</TableCell>
                      <TableCell>{contact.email}</TableCell>
                      <TableCell>{contact.phoneNumber}</TableCell>
                      <TableCell>{contact.company}</TableCell>
                      <TableCell>{contact.jobTitle}</TableCell>
                      <TableCell>
                        <IconButton onClick={() => onEdit(contact)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => onDelete(contact.id)}>
                            <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
    
          {/* Pagination controls */}
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={sortedContacts.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
      );
}

export default ContactTable;
